import fs from 'node:fs';
import path from 'node:path';
import { test, type Page } from '@playwright/test';
import cases from './cases.json';
import { data } from './test-data';

export type Severity = 'critica' | 'alta' | 'media' | 'baixa';
export type CaseStatus = 'aprovado' | 'reprovado' | 'bloqueado' | 'nao aplicavel';

export type DiagnosticIssue = {
  id: string;
  caseId?: string;
  title?: string;
  severity?: string;
  path?: string;
  profile?: string;
  steps?: string;
  expected?: string;
  actual?: string;
  impact?: string;
  businessImpact?: string;
  recommendation?: string;
  status?: string;
  evidence?: string | null;
};

type CaseDefinition = {
  id: string;
  title: string;
  severity: Severity;
  dependsOn?: string[];
};

export const outputDir = path.join(process.cwd(), 'test-results');
export const diagnosticsPath = path.join(outputDir, 'diagnostics.jsonl');
export const caseDefinitions = cases as CaseDefinition[];

function ensureDir() {
  fs.mkdirSync(outputDir, { recursive: true });
}

export function normalizeSeverity(severity: string | undefined): Severity {
  const value = String(severity || '').toLowerCase();
  if (['critica', 'crítica', 'critical'].includes(value)) return 'critica';
  if (['alta', 'high'].includes(value)) return 'alta';
  if (['media', 'média', 'medium'].includes(value)) return 'media';
  return 'baixa';
}

export function normalizeStatus(status: string | undefined): CaseStatus {
  const value = String(status || '').toLowerCase();
  if (['aprovado', 'reprovado', 'bloqueado', 'nao aplicavel', 'nao aplicável'].includes(value)) {
    return value.replace('aplicável', 'aplicavel') as CaseStatus;
  }
  return 'reprovado';
}

function caseDefinition(caseId: string) {
  return caseDefinitions.find((item) => item.id === caseId);
}

function appendDiagnostic(payload: Record<string, unknown>) {
  ensureDir();
  fs.appendFileSync(diagnosticsPath, `${JSON.stringify(payload)}\n`);
}

export function readCaseStatus(caseId: string): CaseStatus | null {
  if (!fs.existsSync(diagnosticsPath)) return null;
  const entries = fs.readFileSync(diagnosticsPath, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line) as { caseId?: string; id?: string; status?: string });
  const matching = entries.filter((entry) => entry.caseId === caseId || entry.id === caseId || entry.id?.startsWith(`${caseId}-`));
  if (!matching.length) return null;
  return normalizeStatus(matching.at(-1)?.status);
}

export function dependencyBlocker(caseId: string) {
  const definition = caseDefinition(caseId);
  for (const dependency of definition?.dependsOn || []) {
    const status = readCaseStatus(dependency);
    if (status === 'reprovado' || status === 'bloqueado') return dependency;
  }
  return null;
}

export async function recordCaseStatus(page: Page | null, issue: DiagnosticIssue) {
  const caseId = issue.caseId || issue.id.slice(0, 5);
  const definition = caseDefinition(caseId);
  const payload = {
    id: issue.id,
    severity: normalizeSeverity(issue.severity || definition?.severity),
    caseId,
    title: issue.title || definition?.title || caseId,
    path: issue.path || page?.url() || '',
    profile: issue.profile || 'administrador',
    testDataPrefix: data.prefix,
    steps: issue.steps || `Executar o caso automatizado "${caseId}" e observar o resultado registrado.`,
    expected: issue.expected || definition?.title || '',
    actual: issue.actual || '',
    impact: issue.impact || '',
    businessImpact: issue.businessImpact || issue.impact || '',
    recommendation: issue.recommendation || '',
    status: normalizeStatus(issue.status),
    evidence: issue.evidence ?? null,
    timestamp: new Date().toISOString()
  };
  appendDiagnostic(payload);
  await test.info().attach(`diagnostic-${issue.id.replace(/[^a-z0-9_-]/gi, '-')}`, {
    body: JSON.stringify(payload, null, 2),
    contentType: 'application/json'
  }).catch(() => {});
}

export async function captureDiagnostic(page: Page, issue: DiagnosticIssue) {
  ensureDir();
  const safeId = issue.id.replace(/[^a-z0-9_-]/gi, '-');
  const screenshotPath = path.join(outputDir, `${safeId}.png`);

  try {
    await page.screenshot({ path: screenshotPath, fullPage: true });
  } catch {
    // The page may be closed after severe navigation failures.
  }

  await recordCaseStatus(page, {
    ...issue,
    status: issue.status || 'reprovado',
    evidence: fs.existsSync(screenshotPath) ? screenshotPath : null
  });
}

export async function stepWithDiagnostic(page: Page, meta: DiagnosticIssue & { title?: string }, fn: () => Promise<void>) {
  const blocker = dependencyBlocker(meta.caseId || meta.id.slice(0, 5));
  if (blocker) {
    await recordCaseStatus(page, {
      ...meta,
      status: 'bloqueado',
      actual: `Caso bloqueado por dependencia ${blocker} registrada como ${readCaseStatus(blocker)}.`,
      recommendation: `Corrigir primeiro o caso raiz ${blocker} e reexecutar este fluxo.`
    });
    test.skip(true, `Blocked by ${blocker}`);
  }

  try {
    await test.step(meta.title || meta.id, fn);
    await recordCaseStatus(page, {
      ...meta,
      status: 'aprovado',
      actual: meta.actual || 'Comportamento observado conforme esperado.'
    });
  } catch (error) {
    await captureDiagnostic(page, {
      ...meta,
      actual: meta.actual || (error instanceof Error ? error.message : String(error))
    });
    throw error;
  }
}

export async function attachConsoleAndNetworkDiagnostics(page: Page) {
  page.on('pageerror', async (error) => {
    await captureDiagnostic(page, {
      id: `PAGEERROR-${Date.now()}`,
      caseId: 'CT022',
      severity: 'alta',
      expected: 'A aplicacao nao deve emitir excecoes JavaScript nao tratadas.',
      actual: error.message,
      impact: 'Excecoes nao tratadas podem interromper renderizacao, fluxo de dados ou acoes do usuario.',
      recommendation: 'Corrigir a excecao no frontend e cobrir a tela afetada com teste automatizado.'
    });
  });

  page.on('console', async (message) => {
    if (message.type() !== 'error') return;
    await captureDiagnostic(page, {
      id: `CONSOLE-${Date.now()}`,
      caseId: 'CT022',
      severity: 'media',
      expected: 'A tela nao deve emitir erros JavaScript no console.',
      actual: message.text(),
      impact: 'Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica.',
      recommendation: 'Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada.'
    });
  });

  page.on('response', async (response) => {
    const status = response.status();
    if (status < 400) return;
    const severity = status >= 500 ? 'alta' : 'media';
    await captureDiagnostic(page, {
      id: `HTTP-${status}-${Date.now()}`,
      caseId: 'CT022',
      severity,
      expected: 'Requisicoes da aplicacao devem responder sem erro 4xx/5xx inesperado.',
      actual: `${status} ${response.url()}`,
      impact: 'Erro HTTP pode bloquear carregamento de telas, persistencia de dados ou integracao entre modulos.',
      recommendation: 'Investigar logs do endpoint, corrigir falha e cobrir a rota com teste de integracao ou contrato.'
    });
  });
}
