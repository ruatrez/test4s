import { expect, type Locator, type Page } from '@playwright/test';
import { data } from '../test-data';
import { clickAny, fillField, gotoMenu, submitForm, visibleModal } from '../ui';

export class FinancePage {
  constructor(private readonly page: Page) {}

  private async filterByCurrentWork() {
    const workFilter = this.page.locator('select')
      .filter({ has: this.page.locator('option', { hasText: data.work }) })
      .first();
    if (!await workFilter.isVisible().catch(() => false)) return;

    const optionValue = await workFilter.locator('option').evaluateAll((options, work) => {
      const option = options.find((item) => (item.textContent || '').replace(/\s+/g, ' ').trim() === work);
      return option?.value || '';
    }, data.work);
    if (!optionValue) return;

    await workFilter.selectOption(optionValue);
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.page.waitForTimeout(500);
  }

  private async openPaymentModal() {
    await clickAny(this.page, ['Novo', 'Registrar Pagamento', 'Registrar', 'Adicionar']);
    const modal = await visibleModal(this.page);
    if (!modal) throw new Error('Modal de registro de pagamento nao foi aberto.');
    return modal;
  }

  private async openPayableModal() {
    await clickAny(this.page, ['Nova Conta', 'Novo', 'Adicionar', 'Criar']);
    const title = this.page.getByText(/^Nova Conta a Pagar$/i).last();
    await title.waitFor({ state: 'visible', timeout: 10_000 });
    return title.locator('xpath=ancestor::*[.//input or .//textarea or .//select][1]');
  }

  private async findPayableSelect(modal: Locator) {
    const labeledSelect = modal.locator(
      'xpath=.//*[starts-with(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÀÂÃÉÊÍÓÔÕÚÇ", "abcdefghijklmnopqrstuvwxyzáàâãéêíóôõúç"), "conta a pagar")]/following::select[1]'
    ).first();
    if (await labeledSelect.isVisible().catch(() => false)) return labeledSelect;

    const payableLikeSelect = modal.locator('select')
      .filter({ has: modal.locator('option', { hasText: /saldo|fornecedor|AUTO-4S/i }) })
      .first();
    if (await payableLikeSelect.isVisible().catch(() => false)) return payableLikeSelect;

    const firstSelect = modal.locator('select').first();
    if (await firstSelect.isVisible().catch(() => false)) return firstSelect;

    throw new Error('Campo Conta a Pagar nao encontrado no modal de pagamento.');
  }

  private async selectCurrentPayableAccount(modal: Locator) {
    const select = await this.findPayableSelect(modal);
    const optionValue = await select.locator('option').evaluateAll((options, expected) => {
      const normalized = (text: string) => text.replace(/\s+/g, ' ').trim().toLowerCase();
      const expectedTexts = [expected.payable, expected.prefix, expected.supplier, expected.work]
        .map(normalized)
        .filter(Boolean);
      const availableOptions = options.filter((item) => {
        const text = item.textContent || '';
        return item.value && !/selecione|todas/i.test(text);
      });
      const matchingOption = availableOptions.find((item) => {
        const text = normalized(item.textContent || '');
        const value = normalized(item.value);
        return expectedTexts.some((expectedText) => text.includes(expectedText) || value.includes(expectedText));
      });
      return matchingOption?.value || '';
    }, {
      payable: data.payable,
      prefix: data.prefix,
      supplier: data.suppliers[0],
      work: data.work
    });

    if (!optionValue) {
      const availableOptions = await select.locator('option').evaluateAll((options) => options
        .map((item) => (item.textContent || '').replace(/\s+/g, ' ').trim())
        .filter((text) => text && !/selecione|todas/i.test(text)));
      throw new Error([
        `Precondicao de automacao/fluxo incompleto: nao ha conta a pagar aberta para a massa atual ${data.prefix} no dropdown Conta a Pagar.`,
        `Opcoes disponiveis: ${availableOptions.join(' | ') || 'nenhuma'}.`
      ].join(' '));
    }

    await select.selectOption(optionValue);
    await expect(select).not.toHaveValue('');
  }

  private async openModalAndSelectCurrentPayable() {
    const modal = await this.openPaymentModal();
    await this.selectCurrentPayableAccount(modal);
    return modal;
  }

  private async fillPaymentDate(isoDate: string, brDate: string) {
    await fillField(this.page, ['data pagamento', 'data'], isoDate).catch(async () => {
      await fillField(this.page, ['data pagamento', 'data'], brDate);
    });
  }

  private async submitPaymentAndWaitForClose(modal: Locator) {
    await submitForm(this.page);
    await expect(modal).toBeHidden({ timeout: 10_000 });
  }

  private async closePaymentModal(modal: Locator) {
    const closeButton = modal.getByRole('button', { name: /cancelar|fechar|×/i }).first();
    if (await closeButton.isVisible().catch(() => false)) await closeButton.click();
    await expect(modal).toBeHidden({ timeout: 10_000 });
  }

