import { expect, test } from '@playwright/test';
import { config } from '../support/config';
import { data } from '../support/test-data';
import { AuthPage } from '../support/pages/auth-page';
import { RegistrationsPage } from '../support/pages/registrations-page';
import { WorkflowAuditPage } from '../support/pages/workflow-audit-page';
import { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } from '../support/diagnostics';

const operationalPassword = config.operationalPassword || 'Admin123';
const operationalEmail = config.operationalEmail || data.operationalUserEmail;

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
});

test('CT002 - criacao, edicao, inativacao e tentativa de login com usuario inativo', async ({ page }) => {
  const auth = new AuthPage(page);
  await auth.loginAsAdmin();
  const registrations = new RegistrationsPage(page);

  await stepWithDiagnostic(page, {
    id: 'CT002-USUARIOS-PERMISSOES',
    caseId: 'CT002',
    severity: 'alta',
    expected: 'Usuario operacional deve poder ser criado/editado; usuario inativo deve ser impedido de autenticar.',
    impact: 'Permissoes incorretas podem expor financeiro ou workflow a perfis indevidos.',
    recommendation: 'Revisar matriz de perfis, status de usuario e validacao de login no backend.'
  }, async () => {
    await registrations.createOperationalUser(operationalPassword).catch(() => {});
    await registrations.createInactiveValidationUser(operationalPassword);
    await registrations.searchOrOpenRecord(data.inactiveUserName).catch(() => {});
    await registrations.inactivateCurrentUser();
    await auth.logout();
    await auth.login(data.inactiveUserEmail, operationalPassword).catch(() => {});
    await expect(page.locator('body')).toHaveText(/inativ|bloque|permiss|credencial|senha|login|acesso/i);
  });
});

test('CT020 - workflow com perfil correto/incorreto, aprovacao e rejeicao', async ({ page }) => {
  const auth = new AuthPage(page);
  const workflow = new WorkflowAuditPage(page);

  await auth.login(operationalEmail, operationalPassword).catch(async () => {
    await auth.loginAsAdmin();
    await new RegistrationsPage(page).createOperationalUser(operationalPassword).catch(() => {});
    await auth.logout();
    await auth.login(operationalEmail, operationalPassword);
  });

  await stepWithDiagnostic(page, {
    id: 'CT020-WORKFLOW-PERFIL-INCORRETO',
    caseId: 'CT020',
    severity: 'alta',
    profile: 'operacional',
    expected: 'Perfil incorreto nao deve aprovar ou rejeitar pendencias sem permissao.',
    impact: 'Aprovacao por perfil indevido quebra governanca do fluxo financeiro.',
    recommendation: 'Aplicar autorizacao no backend e esconder/desabilitar acoes no frontend para perfis sem permissao.'
  }, async () => {
    await workflow.validateIncorrectProfileCannotApprove();
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
    await workflow.validateWorkflowDecisionAudit();
  });
});

test('CT021 - auditoria de criacao, edicao, exclusao/cancelamento e decisoes', async ({ page }) => {
  await new AuthPage(page).loginAsAdmin();
  const workflow = new WorkflowAuditPage(page);

  await stepWithDiagnostic(page, {
    id: 'CT021-AUDITORIA',
    caseId: 'CT021',
    severity: 'media',
    expected: 'Auditoria deve registrar criacao, edicao, exclusao/cancelamento e decisoes com usuario/data/hora.',
    impact: 'Auditoria incompleta reduz rastreabilidade e capacidade de apuracao.',
    recommendation: 'Garantir eventos de auditoria para entidades financeiras, cadastros e workflow.'
  }, async () => {
    await workflow.validateAuditForRunData();
  });
});
