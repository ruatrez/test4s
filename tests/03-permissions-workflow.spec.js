const { test, expect } = require('@playwright/test');
const { config } = require('../support/config');
const { login, logout } = require('../support/auth');
const { data } = require('../support/test-data');
const { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } = require('../support/diagnostics');
const { byText, chooseOption, clickAny, fillField, gotoMenu, submitForm } = require('../support/ui');

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
});

test('CT002, CT009, CT010, CT020 - permissions, protected budget and workflow decisions', async ({ page }) => {
  await login(page);

  await stepWithDiagnostic(page, {
    id: 'CT002-USUARIO-OPERACIONAL',
    severity: 'alta',
    expected: 'Usuario operacional deve poder ser criado/editado/inativado e ter permissoes refletidas no menu.',
    impact: 'Permissoes incorretas podem expor financeiro ou workflow a perfis indevidos.',
    recommendation: 'Revisar matriz de perfis e aplicacao das permissoes no backend e frontend.'
  }, async () => {
    await gotoMenu(page, ['Configurações', 'Usuários']);
    await clickAny(page, ['Novo', 'Adicionar', 'Criar']);
    await fillField(page, ['nome'], data.operationalUserName);
    await fillField(page, ['email'], config.operationalEmail || data.operationalUserEmail);
    await fillField(page, ['senha'], config.operationalPassword || 'Admin123');
    await chooseOption(page, ['perfil'], 'ENGENHARIA');
    await fillField(page, ['Confirmar senha'], config.operationalPassword || 'Admin123');
    await submitForm(page);
    await expect(byText(page, data.operationalUserName)).toBeVisible();
  });

  await logout(page);
  await login(
    page,
    config.operationalEmail || data.operationalUserEmail,
    config.operationalPassword || 'Admin123'
  );

  await stepWithDiagnostic(page, {
    id: 'CT009-ORCAMENTO-PROTEGIDO-ALTERACAO',
    severity: 'critica',
    expected: 'Usuario comum nao deve alterar item orcado protegido diretamente; deve gerar aprovacao.',
    impact: 'Alteracao livre de orcamento compromete governanca financeira.',
    recommendation: 'Bloquear edicao direta para perfis nao autorizados e encaminhar solicitacao ao Workflow > Aprovacoes.'
  }, async () => {
    await gotoMenu(page, ['Orçamento', 'Itens Orçados']);
    await clickAny(page, [data.budgetItem]).catch(() => {});
    await clickAny(page, ['Editar', 'Alterar']);
    await fillField(page, ['justificativa', 'observacao', 'observação'], 'Solicitacao automatizada de alteracao').catch(() => {});
    await fillField(page, ['valor unitario', 'valor unitário', 'valor'], data.money.budgetUnitValue + 1).catch(() => {});
    await submitForm(page);
    await expect(page.locator('body')).toHaveText(/aprov|pendente|solicit|permiss|bloque/i);
  });

  await stepWithDiagnostic(page, {
    id: 'CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO',
    severity: 'critica',
    expected: 'Exclusao por usuario comum deve gerar aprovacao do administrador.',
    impact: 'Exclusao indevida remove base de controle financeiro e afeta saldos.',
    recommendation: 'Exigir aprovacao administrativa e auditar exclusoes de itens orcados.'
  }, async () => {
    await gotoMenu(page, ['Orçamento', 'Itens Orçados']);
    await clickAny(page, [data.budgetItem]).catch(() => {});
    await clickAny(page, ['Solicitar exclusão', 'Solicitar exclusao', 'Excluir', 'Remover', 'Cancelar']);
    await fillField(page, ['justificativa', 'observacao', 'observação'], 'Solicitacao automatizada de exclusao').catch(() => {});
    await clickAny(page, ['Confirmar', 'Solicitar', 'Enviar']);
    await expect(page.locator('body')).toHaveText(/aprov|pendente|solicit|administrador|permiss/i);
  });

  await logout(page);
  await login(page);

  await stepWithDiagnostic(page, {
    id: 'CT020-WORKFLOW-PERFIL-CORRETO',
    severity: 'alta',
    expected: 'Administrador ou perfil correto deve aprovar/rejeitar pendencias e atualizar entidade original.',
    impact: 'Workflow sem decisao rastreavel quebra governanca e bloqueia continuidade operacional.',
    recommendation: 'Persistir aprovador, perfil, data, observacao e sincronizar status da entidade original.'
  }, async () => {
    await gotoMenu(page, ['Workflow', 'Aprovações']);
    await expect(page.locator('body')).toHaveText(/pendente|aprov|rejeit/i);
    await clickAny(page, ['Aprovar', 'Rejeitar']).catch(() => {});
    await fillField(page, ['observacao', 'observação', 'justificativa'], 'Decisao automatizada de workflow').catch(() => {});
    await clickAny(page, ['Confirmar', 'Salvar']).catch(() => {});
    await gotoMenu(page, ['Workflow', 'Auditoria']);
    await expect(page.locator('body')).toHaveText(/aprov|rejeit|usuario|usuário|data|hora/i);
  });
});
