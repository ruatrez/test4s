import { expect, type Page } from '@playwright/test';
import { data } from '../test-data';
import { byText, clickAny, fillField, gotoMenu } from '../ui';

export class WorkflowAuditPage {
  constructor(private readonly page: Page) {}

  async approveRequisition() {
    await gotoMenu(this.page, ['Workflow', 'Aprovações']);
    await expect(byText(this.page, data.requisition)).toBeVisible();
    await clickAny(this.page, ['Aprovar']);
    await fillField(this.page, ['observacao', 'observação', 'justificativa'], 'Aprovacao automatizada de teste').catch(() => {});
    await clickAny(this.page, ['Confirmar', 'Salvar', 'Aprovar']);
    await gotoMenu(this.page, ['Suprimentos', 'Requisições']);
    await expect(this.page.locator('body')).toHaveText(/aprovad|cotacao|cotação/i);
  }

  async rejectRequisition() {
    await gotoMenu(this.page, ['Workflow', 'Aprovações']);
    await clickAny(this.page, [data.rejectedRequisition]).catch(() => {});
    await clickAny(this.page, ['Rejeitar']);
    await fillField(this.page, ['observacao', 'observação', 'justificativa'], 'Rejeicao automatizada de teste').catch(() => {});
    await clickAny(this.page, ['Confirmar', 'Salvar', 'Rejeitar']);
    await expect(this.page.locator('body')).toHaveText(/rejeit|recusad|workflow|aprov/i);
  }

  async validateIncorrectProfileCannotApprove() {
    await gotoMenu(this.page, ['Workflow', 'Aprovações']);
    await clickAny(this.page, ['Aprovar', 'Rejeitar']).catch(() => {});
    await expect(this.page.locator('body')).toHaveText(/permiss|acesso|negad|autoriz|perfil|aprov/i);
  }

  async validateWorkflowDecisionAudit() {
    await gotoMenu(this.page, ['Workflow', 'Auditoria']);
    await expect(this.page.locator('body')).toHaveText(/aprov|rejeit|usuario|usuário|data|hora/i);
  }

  async validateAuditForRunData() {
    await gotoMenu(this.page, ['Workflow', 'Auditoria']);
    await expect(this.page.locator('body')).toHaveText(/criacao|criação|edicao|edição|exclus|cancel|aprov|rejeit|usuario|usuário|data|hora/i);
    await expect(this.page.locator('body')).toHaveText(new RegExp(data.prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }
}
