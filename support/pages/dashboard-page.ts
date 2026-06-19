import { expect, type Page } from '@playwright/test';
import { gotoMenu } from '../ui';

export class DashboardPage {
  constructor(private readonly page: Page) {}

  async validateFinancialIndicators() {
    await gotoMenu(this.page, ['Dashboard']);
    await expect(this.page.locator('body')).toHaveText(/orcado|orçado|comprometido|pago|saldo|custo/i);
    await expect(this.page.locator('body')).not.toHaveText(/erro interno|internal server error|undefined is not|cannot read/i);
  }
}
