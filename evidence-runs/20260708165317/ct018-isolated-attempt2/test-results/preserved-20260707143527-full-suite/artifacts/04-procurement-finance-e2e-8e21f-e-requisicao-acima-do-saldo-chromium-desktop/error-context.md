# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-procurement-finance-e2e.spec.ts >> CT012 - requisicao dentro do saldo e requisicao acima do saldo
- Location: tests/04-procurement-finance-e2e.spec.ts:14:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('row').filter({ hasText: 'AUTO-4S-20260707143527 Obra' }).filter({ hasText: 'AUTO-4S-20260707143527 Centro' }).filter({ hasText: 'AUTO-4S-20260707143527 Item orcado material' }).filter({ has: getByRole('button', { name: /enviar.*aprova|solicitar.*aprova/i }) }).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('row').filter({ hasText: 'AUTO-4S-20260707143527 Obra' }).filter({ hasText: 'AUTO-4S-20260707143527 Centro' }).filter({ hasText: 'AUTO-4S-20260707143527 Item orcado material' }).filter({ has: getByRole('button', { name: /enviar.*aprova|solicitar.*aprova/i }) }).first()

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
    - button "Requisições"
    - button "Cotações"
    - button "Ordens de Compra"
    - button "◧ Financeiro ▶"
    - button "◫ Workflow ▶"
  - text: H
  - paragraph: Hello
  - paragraph: ADMINISTRADOR
  - button "⏻"
