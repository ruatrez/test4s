import { test } from '@playwright/test';
import { AuthPage } from '../support/pages/auth-page';
import { RegistrationsPage } from '../support/pages/registrations-page';
import { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } from '../support/diagnostics';

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
  await new AuthPage(page).loginAsAdmin();
});

test('CT004 - cliente e contrato com edicao, persistencia e vinculo', async ({ page }) => {
  const registrations = new RegistrationsPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT004-CLIENTE-CONTRATO',
    caseId: 'CT004',
    severity: 'alta',
    expected: 'Cliente e contrato devem ser criados, editados, vinculados e persistidos apos refresh.',
    impact: 'Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra.',
    recommendation: 'Corrigir persistencia e relacionamento entre cliente e contrato.'
  }, async () => {
    await registrations.createClientAndContract();
  });
});

test('CT005 - unidade, obra e centro de custo', async ({ page }) => {
  const registrations = new RegistrationsPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT005-OBRA-CENTRO',
    caseId: 'CT005',
    severity: 'alta',
    expected: 'Unidade, obra e centro de custo devem ficar disponiveis para os modulos seguintes.',
    impact: 'Falha nesse cadastro impede orcamento, requisicao e financeiro.',
    recommendation: 'Revisar obrigatoriedade, vinculos e persistencia de obras/centros.'
  }, async () => {
    await registrations.createUnitWorkAndCostCenter();
  });
});

test('CT006 - fornecedores', async ({ page }) => {
  const registrations = new RegistrationsPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT006-FORNECEDORES',
    caseId: 'CT006',
    severity: 'media',
    expected: 'Tres fornecedores ativos devem poder ser usados em cotacoes.',
    impact: 'Sem fornecedores suficientes o comparativo de cotacao fica incompleto.',
    recommendation: 'Garantir cadastro e selecao de fornecedores ativos em cotacoes.'
  }, async () => {
    await registrations.createSuppliers();
  });
});

test('CT007 - categorias orcamentarias', async ({ page }) => {
  const registrations = new RegistrationsPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT007-CATEGORIAS',
    caseId: 'CT007',
    severity: 'media',
    expected: 'Categorias orcamentarias devem ficar disponiveis para itens e movimentos.',
    impact: 'Classificacao financeira incorreta prejudica dashboard e saldo por categoria.',
    recommendation: 'Corrigir cadastro, listagem e uso das categorias nos selects de movimento.'
  }, async () => {
    await registrations.createBudgetCategories();
  });
});

test('CT011 - colaborador, cargo/faixa e alocacao quando a UI permitir', async ({ page }) => {
  const registrations = new RegistrationsPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT011-COLABORADOR-ALOCACAO',
    caseId: 'CT011',
    severity: 'media',
    expected: 'Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo.',
    impact: 'Mao de obra ausente distorce custo real e dashboard financeiro.',
    recommendation: 'Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade.'
  }, async () => {
    await registrations.createCollaboratorAllocationIfAvailable();
  });
});
