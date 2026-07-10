# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-master-data.spec.ts >> CT011 - colaborador, cargo/faixa e alocacao quando a UI permitir
- Location: tests/02-master-data.spec.ts:67:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/AUTO-4S-20260709163032 Cargo/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/AUTO-4S-20260709163032 Cargo/i).first()

```

```yaml
- complementary:
  - img "4S Engenharia"
  - text: Núcleo Financeiro
  - navigation:
    - button "◈ Dashboard"
    - button "⊞ Cadastros"
    - button "⊙ Configurações ▶"
    - button "◑ Orçamento ▶"
    - button "◐ Suprimentos ▶"
    - button "◧ Financeiro ▶"
    - button "◫ Workflow ▶"
  - text: H
  - paragraph: Hello
  - paragraph: ADMINISTRADOR
  - button "⏻"
- main:
  - button "⚠ 14 aprovações pendentes"
  - text: ADMINISTRADOR
  - heading "Mão de Obra" [level=1]
  - button "+ Novo Cargo"
  - button "Colaboradores (0)"
  - button "Alocacoes (0)"
  - button "Cargos (11)"
  - button "Faixas de Custo (9)"
  - table:
    - rowgroup:
      - row "Código Nome Vínculo Padrão Status Ações":
        - columnheader
        - columnheader "Código"
        - columnheader "Nome"
        - columnheader "Vínculo Padrão"
        - columnheader "Status"
        - columnheader "Ações"
    - rowgroup:
      - row "4S-609794-2026 AUTO-4S-20260709160023 Cargo CLT ATIVO Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-609794-2026"
        - cell "AUTO-4S-20260709160023 Cargo"
        - cell "CLT"
        - cell "ATIVO"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-923482-2026 AUTO-4S-20260708165317 Cargo CLT ATIVO Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-923482-2026"
        - cell "AUTO-4S-20260708165317 Cargo"
        - cell "CLT"
        - cell "ATIVO"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-897795-2026 AUTO-4S-20260708145148 Cargo CLT ATIVO Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-897795-2026"
        - cell "AUTO-4S-20260708145148 Cargo"
        - cell "CLT"
        - cell "ATIVO"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-654993-2026 AUTO-4S-20260707162105 Cargo CLT ATIVO Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-654993-2026"
        - cell "AUTO-4S-20260707162105 Cargo"
        - cell "CLT"
        - cell "ATIVO"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-801427-2026 AUTO-4S-20260707143527 Cargo CLT ATIVO Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-801427-2026"
        - cell "AUTO-4S-20260707143527 Cargo"
        - cell "CLT"
        - cell "ATIVO"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-328551-2026 AUTO-4S-20260706165333 Cargo CLT ATIVO Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-328551-2026"
        - cell "AUTO-4S-20260706165333 Cargo"
        - cell "CLT"
        - cell "ATIVO"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-838554-2026 AUTO-4S-20260706161854 Cargo CLT ATIVO Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-838554-2026"
        - cell "AUTO-4S-20260706161854 Cargo"
        - cell "CLT"
        - cell "ATIVO"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-719662-2026 AUTO-4S-20260706154931 Cargo CLT ATIVO Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-719662-2026"
        - cell "AUTO-4S-20260706154931 Cargo"
        - cell "CLT"
        - cell "ATIVO"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-536171-2026 AUTO-4S-20260706154501 Cargo CLT ATIVO Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-536171-2026"
        - cell "AUTO-4S-20260706154501 Cargo"
        - cell "CLT"
        - cell "ATIVO"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-519986-2026 Teste CLT ATIVO Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-519986-2026"
        - cell "Teste"
        - cell "CLT"
        - cell "ATIVO"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
  - text: 1-10 de 11 Itens por pagina
  - combobox:
    - option "10 por pagina" [selected]
    - option "20 por pagina"
    - option "50 por pagina"
    - option "100 por pagina"
  - button "Anterior" [disabled]
  - text: Pagina 1 de 2
  - button "Proxima"
