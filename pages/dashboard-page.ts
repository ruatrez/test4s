import { expect, Page } from '@playwright/test';
import { clickAny, gotoMenu } from '../support/ui';

export class DashboardPage {
  constructor(private readonly page: Page) {}

  async validateFinancialIndicators() {
    await gotoMenu(this.page, ['Dashboard']);
    await expect(this.page.locator('body')).toHaveText(/orcado|orçado|comprometido|pago|saldo|custo/i);
    await clickAny(this.page, ['Filtrar', 'Aplicar', 'Buscar', 'Pesquisar']).catch(() => {});
    await expect(this.page.locator('body')).not.toHaveText(/erro interno|internal server error|undefined is not|cannot read/i);
  }
}
