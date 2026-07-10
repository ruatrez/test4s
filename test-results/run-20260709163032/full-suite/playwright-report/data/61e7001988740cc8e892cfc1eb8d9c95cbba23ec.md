# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03-budget-labor.spec.ts >> CT008 - item orcado com previsto, saldo, comprometido e pago
- Location: tests/03-budget-labor.spec.ts:26:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/AUTO-4S-20260709163032 Item orcado material/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/AUTO-4S-20260709163032 Item orcado material/i).first()

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
    - button "Itens Orçados"
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
  - heading "Orçamento Base" [level=1]
  - paragraph: Itens orçados por obra e categoria
  - button "+ Item Orçado"
  - combobox:
    - option "Todas as obras" [selected]
    - option "AUTO-4S-20260709163032 Obra"
    - option "AUTO-4S-20260709160023 Obra"
    - option "AUTO-4S-20260708165317 Obra"
    - option "AUTO-4S-20260708145148 Obra"
    - option "AUTO-4S-20260707162105 Obra"
    - option "AUTO-4S-20260707153000 Obra"
    - option "AUTO-4S-20260707143527 Obra"
    - option "AUTO-4S-20260707150237 Obra"
    - option "AUTO-4S-20260706165333 Obra"
    - option "AUTO-4S-20260706161854 Obra"
    - option "AUTO-4S-20260706154931 Obra"
    - option "AUTO-4S-20260706132953 Obra"
    - option "AUTO-4S-20260706123151 Obra"
    - option "AUTO-4S-20260706122306 Obra"
    - option "AUTO-4S-20260706114042 Obra"
    - option "VIA MOBILIDADE - TROCA DE PISOS"
    - option "4S-OBR-053-CAP-VMO"
  - combobox:
    - option "Todas as categorias" [selected]
    - option "AUTO-4S-20260709163032 Mao de obra"
    - option "AUTO-4S-20260709163032 Subempreiteiros"
    - option "AUTO-4S-20260709163032 Materiais"
    - option "AUTO-4S-20260709163032 Custos indiretos"
    - option "AUTO-4S-20260709163032 Equipamentos"
    - option "AUTO-4S-20260709160023 Custos indiretos"
    - option "AUTO-4S-20260709160023 Mao de obra"
    - option "AUTO-4S-20260709160023 Equipamentos"
    - option "AUTO-4S-20260709160023 Materiais"
    - option "AUTO-4S-20260709160023 Subempreiteiros"
    - option "AUTO-4S-20260708165317 Mao de obra"
    - option "AUTO-4S-20260708165317 Equipamentos"
    - option "AUTO-4S-20260708165317 Materiais"
    - option "AUTO-4S-20260708165317 Subempreiteiros"
    - option "AUTO-4S-20260708165317 Custos indiretos"
    - option "AUTO-4S-20260708145148 Mao de obra"
    - option "AUTO-4S-20260708145148 Equipamentos"
    - option "AUTO-4S-20260708145148 Custos indiretos"
    - option "AUTO-4S-20260708145148 Materiais"
    - option "AUTO-4S-20260708145148 Subempreiteiros"
    - option "AUTO-4S-20260707162105 Mao de obra"
    - option "AUTO-4S-20260707162105 Subempreiteiros"
    - option "AUTO-4S-20260707162105 Custos indiretos"
    - option "AUTO-4S-20260707162105 Equipamentos"
    - option "AUTO-4S-20260707162105 Materiais"
    - option "AUTO-4S-20260707153000 Custos indiretos"
    - option "AUTO-4S-20260707153000 Equipamentos"
    - option "AUTO-4S-20260707153000 Subempreiteiros"
    - option "AUTO-4S-20260707153000 Materiais"
    - option "AUTO-4S-20260707153000 Mao de obra"
    - option "AUTO-4S-20260707143527 Equipamentos"
    - option "AUTO-4S-20260707143527 Mao de obra"
    - option "AUTO-4S-20260707143527 Materiais"
    - option "AUTO-4S-20260707143527 Custos indiretos"
    - option "AUTO-4S-20260707143527 Subempreiteiros"
    - option "AUTO-4S-20260706194727 Subempreiteiros"
    - option "AUTO-4S-20260706194727 Mao de obra"
    - option "AUTO-4S-20260706194727 Materiais"
    - option "AUTO-4S-20260706194727 Equipamentos"
    - option "AUTO-4S-20260706194727 Custos indiretos"
    - option "AUTO-4S-20260706191900 Subempreiteiros"
    - option "AUTO-4S-20260706191900 Equipamentos"
    - option "AUTO-4S-20260706191900 Custos indiretos"
    - option "AUTO-4S-20260706191900 Materiais"
    - option "AUTO-4S-20260706191900 Mao de obra"
    - option "AUTO-4S-20260706165333 Mao de obra"
    - option "AUTO-4S-20260706165333 Equipamentos"
    - option "AUTO-4S-20260706165333 Subempreiteiros"
    - option "AUTO-4S-20260706165333 Materiais"
    - option "AUTO-4S-20260706165333 Custos indiretos"
    - option "AUTO-4S-20260706161854 Subempreiteiros"
    - option "AUTO-4S-20260706161854 Equipamentos"
    - option "AUTO-4S-20260706161854 Custos indiretos"
    - option "AUTO-4S-20260706161854 Materiais"
    - option "AUTO-4S-20260706161854 Mao de obra"
    - option "AUTO-4S-20260706154931 Materiais"
    - option "AUTO-4S-20260706154931 Custos indiretos"
    - option "AUTO-4S-20260706154931 Mao de obra"
    - option "AUTO-4S-20260706154931 Equipamentos"
    - option "AUTO-4S-20260706154931 Subempreiteiros"
    - option "AUTO-4S-20260706153815 Subempreiteiros"
    - option "AUTO-4S-20260706153815 Mao de obra"
    - option "AUTO-4S-20260706153815 Custos indiretos"
    - option "AUTO-4S-20260706153815 Equipamentos"
    - option "AUTO-4S-20260706153815 Materiais"
    - option "AUTO-4S-20260706153520 Materiais"
    - option "AUTO-4S-20260706153520 Mao de obra"
    - option "AUTO-4S-20260706153520 Subempreiteiros"
    - option "AUTO-4S-20260706153520 Equipamentos"
    - option "AUTO-4S-20260706132953 Mao de obra"
    - option "AUTO-4S-20260706132953 Materiais"
    - option "AUTO-4S-20260706132953 Mao de obra"
    - option "AUTO-4S-20260706123151 Mao de obra"
    - option "AUTO-4S-20260706123151 Materiais"
    - option "AUTO-4S-20260706123151 Equipamentos"
    - option "AUTO-4S-20260706123151 Materiais"
    - option "AUTO-4S-20260706123151 Mao de obra"
    - option "AUTO-4S-20260706123151 Mao de obra"
    - option "AUTO-4S-20260706122306 Equipamentos"
    - option "AUTO-4S-20260706122306 Materiais"
    - option "AUTO-4S-20260706122306 Custos indiretos"
    - option "AUTO-4S-20260706122306 Subempreiteiros"
    - option "AUTO-4S-20260706122306 Mao de obra"
    - option "AUTO-4S-20260706114042 Equipamentos"
    - option "AUTO-4S-20260706114042 Custos indiretos"
    - option "AUTO-4S-20260706114042 Subempreiteiros"
    - option "AUTO-4S-20260706114042 Materiais"
    - option "AUTO-4S-20260706114042 Mao de obra"
    - option "Teste"
  - textbox "Buscar item..."
  - paragraph: Orçado
  - paragraph: R$ 144.700,00
  - paragraph: Comprometido
  - paragraph: R$ 1.175,00
  - paragraph: Pago
  - paragraph: R$ 1.175,00
  - paragraph: Saldo
  - paragraph: R$ 142.350,00
  - text: 1-10 de 13 Itens por pagina
  - combobox:
    - option "10 por pagina" [selected]
    - option "20 por pagina"
    - option "50 por pagina"
    - option "100 por pagina"
  - button "Anterior" [disabled]
  - text: Pagina 1 de 2
  - button "Proxima"
  - table:
    - rowgroup:
      - row "Código Item Obra Categoria Qtd V.Unit Total Comprometido Pago Saldo":
        - columnheader "Código"
        - columnheader "Item"
        - columnheader "Obra"
        - columnheader "Categoria"
        - columnheader "Qtd"
        - columnheader "V.Unit"
        - columnheader "Total"
        - columnheader "Comprometido"
        - columnheader "Pago"
        - columnheader "Saldo"
        - columnheader
    - rowgroup:
      - row "4S-981708-2026 AUTO-4S-20260709160023 Item orcado material AUTO-4S-20260709160023 Obra AUTO-4S-20260709160023 Materiais 100 un R$ 120,00 R$ 12.000,00 R$ 0,00 R$ 0,00 R$ 12.000,00 Editar Excluir":
        - cell "4S-981708-2026"
        - cell "AUTO-4S-20260709160023 Item orcado material"
        - cell "AUTO-4S-20260709160023 Obra"
        - cell "AUTO-4S-20260709160023 Materiais"
        - cell "100 un"
        - cell "R$ 120,00"
        - cell "R$ 12.000,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.000,00"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-963037-2026 AUTO-4S-20260709160023 Item orcado material AUTO-4S-20260709160023 Obra AUTO-4S-20260709160023 Materiais 100 un R$ 120,00 R$ 12.000,00 R$ 0,00 R$ 0,00 R$ 12.000,00 Editar Excluir":
        - cell "4S-963037-2026"
        - cell "AUTO-4S-20260709160023 Item orcado material"
        - cell "AUTO-4S-20260709160023 Obra"
        - cell "AUTO-4S-20260709160023 Materiais"
        - cell "100 un"
        - cell "R$ 120,00"
        - cell "R$ 12.000,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.000,00"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-153166-2026 AUTO-4S-20260708145148 Item orcado material AUTO-4S-20260708145148 Obra AUTO-4S-20260708145148 Materiais 100 un R$ 121,00 R$ 12.100,00 R$ 1.175,00 R$ 1.175,00 R$ 9.750,00 Editar Excluir":
        - cell "4S-153166-2026"
        - cell "AUTO-4S-20260708145148 Item orcado material"
        - cell "AUTO-4S-20260708145148 Obra"
        - cell "AUTO-4S-20260708145148 Materiais"
        - cell "100 un"
        - cell "R$ 121,00"
        - cell "R$ 12.100,00"
        - cell "R$ 1.175,00"
        - cell "R$ 1.175,00"
        - cell "R$ 9.750,00"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-308597-2026 AUTO-4S-20260708165317 Item orcado material AUTO-4S-20260708165317 Obra AUTO-4S-20260708165317 Materiais 100 un R$ 121,00 R$ 12.100,00 R$ 0,00 R$ 0,00 R$ 12.100,00 Editar Excluir":
        - cell "4S-308597-2026"
        - cell "AUTO-4S-20260708165317 Item orcado material"
        - cell "AUTO-4S-20260708165317 Obra"
        - cell "AUTO-4S-20260708165317 Materiais"
        - cell "100 un"
        - cell "R$ 121,00"
        - cell "R$ 12.100,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.100,00"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-706485-2026 AUTO-4S-20260707162105 Item orcado material AUTO-4S-20260707162105 Obra AUTO-4S-20260707162105 Materiais 100 un R$ 121,00 R$ 12.100,00 R$ 0,00 R$ 0,00 R$ 12.100,00 Editar Excluir":
        - cell "4S-706485-2026"
        - cell "AUTO-4S-20260707162105 Item orcado material"
        - cell "AUTO-4S-20260707162105 Obra"
        - cell "AUTO-4S-20260707162105 Materiais"
        - cell "100 un"
        - cell "R$ 121,00"
        - cell "R$ 12.100,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.100,00"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-581747-2026 AUTO-4S-20260707153000 Item orcado material AUTO-4S-20260707153000 Obra AUTO-4S-20260707153000 Materiais 100 un R$ 120,00 R$ 12.000,00 R$ 0,00 R$ 0,00 R$ 12.000,00 Editar Excluir":
        - cell "4S-581747-2026"
        - cell "AUTO-4S-20260707153000 Item orcado material"
        - cell "AUTO-4S-20260707153000 Obra"
        - cell "AUTO-4S-20260707153000 Materiais"
        - cell "100 un"
        - cell "R$ 120,00"
        - cell "R$ 12.000,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.000,00"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-131549-2026 AUTO-4S-20260707143527 Item orcado material AUTO-4S-20260707143527 Obra AUTO-4S-20260707143527 Materiais 100 un R$ 121,00 R$ 12.100,00 R$ 0,00 R$ 0,00 R$ 12.100,00 Editar Excluir":
        - cell "4S-131549-2026"
        - cell "AUTO-4S-20260707143527 Item orcado material"
        - cell "AUTO-4S-20260707143527 Obra"
        - cell "AUTO-4S-20260707143527 Materiais"
        - cell "100 un"
        - cell "R$ 121,00"
        - cell "R$ 12.100,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.100,00"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-514802-2026 AUTO-4S-20260706165333 Item orcado material AUTO-4S-20260706165333 Obra AUTO-4S-20260706165333 Materiais 100 un R$ 121,00 R$ 12.100,00 R$ 0,00 R$ 0,00 R$ 12.100,00 Editar Excluir":
        - cell "4S-514802-2026"
        - cell "AUTO-4S-20260706165333 Item orcado material"
        - cell "AUTO-4S-20260706165333 Obra"
        - cell "AUTO-4S-20260706165333 Materiais"
        - cell "100 un"
        - cell "R$ 121,00"
        - cell "R$ 12.100,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.100,00"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-840923-2026 AUTO-4S-20260706161854 Item orcado material AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Materiais 100 un R$ 121,00 R$ 12.100,00 R$ 0,00 R$ 0,00 R$ 12.100,00 Editar Excluir":
        - cell "4S-840923-2026"
        - cell "AUTO-4S-20260706161854 Item orcado material"
        - cell "AUTO-4S-20260706161854 Obra"
        - cell "AUTO-4S-20260706161854 Materiais"
        - cell "100 un"
        - cell "R$ 121,00"
        - cell "R$ 12.100,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.100,00"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-485511-2026 AUTO-4S-20260706154931 Item orcado material AUTO-4S-20260706154931 Obra AUTO-4S-20260706154931 Materiais 100 un R$ 120,00 R$ 12.000,00 R$ 0,00 R$ 0,00 R$ 12.000,00 Editar Excluir":
        - cell "4S-485511-2026"
        - cell "AUTO-4S-20260706154931 Item orcado material"
        - cell "AUTO-4S-20260706154931 Obra"
        - cell "AUTO-4S-20260706154931 Materiais"
        - cell "100 un"
        - cell "R$ 120,00"
        - cell "R$ 12.000,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.000,00"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
  - text: 1-10 de 13 Itens por pagina
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
  1  | import { expect, type Page } from '@playwright/test';
  2  | import { data } from '../test-data';
  3  | import { byText, chooseOption, clickAny, expectSelectedOption, fillField, gotoMenu, submitForm } from '../ui';
  4  | 
  5  | export class BudgetPage {
  6  |   constructor(private readonly page: Page) {}
  7  | 
  8  |   private budgetItemRow() {
  9  |     return this.page.getByRole('row').filter({ hasText: data.budgetItem }).first();
  10 |   }
  11 | 
  12 |   private async clickBudgetItemAction(action: RegExp) {
  13 |     const row = this.budgetItemRow();
  14 |     await expect(row).toBeVisible();
  15 |     const button = row.getByRole('button', { name: action }).first();
  16 |     await button.scrollIntoViewIfNeeded();
  17 |     await button.click();
  18 |   }
  19 | 
  20 |   async createBaseBudgetItem() {
  21 |     await gotoMenu(this.page, ['Orçamento', 'Itens Orçados']);
  22 |     await clickAny(this.page, ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  23 |     await chooseOption(this.page, ['obra'], data.work);
  24 |     await expectSelectedOption(this.page, ['obra'], data.work);
  25 |     await chooseOption(this.page, ['centro de custo', 'centro'], data.costCenter);
  26 |     await expectSelectedOption(this.page, ['centro de custo', 'centro'], data.costCenter);
  27 |     await chooseOption(this.page, ['categoria'], data.categories[1]);
  28 |     await fillField(this.page, ['nome do item', 'item', 'nome'], data.budgetItem);
  29 |     await fillField(this.page, ['descricao', 'descrição'], data.budgetItem).catch(() => {});
  30 |     await chooseOption(this.page, ['unidade de medida', 'unidade'], 'un');
  31 |     await fillField(this.page, ['quantidade'], data.money.budgetQuantity);
  32 |     await fillField(this.page, ['valor unitario', 'valor unitário', 'valor'], data.money.budgetUnitValue);
  33 |     await submitForm(this.page);
> 34 |     await expect(byText(this.page, data.budgetItem)).toBeVisible();
     |                                                      ^ Error: expect(locator).toBeVisible() failed
  35 |     await this.page.reload({ waitUntil: 'networkidle' });
  36 |     await expect(byText(this.page, data.budgetItem)).toBeVisible();
  37 |     await expect(this.page.locator('body')).toHaveText(/saldo|comprometido|pago|previsto|orçado|orcado/i);
  38 |   }
  39 | 
  40 |   async requestProtectedBudgetChange() {
  41 |     await gotoMenu(this.page, ['Orçamento', 'Itens Orçados']);
  42 |     await clickAny(this.page, [data.budgetItem]).catch(() => {});
  43 |     await clickAny(this.page, ['Editar', 'Alterar']);
  44 |     await fillField(this.page, ['justificativa', 'observacao', 'observação'], 'Solicitacao automatizada de alteracao').catch(() => {});
  45 |     await fillField(this.page, ['valor unitario', 'valor unitário', 'valor'], data.money.budgetUnitValue + 1).catch(() => {});
  46 |     await submitForm(this.page);
  47 |     await expect(this.page.locator('body')).toHaveText(/aprov|pendente|solicit|permiss|bloque/i);
  48 |   }
  49 | 
  50 |   async requestProtectedBudgetDeletion() {
  51 |     await gotoMenu(this.page, ['Orçamento', 'Itens Orçados']);
  52 |     await this.clickBudgetItemAction(/Solicitar exclus(?:ão|ao|Ã£o)/i);
  53 |     await fillField(this.page, ['justificativa', 'observacao', 'observação'], 'Solicitacao automatizada de exclusao').catch(() => {});
  54 |     await clickAny(this.page, ['Confirmar', 'Solicitar', 'Enviar']);
  55 |     await expect(this.page.locator('body')).toHaveText(/aprov|pendente|solicit|administrador|permiss/i);
  56 |   }
  57 | 
  58 |   async adminDeleteOrCancelBudgetItemWhenAllowed() {
  59 |     await gotoMenu(this.page, ['Orçamento', 'Itens Orçados']);
  60 |     await clickAny(this.page, [data.budgetItem]).catch(() => {});
  61 |     await clickAny(this.page, ['Cancelar', 'Inativar', 'Excluir', 'Remover']).catch(() => {});
  62 |     await fillField(this.page, ['justificativa', 'observacao', 'observação'], 'Cancelamento automatizado de teste').catch(() => {});
  63 |     await clickAny(this.page, ['Confirmar', 'Salvar', 'Sim']).catch(() => {});
  64 |     await expect(this.page.locator('body')).not.toHaveText(/erro interno|internal server error|undefined is not/i);
  65 |   }
  66 | }
  67 | 
```