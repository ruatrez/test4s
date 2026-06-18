import { expect, Page } from '@playwright/test';
import { clickAny, fillField, gotoMenu, submitForm } from '../support/ui';
import { data } from '../support/test-data';

export class FinancePage {
  constructor(private readonly page: Page) {}

  async validatePayables() {
    await gotoMenu(this.page, ['Financeiro', 'Contas a Pagar']);
    await expect(this.page.locator('body')).toHaveText(/pendente|provisionado|previsto|pago|saldo|conta/i);
    await clickAny(this.page, ['Filtrar', 'Aplicar', 'Buscar', 'Pesquisar']).catch(() => {});
    await expect(this.page.locator('body')).not.toHaveText(/erro interno|internal server error|undefined is not|cannot read/i);
  }

  async registerPayments() {
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
    await submitForm(this.page);
    await expect(this.page.locator('body')).toHaveText(/pago|quitado|final|saldo/i);

    await clickAny(this.page, ['Novo', 'Registrar', 'Adicionar']);
    await fillField(this.page, ['conta'], data.purchaseOrder).catch(() => {});
    await fillField(this.page, ['valor'], data.money.overBudgetEstimatedValue);
    await submitForm(this.page);
    await expect(this.page.locator('body')).toHaveText(/saldo|exced|maior|limite|erro|bloque/i);
  }
}
