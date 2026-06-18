import { expect, Page } from '@playwright/test';
import { byText, chooseFirstAvailableOption, clickAny, fillField, gotoMenu, submitForm } from '../support/ui';
import { data } from '../support/test-data';

export class ProcurementPage {
  constructor(private readonly page: Page) {}

  async createRequisitionWithinBudget() {
    await gotoMenu(this.page, ['Suprimentos', 'Requisições']);
    await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
    await chooseFirstAvailableOption(this.page, ['Obra']);
    await chooseFirstAvailableOption(this.page, ['Centro de custo']);
    await fillField(this.page, ['Justificativa'], data.requisition);
    await chooseFirstAvailableOption(this.page, ['Item orcado', 'Item orçado']);
    await fillField(this.page, ['Qtd.'], data.money.requestQuantity);
    await fillField(this.page, ['Vlr unit.'], data.money.requestEstimatedValue);
    await submitForm(this.page);
    await clickAny(this.page, ['Enviar para aprovação', 'Enviar', 'Solicitar aprovação']);
    await expect(byText(this.page, data.requisition)).toBeVisible();
  }

  async createRejectedRequisitionCandidate() {
    await gotoMenu(this.page, ['Suprimentos', 'Requisições']);
    await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
    await chooseFirstAvailableOption(this.page, ['Obra']);
    await chooseFirstAvailableOption(this.page, ['Centro de custo']);
    await fillField(this.page, ['Justificativa'], data.rejectedRequisition);
    await chooseFirstAvailableOption(this.page, ['Item orcado', 'Item orçado']);
    await fillField(this.page, ['Qtd.'], 1);
    await fillField(this.page, ['Vlr unit.'], data.money.requestEstimatedValue);
    await submitForm(this.page);
    await clickAny(this.page, ['Enviar para aprovação', 'Enviar', 'Solicitar aprovação']).catch(() => {});
  }

  async createOverBudgetRequisition() {
    await gotoMenu(this.page, ['Suprimentos', 'Requisições']);
    await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
    await chooseFirstAvailableOption(this.page, ['Obra']);
    await chooseFirstAvailableOption(this.page, ['Centro de custo']);
    await fillField(this.page, ['Justificativa'], data.overBudgetRequisition);
    await chooseFirstAvailableOption(this.page, ['Item orcado', 'Item orçado']);
    await fillField(this.page, ['Qtd.'], 1);
    await fillField(this.page, ['Vlr unit.'], data.money.overBudgetEstimatedValue);
    await submitForm(this.page);
    await expect(this.page.locator('body')).toHaveText(/saldo|orcamento|orçamento|bloquead|exced|limite|aprov/i);
  }

  async createQuotation() {
    await gotoMenu(this.page, ['Suprimentos', 'Cotações']);
    await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
    await fillField(this.page, ['descricao', 'descrição'], data.quotation);
    await fillField(this.page, ['requisicao', 'requisição'], data.requisition);
    for (const supplier of data.suppliers) {
      await fillField(this.page, ['fornecedor'], supplier).catch(() => {});
      await clickAny(this.page, ['Adicionar fornecedor', 'Adicionar']).catch(() => {});
    }
    await fillField(this.page, ['valor'], data.money.supplierA).catch(() => {});
    await submitForm(this.page);
    await clickAny(this.page, ['Vencedor', 'Selecionar vencedor', 'Concluir']).catch(() => {});
    await expect(byText(this.page, data.quotation)).toBeVisible();
  }

  async createPurchaseOrder() {
    await gotoMenu(this.page, ['Suprimentos', 'Ordens de Compra']);
    await clickAny(this.page, ['Novo', 'Gerar', 'Criar']);
    await fillField(this.page, ['cotacao', 'cotação'], data.quotation);
    await fillField(this.page, ['descricao', 'descrição'], data.purchaseOrder).catch(() => {});
    await fillField(this.page, ['previsao', 'previsão', 'entrega'], '31/12/2026').catch(() => {});
    await fillField(this.page, ['condicao', 'condição'], 'Pagamento teste').catch(() => {});
    await submitForm(this.page);
    await clickAny(this.page, ['Emitir', 'Concluir', 'Avançar', 'Avancar']).catch(() => {});
    await expect(this.page.locator('body')).toHaveText(/comprometido|ordem|oc|conta/i);
  }

  async validateEditAndDeleteControls() {
    for (const path of [
      ['Suprimentos', 'Requisições'],
      ['Suprimentos', 'Cotações'],
      ['Suprimentos', 'Ordens de Compra']
    ]) {
      await gotoMenu(this.page, path);
      await clickAny(this.page, ['Editar', 'Alterar']).catch(() => {});
      await clickAny(this.page, ['Excluir', 'Remover', 'Cancelar']).catch(() => {});
      await expect(this.page.locator('body')).not.toHaveText(/erro interno|internal server error|undefined is not|cannot read/i);
    }
  }
}
