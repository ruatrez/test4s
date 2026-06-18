import { Page } from '@playwright/test';
import { assertPersistedAfterRefresh, chooseOption, clickAny, fillField, submitForm, tryCreateSimpleRecord } from '../support/ui';
import { data } from '../support/test-data';

export class ConfigurationPage {
  constructor(private readonly page: Page) {}

  async createClientAndContract() {
    await tryCreateSimpleRecord(this.page, ['Configurações', 'Clientes e Contratos'], data.client, [
      { labels: ['Razão Social'], value: `${data.client} SA` },
      { labels: ['Nome Fantasia'], value: data.client },
      { labels: ['CNPJ/CPF'], value: String(Date.now()).slice(-11) },
      { labels: ['E-mail', 'email'], value: 'cliente.auto@example.test' },
      { labels: ['Contato Principal'], value: 'QA Automatizado' },
      { type: 'select', labels: ['Status'], value: 'Ativo' }
    ]);
    await assertPersistedAfterRefresh(this.page, data.client);
  }

  async createWorkStructure() {
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

  async createCategories() {
    for (const category of data.categories) {
      await tryCreateSimpleRecord(this.page, ['Configurações', 'Categorias'], category, [
        { labels: ['nome', 'categoria', 'descricao', 'descrição'], value: category }
      ]);
    }
  }

  async createCollaboratorAllocation() {
    await tryCreateSimpleRecord(this.page, ['Configurações', 'Colaboradores'], data.collaborator, [
      { labels: ['nome', 'colaborador'], value: data.collaborator },
      { labels: ['cargo', 'funcao', 'função'], value: data.role },
      { labels: ['faixa'], value: data.costRange },
      { labels: ['custo', 'salario', 'salário', 'valor'], value: data.money.laborMonthlyCost },
      { labels: ['beneficio', 'benefício', 'encargo'], value: data.money.laborBenefits }
    ]);
    await assertPersistedAfterRefresh(this.page, data.collaborator);
  }

  async createOperationalUser(email: string, password: string, name = data.operationalUserName) {
    await tryCreateSimpleRecord(this.page, ['Configurações', 'Usuários'], name, [
      { labels: ['nome'], value: name },
      { labels: ['email'], value: email },
      { labels: ['senha'], value: password },
      { type: 'select', labels: ['perfil'], value: 'ENGENHARIA' },
      { labels: ['Confirmar senha'], value: password }
    ]);
  }

  async tryInactivateUser(name: string) {
    await clickAny(this.page, [name]).catch(() => {});
    await clickAny(this.page, ['Editar', 'Alterar']).catch(() => {});
    await chooseOption(this.page, ['Status'], 'Inativo').catch(async () => {
      await fillField(this.page, ['status'], 'Inativo');
    });
    await submitForm(this.page);
  }
}
