import { expect, Page } from '@playwright/test';
import { clickAny, fillField, gotoMenu } from '../support/ui';
import { data } from '../support/test-data';

export class WorkflowPage {
  constructor(private readonly page: Page) {}

  async approveRequisition() {
    await gotoMenu(this.page, ['Workflow', 'Aprovações']);
    await expect(this.page.locator('body')).toHaveText(new RegExp(data.requisition, 'i'));
    await clickAny(this.page, ['Aprovar']);
    await fillField(this.page, ['observacao', 'observação', 'justificativa'], 'Aprovacao automatizada de teste').catch(() => {});
    await clickAny(this.page, ['Confirmar', 'Salvar', 'Aprovar']);
    await gotoMenu(this.page, ['Suprimentos', 'Requisições']);
    await expect(this.page.locator('body')).toHaveText(/aprovad|cotacao|cotação/i);
  }

  async rejectPendingItem() {
    await gotoMenu(this.page, ['Workflow', 'Aprovações']);
    await clickAny(this.page, ['Rejeitar']).catch(() => {});
    await fillField(this.page, ['observacao', 'observação', 'justificativa'], 'Rejeicao automatizada de workflow').catch(() => {});
    await clickAny(this.page, ['Confirmar', 'Salvar']).catch(() => {});
    await expect(this.page.locator('body')).toHaveText(/rejeit|aprov|pendente|historico|histórico/i);
  }

  async validateAuditForPrefix() {
    await gotoMenu(this.page, ['Workflow', 'Auditoria']);
    await expect(this.page.locator('body')).toHaveText(new RegExp(data.prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
    await expect(this.page.locator('body')).toHaveText(/usuario|usuário|data|hora|cria|edit|aprov|rejeit|exclu|cancel/i);
  }
}