- main:
  - button "⚠ 5 aprovações pendentes"
  - text: ADMINISTRADOR
  - heading "Requisicoes" [level=1]
  - paragraph: 17 requisicoes
  - button "+ Nova Requisicao"
  - textbox "Buscar..."
  - combobox:
    - option "Todas as obras" [selected]
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
  - table:
    - rowgroup:
      - row "Numero Obra Centro Custo Itens Valor Est. Status Acoes":
        - columnheader "Numero"
        - columnheader "Obra"
        - columnheader "Centro Custo"
        - columnheader "Itens"
        - columnheader "Valor Est."
        - columnheader "Status"
        - columnheader "Acoes"
    - rowgroup:
      - row "4S-611350-2026 AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Centro 1 item(ns) AUTO-4S-20260706161854 Item orcado material R$ 1.200,00 EM APROVACAO Editar Verificar aprovacao Excluir":
        - cell "4S-611350-2026"
        - cell "AUTO-4S-20260706161854 Obra"
        - cell "AUTO-4S-20260706161854 Centro"
        - cell "1 item(ns) AUTO-4S-20260706161854 Item orcado material"
        - cell "R$ 1.200,00"
        - cell "EM APROVACAO"
        - cell "Editar Verificar aprovacao Excluir":
          - button "Editar"
          - button "Verificar aprovacao"
          - button "Excluir"
      - row "4S-351988-2026 AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Centro 1 item(ns) AUTO-4S-20260706161854 Item orcado material R$ 120,00 RASCUNHO Editar Enviar aprovacao Excluir":
        - cell "4S-351988-2026"
        - cell "AUTO-4S-20260706161854 Obra"
        - cell "AUTO-4S-20260706161854 Centro"
        - cell "1 item(ns) AUTO-4S-20260706161854 Item orcado material"
        - cell "R$ 120,00"
        - cell "RASCUNHO"
        - cell "Editar Enviar aprovacao Excluir":
          - button "Editar"
          - button "Enviar aprovacao"
          - button "Excluir"
      - row "4S-383295-2026 AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Centro 1 item(ns) AUTO-4S-20260706161854 Item orcado material R$ 999.999,00 RASCUNHOBLOQUEADA Editar Excluir":
        - cell "4S-383295-2026"
        - cell "AUTO-4S-20260706161854 Obra"
        - cell "AUTO-4S-20260706161854 Centro"
        - cell "1 item(ns) AUTO-4S-20260706161854 Item orcado material"
        - cell "R$ 999.999,00"
        - cell "RASCUNHOBLOQUEADA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-942588-2026 AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Centro 1 item(ns) AUTO-4S-20260706161854 Item orcado material R$ 1.200,00 EM APROVACAO Editar Verificar aprovacao Excluir":
        - cell "4S-942588-2026"
        - cell "AUTO-4S-20260706161854 Obra"
        - cell "AUTO-4S-20260706161854 Centro"
        - cell "1 item(ns) AUTO-4S-20260706161854 Item orcado material"
        - cell "R$ 1.200,00"
        - cell "EM APROVACAO"
        - cell "Editar Verificar aprovacao Excluir":
          - button "Editar"
          - button "Verificar aprovacao"
          - button "Excluir"
      - row "4S-363796-2026 AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Centro 1 item(ns) AUTO-4S-20260706161854 Item orcado material R$ 1.200,00 EM APROVACAO Editar Verificar aprovacao Excluir":
        - cell "4S-363796-2026"
        - cell "AUTO-4S-20260706161854 Obra"
        - cell "AUTO-4S-20260706161854 Centro"
        - cell "1 item(ns) AUTO-4S-20260706161854 Item orcado material"
        - cell "R$ 1.200,00"
        - cell "EM APROVACAO"
        - cell "Editar Verificar aprovacao Excluir":
          - button "Editar"
          - button "Verificar aprovacao"
          - button "Excluir"
      - row "4S-842673-2026 AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Centro 1 item(ns) AUTO-4S-20260706161854 Item orcado material R$ 999.999,00 RASCUNHOBLOQUEADA Editar Excluir":
        - cell "4S-842673-2026"
        - cell "AUTO-4S-20260706161854 Obra"
        - cell "AUTO-4S-20260706161854 Centro"
        - cell "1 item(ns) AUTO-4S-20260706161854 Item orcado material"
        - cell "R$ 999.999,00"
        - cell "RASCUNHOBLOQUEADA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-659887-2026 AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Centro 1 item(ns) AUTO-4S-20260706161854 Item orcado material R$ 120,00 EM APROVACAO Editar Verificar aprovacao Excluir":
        - cell "4S-659887-2026"
        - cell "AUTO-4S-20260706161854 Obra"
        - cell "AUTO-4S-20260706161854 Centro"
        - cell "1 item(ns) AUTO-4S-20260706161854 Item orcado material"
        - cell "R$ 120,00"
        - cell "EM APROVACAO"
        - cell "Editar Verificar aprovacao Excluir":
          - button "Editar"
          - button "Verificar aprovacao"
          - button "Excluir"
      - row "4S-738837-2026 AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Centro 1 item(ns) AUTO-4S-20260706161854 Item orcado material R$ 1.200,00 APROVADA Editar Excluir":
        - cell "4S-738837-2026"
        - cell "AUTO-4S-20260706161854 Obra"
        - cell "AUTO-4S-20260706161854 Centro"
        - cell "1 item(ns) AUTO-4S-20260706161854 Item orcado material"
        - cell "R$ 1.200,00"
        - cell "APROVADA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-944750-2026 AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Centro 1 item(ns) AUTO-4S-20260706161854 Item orcado material R$ 999.999,00 RASCUNHOBLOQUEADA Editar Excluir":
        - cell "4S-944750-2026"
        - cell "AUTO-4S-20260706161854 Obra"
        - cell "AUTO-4S-20260706161854 Centro"
        - cell "1 item(ns) AUTO-4S-20260706161854 Item orcado material"
        - cell "R$ 999.999,00"
        - cell "RASCUNHOBLOQUEADA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-300473-2026 AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Centro 1 item(ns) AUTO-4S-20260706161854 Item orcado material R$ 120,00 EM APROVACAO Editar Verificar aprovacao Excluir":
        - cell "4S-300473-2026"
        - cell "AUTO-4S-20260706161854 Obra"
        - cell "AUTO-4S-20260706161854 Centro"
        - cell "1 item(ns) AUTO-4S-20260706161854 Item orcado material"
        - cell "R$ 120,00"
        - cell "EM APROVACAO"
        - cell "Editar Verificar aprovacao Excluir":
          - button "Editar"
          - button "Verificar aprovacao"
          - button "Excluir"
  - text: 1-10 de 17 Itens por pagina
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
  1   | import { expect, type Page } from '@playwright/test';
  2   | import { data } from '../test-data';
  3   | import { chooseFirstAvailableOption, chooseOption, clickAny, fillField, gotoMenu, submitForm } from '../ui';
  4   | 
  5   | export class ProcurementPage {
  6   |   constructor(private readonly page: Page) {}
  7   | 
  8   |   private requisitionRow() {
  9   |     return this.page.getByRole('row')
  10  |       .filter({ hasText: data.work })
  11  |       .filter({ hasText: data.costCenter })
  12  |       .filter({ hasText: data.budgetItem })
  13  |       .first();
  14  |   }
  15  | 
  16  |   private draftRequisitionRow() {
  17  |     return this.page.getByRole('row')
  18  |       .filter({ hasText: data.work })
  19  |       .filter({ hasText: data.costCenter })
  20  |       .filter({ hasText: data.budgetItem })
  21  |       .filter({ has: this.page.getByRole('button', { name: /enviar.*aprova|solicitar.*aprova/i }) })
  22  |       .first();
  23  |   }
  24  | 
  25  |   async createRequisitionWithinBalance() {
  26  |     await gotoMenu(this.page, ['Suprimentos', 'Requisições']);
  27  |     await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
  28  |     await chooseOption(this.page, ['Obra'], data.work);
  29  |     await chooseOption(this.page, ['Centro de custo'], data.costCenter);
  30  |     await fillField(this.page, ['Justificativa'], data.requisition);
  31  |     await chooseOption(this.page, ['Item orcado', 'Item orçado'], data.budgetItem);
  32  |     await fillField(this.page, ['Qtd.', 'quantidade'], data.money.requestQuantity);
  33  |     await fillField(this.page, ['Vlr unit.', 'valor unitario', 'valor unitário'], data.money.requestEstimatedValue);
  34  |     await submitForm(this.page);
  35  |     const row = this.draftRequisitionRow();
> 36  |     await expect(row).toBeVisible();
      |                       ^ Error: expect(locator).toBeVisible() failed
  37  |     await row.getByRole('button', { name: /enviar.*aprova|solicitar.*aprova/i }).click();
  38  |     await expect(this.requisitionRow()).toBeVisible();
  39  |     await expect(this.requisitionRow()).toHaveText(/em aprova[cç][aã]o|pendente|aprov/i);
  40  |   }
  41  | 
  42  |   async createOverBudgetRequisition() {
  43  |     await gotoMenu(this.page, ['Suprimentos', 'Requisições']);
  44  |     await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
  45  |     await chooseOption(this.page, ['Obra'], data.work);
  46  |     await chooseOption(this.page, ['Centro de custo'], data.costCenter);
  47  |     await fillField(this.page, ['Justificativa'], data.overBudgetRequisition);
  48  |     await chooseOption(this.page, ['Item orcado', 'Item orçado'], data.budgetItem);
  49  |     await fillField(this.page, ['Qtd.', 'quantidade'], 1);
  50  |     await fillField(this.page, ['Vlr unit.', 'valor unitario', 'valor unitário'], data.money.overBudgetEstimatedValue);
  51  |     await submitForm(this.page);
  52  |     await expect(this.page.locator('body')).toHaveText(/saldo|orcamento|orçamento|bloquead|exced|limite|aprov/i);
  53  |   }
  54  | 
  55  |   async createRejectedRequisition() {
  56  |     await gotoMenu(this.page, ['Suprimentos', 'Requisições']);
  57  |     await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
  58  |     await chooseOption(this.page, ['Obra'], data.work);
  59  |     await chooseOption(this.page, ['Centro de custo'], data.costCenter);
  60  |     await fillField(this.page, ['Justificativa'], data.rejectedRequisition);
  61  |     await chooseOption(this.page, ['Item orcado', 'Item orçado'], data.budgetItem);
  62  |     await fillField(this.page, ['Qtd.', 'quantidade'], 1);
  63  |     await fillField(this.page, ['Vlr unit.', 'valor unitario', 'valor unitário'], data.money.requestEstimatedValue);
  64  |     await submitForm(this.page);
  65  |     const row = this.draftRequisitionRow();
  66  |     await expect(row).toBeVisible();
  67  |     await row.getByRole('button', { name: /enviar.*aprova|solicitar.*aprova/i }).click();
  68  |   }
  69  | 
  70  |   async createQuotationWithSuppliers() {
  71  |     await gotoMenu(this.page, ['Suprimentos', 'Cotações']);
  72  |     await clickAny(this.page, ['Novo', 'Adicionar', 'Criar']);
  73  |     await chooseOption(this.page, ['Requisicao aprovada', 'Requisição aprovada', 'requisicao', 'requisição'], data.requisition);
  74  |     await fillField(this.page, ['Fechamento'], '2026-12-31');
  75  |     await chooseOption(this.page, ['Fornecedor 1'], data.suppliers[0]);
  76  |     await chooseOption(this.page, ['Fornecedor 2'], data.suppliers[1]);
  77  |     await chooseOption(this.page, ['Fornecedor 3'], data.suppliers[2]);
  78  |     await fillField(this.page, ['observacoes', 'observações'], data.quotation).catch(() => {});
  79  |     await clickAny(this.page, ['Abrir Cotacao', 'Abrir Cotação']);
  80  |     await clickAny(this.page, ['Vencedor', 'Selecionar vencedor', 'Concluir']).catch(() => {});
  81  |     await expect(this.page.locator('body')).toHaveText(/fornecedor|comparativo|vencedor|cotacao|cotação/i);
  82  |   }
  83  | 
  84  |   async createPurchaseOrderFromQuotation() {
  85  |     await gotoMenu(this.page, ['Suprimentos', 'Ordens de Compra']);
  86  |     await clickAny(this.page, ['Novo', 'Gerar', 'Criar']);
  87  |     await chooseOption(this.page, ['Cotacao concluida', 'Cotação concluída'], data.quotation).catch(async () => {
  88  |       await chooseFirstAvailableOption(this.page, ['Cotacao concluida', 'Cotação concluída']);
  89  |     });
  90  |     await fillField(this.page, ['previsao', 'previsão', 'entrega'], '2026-12-31').catch(() => {});
  91  |     await fillField(this.page, ['condicao', 'condição'], 'Pagamento teste').catch(() => {});
  92  |     await submitForm(this.page);
  93  |     await clickAny(this.page, ['Emitir', 'Concluir', 'Avançar', 'Avancar']).catch(() => {});
  94  |     await expect(this.page.locator('body')).toHaveText(/comprometido|ordem|oc|conta/i);
  95  |   }
  96  | 
  97  |   async editCancelOrDeleteAllowedDocuments() {
  98  |     for (const menu of [['Suprimentos', 'Requisições'], ['Suprimentos', 'Cotações'], ['Suprimentos', 'Ordens de Compra']]) {
  99  |       await gotoMenu(this.page, menu);
  100 |       await clickAny(this.page, ['Editar', 'Alterar']).catch(() => {});
  101 |       await fillField(this.page, ['observacao', 'observação', 'justificativa'], 'Edicao automatizada').catch(() => {});
  102 |       await clickAny(this.page, ['Salvar', 'Confirmar']).catch(() => {});
  103 |       await clickAny(this.page, ['Cancelar', 'Inativar', 'Excluir', 'Remover']).catch(() => {});
  104 |       await fillField(this.page, ['observacao', 'observação', 'justificativa'], 'Cancelamento automatizado').catch(() => {});
  105 |       await clickAny(this.page, ['Confirmar', 'Salvar', 'Sim']).catch(() => {});
  106 |       await expect(this.page.locator('body')).not.toHaveText(/erro interno|internal server error|undefined is not/i);
  107 |     }
  108 |   }
  109 | }
  110 | 
```