const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const diagnosticsPath = path.join(root, 'test-results', 'diagnostics.jsonl');
const resultsPath = path.join(root, 'test-results', 'results.json');
const casesPath = path.join(root, 'support', 'cases.json');
const reportPath = path.join(root, 'test-results', 'diagnostic-report.md');
const htmlReportPath = path.join(root, 'test-results', 'diagnostic-report.html');

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function readDiagnostics() {
  if (!fs.existsSync(diagnosticsPath)) return [];
  return fs.readFileSync(diagnosticsPath, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function severityRank(severity) {
  return { critica: 0, alta: 1, media: 2, baixa: 3 }[severity] ?? 4;
}

function statusRank(status) {
  return { reprovado: 0, bloqueado: 1, 'nao aplicavel': 2, aprovado: 3 }[status] ?? 4;
}

function normalizeStatus(status) {
  const value = String(status || '').toLowerCase();
  if (value === 'nao aplicável') return 'nao aplicavel';
  if (['aprovado', 'reprovado', 'bloqueado', 'nao aplicavel'].includes(value)) return value;
  return 'reprovado';
}

function escapeCell(value) {
  return String(value ?? '')
    .replace(/\|/g, '\\|')
    .replace(/\n/g, '<br>');
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function flattenSpecs(suites = []) {
  const specs = [];
  for (const suite of suites) {
    specs.push(...(suite.specs || []));
    specs.push(...flattenSpecs(suite.suites || []));
  }
  return specs;
}

function summarizeResults(results) {
  if (!results) return 'Resultado Playwright indisponivel. Execute `npm test` antes de gerar o relatorio.';
  const specs = flattenSpecs(results.suites || []);
  const total = specs.length;
  const failed = specs.filter((spec) => spec.ok === false).length;
  return `Casos Playwright: ${total}. Falhas: ${failed}. Aprovados: ${total - failed}.`;
}

function buildCaseMatrix(cases, diagnostics) {
  return cases.map((testCase) => {
    const entries = diagnostics.filter((issue) => issue.caseId === testCase.id || issue.id === testCase.id || String(issue.id || '').startsWith(`${testCase.id}-`));
    if (!entries.length) {
      return {
        ...testCase,
        status: 'bloqueado',
        actual: 'Caso nao executado ou sem registro no diagnostics.jsonl.',
        evidence: '',
        rootCause: '',
        recommendation: 'Executar a suite completa e confirmar se houve interrupcao antes deste CT.'
      };
    }
    const sorted = entries.slice().sort((a, b) => statusRank(normalizeStatus(a.status)) - statusRank(normalizeStatus(b.status)) || severityRank(a.severity) - severityRank(b.severity));
    const selected = sorted[0];
    return {
      ...testCase,
      status: normalizeStatus(selected.status),
      actual: selected.actual || '',
      evidence: selected.evidence || '',
      rootCause: selected.id || '',
      recommendation: selected.recommendation || ''
    };
  });
}

const cases = readJson(casesPath, []);
const diagnostics = readDiagnostics().sort((a, b) => severityRank(a.severity) - severityRank(b.severity));
const results = readJson(resultsPath, null);
const caseMatrix = buildCaseMatrix(cases, diagnostics);
const issues = diagnostics
  .filter((issue) => normalizeStatus(issue.status) !== 'aprovado')
  .sort((a, b) => severityRank(a.severity) - severityRank(b.severity) || statusRank(normalizeStatus(a.status)) - statusRank(normalizeStatus(b.status)));

const statusCounts = caseMatrix.reduce((acc, item) => {
  acc[item.status] = (acc[item.status] || 0) + 1;
  return acc;
}, {});

const lines = [
  '# Relatorio de Diagnostico 4S',
  '',
  `Gerado em: ${new Date().toISOString()}`,
  '',
  '## Sumario',
  '',
  summarizeResults(results),
  '',
  `Status CT001-CT022: aprovado ${statusCounts.aprovado || 0}, reprovado ${statusCounts.reprovado || 0}, bloqueado ${statusCounts.bloqueado || 0}, nao aplicavel ${statusCounts['nao aplicavel'] || 0}.`,
  '',
  `Problemas registrados: ${issues.length}.`,
  '',
  '## Matriz CT001-CT022',
  '',
  '| CT | Status | Severidade | Titulo | Dependencias | Obtido | Evidencia | Recomendacao |',
  '| --- | --- | --- | --- | --- | --- | --- | --- |'
];

for (const testCase of caseMatrix) {
  lines.push([
    testCase.id,
    testCase.status,
    testCase.severity,
    testCase.title,
    (testCase.dependsOn || []).join(', '),
    testCase.actual,
    testCase.evidence,
    testCase.recommendation
  ].map(escapeCell).join(' | ').replace(/^/, '| ').replace(/$/, ' |'));
}

lines.push(
  '',
  '## Problemas Priorizados',
  '',
  '| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |',
  '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |'
);

if (!issues.length) {
  lines.push('| - | - | - | - | - | - | - | - | Nenhum problema registrado pelos hooks de diagnostico. | - | - | - | aprovado |');
} else {
  for (const issue of issues) {
    lines.push([
      issue.id,
      issue.severity,
      issue.caseId,
      issue.path,
      issue.profile,
      issue.testDataPrefix,
      issue.steps,
      issue.expected,
      issue.actual,
      issue.businessImpact || issue.impact,
      issue.evidence,
      issue.recommendation,
      normalizeStatus(issue.status)
    ].map(escapeCell).join(' | ').replace(/^/, '| ').replace(/$/, ' |'));
  }
}

lines.push('', '## Detalhes Dos Desvios', '');

for (const issue of issues) {
  lines.push(
    `### ${issue.id} - ${issue.severity}`,
    '',
    `- Caso: ${issue.caseId}`,
    `- Localizacao: ${issue.path}`,
    `- Perfil: ${issue.profile}`,
    `- Massa: ${issue.testDataPrefix}`,
    `- Passos para reproduzir: ${issue.steps}`,
    `- Esperado: ${issue.expected}`,
    `- Obtido: ${issue.actual}`,
    `- Impacto funcional e negocio: ${issue.businessImpact || issue.impact}`,
    `- Recomendacao: ${issue.recommendation}`,
    `- Status: ${normalizeStatus(issue.status)}`,
    `- Evidencia: ${issue.evidence || 'Nao capturada'}`,
    ''
  );
}

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${lines.join('\n')}\n`);

const matrixRows = caseMatrix.map((testCase) => `<tr>${[
  testCase.id,
  testCase.status,
  testCase.severity,
  testCase.title,
  (testCase.dependsOn || []).join(', '),
  testCase.actual,
  testCase.evidence,
  testCase.recommendation
].map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('\n');

const issueRows = issues.length
  ? issues.map((issue) => [
    issue.id,
    issue.severity,
    issue.caseId,
    issue.path,
    issue.profile,
    issue.testDataPrefix,
    issue.steps,
    issue.expected,
    issue.actual,
    issue.businessImpact || issue.impact,
    issue.evidence,
    issue.recommendation,
    normalizeStatus(issue.status)
  ]).map((cells) => `<tr>${cells.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('\n')
  : '<tr><td colspan="13">Nenhum problema registrado pelos hooks de diagnostico.</td></tr>';

const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Relatorio de Diagnostico 4S</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 24px; color: #1f2933; }
    table { border-collapse: collapse; width: 100%; font-size: 12px; margin-bottom: 28px; }
    th, td { border: 1px solid #cbd2d9; padding: 8px; vertical-align: top; }
    th { background: #eef2f7; text-align: left; }
    td { word-break: break-word; }
  </style>
</head>
<body>
  <h1>Relatorio de Diagnostico 4S</h1>
  <p>Gerado em: ${escapeHtml(new Date().toISOString())}</p>
  <p>${escapeHtml(summarizeResults(results))}</p>
  <p>Status CT001-CT022: aprovado ${statusCounts.aprovado || 0}, reprovado ${statusCounts.reprovado || 0}, bloqueado ${statusCounts.bloqueado || 0}, nao aplicavel ${statusCounts['nao aplicavel'] || 0}.</p>
  <p>Problemas registrados: ${issues.length}.</p>
  <h2>Matriz CT001-CT022</h2>
  <table>
    <thead>
      <tr><th>CT</th><th>Status</th><th>Severidade</th><th>Titulo</th><th>Dependencias</th><th>Obtido</th><th>Evidencia</th><th>Recomendacao</th></tr>
    </thead>
    <tbody>${matrixRows}</tbody>
  </table>
  <h2>Problemas Priorizados</h2>
  <table>
    <thead>
      <tr><th>ID</th><th>Severidade</th><th>Caso</th><th>Caminho</th><th>Perfil</th><th>Massa</th><th>Passos</th><th>Esperado</th><th>Obtido</th><th>Impacto</th><th>Evidencia</th><th>Recomendacao</th><th>Status</th></tr>
    </thead>
    <tbody>${issueRows}</tbody>
  </table>
</body>
</html>
`;
fs.writeFileSync(htmlReportPath, html);
console.log(`Diagnostic report written to ${reportPath}`);
console.log(`HTML diagnostic report written to ${htmlReportPath}`);
