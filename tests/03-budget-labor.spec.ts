import { test } from '@playwright/test';
import { config } from '../support/config';
import { data } from '../support/test-data';
import { AuthPage } from '../support/pages/auth-page';
import { BudgetPage } from '../support/pages/budget-page';
import { RegistrationsPage } from '../support/pages/registrations-page';
import { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } from '../support/diagnostics';

const operationalPassword = config.operationalPassword || 'Admin123';
const operationalEmail = config.operationalEmail || data.operationalUserEmail;

async function ensureOperationalLogin(page: import('@playwright/test').Page) {
  const auth = new AuthPage(page);
  await auth.login(operationalEmail, operationalPassword).catch(async () => {
    await auth.loginAsAdmin();
    await new RegistrationsPage(page).createOperationalUser(operationalPassword).catch(() => {});
    await auth.logout();
    await auth.login(operationalEmail, operationalPassword);
  });
}

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
});

test('CT008 - item orcado com previsto, saldo, comprometido e pago', async ({ page }) => {
  await new AuthPage(page).loginAsAdmin();
  const budget = new BudgetPage(page);
  await stepWithDiagnostic(page, {
    id: 'CT008-ORCAMENTO-BASE',
    caseId: 'CT008',
    severity: 'critica',
    expected: 'Item orcado deve calcular valor previsto, saldo, comprometido e pago.',
    impact: 'Erro no orcamento base compromete controle de saldo, OC e pagamento.',
    recommendation: 'Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes.'
  }, async () => {
    await budget.createBaseBudgetItem();
  });
});

test('CT009 - alteracao de orcamento protegida por usuario comum', async ({ page }) => {
  await ensureOperationalLogin(page);
  const budget = new BudgetPage(page);

  await stepWithDiagnostic(page, {
    id: 'CT009-ORCAMENTO-PROTEGIDO-ALTERACAO',
    caseId: 'CT009',
    severity: 'critica',
    profile: 'operacional',
    expected: 'Usuario comum nao deve alterar item orcado protegido diretamente; deve gerar aprovacao ou bloqueio.',
    impact: 'Alteracao livre de orcamento compromete governanca financeira.',
    recommendation: 'Bloquear edicao direta para perfis nao autorizados e encaminhar solicitacao ao Workflow > Aprovacoes.'
  }, async () => {
    await budget.requestProtectedBudgetChange();
  });
});

test('CT010 - exclusao de item orcado por usuario comum e administrador', async ({ page }) => {
  const auth = new AuthPage(page);
  const budget = new BudgetPage(page);

  await ensureOperationalLogin(page);
  await stepWithDiagnostic(page, {
    id: 'CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO-OPERACIONAL',
    caseId: 'CT010',
    severity: 'critica',
    profile: 'operacional',
    expected: 'Exclusao por usuario comum deve gerar aprovacao do administrador.',
    impact: 'Exclusao indevida remove base de controle financeiro e afeta saldos.',
    recommendation: 'Exigir aprovacao administrativa e auditar exclusoes de itens orcados.'
  }, async () => {
    await budget.requestProtectedBudgetDeletion();
  });

  await auth.logout();
  await auth.loginAsAdmin();
  await stepWithDiagnostic(page, {
    id: 'CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO-ADMIN',
    caseId: 'CT010',
    severity: 'critica',
    expected: 'Administrador deve conseguir excluir, cancelar, inativar ou observar bloqueio de negocio documentado.',
    impact: 'Ausencia de acao administrativa clara dificulta governanca e saneamento de massa.',
    recommendation: 'Expor acao permitida para administrador ou mensagem de bloqueio de regra de negocio.'
  }, async () => {
    await budget.adminDeleteOrCancelBudgetItemWhenAllowed();
  });
});
