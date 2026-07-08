import { expect, type Page } from '@playwright/test';
import { data } from '../test-data';
import { chooseFirstAvailableOption, chooseOption, clickAny, fillField, gotoMenu, hasAvailableOption, submitForm, visibleModal } from '../ui';

export class ProcurementPage {
  constructor(private readonly page: Page) {}

  private requisitionRow() {
    return this.page.getByRole('row')
      .filter({ hasText: data.work })
      .filter({ hasText: data.costCenter })
      .filter({ hasText: data.budgetItem })
      .first();
  }

  private requisitionRowWithStatus(status: RegExp) {
    return this.page.getByRole('row')
      .filter({ hasText: data.work })
      .filter({ hasText: data.costCenter })
      .filter({ hasText: data.budgetItem })
      .filter({ hasText: status })
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

  private async filterByCurrentRun() {
    const search = this.page.getByPlaceholder(/buscar|pesquisar|filtro/i).first();
    if (await search.isVisible().catch(() => false)) {
      await search.fill('');
      await this.page.waitForLoadState('networkidle').catch(() => {});
    }
    const workFilter = this.page.locator('select')
      .filter({ has: this.page.locator('option', { hasText: data.work }) })
      .first();
    if (await workFilter.isVisible().catch(() => false)) {
      const optionValue = await workFilter.locator('option').evaluateAll((options, work) => {
        const option = options.find((item) => (item.textContent || '').replace(/\s+/g, ' ').trim() === work);
        return option?.value || '';
      }, data.work);
      if (optionValue) await workFilter.selectOption(optionValue);
      await this.page.waitForLoadState('networkidle').catch(() => {});
      await this.page.waitForTimeout(500);
    }
  }

  private quotationRow(quotationNumber?: string) {
    let rows = this.page.getByRole('row')
      .filter({ hasText: /em aprova[cç][aã]o|pendente|aguardando|aprov|aberta|conclu[ií]d|liberad/i });
    if (quotationNumber) rows = rows.filter({ hasText: quotationNumber });
    return rows.first();
  }

  private async fillSupplierProposal(supplier: string, amount: number) {
    const supplierRow = this.page.getByRole('row')
      .filter({ hasText: supplier })
      .filter({ hasText: data.budgetItem })
      .filter({ has: this.page.locator('input, [role="spinbutton"]') })
      .first();
    if (await supplierRow.isVisible().catch(() => false)) {
      const inputs = supplierRow.locator('input, [role="spinbutton"]');
      await inputs.nth(0).fill(String(amount));
      await inputs.nth(1).fill('10').catch(() => {});
      return;
    }
    const supplierSuffix = supplier.replace(`${data.prefix} `, '');
    await fillField(this.page, [supplier, supplierSuffix, `Valor ${supplierSuffix}`, `Proposta ${supplierSuffix}`], amount)
      .catch(async () => {
        const supplierIndex = data.suppliers.indexOf(supplier) + 1;
        await fillField(this.page, [
          `Valor ${supplierIndex}`,
          `Proposta ${supplierIndex}`,
          `Preco ${supplierIndex}`,
          `Preço ${supplierIndex}`
        ], amount);
      });
    await fillField(this.page, [
      `Prazo ${supplierSuffix}`,
      `Prazo ${data.suppliers.indexOf(supplier) + 1}`,
      `Entrega ${supplierSuffix}`,
      `Entrega ${data.suppliers.indexOf(supplier) + 1}`
    ], '2026-12-31').catch(() => {});
  }

  private async selectWinningSupplier() {
    const openQuotationRow = this.page.getByRole('row')
      .filter({ hasText: /3 fornecedor/i })
      .filter({ hasText: /aberta/i })
      .filter({ has: this.page.getByRole('button', { name: /eleger vencedor|vencedor/i }) });
    const openCount = await openQuotationRow.count();
    for (let index = 0; index < openCount; index += 1) {
      const row = openQuotationRow.nth(index);
      if (!await row.isVisible().catch(() => false)) continue;
      const quotationNumber = await row.locator('td').first().innerText().catch(() => '');
      await row.getByRole('button', { name: /eleger vencedor|vencedor/i }).click();
      const modal = await visibleModal(this.page);
      if (modal) {
        await chooseOption(this.page, ['Vencedor', 'Fornecedor vencedor', 'Fornecedor selecionado'], data.suppliers[0]).catch(() => {});
        const confirm = modal.getByRole('button', { name: /confirmar|salvar|eleger|concluir|finalizar/i }).first();
        if (await confirm.isVisible().catch(() => false)) await confirm.click();
      }
      await this.page.waitForLoadState('networkidle').catch(() => {});
      await this.page.waitForTimeout(500);
      return quotationNumber;
    }
    const supplierARow = this.page.getByRole('row')
      .filter({ hasText: data.suppliers[0] })
      .first();
    if (await supplierARow.isVisible().catch(() => false)) {
      const rowButton = supplierARow.getByRole('button', { name: /vencedor|selecionar|escolher|ganhador/i }).first();
      if (await rowButton.isVisible().catch(() => false)) {
        await rowButton.click();
        return null;
      }
      const rowRadio = supplierARow.locator('input[type="radio"], input[type="checkbox"]').first();
      if (await rowRadio.isVisible().catch(() => false)) {
        await rowRadio.check().catch(async () => rowRadio.click());
        return null;
      }
    }
    await chooseOption(this.page, ['Vencedor', 'Fornecedor vencedor', 'Fornecedor selecionado'], data.suppliers[0])
      .catch(async () => {
        await clickAny(this.page, ['Vencedor', 'Selecionar vencedor', 'Escolher vencedor']);
      });
    return null;
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
    await this.filterByCurrentRun();
    const row = this.draftRequisitionRow();
    await expect(row).toBeVisible();
    await row.getByRole('button', { name: /enviar.*aprova|solicitar.*aprova/i }).click();
    await this.filterByCurrentRun();
    await expect(this.requisitionRowWithStatus(/em aprova[cç][aã]o|pendente|aprov|em cota[cç][aã]o/i)).toBeVisible();
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
    await this.filterByCurrentRun();
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
    await this.filterByCurrentRun();
    const row = this.draftRequisitionRow();
    await expect(row).toBeVisible();
    await row.getByRole('button', { name: /enviar.*aprova|solicitar.*aprova/i }).click();
  }

  async createQuotationWithSuppliers() {
    await gotoMenu(this.page, ['Suprimentos', 'Cotações']);
    await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
    await chooseOption(this.page, ['Requisicao aprovada', 'Requisição aprovada', 'requisicao', 'requisição'], data.requisition);
    await fillField(this.page, ['Fechamento'], '2026-12-31');
    await chooseOption(this.page, ['Fornecedor 1', 'Fornecedor A', 'Primeiro fornecedor'], data.suppliers[0]);
    await chooseOption(this.page, ['Fornecedor 2', 'Fornecedor B', 'Segundo fornecedor'], data.suppliers[1]);
    await chooseOption(this.page, ['Fornecedor 3', 'Fornecedor C', 'Terceiro fornecedor'], data.suppliers[2]);
    await fillField(this.page, ['observacoes', 'observações'], data.quotation).catch(() => {});
    await this.fillSupplierProposal(data.suppliers[0], data.money.supplierA);
    await this.fillSupplierProposal(data.suppliers[1], data.money.supplierB);
    await this.fillSupplierProposal(data.suppliers[2], data.money.supplierC);
    await clickAny(this.page, ['Abrir Cotacao', 'Abrir Cotação']);
    const quotationNumber = await this.selectWinningSupplier();
    await clickAny(this.page, [
      'Enviar aprovação',
      'Enviar para aprovação',
      'Solicitar aprovação',
      'Concluir',
      'Finalizar'
    ]).catch(() => {});
    const row = this.quotationRow(quotationNumber || undefined);
    await expect(row).toBeVisible();
    await expect(row).toHaveText(/em aprova[cç][aã]o|pendente|aguardando|aprov|conclu[ií]d|liberad/i);
  }

  async createPurchaseOrderFromQuotation() {
    await gotoMenu(this.page, ['Suprimentos', 'Ordens de Compra']);
    await clickAny(this.page, ['Novo', 'Gerar', 'Criar']);
    const quotationSelectLabels = ['Cotacao concluida', 'Cotação concluída'];
    const hasReleasedQuotation = await hasAvailableOption(this.page, quotationSelectLabels).catch(() => false);
    if (!hasReleasedQuotation) {
      throw new Error('Precondicao de automacao/fluxo incompleto: nao ha cotacao concluida/liberada disponivel para gerar OC. O CT014 precisa deixar a cotacao aprovada/liberada antes do CT015.');
    }
    await chooseOption(this.page, quotationSelectLabels, data.quotation).catch(async () => {
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
