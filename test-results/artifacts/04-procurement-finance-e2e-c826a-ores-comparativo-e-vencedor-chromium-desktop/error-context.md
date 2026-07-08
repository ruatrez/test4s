# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-procurement-finance-e2e.spec.ts >> CT014 - cotacao com 3 fornecedores, comparativo e vencedor
- Location: tests/04-procurement-finance-e2e.spec.ts:46:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('body')
Timeout: 10000ms
Expected pattern: /AUTO-4S-20260708165317/i
Received string:  "
    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 12 aprovações pendentesADMINISTRADORCotacoes11 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir4S-974444-20264S-297399-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-162076-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-359791-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-845962-20264S-883423-20263 fornecedor(es)AUTO-4S-20260706161854 Fornecedor AR$ 10,00CONCLUIDAExcluir1-10 de 11Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-587617-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-587617-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-587617-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-493593-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-995535-2026-AUTO-4S-20260707162105 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-279280-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 33Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 4Proxima····
"

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('body')
    24 × locator resolved to <body>…</body>
       - unexpected value "
    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 12 aprovações pendentesADMINISTRADORCotacoes11 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir4S-974444-20264S-297399-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-162076-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-359791-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-845962-20264S-883423-20263 fornecedor(es)AUTO-4S-20260706161854 Fornecedor AR$ 10,00CONCLUIDAExcluir1-10 de 11Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-587617-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-587617-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-587617-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-493593-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-995535-2026-AUTO-4S-20260707162105 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-279280-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 33Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 4Proxima
  