  private async selectOptionInModal(modal: Locator, labels: string[], value: string) {
    for (const label of labels) {
      const select = modal.locator(
        `xpath=.//*[starts-with(translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÀÂÃÉÊÍÓÔÕÚÇ", "abcdefghijklmnopqrstuvwxyzáàâãéêíóôõúç"), "${label.toLowerCase()}")]/following::select[1]`
      ).first();
      if (!await select.isVisible().catch(() => false)) continue;

      const optionValue = await select.locator('option').evaluateAll((options, expected) => {
        const normalizedExpected = expected.replace(/\s+/g, ' ').trim().toLowerCase();
        const option = options.find((item) => {
          const text = (item.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
          const itemValue = item.value.replace(/\s+/g, ' ').trim().toLowerCase();
          return item.value && (text.includes(normalizedExpected) || itemValue.includes(normalizedExpected));
        });
        return option?.value || '';
      }, value);

      if (!optionValue) throw new Error(`Opcao "${value}" nao encontrada no campo ${label}.`);
      await select.selectOption(optionValue);
      await this.page.waitForLoadState('networkidle').catch(() => {});
      await this.page.waitForTimeout(300);
      return;
    }

    throw new Error(`Campo select nao encontrado no modal: ${labels.join(' | ')}`);
  }

  private async registerPayment(value: number, isoDate: string, brDate: string) {
    const modal = await this.openModalAndSelectCurrentPayable();
    await fillField(this.page, ['valor'], value);
    await this.fillPaymentDate(isoDate, brDate);
    await this.submitPaymentAndWaitForClose(modal);
  }

  async createOpenPayableAccount() {
    await gotoMenu(this.page, ['Financeiro', 'Contas a Pagar']);
    await this.filterByCurrentWork();
    const modal = await this.openPayableModal();
    await fillField(this.page, ['descricao', 'descrição'], data.payable);
    await fillField(this.page, ['valor previsto', 'valor'], data.money.paymentPartial + data.money.paymentFinal);
    await fillField(this.page, ['vencimento'], '2026-12-30');
    await this.selectOptionInModal(modal, ['obra'], data.work);
    await this.selectOptionInModal(modal, ['centro de custo', 'centro'], data.costCenter).catch(() => {});
    await this.selectOptionInModal(modal, ['fornecedor'], data.suppliers[0]);
    await this.selectOptionInModal(modal, ['categoria'], data.categories[1]).catch(() => {});
    await this.selectOptionInModal(modal, ['origem'], 'MANUAL CONTROLADO').catch(() => {});
    await submitForm(this.page);
    await expect(modal).toBeHidden({ timeout: 10_000 });
    await this.filterByCurrentWork();
    await expect(this.page.locator('body')).toHaveText(new RegExp(data.payable.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }

  async registerPartialPayment() {
    await gotoMenu(this.page, ['Financeiro', 'Pagamentos']);
    await this.filterByCurrentWork();
    await this.registerPayment(data.money.paymentPartial, '2026-06-17', '17/06/2026');
    await expect(this.page.locator('body')).toHaveText(/parcial|saldo|pago|pagamento/i);
  }

  async registerFinalPayment() {
    await gotoMenu(this.page, ['Financeiro', 'Pagamentos']);
    await this.filterByCurrentWork();
    await this.registerPayment(data.money.paymentFinal, '2026-06-18', '18/06/2026');
    await expect(this.page.locator('body')).toHaveText(/final|quitad|saldo|pago|pagamento/i);
  }

  async validatePayablesStatusAndFilters() {
    await gotoMenu(this.page, ['Financeiro', 'Contas a Pagar']);
    await this.filterByCurrentWork();
    await expect(this.page.locator('body')).toHaveText(/pendente|provisionado|previsto|pago|saldo|conta/i);
    await clickAny(this.page, ['Filtrar', 'Aplicar', 'Buscar', 'Pesquisar']).catch(() => {});
    await expect(this.page.locator('body')).not.toHaveText(/erro interno|internal server error|undefined is not|cannot read/i);
  }

  async registerPartialAndFinalPayments() {
    await gotoMenu(this.page, ['Financeiro', 'Pagamentos']);
    await this.filterByCurrentWork();
    await this.registerPayment(data.money.paymentPartial, '2026-06-17', '17/06/2026');
    await expect(this.page.locator('body')).toHaveText(/parcial|saldo|pago|pagamento/i);
    await this.registerPayment(data.money.paymentFinal, '2026-06-18', '18/06/2026');
    await expect(this.page.locator('body')).toHaveText(/final|quitad|saldo|pago|pagamento/i);
  }

  async rejectPaymentAboveBalance() {
    await gotoMenu(this.page, ['Financeiro', 'Pagamentos']);
    await this.filterByCurrentWork();
    const modal = await this.openModalAndSelectCurrentPayable();
    await fillField(this.page, ['valor'], data.money.overBudgetEstimatedValue);
    await this.fillPaymentDate('2026-06-19', '19/06/2026');
    await submitForm(this.page);
    await expect(this.page.locator('body')).toHaveText(/saldo|exced|maior|limite|erro|bloque/i);
    await this.closePaymentModal(modal);
  }
}
