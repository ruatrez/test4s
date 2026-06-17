const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const diagnosticsPath = path.join(root, 'test-results', 'diagnostics.jsonl');
const resultsPath = path.join(root, 'test-results', 'results.json');
const reportPath = path.join(root, 'test-results', 'diagnostic-report.md');

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
  '| ID | Severidade | Caso | Localizacao | Impacto | Recomendacao | Evidencia |',
  '| --- | --- | --- | --- | --- | --- | --- |'
];

if (!diagnostics.length) {
  lines.push('| - | - | - | - | Nenhum problema registrado pelos hooks de diagnostico. | - | - |');
} else {
  for (const issue of diagnostics) {
    lines.push([
      escapeCell(issue.id),
      escapeCell(issue.severity),
      escapeCell(issue.caseId),
      escapeCell(issue.path),
      escapeCell(issue.impact),
      escapeCell(issue.recommendation),
      escapeCell(issue.evidence)
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
    `- Esperado: ${issue.expected}`,
    `- Obtido: ${issue.actual}`,
    `- Impacto: ${issue.impact}`,
    `- Recomendacao: ${issue.recommendation}`,
    `- Evidencia: ${issue.evidence || 'Nao capturada'}`,
    ''
  );
}

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${lines.join('\n')}\n`);
console.log(`Diagnostic report written to ${reportPath}`);
