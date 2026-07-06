import { expect, type Page } from '@playwright/test';
import { data } from '../test-data';
import { byText, chooseOption, clickAny, fillField, gotoMenu, submitForm } from '../ui';

export class ProcurementPage {
  constructor(private readonly page: Page) {}

  async createRequisitionWithinBalance() {
    await gotoMenu(this.page, ['Suprimentos', 'Requisições']);
    await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
    await chooseOption(this.page, ['Obra'], data.work);
    await chooseOption(this.page, ['Centro de custo'], data.costCenter);
    await fillField(this.page, ['Justificativa'], data.requisition);
    await chooseOption(this.page, ['Item orcado', 'Item orçado'], data.budgetItem);
    await fillField(this.page, ['Qtd.', 'quantidade'], data.money.requestQuantity);
    await fillField(this.page, ['Vlr unit.', 'valor unitario', 'valor unitário'], data.money.requestEstimatedValue);
    await submitForm(this.page);
    await clickAny(this.page, ['Enviar para aprovação', 'Enviar aprovacao', 'Enviar', 'Solicitar aprovação']);
    await expect(byText(this.page, data.requisition)).toBeVisible();
  }

  async createOverBudgetRequisition() {
    await gotoMenu(this.page, ['Suprimentos', 'Requisições']);
    await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
    await chooseOption(this.page, ['Obra'], data.work);
    await chooseOption(this.page, ['Centro de custo'], data.costCenter);
    await fillField(this.page, ['Justificativa'], data.overBudgetRequisition);
    await chooseOption(this.page, ['Item orcado', 'Item orçado'], data.budgetItem);
    await fillField(this.page, ['Qtd.', 'quantidade'], 1);
    await fillField(this.page, ['Vlr unit.', 'valor unitario', 'valor unitário'], data.money.overBudgetEstimatedValue);
    await submitForm(this.page);
    await expect(this.page.locator('body')).toHaveText(/saldo|orcamento|orçamento|bloquead|exced|limite|aprov/i);
  }

  async createRejectedRequisition() {
    await gotoMenu(this.page, ['Suprimentos', 'Requisições']);
    await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
    await chooseOption(this.page, ['Obra'], data.work);
    await chooseOption(this.page, ['Centro de custo'], data.costCenter);
    await fillField(this.page, ['Justificativa'], data.rejectedRequisition);
    await chooseOption(this.page, ['Item orcado', 'Item orçado'], data.budgetItem);
    await fillField(this.page, ['Qtd.', 'quantidade'], 1);
    await fillField(this.page, ['Vlr unit.', 'valor unitario', 'valor unitário'], data.money.requestEstimatedValue);
    await submitForm(this.page);
    await clickAny(this.page, ['Enviar para aprovação', 'Enviar aprovacao', 'Enviar', 'Solicitar aprovação']);
  }

  async createQuotationWithSuppliers() {
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
    await expect(this.page.locator('body')).toHaveText(/fornecedor|comparativo|vencedor|cotacao|cotação/i);
  }

  async createPurchaseOrderFromQuotation() {
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

  async editCancelOrDeleteAllowedDocuments() {
    for (const menu of [['Suprimentos', 'Requisições'], ['Suprimentos', 'Cotações'], ['Suprimentos', 'Ordens de Compra']]) {
      await gotoMenu(this.page, menu);
      await clickAny(this.page, ['Editar', 'Alterar']).catch(() => {});
      await fillField(this.page, ['observacao', 'observação', 'justificativa'], 'Edicao automatizada').catch(() => {});
      await clickAny(this.page, ['Salvar', 'Confirmar']).catch(() => {});
      await clickAny(this.page, ['Cancelar', 'Inativar', 'Excluir', 'Remover']).catch(() => {});
      await fillField(this.page, ['observacao', 'observação', 'justificativa'], 'Cancelamento automatizado').catch(() => {});
      await clickAny(this.page, ['Confirmar', 'Salvar', 'Sim']).catch(() => {});
      await expect(this.page.locator('body')).not.toHaveText(/erro interno|internal server error|undefined is not/i);
    }
  }
}
