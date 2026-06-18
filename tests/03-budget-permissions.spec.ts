import { expect, test } from '@playwright/test';
import { AuthPage } from '../pages/auth-page';
import { BudgetPage } from '../pages/budget-page';
import { ConfigurationPage } from '../pages/configuration-page';
import { WorkflowPage } from '../pages/workflow-page';
import { config } from '../support/config';
import { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } from '../support/diagnostics';
import { data } from '../support/test-data';

test.describe.configure({ mode: 'serial' });

const operationalPassword = config.operationalPassword || 'Admin123';
const operationalEmail = config.operationalEmail || data.operationalUserEmail;

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
});

test('CT002 - operational and inactive users reflect permission rules', async ({ page }) => {
  const auth = new AuthPage(page);
  const configuration = new ConfigurationPage(page);
  await auth.loginAsAdmin();

  await stepWithDiagnostic(page, {
    id: 'CT002-USUARIO-OPERACIONAL',
    caseId: 'CT002',
    severity: 'alta',
    expected: 'Usuario operacional deve poder ser criado/editado/inativado e ter permissoes refletidas no menu.',
    impact: 'Permissoes incorretas podem expor financeiro ou workflow a perfis indevidos.',
    recommendation: 'Revisar matriz de perfis e aplicacao das permissoes no backend e frontend.'
  }, async () => {
    await configuration.createOperationalUser(operationalEmail, operationalPassword);
    await configuration.createOperationalUser(data.inactiveUserEmail, operationalPassword, data.inactiveUserName);
    await configuration.tryInactivateUser(data.inactiveUserName);
    await auth.logout();
    await auth.login(operationalEmail, operationalPassword);
    await expect(page.locator('body')).toHaveText(/dashboard|obra|orcamento|orçamento|requisi/i);
    await auth.logout();
    await page.goto('/');
    await page.locator('input[type="email"], input[name*="email" i]').first().fill(data.inactiveUserEmail);
    await page.locator('input[type="password"]').first().fill(operationalPassword);
    await page.getByRole('button', { name: /entrar|login|acessar/i }).click();
    await expect(page.locator('body')).toHaveText(/inativo|bloque|permiss|credencial|senha|erro/i);
  });
});

test('CT008 - budget item persists and exposes balance fields', async ({ page }) => {
  const auth = new AuthPage(page);
  const budget = new BudgetPage(page);
  await auth.loginAsAdmin();

  await stepWithDiagnostic(page, {
    id: 'CT008-ORCAMENTO-BASE',
    caseId: 'CT008',
    severity: 'critica',
    expected: 'Item orcado deve calcular valor previsto e iniciar saldo disponivel.',
    impact: 'Erro no orcamento base compromete todo o controle de saldo, OC e pagamento.',
    recommendation: 'Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes.'
  }, async () => {
    await budget.createBudgetItem();
  });
});

test('CT009, CT010 and CT020 - protected budget changes go through workflow', async ({ page }) => {
  const auth = new AuthPage(page);
  const budget = new BudgetPage(page);
  const workflow = new WorkflowPage(page);

  await auth.login(operationalEmail, operationalPassword);
  await stepWithDiagnostic(page, {
    id: 'CT009-ORCAMENTO-PROTEGIDO-ALTERACAO',
    caseId: 'CT009',
    severity: 'critica',
    profile: 'engenharia',
    expected: 'Usuario comum nao deve alterar item orcado protegido diretamente; deve gerar aprovacao.',
    impact: 'Alteracao livre de orcamento compromete governanca financeira.',
    recommendation: 'Bloquear edicao direta para perfis nao autorizados e encaminhar solicitacao ao Workflow > Aprovacoes.'
  }, async () => {
    await budget.requestProtectedChange();
  });

  await stepWithDiagnostic(page, {
    id: 'CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO',
    caseId: 'CT010',
    severity: 'critica',
    profile: 'engenharia',
    expected: 'Exclusao por usuario comum deve gerar aprovacao do administrador.',
    impact: 'Exclusao indevida remove base de controle financeiro e afeta saldos.',
    recommendation: 'Exigir aprovacao administrativa e auditar exclusoes de itens orcados.'
  }, async () => {
    await budget.requestProtectedDeletion();
  });

  await auth.logout();
  await auth.loginAsAdmin();
  await stepWithDiagnostic(page, {
    id: 'CT020-WORKFLOW-PERFIL-CORRETO',
    caseId: 'CT020',
    severity: 'alta',
    expected: 'Administrador ou perfil correto deve aprovar/rejeitar pendencias e atualizar entidade original.',
    impact: 'Workflow sem decisao rastreavel quebra governanca e bloqueia continuidade operacional.',
    recommendation: 'Persistir aprovador, perfil, data, observacao e sincronizar status da entidade original.'
  }, async () => {
    await workflow.rejectPendingItem();
  });
});
