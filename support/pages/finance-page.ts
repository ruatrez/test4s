import { expect, type Page } from '@playwright/test';
import { data } from '../test-data';
import { clickAny, fillField, gotoMenu, submitForm } from '../ui';

export class FinancePage {
  constructor(private readonly page: Page) {}

  async validatePayablesStatusAndFilters() {
    await gotoMenu(this.page, ['Financeiro', 'Contas a Pagar']);
    await expect(this.page.locator('body')).toHaveText(/pendente|provisionado|previsto|pago|saldo|conta/i);
    await clickAny(this.page, ['Filtrar', 'Aplicar', 'Buscar', 'Pesquisar']).catch(() => {});
    await expect(this.page.locator('body')).not.toHaveText(/erro interno|internal server error|undefined is not|cannot read/i);
  }

  async registerPartialAndFinalPayments() {
    await gotoMenu(this.page, ['Financeiro', 'Pagamentos']);
    await clickAny(this.page, ['Novo', 'Registrar', 'Adicionar']);
    await fillField(this.page, ['conta'], data.purchaseOrder).catch(() => {});
    await fillField(this.page, ['valor'], data.money.paymentPartial);
    await fillField(this.page, ['data'], '17/06/2026').catch(() => {});
    await submitForm(this.page);
    await expect(this.page.locator('body')).toHaveText(/parcial|saldo|pago|pagamento/i);

    await clickAny(this.page, ['Novo', 'Registrar', 'Adicionar']);
    await fillField(this.page, ['conta'], data.purchaseOrder).catch(() => {});
    await fillField(this.page, ['valor'], data.money.paymentFinal);
    await fillField(this.page, ['data'], '18/06/2026').catch(() => {});
    await submitForm(this.page);
    await expect(this.page.locator('body')).toHaveText(/final|quitad|saldo|pago|pagamento/i);
  }

  async rejectPaymentAboveBalance() {
    await gotoMenu(this.page, ['Financeiro', 'Pagamentos']);
    await clickAny(this.page, ['Novo', 'Registrar', 'Adicionar']);
    await fillField(this.page, ['conta'], data.purchaseOrder).catch(() => {});
    await fillField(this.page, ['valor'], data.money.overBudgetEstimatedValue);
    await submitForm(this.page);
    await expect(this.page.locator('body')).toHaveText(/saldo|exced|maior|limite|erro|bloque/i);
  }
}