"

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
  - button "⚠ 12 aprovações pendentes"
  - text: ADMINISTRADOR
  - heading "Cotacoes" [level=1]
  - paragraph: 11 cotacoes
  - button "+ Nova Cotacao"
  - table:
    - rowgroup:
      - row "Numero Requisicao Fornecedores Vencedor Menor valor Status Acoes":
        - columnheader "Numero"
        - columnheader "Requisicao"
        - columnheader "Fornecedores"
        - columnheader "Vencedor"
        - columnheader "Menor valor"
        - columnheader "Status"
        - columnheader "Acoes"
    - rowgroup:
      - row "4S-587617-2026 4S-718458-2026 3 fornecedor(es) AUTO-4S-20260708145148 Fornecedor A R$ 1.175,00 EM ANALISE Verificar aprovacao Excluir":
        - cell "4S-587617-2026"
        - cell "4S-718458-2026"
        - cell "3 fornecedor(es)"
        - cell "AUTO-4S-20260708145148 Fornecedor A"
        - cell "R$ 1.175,00"
        - cell "EM ANALISE"
        - cell "Verificar aprovacao Excluir":
          - button "Verificar aprovacao"
          - button "Excluir"
      - row "4S-493593-2026 4S-718458-2026 3 fornecedor(es) AUTO-4S-20260708145148 Fornecedor A R$ 1.175,00 CONCLUIDA Excluir":
        - cell "4S-493593-2026"
        - cell "4S-718458-2026"
        - cell "3 fornecedor(es)"
        - cell "AUTO-4S-20260708145148 Fornecedor A"
        - cell "R$ 1.175,00"
        - cell "CONCLUIDA"
        - cell "Excluir":
          - button "Excluir"
      - row "4S-995535-2026 4S-808728-2026 3 fornecedor(es) AUTO-4S-20260707162105 Fornecedor A R$ 1.175,00 EM ANALISE Verificar aprovacao Excluir":
        - cell "4S-995535-2026"
        - cell "4S-808728-2026"
        - cell "3 fornecedor(es)"
        - cell "AUTO-4S-20260707162105 Fornecedor A"
        - cell "R$ 1.175,00"
        - cell "EM ANALISE"
        - cell "Verificar aprovacao Excluir":
          - button "Verificar aprovacao"
          - button "Excluir"
      - row "4S-279280-2026 4S-808728-2026 3 fornecedor(es) AUTO-4S-20260707162105 Fornecedor A R$ 1.175,00 CONCLUIDA Excluir":
        - cell "4S-279280-2026"
        - cell "4S-808728-2026"
        - cell "3 fornecedor(es)"
        - cell "AUTO-4S-20260707162105 Fornecedor A"
        - cell "R$ 1.175,00"
        - cell "CONCLUIDA"
        - cell "Excluir":
          - button "Excluir"
      - row "4S-664187-2026 4S-402937-2026 3 fornecedor(es) AUTO-4S-20260707153000 Fornecedor A R$ 11.750,00 EM ANALISE Verificar aprovacao Excluir":
        - cell "4S-664187-2026"
        - cell "4S-402937-2026"
        - cell "3 fornecedor(es)"
        - cell "AUTO-4S-20260707153000 Fornecedor A"
        - cell "R$ 11.750,00"
        - cell "EM ANALISE"
        - cell "Verificar aprovacao Excluir":
          - button "Verificar aprovacao"
          - button "Excluir"
      - row "4S-434135-2026 4S-402937-2026 3 fornecedor(es) AUTO-4S-20260707153000 Fornecedor A R$ 11.750,00 CONCLUIDA Excluir":
        - cell "4S-434135-2026"
        - cell "4S-402937-2026"
        - cell "3 fornecedor(es)"
        - cell "AUTO-4S-20260707153000 Fornecedor A"
        - cell "R$ 11.750,00"
        - cell "CONCLUIDA"
        - cell "Excluir":
          - button "Excluir"
      - row "4S-974444-2026 4S-297399-2026 3 fornecedor(es) AUTO-4S-20260707153000 Fornecedor A R$ 11.750,00 EM ANALISE Verificar aprovacao Excluir":
        - cell "4S-974444-2026"
        - cell "4S-297399-2026"
        - cell "3 fornecedor(es)"
        - cell "AUTO-4S-20260707153000 Fornecedor A"
        - cell "R$ 11.750,00"
        - cell "EM ANALISE"
        - cell "Verificar aprovacao Excluir":
          - button "Verificar aprovacao"
          - button "Excluir"
      - row "4S-162076-2026 4S-402937-2026 3 fornecedor(es) - R$ 11.750,00 ABERTA Editar Eleger vencedor Excluir":
        - cell "4S-162076-2026"
        - cell "4S-402937-2026"
        - cell "3 fornecedor(es)"
        - cell "-"
        - cell "R$ 11.750,00"
        - cell "ABERTA"
        - cell "Editar Eleger vencedor Excluir":
          - button "Editar"
          - button "Eleger vencedor"
          - button "Excluir"
      - row "4S-359791-2026 4S-402937-2026 3 fornecedor(es) - R$ 11.750,00 ABERTA Editar Eleger vencedor Excluir":
        - cell "4S-359791-2026"
        - cell "4S-402937-2026"
        - cell "3 fornecedor(es)"
        - cell "-"
        - cell "R$ 11.750,00"
        - cell "ABERTA"
        - cell "Editar Eleger vencedor Excluir":
          - button "Editar"
          - button "Eleger vencedor"
          - button "Excluir"
      - row "4S-845962-2026 4S-883423-2026 3 fornecedor(es) AUTO-4S-20260706161854 Fornecedor A R$ 10,00 CONCLUIDA Excluir":
        - cell "4S-845962-2026"
        - cell "4S-883423-2026"
        - cell "3 fornecedor(es)"
        - cell "AUTO-4S-20260706161854 Fornecedor A"
        - cell "R$ 10,00"
        - cell "CONCLUIDA"
        - cell "Excluir":
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
  - paragraph: Comparativo de propostas
  - table:
    - rowgroup:
      - row "Cotacao Item Fornecedor Qtd. Vlr. unit. Total Prazo Vencedor":
        - columnheader "Cotacao"
        - columnheader "Item"
        - columnheader "Fornecedor"
        - columnheader "Qtd."
        - columnheader "Vlr. unit."
        - columnheader "Total"
        - columnheader "Prazo"
        - columnheader "Vencedor"
    - rowgroup:
      - row "4S-587617-2026 - AUTO-4S-20260708145148 Fornecedor A 1 R$ 1.175,00 R$ 1.175,00 10 dias sim":
        - cell "4S-587617-2026"
        - cell "-"
        - cell "AUTO-4S-20260708145148 Fornecedor A"
        - cell "1"
        - cell "R$ 1.175,00"
        - cell "R$ 1.175,00"
        - cell "10 dias"
        - cell "sim"
      - row "4S-587617-2026 - AUTO-4S-20260708145148 Fornecedor C 1 R$ 1.210,00 R$ 1.210,00 10 dias -":
        - cell "4S-587617-2026"
        - cell "-"
        - cell "AUTO-4S-20260708145148 Fornecedor C"
        - cell "1"
        - cell "R$ 1.210,00"
        - cell "R$ 1.210,00"
        - cell "10 dias"
        - cell "-"
      - row "4S-587617-2026 - AUTO-4S-20260708145148 Fornecedor B 1 R$ 1.190,00 R$ 1.190,00 10 dias -":
        - cell "4S-587617-2026"
        - cell "-"
        - cell "AUTO-4S-20260708145148 Fornecedor B"
        - cell "1"
        - cell "R$ 1.190,00"
        - cell "R$ 1.190,00"
        - cell "10 dias"
        - cell "-"
      - row "4S-493593-2026 - AUTO-4S-20260708145148 Fornecedor A 1 R$ 1.175,00 R$ 1.175,00 10 dias sim":
        - cell "4S-493593-2026"
        - cell "-"
        - cell "AUTO-4S-20260708145148 Fornecedor A"
        - cell "1"
        - cell "R$ 1.175,00"
        - cell "R$ 1.175,00"
        - cell "10 dias"
        - cell "sim"
      - row "4S-493593-2026 - AUTO-4S-20260708145148 Fornecedor C 1 R$ 1.210,00 R$ 1.210,00 10 dias -":
        - cell "4S-493593-2026"
        - cell "-"
        - cell "AUTO-4S-20260708145148 Fornecedor C"
        - cell "1"
        - cell "R$ 1.210,00"
        - cell "R$ 1.210,00"
        - cell "10 dias"
        - cell "-"
      - row "4S-493593-2026 - AUTO-4S-20260708145148 Fornecedor B 1 R$ 1.190,00 R$ 1.190,00 10 dias -":
        - cell "4S-493593-2026"
        - cell "-"
        - cell "AUTO-4S-20260708145148 Fornecedor B"
        - cell "1"
        - cell "R$ 1.190,00"
        - cell "R$ 1.190,00"
        - cell "10 dias"
        - cell "-"
      - row "4S-995535-2026 - AUTO-4S-20260707162105 Fornecedor A 1 R$ 1.175,00 R$ 1.175,00 10 dias sim":
        - cell "4S-995535-2026"
        - cell "-"
        - cell "AUTO-4S-20260707162105 Fornecedor A"
        - cell "1"
        - cell "R$ 1.175,00"
        - cell "R$ 1.175,00"
        - cell "10 dias"
        - cell "sim"
      - row "4S-995535-2026 - AUTO-4S-20260707162105 Fornecedor B 1 R$ 1.190,00 R$ 1.190,00 10 dias -":
        - cell "4S-995535-2026"
        - cell "-"
        - cell "AUTO-4S-20260707162105 Fornecedor B"
        - cell "1"
        - cell "R$ 1.190,00"
        - cell "R$ 1.190,00"
        - cell "10 dias"
        - cell "-"
      - row "4S-995535-2026 - AUTO-4S-20260707162105 Fornecedor C 1 R$ 1.210,00 R$ 1.210,00 10 dias -":
        - cell "4S-995535-2026"
        - cell "-"
        - cell "AUTO-4S-20260707162105 Fornecedor C"
        - cell "1"
        - cell "R$ 1.210,00"
        - cell "R$ 1.210,00"
        - cell "10 dias"
        - cell "-"
      - row "4S-279280-2026 - AUTO-4S-20260707162105 Fornecedor A 1 R$ 1.175,00 R$ 1.175,00 10 dias sim":
        - cell "4S-279280-2026"
        - cell "-"
        - cell "AUTO-4S-20260707162105 Fornecedor A"
        - cell "1"
        - cell "R$ 1.175,00"
        - cell "R$ 1.175,00"
        - cell "10 dias"
        - cell "sim"
  - text: 1-10 de 33 Itens por pagina
  - combobox:
    - option "10 por pagina" [selected]
    - option "20 por pagina"
    - option "50 por pagina"
    - option "100 por pagina"
  - button "Anterior" [disabled]
  - text: Pagina 1 de 4
  - button "Proxima"
