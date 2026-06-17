const fs = require('node:fs');
const path = require('node:path');
const { test } = require('@playwright/test');
const { data } = require('./test-data');

const outputDir = path.join(process.cwd(), 'test-results');
const diagnosticsPath = path.join(outputDir, 'diagnostics.jsonl');

function ensureDir() {
  fs.mkdirSync(outputDir, { recursive: true });
}

function normalizeSeverity(severity) {
  const value = String(severity || '').toLowerCase();
  if (['critica', 'crítica', 'critical'].includes(value)) return 'critica';
  if (['alta', 'high'].includes(value)) return 'alta';
  if (['media', 'média', 'medium'].includes(value)) return 'media';
  return 'baixa';
}

async function captureDiagnostic(page, issue) {
  ensureDir();
  const safeId = issue.id.replace(/[^a-z0-9_-]/gi, '-');
  const screenshotPath = path.join(outputDir, `${safeId}.png`);

  try {
    await page.screenshot({ path: screenshotPath, fullPage: true });
  } catch {
    // The page may be closed after severe navigation failures.
  }

  const payload = {
    id: issue.id,
    severity: normalizeSeverity(issue.severity),
    caseId: issue.caseId || test.info().title,
    path: issue.path || page.url(),
    profile: issue.profile || 'administrador',
    testDataPrefix: data.prefix,
    expected: issue.expected,
    actual: issue.actual,
    impact: issue.impact,
    recommendation: issue.recommendation,
    evidence: fs.existsSync(screenshotPath) ? screenshotPath : null,
    timestamp: new Date().toISOString()
  };

  fs.appendFileSync(diagnosticsPath, `${JSON.stringify(payload)}\n`);
  await test.info().attach(`diagnostic-${safeId}`, {
    body: JSON.stringify(payload, null, 2),
    contentType: 'application/json'
  });
}

async function stepWithDiagnostic(page, meta, fn) {
  try {
    await test.step(meta.title || meta.id, fn);
  } catch (error) {
    await captureDiagnostic(page, {
      ...meta,
      actual: meta.actual || error.message
    });
    throw error;
  }
}

async function attachConsoleAndNetworkDiagnostics(page) {
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
    if (status < 500) return;
    await captureDiagnostic(page, {
      id: `HTTP-${status}-${Date.now()}`,
      severity: 'alta',
      expected: 'Requisicoes da aplicacao devem responder sem erro 5xx.',
      actual: `${status} ${response.url()}`,
      impact: 'Erro de backend pode bloquear carregamento de telas ou persistencia de dados.',
      recommendation: 'Investigar logs do endpoint, corrigir falha e cobrir a rota com teste de integracao.'
    });
  });
}

module.exports = {
  captureDiagnostic,
  stepWithDiagnostic,
  attachConsoleAndNetworkDiagnostics,
  diagnosticsPath
};
