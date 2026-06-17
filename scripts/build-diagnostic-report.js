const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const diagnosticsPath = path.join(root, 'test-results', 'diagnostics.jsonl');
const resultsPath = path.join(root, 'test-results', 'results.json');
const reportPath = path.join(root, 'test-results', 'diagnostic-report.md');
const htmlReportPath = path.join(root, 'test-results', 'diagnostic-report.html');

function readDiagnostics() {
  if (!fs.existsSync(diagnosticsPath)) return [];
  return fs.readFileSync(diagnosticsPath, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function readResults() {
  if (!fs.existsSync(resultsPath)) return null;
  return JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
}

function severityRank(severity) {
  return { critica: 0, alta: 1, media: 2, baixa: 3 }[severity] ?? 4;
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

function summarizeResults(results) {
  if (!results) return 'Resultado Playwright indisponivel. Execute `npm test` antes de gerar o relatorio.';
  const specs = [];
  for (const suite of results.suites || []) {
    for (const spec of suite.specs || []) specs.push(spec);
  }
  const total = specs.length;
  const failed = specs.filter((spec) => spec.ok === false).length;
  return `Casos Playwright: ${total}. Falhas: ${failed}. Aprovados: ${total - failed}.`;
}

const diagnostics = readDiagnostics().sort((a, b) => severityRank(a.severity) - severityRank(b.severity));
const results = readResults();

const lines = [
  '# Relatorio de Diagnostico 4S',
  '',
  `Gerado em: ${new Date().toISOString()}`,
  '',
  '## Sumario',
  '',
  summarizeResults(results),
  '',
  `Problemas registrados: ${diagnostics.length}.`,
  '',
  '## Problemas Priorizados',
  '',
  '| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |',
  '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |'
];

if (!diagnostics.length) {
  lines.push('| - | - | - | - | - | - | - | - | Nenhum problema registrado pelos hooks de diagnostico. | - | - | - | aprovado |');
} else {
  for (const issue of diagnostics) {
    lines.push([
      escapeCell(issue.id),
      escapeCell(issue.severity),
      escapeCell(issue.caseId),
      escapeCell(issue.path),
      escapeCell(issue.profile),
      escapeCell(issue.testDataPrefix),
      escapeCell(issue.steps),
      escapeCell(issue.expected),
      escapeCell(issue.actual),
      escapeCell(issue.businessImpact || issue.impact),
      escapeCell(issue.evidence),
      escapeCell(issue.recommendation),
      escapeCell(issue.status)
    ].join(' | ').replace(/^/, '| ').replace(/$/, ' |'));
  }
}

lines.push(
  '',
  '## Detalhes Dos Desvios',
  ''
);

for (const issue of diagnostics) {
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
    `- Status: ${issue.status}`,
    `- Evidencia: ${issue.evidence || 'Nao capturada'}`,
    ''
  );
}

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${lines.join('\n')}\n`);
const htmlRows = diagnostics.length
  ? diagnostics.map((issue) => [
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
    issue.status
  ]).map((cells) => `<tr>${cells.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('\n')
  : '<tr><td colspan="13">Nenhum problema registrado pelos hooks de diagnostico.</td></tr>';
const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Relatorio de Diagnostico 4S</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 24px; color: #1f2933; }
    table { border-collapse: collapse; width: 100%; font-size: 12px; }
    th, td { border: 1px solid #cbd2d9; padding: 8px; vertical-align: top; }
    th { background: #eef2f7; text-align: left; }
    td { word-break: break-word; }
  </style>
</head>
<body>
  <h1>Relatorio de Diagnostico 4S</h1>
  <p>Gerado em: ${escapeHtml(new Date().toISOString())}</p>
  <p>${escapeHtml(summarizeResults(results))}</p>
  <p>Problemas registrados: ${diagnostics.length}.</p>
  <table>
    <thead>
      <tr><th>ID</th><th>Severidade</th><th>Caso</th><th>Caminho</th><th>Perfil</th><th>Massa</th><th>Passos</th><th>Esperado</th><th>Obtido</th><th>Impacto</th><th>Evidencia</th><th>Recomendacao</th><th>Status</th></tr>
    </thead>
    <tbody>
      ${htmlRows}
    </tbody>
  </table>
</body>
</html>
`;
fs.writeFileSync(htmlReportPath, html);
console.log(`Diagnostic report written to ${reportPath}`);
console.log(`HTML diagnostic report written to ${htmlReportPath}`);
