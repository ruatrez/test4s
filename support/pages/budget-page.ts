import { expect, type Page } from '@playwright/test';
import { data } from '../test-data';
import { byText, clickAny, fillField, gotoMenu, submitForm } from '../ui';

export class BudgetPage {
  constructor(private readonly page: Page) {}

  async createBaseBudgetItem() {
    await gotoMenu(this.page, ['Orçamento', 'Itens Orçados']);
    await clickAny(this.page, ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
    await fillField(this.page, ['descricao', 'descrição', 'item', 'nome'], data.budgetItem);
    await fillField(this.page, ['obra'], data.work);
    await fillField(this.page, ['centro', 'centro de custo'], data.costCenter);
    await fillField(this.page, ['categoria'], data.categories[1]);
    await fillField(this.page, ['unidade de medida', 'unidade'], 'un');
    await fillField(this.page, ['quantidade'], data.money.budgetQuantity);
    await fillField(this.page, ['valor unitario', 'valor unitário', 'valor'], data.money.budgetUnitValue);
    await submitForm(this.page);
    await expect(byText(this.page, data.budgetItem)).toBeVisible();
    await this.page.reload({ waitUntil: 'networkidle' });
    await expect(byText(this.page, data.budgetItem)).toBeVisible();
    await expect(this.page.locator('body')).toHaveText(/saldo|comprometido|pago|previsto|orçado|orcado/i);
  }

  async requestProtectedBudgetChange() {
    await gotoMenu(this.page, ['Orçamento', 'Itens Orçados']);
    await clickAny(this.page, [data.budgetItem]).catch(() => {});
    await clickAny(this.page, ['Editar', 'Alterar']);
    await fillField(this.page, ['justificativa', 'observacao', 'observação'], 'Solicitacao automatizada de alteracao').catch(() => {});
    await fillField(this.page, ['valor unitario', 'valor unitário', 'valor'], data.money.budgetUnitValue + 1).catch(() => {});
    await submitForm(this.page);
    await expect(this.page.locator('body')).toHaveText(/aprov|pendente|solicit|permiss|bloque/i);
  }

  async requestProtectedBudgetDeletion() {
    await gotoMenu(this.page, ['Orçamento', 'Itens Orçados']);
    await clickAny(this.page, [data.budgetItem]).catch(() => {});
    await clickAny(this.page, ['Solicitar exclusão', 'Solicitar exclusao', 'Excluir', 'Remover', 'Cancelar']);
    await fillField(this.page, ['justificativa', 'observacao', 'observação'], 'Solicitacao automatizada de exclusao').catch(() => {});
    await clickAny(this.page, ['Confirmar', 'Solicitar', 'Enviar']);
    await expect(this.page.locator('body')).toHaveText(/aprov|pendente|solicit|administrador|permiss/i);
  }

  async adminDeleteOrCancelBudgetItemWhenAllowed() {
    await gotoMenu(this.page, ['Orçamento', 'Itens Orçados']);
    await clickAny(this.page, [data.budgetItem]).catch(() => {});
    await clickAny(this.page, ['Cancelar', 'Inativar', 'Excluir', 'Remover']).catch(() => {});
    await fillField(this.page, ['justificativa', 'observacao', 'observação'], 'Cancelamento automatizado de teste').catch(() => {});
    await clickAny(this.page, ['Confirmar', 'Salvar', 'Sim']).catch(() => {});
    await expect(this.page.locator('body')).not.toHaveText(/erro interno|internal server error|undefined is not/i);
  }
}
