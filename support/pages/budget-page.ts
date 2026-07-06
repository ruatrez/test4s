import { expect, type Page } from '@playwright/test';
import { data } from '../test-data';
import { byText, chooseOption, clickAny, expectSelectedOption, fillField, gotoMenu, submitForm } from '../ui';

export class BudgetPage {
  constructor(private readonly page: Page) {}

  private budgetItemRow() {
    return this.page.getByRole('row').filter({ hasText: data.budgetItem }).first();
  }

  private async clickBudgetItemAction(action: RegExp) {
    const row = this.budgetItemRow();
    await expect(row).toBeVisible();
    const button = row.getByRole('button', { name: action }).first();
    await button.scrollIntoViewIfNeeded();
    await button.click();
  }

  async createBaseBudgetItem() {
    await gotoMenu(this.page, ['Orçamento', 'Itens Orçados']);
    await clickAny(this.page, ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
    await chooseOption(this.page, ['obra'], data.work);
    await expectSelectedOption(this.page, ['obra'], data.work);
    await chooseOption(this.page, ['centro de custo', 'centro'], data.costCenter);
    await expectSelectedOption(this.page, ['centro de custo', 'centro'], data.costCenter);
    await chooseOption(this.page, ['categoria'], data.categories[1]);
    await fillField(this.page, ['nome do item', 'item', 'nome'], data.budgetItem);
    await fillField(this.page, ['descricao', 'descrição'], data.budgetItem).catch(() => {});
    await chooseOption(this.page, ['unidade de medida', 'unidade'], 'un');
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
    await this.clickBudgetItemAction(/Solicitar exclus(?:ão|ao|Ã£o)/i);
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
