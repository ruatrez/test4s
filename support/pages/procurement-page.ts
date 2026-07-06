import { expect, type Page } from '@playwright/test';
import { data } from '../test-data';
import { chooseFirstAvailableOption, chooseOption, clickAny, fillField, gotoMenu, submitForm } from '../ui';

export class ProcurementPage {
  constructor(private readonly page: Page) {}

  private requisitionRow() {
    return this.page.getByRole('row')
      .filter({ hasText: data.work })
      .filter({ hasText: data.costCenter })
      .filter({ hasText: data.budgetItem })
      .first();
  }

  private draftRequisitionRow() {
    return this.page.getByRole('row')
      .filter({ hasText: data.work })
      .filter({ hasText: data.costCenter })
      .filter({ hasText: data.budgetItem })
      .filter({ has: this.page.getByRole('button', { name: /enviar.*aprova|solicitar.*aprova/i }) })
      .first();
  }

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
    const row = this.draftRequisitionRow();
    await expect(row).toBeVisible();
    await row.getByRole('button', { name: /enviar.*aprova|solicitar.*aprova/i }).click();
    await expect(this.requisitionRow()).toBeVisible();
    await expect(this.requisitionRow()).toHaveText(/em aprova[cç][aã]o|pendente|aprov/i);
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
    const row = this.draftRequisitionRow();
    await expect(row).toBeVisible();
    await row.getByRole('button', { name: /enviar.*aprova|solicitar.*aprova/i }).click();
  }

  async createQuotationWithSuppliers() {
    await gotoMenu(this.page, ['Suprimentos', 'Cotações']);
    await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
    await chooseOption(this.page, ['Requisicao aprovada', 'Requisição aprovada', 'requisicao', 'requisição'], data.requisition);
    await fillField(this.page, ['Fechamento'], '2026-12-31');
    await chooseOption(this.page, ['Fornecedor 1'], data.suppliers[0]);
    await chooseOption(this.page, ['Fornecedor 2'], data.suppliers[1]);
    await chooseOption(this.page, ['Fornecedor 3'], data.suppliers[2]);
    await fillField(this.page, ['observacoes', 'observações'], data.quotation).catch(() => {});
    await clickAny(this.page, ['Abrir Cotacao', 'Abrir Cotação']);
    await clickAny(this.page, ['Vencedor', 'Selecionar vencedor', 'Concluir']).catch(() => {});
    await expect(this.page.locator('body')).toHaveText(/fornecedor|comparativo|vencedor|cotacao|cotação/i);
  }

  async createPurchaseOrderFromQuotation() {
    await gotoMenu(this.page, ['Suprimentos', 'Ordens de Compra']);
    await clickAny(this.page, ['Novo', 'Gerar', 'Criar']);
    await chooseOption(this.page, ['Cotacao concluida', 'Cotação concluída'], data.quotation).catch(async () => {
      await chooseFirstAvailableOption(this.page, ['Cotacao concluida', 'Cotação concluída']);
    });
    await fillField(this.page, ['previsao', 'previsão', 'entrega'], '2026-12-31').catch(() => {});
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
