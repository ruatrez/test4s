import { test } from '@playwright/test';
import { AuthPage } from '../support/pages/auth-page';
import { DashboardPage } from '../support/pages/dashboard-page';
import { FinancePage } from '../support/pages/finance-page';
import { ProcurementPage } from '../support/pages/procurement-page';
import { WorkflowAuditPage } from '../support/pages/workflow-audit-page';
import { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } from '../support/diagnostics';

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
  await new AuthPage(page).loginAsAdmin();
});

test('CT012 - requisicao dentro do saldo e requisicao acima do saldo', async ({ page }) => {
  const procurement = new ProcurementPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT012-REQUISICAO-SALDO',
    caseId: 'CT012',
    severity: 'critica',
    expected: 'Requisicao dentro do saldo deve seguir para aprovacao; acima do saldo deve ser bloqueada ou sinalizada.',
    impact: 'Permitir compra acima do saldo rompe controle financeiro da obra.',
    recommendation: 'Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes.'
  }, async () => {
    await procurement.createRequisitionWithinBalance();
    await procurement.createOverBudgetRequisition();
  });
});

test('CT013 - aprovacao e rejeicao de requisicao', async ({ page }) => {
  const procurement = new ProcurementPage(page);
  const workflow = new WorkflowAuditPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT013-APROVACAO-REJEICAO-REQUISICAO',
    caseId: 'CT013',
    severity: 'alta',
    expected: 'Aprovacao deve liberar requisicao para cotacao e rejeicao deve encerrar fluxo com decisao auditavel.',
    impact: 'Workflow quebrado permite avancos indevidos ou bloqueia compras validas.',
    recommendation: 'Sincronizar status da aprovacao com a entidade de origem e registrar auditoria.'
  }, async () => {
    await procurement.createRejectedRequisition();
    await workflow.approveRequisition();
    await workflow.rejectRequisition();
  });
});

test('CT014 - cotacao com 3 fornecedores, comparativo e vencedor', async ({ page }) => {
  const procurement = new ProcurementPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT014-COTACAO',
    caseId: 'CT014',
    severity: 'alta',
    expected: 'Cotacao deve comparar fornecedores, registrar vencedor e persistir.',
    impact: 'Comparativo incorreto afeta decisao de compra e rastreabilidade.',
    recommendation: 'Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor.'
  }, async () => {
    await procurement.createQuotationWithSuppliers();
  });
});

test('CT015 - ordem de compra a partir da cotacao e comprometimento do orcamento', async ({ page }) => {
  const procurement = new ProcurementPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT015-ORDEM-COMPRA',
    caseId: 'CT015',
    severity: 'critica',
    expected: 'OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto.',
    impact: 'Sem comprometimento do orcamento nao ha controle real de compras.',
    recommendation: 'Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido.'
  }, async () => {
    await procurement.createPurchaseOrderFromQuotation();
  });
});

test('CT016 - edicao/exclusao de requisicao, cotacao e OC quando permitido', async ({ page }) => {
  const procurement = new ProcurementPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT016-EDICAO-CANCELAMENTO-DOCUMENTOS',
    caseId: 'CT016',
    severity: 'media',
    expected: 'Requisicao, cotacao e OC devem permitir edicao/cancelamento quando a regra permitir ou exibir bloqueio de negocio.',
    impact: 'Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro.',
    recommendation: 'Expor editar/cancelar/inativar com confirmacao ou mensagem objetiva de bloqueio.'
  }, async () => {
    await procurement.editCancelOrDeleteAllowedDocuments();
  });
});

test('CT017 - contas a pagar, status e filtros', async ({ page }) => {
  const finance = new FinancePage(page);
  await stepWithDiagnostic(page, {
    id: 'CT017-CONTAS-PAGAR',
    caseId: 'CT017',
    severity: 'critica',
    expected: 'Contas a pagar devem exibir status e filtros funcionais apos OC.',
    impact: 'Sem conta a pagar rastreavel o financeiro nao consegue programar ou reconciliar pagamentos.',
    recommendation: 'Corrigir geracao/listagem de contas a pagar e validacao dos filtros.'
  }, async () => {
    await finance.validatePayablesStatusAndFilters();
  });
});

test('CT018 - pagamento parcial, final e tentativa acima do saldo', async ({ page }) => {
  const finance = new FinancePage(page);
  await stepWithDiagnostic(page, {
    id: 'CT018-PAGAMENTOS',
    caseId: 'CT018',
    severity: 'critica',
    expected: 'Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada.',
    impact: 'Erro em pagamento distorce custo real, dashboard e tomada de decisao.',
    recommendation: 'Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard.'
  }, async () => {
    await finance.registerPartialAndFinalPayments();
    await finance.rejectPaymentAboveBalance();
  });
});

test('CT019 - dashboard financeiro apos compra/pagamento/mao de obra', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  const workflow = new WorkflowAuditPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT019-DASHBOARD-FINANCEIRO',
    caseId: 'CT019',
    severity: 'alta',
    expected: 'Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos.',
    impact: 'Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade.',
    recommendation: 'Corrigir agregacoes do dashboard e garantir eventos de auditoria para criacao, edicao, aprovacao e pagamento.'
  }, async () => {
    await dashboard.validateFinancialIndicators();
    await workflow.validateAuditForRunData();
  });
});
