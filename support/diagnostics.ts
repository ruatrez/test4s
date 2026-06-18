import fs from 'node:fs';
import path from 'node:path';
import { Page, test } from '@playwright/test';
import { data } from './test-data';
import { CaseStatus, Severity, getCaseDefinition } from './case-registry';

const outputDir = path.join(process.cwd(), 'test-results');
export const diagnosticsPath = path.join(outputDir, 'diagnostics.jsonl');
export const caseResultsPath = path.join(outputDir, 'case-results.jsonl');

export type DiagnosticMeta = {
  id: string;
  caseId?: string;
  severity?: Severity | string;
  path?: string;
  profile?: string;
  steps?: string;
  expected?: string;
  actual?: string;
  impact?: string;
  businessImpact?: string;
  recommendation?: string;
  status?: CaseStatus | string;
  title?: string;
};

function ensureDir() {
  fs.mkdirSync(outputDir, { recursive: true });
}

function normalizeSeverity(severity?: Severity | string): Severity {
  const value = String(severity || '').toLowerCase();
  if (['critica', 'crítica', 'critical'].includes(value)) return 'critica';
  if (['alta', 'high'].includes(value)) return 'alta';
  if (['media', 'média', 'medium'].includes(value)) return 'media';
  return 'baixa';
}

function normalizeStatus(status?: CaseStatus | string): CaseStatus {
  const value = String(status || '').toLowerCase();
  if (['aprovado', 'reprovado', 'bloqueado', 'nao aplicavel', 'nao aplicável'].includes(value)) {
    return value.replace('aplicável', 'aplicavel') as CaseStatus;
  }
  return 'reprovado';
}

function sanitizeError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  return message.replace(/\u001b\[[0-9;]*m/g, '');
}

export async function captureDiagnostic(page: Page, issue: DiagnosticMeta) {
  ensureDir();
  const safeId = issue.id.replace(/[^a-z0-9_-]/gi, '-');
  const screenshotPath = path.join(outputDir, `${safeId}.png`);

  try {
    await page.screenshot({ path: screenshotPath, fullPage: true });
  } catch {
    // The page may already be closed after severe navigation failures.
  }

  const caseDefinition = issue.caseId ? getCaseDefinition(issue.caseId) : undefined;
  const payload = {
    id: issue.id,
    severity: normalizeSeverity(issue.severity || caseDefinition?.severity),
    caseId: issue.caseId || test.info().title,
    path: issue.path || caseDefinition?.path || page.url(),
    profile: issue.profile || 'administrador',
    testDataPrefix: data.prefix,
    steps: issue.steps || `Executar o caso automatizado "${test.info().title}" e observar a etapa que falhou.`,
    expected: issue.expected || caseDefinition?.expected || '',
    actual: issue.actual || '',
    impact: issue.impact || 'Falha afeta a validacao funcional da Fase 1.',
    businessImpact: issue.businessImpact || issue.impact || 'Falha afeta a validacao funcional da Fase 1.',
    recommendation: issue.recommendation || 'Corrigir o fluxo afetado e adicionar cobertura automatizada especifica.',
    status: normalizeStatus(issue.status),
    evidence: fs.existsSync(screenshotPath) ? screenshotPath : null,
    timestamp: new Date().toISOString()
  };

  fs.appendFileSync(diagnosticsPath, `${JSON.stringify(payload)}\n`);
  await test.info().attach(`diagnostic-${safeId}`, {
    body: JSON.stringify(payload, null, 2),
    contentType: 'application/json'
  });
}

export function recordCaseResult(result: {
  caseId: string;
  status: CaseStatus;
  profile?: string;
  path?: string;
  actual?: string;
  evidence?: string | null;
  relatedIssueId?: string;
}) {
  ensureDir();
  const caseDefinition = getCaseDefinition(result.caseId);
  const payload = {
    caseId: result.caseId,
    title: caseDefinition?.title || result.caseId,
    severity: caseDefinition?.severity || 'media',
    path: result.path || caseDefinition?.path || '',
    profile: result.profile || 'administrador',
    testDataPrefix: data.prefix,
    expected: caseDefinition?.expected || '',
    actual: result.actual || '',
    status: result.status,
    evidence: result.evidence || null,
    relatedIssueId: result.relatedIssueId || '',
    timestamp: new Date().toISOString()
  };
  fs.appendFileSync(caseResultsPath, `${JSON.stringify(payload)}\n`);
}

export async function stepWithDiagnostic(page: Page, meta: DiagnosticMeta & { caseId: string }, fn: () => Promise<void>) {
  try {
    await test.step(meta.title || meta.id, fn);
    recordCaseResult({
      caseId: meta.caseId,
      status: 'aprovado',
      profile: meta.profile,
      path: meta.path,
      actual: meta.actual || 'Comportamento validado pela automacao.'
    });
  } catch (error) {
    const actual = meta.actual || sanitizeError(error);
    await captureDiagnostic(page, {
      ...meta,
      actual
    });
    recordCaseResult({
      caseId: meta.caseId,
      status: 'reprovado',
      profile: meta.profile,
      path: meta.path,
      actual,
      evidence: path.join(outputDir, `${meta.id.replace(/[^a-z0-9_-]/gi, '-')}.png`),
      relatedIssueId: meta.id
    });
    throw error;
  }
}

export function markCaseBlocked(caseId: string, actual: string, profile = 'administrador') {
  recordCaseResult({
    caseId,
    status: 'bloqueado',
    profile,
    actual
  });
}

export async function attachConsoleAndNetworkDiagnostics(page: Page) {
  page.on('pageerror', async (error) => {
    await captureDiagnostic(page, {
      id: `PAGEERROR-${Date.now()}`,
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
    const severity: Severity = status >= 500 ? 'alta' : 'media';
    await captureDiagnostic(page, {
      id: `HTTP-${status}-${Date.now()}`,
      severity,
      expected: 'Requisicoes da aplicacao devem responder sem erro 4xx/5xx inesperado.',
      actual: `${status} ${response.url()}`,
      impact: 'Erro HTTP pode bloquear carregamento de telas, persistencia de dados ou integracao entre modulos.',
      recommendation: 'Investigar logs do endpoint, corrigir falha e cobrir a rota com teste de integracao ou contrato.'
    });
  });
}
