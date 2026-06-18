import { test } from '@playwright/test';
import { AuthPage } from '../pages/auth-page';
import { DashboardPage } from '../pages/dashboard-page';
import { FinancePage } from '../pages/finance-page';
import { ProcurementPage } from '../pages/procurement-page';
import { WorkflowPage } from '../pages/workflow-page';
import { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } from '../support/diagnostics';

test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
  await new AuthPage(page).loginAsAdmin();
});

test('CT012 - requisition validates budget balance', async ({ page }) => {
  const procurement = new ProcurementPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT012-REQUISICAO-SALDO',
    caseId: 'CT012',
    severity: 'critica',
    expected: 'Requisicao dentro do saldo segue para aprovacao; acima do saldo fica bloqueada ou sinalizada.',
    impact: 'Permitir compra acima do saldo rompe controle financeiro da obra.',
    recommendation: 'Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes.'
  }, async () => {
    await procurement.createRequisitionWithinBudget();
    await procurement.createOverBudgetRequisition();
  });
});

test('CT013 - requisition approval updates origin status', async ({ page }) => {
  const workflow = new WorkflowPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT013-APROVACAO-REQUISICAO',
    caseId: 'CT013',
    severity: 'alta',
    expected: 'Aprovacao deve liberar requisicao para cotacao e registrar decisao.',
    impact: 'Workflow quebrado permite avancos indevidos ou bloqueia compras validas.',
    recommendation: 'Sincronizar status da aprovacao com a entidade de origem e registrar auditoria.'
  }, async () => {
    await workflow.approveRequisition();
  });
});

test('CT014 - quotation compares suppliers and persists winner', async ({ page }) => {
  const procurement = new ProcurementPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT014-COTACAO',
    caseId: 'CT014',
    severity: 'alta',
    expected: 'Cotacao deve comparar fornecedores, registrar vencedor e persistir.',
    impact: 'Comparativo incorreto afeta decisao de compra e rastreabilidade.',
    recommendation: 'Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor.'
  }, async () => {
    await procurement.createQuotation();
  });
});

test('CT015 - purchase order commits budget and creates payable', async ({ page }) => {
  const procurement = new ProcurementPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT015-ORDEM-COMPRA',
    caseId: 'CT015',
    severity: 'critica',
    expected: 'OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto.',
    impact: 'Sem comprometimento do orcamento nao ha controle real de compras.',
    recommendation: 'Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido.'
  }, async () => {
    await procurement.createPurchaseOrder();
  });
});

test('CT016 - procurement records support edit/delete controls without technical errors', async ({ page }) => {
  const procurement = new ProcurementPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT016-SUPRIMENTOS-EDICAO-EXCLUSAO',
    caseId: 'CT016',
    severity: 'media',
    expected: 'Requisicoes, cotacoes e OCs devem permitir edicao/exclusao quando regra permitir, com confirmacao e sem erro tecnico.',
    impact: 'Manutencao incorreta de documentos compromete rastreabilidade e saldo.',
    recommendation: 'Validar regras de exclusao/edicao por status e recalcular filhos/saldos vinculados.'
  }, async () => {
    await procurement.validateEditAndDeleteControls();
  });
});

test('CT017 and CT018 - payables and payments update financial status', async ({ page }) => {
  const finance = new FinancePage(page);
  await stepWithDiagnostic(page, {
    id: 'CT017-CONTAS-A-PAGAR',
    caseId: 'CT017',
    severity: 'critica',
    expected: 'Conta a pagar deve refletir OC, status, saldo e filtros financeiros.',
    impact: 'Conta inconsistente quebra controle financeiro da obra.',
    recommendation: 'Corrigir geracao/consulta da conta e filtros por obra, fornecedor, periodo e status.'
  }, async () => {
    await finance.validatePayables();
  });

  await stepWithDiagnostic(page, {
    id: 'CT018-PAGAMENTOS',
    caseId: 'CT018',
    severity: 'critica',
    expected: 'Pagamentos devem atualizar saldo, status, orcamento e custo real, bloqueando valor acima do saldo.',
    impact: 'Erro em pagamento distorce custo real, dashboard e tomada de decisao.',
    recommendation: 'Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard.'
  }, async () => {
    await finance.registerPayments();
  });
});

test('CT019 and CT021 - dashboard and audit reflect integrated flow', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  const workflow = new WorkflowPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT019-DASHBOARD-FINANCEIRO',
    caseId: 'CT019',
    severity: 'alta',
    expected: 'Dashboard deve refletir compra, pagamentos, mao de obra, saldos e pendencias.',
    impact: 'Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade.',
    recommendation: 'Corrigir agregacoes do dashboard e filtros por unidade/obra/categoria.'
  }, async () => {
    await dashboard.validateFinancialIndicators();
  });

  await stepWithDiagnostic(page, {
    id: 'CT021-AUDITORIA',
    caseId: 'CT021',
    severity: 'alta',
    expected: 'Auditoria deve registrar criacao, edicao, exclusao/cancelamento, aprovacao e rejeicao com usuario e data.',
    impact: 'Sem auditoria nao ha rastreabilidade para governanca financeira.',
    recommendation: 'Gerar eventos de auditoria para todas as mutacoes relevantes e decisoes de workflow.'
  }, async () => {
    await workflow.validateAuditForPrefix();
  });
});