```

# Test source

```ts
  12  |   tryCreateSimpleRecord,
  13  |   tryEditCurrentRecord
  14  | } from '../ui';
  15  | 
  16  | const supplierAssertionTimeout = 20_000;
  17  | 
  18  | export class RegistrationsPage {
  19  |   constructor(private readonly page: Page) {}
  20  | 
  21  |   async createClientAndContract() {
  22  |     await tryCreateSimpleRecord(this.page, ['Configurações', 'Clientes e Contratos'], data.client, [
  23  |       { labels: ['Razão Social', 'Razao Social'], value: `${data.client} SA` },
  24  |       { labels: ['Nome Fantasia'], value: data.client },
  25  |       { labels: ['CNPJ/CPF', 'Documento'], value: data.runDocument },
  26  |       { labels: ['E-mail', 'email'], value: 'cliente.auto@example.test' },
  27  |       { labels: ['Contato Principal'], value: 'QA Automatizado' },
  28  |       { type: 'select', labels: ['Status'], value: 'Ativo' }
  29  |     ], { verifyWithSearchAndPagination: true });
  30  |     await tryEditCurrentRecord(this.page, [
  31  |       { labels: ['Contato Principal'], value: 'QA Automatizado Editado' }
  32  |     ]).catch(() => {});
  33  |     await assertPersistedAfterRefresh(this.page, data.client);
  34  |   }
  35  | 
  36  |   async createUnitWorkAndCostCenter() {
  37  |     await tryCreateSimpleRecord(
  38  |       this.page,
  39  |       ['Configurações', 'Obras e Centros'],
  40  |       data.unit,
  41  |       [
  42  |         { labels: ['unidade', 'nome'], value: data.unit }
  43  |       ],
  44  |       { createButtonNames: ['+ Unidade', 'Unidade'], listButtonNames: ['Unidades'] }
  45  |     );
  46  | 
  47  |     await tryCreateSimpleRecord(
  48  |       this.page,
  49  |       ['Configurações', 'Obras e Centros'],
  50  |       data.work,
  51  |       [
  52  |         { type: 'select', labels: ['contrato'], value: data.contract, fallbackToFirstOption: true },
  53  |         { labels: ['nome', 'obra'], value: data.work },
  54  |         { type: 'select', labels: ['unidade'], value: data.unit },
  55  |         { labels: ['cidade'], value: 'Sao Paulo', optional: true },
  56  |         { labels: ['uf', 'estado'], value: 'SP', optional: true },
  57  |         { labels: ['inicio', 'início'], value: '2026-01-01', optional: true }
  58  |       ],
  59  |       { createButtonNames: ['+ Obra', 'Obra'], listButtonNames: ['Obras'] }
  60  |     );
  61  | 
  62  |     await tryCreateSimpleRecord(
  63  |       this.page,
  64  |       ['Configurações', 'Obras e Centros'],
  65  |       data.costCenter,
  66  |       [
  67  |         { labels: ['nome', 'centro', 'centro de custo'], value: data.costCenter },
  68  |         { type: 'select', labels: ['obra'], value: data.work, optional: true },
  69  |         { type: 'select', labels: ['unidade'], value: data.unit, optional: true }
  70  |       ],
  71  |       { createButtonNames: ['+ Centro de Custo', 'Centro de Custo', '+ Centro', 'Centro'], listButtonNames: ['Centros'] }
  72  |     );
  73  | 
  74  |     await assertPersistedAfterRefresh(this.page, data.work);
  75  |   }
  76  | 
  77  |   async createSuppliers() {
  78  |     for (const [index, supplier] of data.suppliers.entries()) {
  79  |       await tryCreateSimpleRecord(
  80  |         this.page,
  81  |         ['Configurações', 'Fornecedores'],
  82  |         supplier,
  83  |         [
  84  |           { labels: ['Razão Social', 'Razao Social'], value: supplier },
  85  |           { labels: ['Nome Fantasia'], value: supplier },
  86  |           { labels: ['CNPJ/CPF', 'Documento'], value: `${data.runDocument}${index + 1}` },
  87  |           { labels: ['email'], value: `${supplier.toLowerCase().replace(/[^a-z0-9]/g, '.')}@example.test` },
  88  |           { labels: ['Contato Principal'], value: 'QA Automatizado', optional: true },
  89  |           { type: 'select', labels: ['Status'], value: 'ATIVO', optional: true }
  90  |         ],
  91  |         { assertionTimeout: supplierAssertionTimeout }
  92  |       );
  93  |     }
  94  |   }
  95  | 
  96  |   async createBudgetCategories() {
  97  |     for (const category of data.categories) {
  98  |       await tryCreateSimpleRecord(this.page, ['Configurações', 'Categorias'], category, [
  99  |         { labels: ['nome', 'categoria', 'descricao', 'descrição'], value: category }
  100 |       ], { verifyWithSearchAndPagination: true });
  101 |     }
  102 |   }
  103 | 
  104 |   async createLaborRoleAndCostRange() {
  105 |     await gotoMenu(this.page, ['Configurações', 'Colaboradores']);
  106 |     await clickAny(this.page, ['Cargos']);
  107 |     await clickAny(this.page, ['+ Novo Cargo', 'Novo Cargo']);
  108 |     await fillField(this.page, ['nome', 'cargo'], data.role);
  109 |     await fillField(this.page, ['descricao', 'descrição'], `${data.role} QA`).catch(() => {});
  110 |     await chooseOption(this.page, ['vinculo padrao', 'vínculo padrão', 'vinculo', 'vínculo'], 'CLT').catch(() => {});
  111 |     await submitForm(this.page);
> 112 |     await expect(byText(this.page, data.role)).toBeVisible();
      |                                                ^ Error: expect(locator).toBeVisible() failed
  113 | 
  114 |     await clickAny(this.page, ['Faixas de Custo']);
  115 |     await clickAny(this.page, ['+ Nova Faixa', 'Nova Faixa']);
  116 |     await chooseOption(this.page, ['cargo'], data.role);
  117 |     await fillField(this.page, ['descricao', 'descrição', 'faixa'], data.costRange);
  118 |     await fillField(this.page, ['salario base ref', 'salário base ref', 'salario', 'salário'], data.money.laborMonthlyCost).catch(() => {});
  119 |     await fillField(this.page, ['encargos ref', 'encargos'], 0).catch(() => {});
  120 |     await fillField(this.page, ['beneficios ref', 'benefícios ref', 'beneficios', 'benefícios'], data.money.laborBenefits).catch(() => {});
  121 |     await submitForm(this.page);
  122 |     await expect(byText(this.page, data.costRange)).toBeVisible();
  123 |   }
  124 | 
  125 |   async createCollaboratorAllocationIfAvailable() {
  126 |     await this.createLaborRoleAndCostRange();
  127 | 
  128 |     await tryCreateSimpleRecord(this.page, ['Configurações', 'Colaboradores'], data.collaborator, [
  129 |       { labels: ['nome completo', 'nome', 'colaborador'], value: data.collaborator },
  130 |       { labels: ['cpf', 'documento'], value: data.runDocument },
  131 |       { type: 'select', labels: ['vinculo', 'vínculo'], value: 'CLT', optional: true },
  132 |       { type: 'select', labels: ['cargo'], value: data.role, fallbackToFirstOption: true },
  133 |       { labels: ['data admissao', 'data admissão', 'admissao', 'admissão'], value: '2026-01-01' },
  134 |       { labels: ['salario base', 'salário base', 'custo', 'salario', 'salário'], value: data.money.laborMonthlyCost },
  135 |       { labels: ['encargos'], value: 0, optional: true },
  136 |       { labels: ['beneficios mensais', 'benefícios mensais', 'beneficios', 'benefícios'], value: data.money.laborBenefits, optional: true }
  137 |     ]);
  138 |     await expect(byText(this.page, data.collaborator)).toBeVisible();
  139 |   }
  140 | 
  141 |   async createOperationalUser(password: string) {
  142 |     await tryCreateSimpleRecord(this.page, ['Configurações', 'Usuários'], data.operationalUserName, [
  143 |       { labels: ['nome'], value: data.operationalUserName },
  144 |       { labels: ['email'], value: data.operationalUserEmail },
  145 |       { labels: ['senha'], value: password },
  146 |       { type: 'select', labels: ['perfil'], value: 'ENGENHARIA' },
  147 |       { labels: ['Confirmar senha'], value: password }
  148 |     ]);
  149 |   }
  150 | 
  151 |   async createInactiveValidationUser(password: string) {
  152 |     await tryCreateSimpleRecord(this.page, ['Configurações', 'Usuários'], data.inactiveUserName, [
  153 |       { labels: ['nome'], value: data.inactiveUserName },
  154 |       { labels: ['email'], value: data.inactiveUserEmail },
  155 |       { labels: ['senha'], value: password },
  156 |       { type: 'select', labels: ['perfil'], value: 'ENGENHARIA' },
  157 |       { labels: ['Confirmar senha'], value: password }
  158 |     ]);
  159 |   }
  160 | 
  161 |   async inactivateCurrentUser() {
  162 |     await chooseOption(this.page, ['Status'], 'Inativo').catch(async () => {
  163 |       await clickAny(this.page, ['Inativar']);
  164 |     });
  165 |     await submitForm(this.page).catch(() => {});
  166 |   }
  167 | 
  168 |   async searchOrOpenRecord(name: string) {
  169 |     await fillField(this.page, ['buscar', 'pesquisar', 'filtro'], name).catch(() => {});
  170 |     await clickAny(this.page, ['Buscar', 'Pesquisar', name]).catch(() => {});
  171 |     await expect(byText(this.page, name)).toBeVisible();
  172 |   }
  173 | 
  174 |   async cancelInactivateOrDeleteVisibleRecord() {
  175 |     await tryCancelInactivateOrDelete(this.page);
  176 |   }
  177 | }
  178 | 
```