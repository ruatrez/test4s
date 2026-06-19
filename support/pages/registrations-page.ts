import { expect, type Page } from '@playwright/test';
import { data } from '../test-data';
import {
  assertPersistedAfterRefresh,
  byText,
  chooseOption,
  clickAny,
  fillField,
  submitForm,
  tryCancelInactivateOrDelete,
  tryCreateSimpleRecord,
  tryEditCurrentRecord
} from '../ui';

export class RegistrationsPage {
  constructor(private readonly page: Page) {}

  async createClientAndContract() {
    await tryCreateSimpleRecord(this.page, ['Configurações', 'Clientes e Contratos'], data.client, [
      { labels: ['Razão Social', 'Razao Social'], value: `${data.client} SA` },
      { labels: ['Nome Fantasia'], value: data.client },
      { labels: ['CNPJ/CPF', 'Documento'], value: data.runDocument },
      { labels: ['E-mail', 'email'], value: 'cliente.auto@example.test' },
      { labels: ['Contato Principal'], value: 'QA Automatizado' },
      { type: 'select', labels: ['Status'], value: 'Ativo' }
    ]);
    await tryEditCurrentRecord(this.page, [
      { labels: ['Contato Principal'], value: 'QA Automatizado Editado' }
    ]).catch(() => {});
    await assertPersistedAfterRefresh(this.page, data.client);
  }

  async createUnitWorkAndCostCenter() {
    await tryCreateSimpleRecord(this.page, ['Configurações', 'Obras e Centros'], data.work, [
      { labels: ['unidade'], value: data.unit },
      { labels: ['obra'], value: data.work },
      { labels: ['centro', 'centro de custo'], value: data.costCenter }
    ]);
    await assertPersistedAfterRefresh(this.page, data.work);
  }

  async createSuppliers() {
    for (const supplier of data.suppliers) {
      await tryCreateSimpleRecord(this.page, ['Configurações', 'Fornecedores'], supplier, [
        { labels: ['nome', 'fornecedor', 'razao', 'razão'], value: supplier },
        { labels: ['email'], value: `${supplier.toLowerCase().replace(/[^a-z0-9]/g, '.')}@example.test` }
      ]);
    }
  }

  async createBudgetCategories() {
    for (const category of data.categories) {
      await tryCreateSimpleRecord(this.page, ['Configurações', 'Categorias'], category, [
        { labels: ['nome', 'categoria', 'descricao', 'descrição'], value: category }
      ]);
    }
  }

  async createCollaboratorAllocationIfAvailable() {
    await tryCreateSimpleRecord(this.page, ['Configurações', 'Colaboradores'], data.collaborator, [
      { labels: ['nome', 'colaborador'], value: data.collaborator },
      { labels: ['cargo'], value: data.role },
      { labels: ['faixa'], value: data.costRange },
      { labels: ['custo', 'salario', 'salário'], value: data.money.laborMonthlyCost }
    ]);
    await expect(byText(this.page, data.collaborator)).toBeVisible();
  }

  async createOperationalUser(password: string) {
    await tryCreateSimpleRecord(this.page, ['Configurações', 'Usuários'], data.operationalUserName, [
      { labels: ['nome'], value: data.operationalUserName },
      { labels: ['email'], value: data.operationalUserEmail },
      { labels: ['senha'], value: password },
      { type: 'select', labels: ['perfil'], value: 'ENGENHARIA' },
      { labels: ['Confirmar senha'], value: password }
    ]);
  }

  async createInactiveValidationUser(password: string) {
    await tryCreateSimpleRecord(this.page, ['Configurações', 'Usuários'], data.inactiveUserName, [
      { labels: ['nome'], value: data.inactiveUserName },
      { labels: ['email'], value: data.inactiveUserEmail },
      { labels: ['senha'], value: password },
      { type: 'select', labels: ['perfil'], value: 'ENGENHARIA' },
      { labels: ['Confirmar senha'], value: password }
    ]);
  }

  async inactivateCurrentUser() {
    await chooseOption(this.page, ['Status'], 'Inativo').catch(async () => {
      await clickAny(this.page, ['Inativar']);
    });
    await submitForm(this.page).catch(() => {});
  }

  async searchOrOpenRecord(name: string) {
    await fillField(this.page, ['buscar', 'pesquisar', 'filtro'], name).catch(() => {});
    await clickAny(this.page, ['Buscar', 'Pesquisar', name]).catch(() => {});
    await expect(byText(this.page, name)).toBeVisible();
  }

  async cancelInactivateOrDeleteVisibleRecord() {
    await tryCancelInactivateOrDelete(this.page);
  }
}
