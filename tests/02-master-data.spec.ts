import { test } from '@playwright/test';
import { AuthPage } from '../pages/auth-page';
import { ConfigurationPage } from '../pages/configuration-page';
import { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } from '../support/diagnostics';

test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
  await new AuthPage(page).loginAsAdmin();
});

test('CT004 - client and contract persist after refresh', async ({ page }) => {
  const configuration = new ConfigurationPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT004-CLIENTE-CONTRATO',
    caseId: 'CT004',
    severity: 'alta',
    expected: 'Cliente e contrato devem ser criados, vinculados e persistidos.',
    impact: 'Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra.',
    recommendation: 'Corrigir persistencia e relacionamento entre cliente e contrato.'
  }, async () => {
    await configuration.createClientAndContract();
  });
});

test('CT005 - unit, work and cost center persist and become available', async ({ page }) => {
  const configuration = new ConfigurationPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT005-OBRA-CENTRO',
    caseId: 'CT005',
    severity: 'alta',
    expected: 'Unidade, obra e centro de custo devem ficar disponiveis para os modulos seguintes.',
    impact: 'Falha nesse cadastro impede orcamento, requisicao e financeiro.',
    recommendation: 'Revisar obrigatoriedade, vinculos e persistencia de obras/centros.'
  }, async () => {
    await configuration.createWorkStructure();
  });
});

test('CT006 - suppliers can be created for quotations', async ({ page }) => {
  const configuration = new ConfigurationPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT006-FORNECEDORES',
    caseId: 'CT006',
    severity: 'media',
    expected: 'Tres fornecedores ativos devem poder ser usados em cotacoes.',
    impact: 'Sem fornecedores suficientes o comparativo de cotacao fica incompleto.',
    recommendation: 'Garantir cadastro e selecao de fornecedores ativos em cotacoes.'
  }, async () => {
    await configuration.createSuppliers();
  });
});

test('CT007 - budget categories can be created', async ({ page }) => {
  const configuration = new ConfigurationPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT007-CATEGORIAS',
    caseId: 'CT007',
    severity: 'media',
    expected: 'Categorias orcamentarias devem ficar disponiveis para itens e movimentos.',
    impact: 'Classificacao financeira incorreta prejudica dashboard e saldo por categoria.',
    recommendation: 'Corrigir cadastro, listagem e uso das categorias nos selects de movimento.'
  }, async () => {
    await configuration.createCategories();
  });
});

test('CT011 - collaborator allocation can compose real cost', async ({ page }) => {
  const configuration = new ConfigurationPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT011-COLABORADOR-ALOCACAO',
    caseId: 'CT011',
    severity: 'alta',
    expected: 'Colaborador/alocacao deve vincular obra e compor custo real quando os campos estiverem disponiveis.',
    impact: 'Sem custo de mao de obra, dashboard e custo real ficam incompletos.',
    recommendation: 'Expor campos obrigatorios de alocacao e propagar custo para indicadores financeiros.'
  }, async () => {
    await configuration.createCollaboratorAllocation();
  });
});
