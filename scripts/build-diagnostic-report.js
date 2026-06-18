const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const diagnosticsPath = path.join(root, 'test-results', 'diagnostics.jsonl');
const caseResultsPath = path.join(root, 'test-results', 'case-results.jsonl');
const resultsPath = path.join(root, 'test-results', 'results.json');
const reportPath = path.join(root, 'test-results', 'diagnostic-report.md');
const htmlReportPath = path.join(root, 'test-results', 'diagnostic-report.html');

const caseRegistry = [
  ['CT001', 'Login e acesso inicial', 'Tela de Login', 'critica', 'Login valido permite acesso, login invalido exibe erro, logout encerra sessao e usuarios acessam somente telas permitidas.'],
  ['CT002', 'Usuarios e permissoes', 'Configurações > Usuários', 'alta', 'Usuario e salvo, perfil altera permissoes, usuario inativo nao opera e regras de exclusao protegida sao respeitadas.'],
  ['CT003', 'Cadastros rapidos', 'Cadastros', 'media', 'Atalhos direcionam corretamente para clientes, contratos, obras, centros, fornecedores, categorias, cargos, faixas e colaboradores.'],
  ['CT004', 'Clientes e contratos', 'Configurações > Clientes e Contratos', 'alta', 'Cliente e contrato sao salvos, vinculados, editaveis, removiveis quando permitido e persistem apos novo acesso.'],
  ['CT005', 'Obras, unidades e centros de custo', 'Configurações > Obras e Centros', 'alta', 'Unidade, obra e centro de custo sao criados, vinculados e disponiveis para orcamento, requisicoes e financeiro.'],
  ['CT006', 'Fornecedores', 'Configurações > Fornecedores', 'media', 'Fornecedores sao salvos, editaveis e disponiveis em cotacoes e ordens de compra.'],
  ['CT007', 'Categorias orcamentarias', 'Configurações > Categorias Orc.', 'media', 'Categorias sao salvas e ficam disponiveis para itens orcados e movimentos.'],
  ['CT008', 'Orcamento base da obra', 'Orçamento > Itens Orçados', 'critica', 'Item orcado calcula valor previsto, exibe saldo/comprometido/pago e fica disponivel para requisicoes.'],
  ['CT009', 'Alteracao de orcamento por usuario comum', 'Orçamento > Itens Orçados', 'critica', 'Usuario comum nao altera item protegido diretamente; solicitacao fica pendente e decisao gera auditoria.'],
  ['CT010', 'Exclusao de item orcado', 'Orçamento > Itens Orçados', 'critica', 'Exclusao por usuario comum gera aprovacao; administrador decide ou executa acao conforme regra; auditoria registra.'],
  ['CT011', 'Colaboradores, cargos, faixas e alocacoes', 'Configurações > Colaboradores', 'alta', 'Colaborador e alocacao sao vinculados a obra e custo de mao de obra compoe custo real e dashboard.'],
  ['CT012', 'Requisicoes com itens', 'Suprimentos > Requisições', 'critica', 'Requisicao com saldo segue para aprovacao; acima do saldo fica bloqueada ou sinalizada e nao gera cotacao.'],
  ['CT013', 'Aprovacao de requisicao', 'Workflow > Aprovações', 'alta', 'Aprovacao libera cotacao, rejeicao bloqueia continuidade e status/historico sao atualizados.'],
  ['CT014', 'Cotacoes e comparativo', 'Suprimentos > Cotações', 'alta', 'Cotacao vinculada compara fornecedores, registra vencedor, persiste e bloqueia aquisicao sem saldo.'],
  ['CT015', 'Ordem de compra', 'Suprimentos > Ordens de Compra', 'critica', 'OC nasce da cotacao, reflete itens vencedores, compromete orcamento e gera conta a pagar no ponto previsto.'],
  ['CT016', 'Edicao e exclusao de requisicoes, cotacoes e OC', 'Suprimentos', 'media', 'Edicoes persistem, exclusoes pedem confirmacao, filhos vinculados e valores comprometidos sao tratados e auditoria registra.'],
  ['CT017', 'Contas a pagar', 'Financeiro > Contas a Pagar', 'critica', 'Conta automatica/manual aparece com status e saldo coerentes; filtros, edicao, exclusao e dashboard funcionam.'],
  ['CT018', 'Pagamentos', 'Financeiro > Pagamentos', 'critica', 'Pagamentos parcial/final atualizam conta, status, orcamento e custo real; pagamento acima do saldo e bloqueado.'],
  ['CT019', 'Dashboard financeiro', 'Dashboard', 'alta', 'Indicadores refletem orcado, comprometido, pago, saldo, mao de obra, alertas e contas conforme fluxo real.'],
  ['CT020', 'Workflow completo de aprovacao', 'Workflow > Aprovações', 'alta', 'Somente perfil correto ou administrador aprova; rejeicao bloqueia avanco e modulo de origem/auditoria refletem a decisao.'],
  ['CT021', 'Auditoria', 'Workflow > Auditoria', 'alta', 'Criacao, edicao, exclusao/cancelamento e aprovacoes registram quem fez, o que fez, quando e modulo afetado.'],
  ['CT022', 'Validacao tecnica de rotas e entidades', 'Todas as telas principais da Fase 1', 'alta', 'Todas as rotas carregam sem tela quebrada e entidades minimas existem para teste funcional.']
].map(([id, title, pathName, severity, expected]) => ({ id, title, path: pathName, severity, expected }));