```

# Test source

```ts
  1  | import { expect, type Page } from '@playwright/test';
  2  | import { data } from '../test-data';
  3  | import { clickAny, escapeRegex, fillField, gotoMenu } from '../ui';
  4  | 
  5  | export class WorkflowAuditPage {
  6  |   constructor(private readonly page: Page) {}
  7  | 
  8  |   private pendingRequisitionRow() {
  9  |     return this.page.getByRole('row')
  10 |       .filter({ hasText: data.work })
  11 |       .filter({ hasText: /requisi[cç][aã]o/i })
  12 |       .filter({ hasText: /pendente/i })
  13 |       .first();
  14 |   }
  15 | 
  16 |   private pendingPurchaseApprovalRows() {
  17 |     return this.page.getByRole('row')
  18 |       .filter({ hasText: new RegExp(escapeRegex(data.prefix), 'i') })
  19 |       .filter({ hasText: /cota[cç][aã]o|compra|oc|ordem/i })
  20 |       .filter({ hasText: /pendente|aguardando|aprova[cç][aã]o|solicitad/i });
  21 |   }
  22 | 
  23 |   private async pendingPurchaseApprovalRow() {
  24 |     const rows = this.pendingPurchaseApprovalRows();
  25 |     const quotationRow = rows.filter({ hasText: new RegExp(escapeRegex(data.quotation), 'i') }).first();
  26 |     if (await quotationRow.isVisible().catch(() => false)) return quotationRow;
  27 |     return rows.first();
  28 |   }
  29 | 
  30 |   async approveRequisition() {
  31 |     await gotoMenu(this.page, ['Workflow', 'Aprovações']);
  32 |     const row = this.pendingRequisitionRow();
  33 |     await expect(row).toBeVisible();
  34 |     await row.getByRole('button', { name: /aprovar/i }).click();
  35 |     await fillField(this.page, ['observacao', 'observação', 'justificativa'], 'Aprovacao automatizada de teste').catch(() => {});
  36 |     await clickAny(this.page, ['Confirmar', 'Salvar', 'Aprovar']);
  37 |     await gotoMenu(this.page, ['Suprimentos', 'Requisições']);
  38 |     await expect(this.page.locator('body')).toHaveText(/aprovad|cotacao|cotação/i);
  39 |   }
  40 | 
  41 |   async rejectRequisition() {
  42 |     await gotoMenu(this.page, ['Workflow', 'Aprovações']);
  43 |     const row = this.pendingRequisitionRow();
  44 |     await expect(row).toBeVisible();
  45 |     await row.getByRole('button', { name: /rejeitar/i }).click();
  46 |     await fillField(this.page, ['observacao', 'observação', 'justificativa'], 'Rejeicao automatizada de teste').catch(() => {});
  47 |     await clickAny(this.page, ['Confirmar', 'Salvar', 'Rejeitar']);
  48 |     await expect(this.page.locator('body')).toHaveText(/rejeit|recusad|workflow|aprov/i);
  49 |   }
  50 | 
  51 |   async approveQuotationPurchase() {
  52 |     await gotoMenu(this.page, ['Workflow', 'Aprovações']);
  53 |     const row = await this.pendingPurchaseApprovalRow();
  54 |     if (!await row.isVisible().catch(() => false)) {
  55 |       await gotoMenu(this.page, ['Suprimentos', 'Cotações']);
> 56 |       await expect(this.page.locator('body')).toHaveText(new RegExp(escapeRegex(data.prefix), 'i'));
     |                                               ^ Error: expect(locator).toHaveText(expected) failed
  57 |       await expect(this.page.locator('body')).toHaveText(/aprovad|conclu[ií]d|liberad|oc|ordem|compra/i);
  58 |       return;
  59 |     }
  60 |     await expect(row).toBeVisible();
  61 |     await row.getByRole('button', { name: /aprovar/i }).click();
  62 |     await fillField(this.page, ['observacao', 'observação', 'justificativa'], 'Aprovacao automatizada da compra/cotacao').catch(() => {});
  63 |     await clickAny(this.page, ['Confirmar', 'Salvar', 'Aprovar']);
  64 |     await gotoMenu(this.page, ['Suprimentos', 'Cotações']);
  65 |     await expect(this.page.locator('body')).toHaveText(new RegExp(escapeRegex(data.prefix), 'i'));
  66 |     await expect(this.page.locator('body')).toHaveText(/aprovad|conclu[ií]d|liberad|oc|ordem|compra/i);
  67 |   }
  68 | 
  69 |   async validateIncorrectProfileCannotApprove() {
  70 |     await gotoMenu(this.page, ['Workflow', 'Aprovações']);
  71 |     await clickAny(this.page, ['Aprovar', 'Rejeitar']).catch(() => {});
  72 |     await expect(this.page.locator('body')).toHaveText(/permiss|acesso|negad|autoriz|perfil|aprov/i);
  73 |   }
  74 | 
  75 |   async validateWorkflowDecisionAudit() {
  76 |     await gotoMenu(this.page, ['Workflow', 'Auditoria']);
  77 |     await expect(this.page.locator('body')).toHaveText(/aprov|rejeit|usuario|usuário|data|hora/i);
  78 |   }
  79 | 
  80 |   async validateAuditForRunData() {
  81 |     await gotoMenu(this.page, ['Workflow', 'Auditoria']);
  82 |     await expect(this.page.locator('body')).toHaveText(/criacao|criação|edicao|edição|exclus|cancel|aprov|rejeit|usuario|usuário|data|hora/i);
  83 |     await expect(this.page.locator('body')).toHaveText(new RegExp(data.prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  84 |   }
  85 | }
  86 | 
```