function readJsonl(filePath) {
  if (!fs.existsSync(filePath)) return [];
  return fs.readFileSync(filePath, 'utf8')
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

function statusRank(status) {
  return { reprovado: 0, bloqueado: 1, 'nao aplicavel': 2, aprovado: 3 }[status] ?? 1;
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
  const statuses = specs.map((spec) => spec.tests?.[0]?.results?.[0]?.status || (spec.ok ? 'passed' : 'failed'));
  const failed = statuses.filter((status) => status === 'failed' || status === 'timedOut' || status === 'interrupted').length;
  const skipped = statuses.filter((status) => status === 'skipped').length;
  const passed = statuses.filter((status) => status === 'passed').length;
  return `Casos Playwright: ${total}. Aprovados: ${passed}. Falhas: ${failed}. Nao executados: ${skipped}.`;
}

function aggregateCaseResults(caseResults, diagnostics) {
  return caseRegistry.map((definition) => {
    const related = caseResults.filter((item) => item.caseId === definition.id);
    if (!related.length) {
      return {
        ...definition,
        caseId: definition.id,
        profile: '-',
        testDataPrefix: '-',
        actual: 'Caso nao executado ou bloqueado antes de registrar resultado.',
        status: 'bloqueado',
        evidence: '',
        relatedIssueId: ''
      };
    }

    const worst = related
      .slice()
      .sort((a, b) => statusRank(a.status) - statusRank(b.status))[0];
    const issue = diagnostics.find((item) => item.caseId === definition.id || item.id === worst.relatedIssueId);
    return {
      ...definition,
      caseId: definition.id,
      profile: worst.profile || issue?.profile || 'administrador',
      testDataPrefix: worst.testDataPrefix || issue?.testDataPrefix || '-',
      actual: issue?.actual || worst.actual || 'Comportamento validado pela automacao.',
      status: worst.status,
      evidence: issue?.evidence || worst.evidence || '',
      relatedIssueId: issue?.id || worst.relatedIssueId || ''
    };
  }).sort((a, b) => severityRank(a.severity) - severityRank(b.severity) || a.id.localeCompare(b.id));
}

const diagnostics = readJsonl(diagnosticsPath).sort((a, b) => severityRank(a.severity) - severityRank(b.severity));
const caseResults = readJsonl(caseResultsPath);
const cases = aggregateCaseResults(caseResults, diagnostics);
const results = readResults();

const statusCounts = cases.reduce((acc, item) => {
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
  `CTs consolidados: ${cases.length}. Aprovados: ${statusCounts.aprovado || 0}. Reprovados: ${statusCounts.reprovado || 0}. Bloqueados: ${statusCounts.bloqueado || 0}. Nao aplicaveis: ${statusCounts['nao aplicavel'] || 0}.`,
  '',
  `Problemas registrados: ${diagnostics.length}.`,
  '',
  '## Resultado CT001-CT022',
  '',
  '| ID | Severidade | Caso | Caminho | Perfil | Massa | Esperado | Obtido | Evidencia | Defeito | Status |',
  '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |'
];

for (const item of cases) {
  lines.push([
    escapeCell(item.id),
    escapeCell(item.severity),
    escapeCell(item.title),
    escapeCell(item.path),
    escapeCell(item.profile),
    escapeCell(item.testDataPrefix),
    escapeCell(item.expected),
    escapeCell(item.actual),
    escapeCell(item.evidence),
    escapeCell(item.relatedIssueId),
    escapeCell(item.status)
  ].join(' | ').replace(/^/, '| ').replace(/$/, ' |'));
}

lines.push(
  '',
  '## Problemas Priorizados',
  '',
  '| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |',
  '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |'
);

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

lines.push('', '## Detalhes Dos Desvios', '');

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

const caseRows = cases.map((item) => `<tr>${[
  item.id,
  item.severity,
  item.title,
  item.path,
  item.profile,
  item.testDataPrefix,
  item.expected,
  item.actual,
  item.evidence,
  item.relatedIssueId,
  item.status
].map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('\n');

const issueRows = diagnostics.length
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
    table { border-collapse: collapse; width: 100%; font-size: 12px; margin-bottom: 32px; }
    th, td { border: 1px solid #cbd2d9; padding: 8px; vertical-align: top; }
    th { background: #eef2f7; text-align: left; }
    td { word-break: break-word; }
  </style>
</head>
<body>
  <h1>Relatorio de Diagnostico 4S</h1>
  <p>Gerado em: ${escapeHtml(new Date().toISOString())}</p>
  <p>${escapeHtml(summarizeResults(results))}</p>
  <p>CTs consolidados: ${cases.length}. Aprovados: ${statusCounts.aprovado || 0}. Reprovados: ${statusCounts.reprovado || 0}. Bloqueados: ${statusCounts.bloqueado || 0}. Nao aplicaveis: ${statusCounts['nao aplicavel'] || 0}.</p>
  <h2>Resultado CT001-CT022</h2>
  <table>
    <thead>
      <tr><th>ID</th><th>Severidade</th><th>Caso</th><th>Caminho</th><th>Perfil</th><th>Massa</th><th>Esperado</th><th>Obtido</th><th>Evidencia</th><th>Defeito</th><th>Status</th></tr>
    </thead>
    <tbody>${caseRows}</tbody>
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
