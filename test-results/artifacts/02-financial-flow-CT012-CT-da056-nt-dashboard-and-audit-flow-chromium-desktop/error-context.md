# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-financial-flow.spec.js >> CT012-CT019 - integrated procurement, payment, dashboard and audit flow
- Location: tests/02-financial-flow.spec.js:107:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/AUTO-4S-20260617153905 Requisicao/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/AUTO-4S-20260617153905 Requisicao/i).first()

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
  - paragraph: 5 requisicoes
  - button "+ Nova Requisicao"
  - textbox "Buscar..."
  - combobox:
    - option "Todas as obras" [selected]
    - option "HML 1781630773579 Obra"
    - option "HML 1781630633295 Obra"
    - option "HML 1781630595874 Obra"
    - option "HML 1781630556505 Obra"
    - option "HML 1781630434235 Obra"
    - option "HML 1781630370967 Obra"
    - option "HML 1781630328305 Obra"
    - option "HML 1781630075298 Obra"
    - option "HML 1781630029631 Obra"
    - option "HML 1781629990378 Obra"
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
      - row "4S-985811-2026 HML 1781630773579 Obra HML 1781630773579 Centro 1 item(ns) HML 1781630773579 Item Orcado R$ 2.000,00 APROVADA Editar Excluir":
        - cell "4S-985811-2026"
        - cell "HML 1781630773579 Obra"
        - cell "HML 1781630773579 Centro"
        - cell "1 item(ns) HML 1781630773579 Item Orcado"
        - cell "R$ 2.000,00"
        - cell "APROVADA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-260167-2026 HML 1781630633295 Obra HML 1781630633295 Centro 1 item(ns) HML 1781630633295 Item Orcado R$ 2.000,00 RASCUNHO Editar Enviar aprovacao Excluir":
        - cell "4S-260167-2026"
        - cell "HML 1781630633295 Obra"
        - cell "HML 1781630633295 Centro"
        - cell "1 item(ns) HML 1781630633295 Item Orcado"
        - cell "R$ 2.000,00"
        - cell "RASCUNHO"
        - cell "Editar Enviar aprovacao Excluir":
          - button "Editar"
          - button "Enviar aprovacao"
          - button "Excluir"
      - row "4S-911856-2026 HML 1781630595874 Obra HML 1781630595874 Centro 1 item(ns) HML 1781630595874 Item Orcado R$ 2.000,00 RASCUNHO Editar Enviar aprovacao Excluir":
        - cell "4S-911856-2026"
        - cell "HML 1781630595874 Obra"
        - cell "HML 1781630595874 Centro"
        - cell "1 item(ns) HML 1781630595874 Item Orcado"
        - cell "R$ 2.000,00"
        - cell "RASCUNHO"
        - cell "Editar Enviar aprovacao Excluir":
          - button "Editar"
          - button "Enviar aprovacao"
          - button "Excluir"
      - row "4S-930525-2026 HML 1781630328305 Obra HML 1781630370967 Centro 1 item(ns) HML 1781630370967 Item Orcado R$ 2.000,00 RASCUNHO Editar Enviar aprovacao Excluir":
        - cell "4S-930525-2026"
        - cell "HML 1781630328305 Obra"
        - cell "HML 1781630370967 Centro"
        - cell "1 item(ns) HML 1781630370967 Item Orcado"
        - cell "R$ 2.000,00"
        - cell "RASCUNHO"
        - cell "Editar Enviar aprovacao Excluir":
          - button "Editar"
          - button "Enviar aprovacao"
          - button "Excluir"
      - row "4S-531539-2026 HML 1781630773579 Obra HML 1781630773579 Centro 1 item(ns) HML 1781630773579 Item Orcado R$ 12.000,00 RASCUNHOBLOQUEADA Editar Enviar aprovacao Excluir":
        - cell "4S-531539-2026"
        - cell "HML 1781630773579 Obra"
        - cell "HML 1781630773579 Centro"
        - cell "1 item(ns) HML 1781630773579 Item Orcado"
        - cell "R$ 12.000,00"
        - cell "RASCUNHOBLOQUEADA"
        - cell "Editar Enviar aprovacao Excluir":
          - button "Editar"
          - button "Enviar aprovacao"
          - button "Excluir"
```

# Test source

```ts
  25  |     expected: 'Cliente e contrato devem ser criados, vinculados e persistidos.',
  26  |     impact: 'Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra.',
  27  |     recommendation: 'Corrigir persistencia e relacionamento entre cliente e contrato.'
  28  |   }, async () => {
  29  |     await tryCreateSimpleRecord(page, ['Configurações', 'Clientes e Contratos'], data.client, [
  30  |       { labels: ['Razão Social'], value: `${data.client} SA` },
  31  |       { labels: ['Nome Fantasia'], value: data.client },
  32  |       { labels: ['CNPJ/CPF'], value: data.runDocument || String(Date.now()).slice(-11) },
  33  |       { labels: ['E-mail', 'email'], value: 'cliente.auto@example.test' },
  34  |       { labels: ['Contato Principal'], value: 'QA Automatizado' },
  35  |       { type: 'select', labels: ['Status'], value: 'Ativo' }
  36  |     ]);
  37  |     await assertPersistedAfterRefresh(page, data.client);
  38  |   });
  39  | 
  40  |   await stepWithDiagnostic(page, {
  41  |     id: 'CT005-OBRA-CENTRO',
  42  |     severity: 'alta',
  43  |     expected: 'Unidade, obra e centro de custo devem ficar disponiveis para os modulos seguintes.',
  44  |     impact: 'Falha nesse cadastro impede orcamento, requisicao e financeiro.',
  45  |     recommendation: 'Revisar obrigatoriedade, vinculos e persistencia de obras/centros.'
  46  |   }, async () => {
  47  |     await tryCreateSimpleRecord(page, ['Configurações', 'Obras e Centros'], data.work, [
  48  |       { labels: ['unidade'], value: data.unit },
  49  |       { labels: ['obra'], value: data.work },
  50  |       { labels: ['centro', 'centro de custo'], value: data.costCenter }
  51  |     ]);
  52  |     await assertPersistedAfterRefresh(page, data.work);
  53  |   });
  54  | 
  55  |   await stepWithDiagnostic(page, {
  56  |     id: 'CT006-FORNECEDORES',
  57  |     severity: 'media',
  58  |     expected: 'Tres fornecedores ativos devem poder ser usados em cotacoes.',
  59  |     impact: 'Sem fornecedores suficientes o comparativo de cotacao fica incompleto.',
  60  |     recommendation: 'Garantir cadastro e selecao de fornecedores ativos em cotacoes.'
  61  |   }, async () => {
  62  |     for (const supplier of data.suppliers) {
  63  |       await tryCreateSimpleRecord(page, ['Configurações', 'Fornecedores'], supplier, [
  64  |         { labels: ['nome', 'fornecedor', 'razao', 'razão'], value: supplier },
  65  |         { labels: ['email'], value: `${supplier.toLowerCase().replace(/[^a-z0-9]/g, '.')}@example.test` }
  66  |       ]);
  67  |     }
  68  |   });
  69  | 
  70  |   await stepWithDiagnostic(page, {
  71  |     id: 'CT007-CATEGORIAS',
  72  |     severity: 'media',
  73  |     expected: 'Categorias orcamentarias devem ficar disponiveis para itens e movimentos.',
  74  |     impact: 'Classificacao financeira incorreta prejudica dashboard e saldo por categoria.',
  75  |     recommendation: 'Corrigir cadastro, listagem e uso das categorias nos selects de movimento.'
  76  |   }, async () => {
  77  |     for (const category of data.categories) {
  78  |       await tryCreateSimpleRecord(page, ['Configurações', 'Categorias'], category, [
  79  |         { labels: ['nome', 'categoria', 'descricao', 'descrição'], value: category }
  80  |       ]);
  81  |     }
  82  |   });
  83  | 
  84  |   await stepWithDiagnostic(page, {
  85  |     id: 'CT008-ORCAMENTO-BASE',
  86  |     severity: 'critica',
  87  |     expected: 'Item orcado deve calcular valor previsto e iniciar saldo disponivel.',
  88  |     impact: 'Erro no orcamento base compromete todo o controle de saldo, OC e pagamento.',
  89  |     recommendation: 'Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes.'
  90  |   }, async () => {
  91  |     await gotoMenu(page, ['Orçamento', 'Itens Orçados']);
  92  |     await clickAny(page, ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  93  |     await fillField(page, ['descricao', 'descrição', 'item', 'nome'], data.budgetItem);
  94  |     await fillField(page, ['obra'], data.work);
  95  |     await fillField(page, ['centro', 'centro de custo'], data.costCenter);
  96  |     await fillField(page, ['categoria'], data.categories[1]);
  97  |     await fillField(page, ['unidade de medida', 'unidade'], 'un');
  98  |     await fillField(page, ['quantidade'], data.money.budgetQuantity);
  99  |     await fillField(page, ['valor unitario', 'valor unitário', 'valor'], data.money.budgetUnitValue);
  100 |     await submitForm(page);
  101 |     await expect(byText(page, data.budgetItem)).toBeVisible();
  102 |     await assertPersistedAfterRefresh(page, data.budgetItem);
  103 |     await expect(page.locator('body')).toHaveText(/saldo|comprometido|pago|previsto|orçado|orcado/i);
  104 |   });
  105 | });
  106 | 
  107 | test('CT012-CT019 - integrated procurement, payment, dashboard and audit flow', async ({ page }) => {
  108 |   await stepWithDiagnostic(page, {
  109 |     id: 'CT012-REQUISICAO-SALDO',
  110 |     severity: 'critica',
  111 |     expected: 'Requisicao dentro do saldo segue para aprovacao; acima do saldo fica bloqueada ou sinalizada.',
  112 |     impact: 'Permitir compra acima do saldo rompe controle financeiro da obra.',
  113 |     recommendation: 'Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes.'
  114 |   }, async () => {
  115 |     await gotoMenu(page, ['Suprimentos', 'Requisições']);
  116 |     await clickAny(page, ['Novo', 'Adicionar', 'Criar']);
  117 |     await chooseFirstAvailableOption(page, ['Obra']);
  118 |     await chooseFirstAvailableOption(page, ['Centro de custo']);
  119 |     await fillField(page, ['Justificativa'], data.requisition);
  120 |     await chooseFirstAvailableOption(page, ['Item orcado', 'Item orçado']);
  121 |     await fillField(page, ['Qtd.'], data.money.requestQuantity);
  122 |     await fillField(page, ['Vlr unit.'], data.money.requestEstimatedValue);
  123 |     await submitForm(page);
  124 |     await clickAny(page, ['Enviar para aprovação', 'Enviar', 'Solicitar aprovação']);
> 125 |     await expect(byText(page, data.requisition)).toBeVisible();
      |                                                  ^ Error: expect(locator).toBeVisible() failed
  126 | 
  127 |     await clickAny(page, ['Novo', 'Adicionar', 'Criar']);
  128 |     await chooseFirstAvailableOption(page, ['Obra']);
  129 |     await chooseFirstAvailableOption(page, ['Centro de custo']);
  130 |     await fillField(page, ['Justificativa'], data.overBudgetRequisition);
  131 |     await chooseFirstAvailableOption(page, ['Item orcado', 'Item orçado']);
  132 |     await fillField(page, ['Qtd.'], 1);
  133 |     await fillField(page, ['Vlr unit.'], data.money.overBudgetEstimatedValue);
  134 |     await submitForm(page);
  135 |     await expect(page.locator('body')).toHaveText(/saldo|orcamento|orçamento|bloquead|exced|limite|aprov/i);
  136 |   });
  137 | 
  138 |   await stepWithDiagnostic(page, {
  139 |     id: 'CT013-APROVACAO-REQUISICAO',
  140 |     severity: 'alta',
  141 |     expected: 'Aprovacao deve liberar requisicao para cotacao e registrar decisao.',
  142 |     impact: 'Workflow quebrado permite avancos indevidos ou bloqueia compras validas.',
  143 |     recommendation: 'Sincronizar status da aprovacao com a entidade de origem e registrar auditoria.'
  144 |   }, async () => {
  145 |     await gotoMenu(page, ['Workflow', 'Aprovações']);
  146 |     await expect(byText(page, data.requisition)).toBeVisible();
  147 |     await clickAny(page, ['Aprovar']);
  148 |     await fillField(page, ['observacao', 'observação', 'justificativa'], 'Aprovacao automatizada de teste').catch(() => {});
  149 |     await clickAny(page, ['Confirmar', 'Salvar', 'Aprovar']);
  150 |     await gotoMenu(page, ['Suprimentos', 'Requisições']);
  151 |     await expect(page.locator('body')).toHaveText(/aprovad|cotacao|cotação/i);
  152 |   });
  153 | 
  154 |   await stepWithDiagnostic(page, {
  155 |     id: 'CT014-COTACAO',
  156 |     severity: 'alta',
  157 |     expected: 'Cotacao deve comparar fornecedores, registrar vencedor e persistir.',
  158 |     impact: 'Comparativo incorreto afeta decisao de compra e rastreabilidade.',
  159 |     recommendation: 'Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor.'
  160 |   }, async () => {
  161 |     await gotoMenu(page, ['Suprimentos', 'Cotações']);
  162 |     await clickAny(page, ['Novo', 'Adicionar', 'Criar']);
  163 |     await fillField(page, ['descricao', 'descrição'], data.quotation);
  164 |     await fillField(page, ['requisicao', 'requisição'], data.requisition);
  165 |     for (const supplier of data.suppliers) {
  166 |       await fillField(page, ['fornecedor'], supplier).catch(() => {});
  167 |       await clickAny(page, ['Adicionar fornecedor', 'Adicionar']).catch(() => {});
  168 |     }
  169 |     await fillField(page, ['valor'], data.money.supplierA).catch(() => {});
  170 |     await submitForm(page);
  171 |     await clickAny(page, ['Vencedor', 'Selecionar vencedor', 'Concluir']).catch(() => {});
  172 |     await expect(byText(page, data.quotation)).toBeVisible();
  173 |   });
  174 | 
  175 |   await stepWithDiagnostic(page, {
  176 |     id: 'CT015-ORDEM-COMPRA',
  177 |     severity: 'critica',
  178 |     expected: 'OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto.',
  179 |     impact: 'Sem comprometimento do orcamento nao ha controle real de compras.',
  180 |     recommendation: 'Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido.'
  181 |   }, async () => {
  182 |     await gotoMenu(page, ['Suprimentos', 'Ordens de Compra']);
  183 |     await clickAny(page, ['Novo', 'Gerar', 'Criar']);
  184 |     await fillField(page, ['cotacao', 'cotação'], data.quotation);
  185 |     await fillField(page, ['descricao', 'descrição'], data.purchaseOrder).catch(() => {});
  186 |     await fillField(page, ['previsao', 'previsão', 'entrega'], '31/12/2026').catch(() => {});
  187 |     await fillField(page, ['condicao', 'condição'], 'Pagamento teste').catch(() => {});
  188 |     await submitForm(page);
  189 |     await clickAny(page, ['Emitir', 'Concluir', 'Avançar', 'Avancar']).catch(() => {});
  190 |     await expect(page.locator('body')).toHaveText(/comprometido|ordem|oc|conta/i);
  191 |   });
  192 | 
  193 |   await stepWithDiagnostic(page, {
  194 |     id: 'CT017-CT018-FINANCEIRO-PAGAMENTO',
  195 |     severity: 'critica',
  196 |     expected: 'Conta a pagar e pagamentos devem atualizar saldo, status, orcamento e custo real.',
  197 |     impact: 'Erro em pagamento distorce custo real, dashboard e tomada de decisao.',
  198 |     recommendation: 'Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard.'
  199 |   }, async () => {
  200 |     await gotoMenu(page, ['Financeiro', 'Contas a Pagar']);
  201 |     await expect(page.locator('body')).toHaveText(/pendente|provisionado|previsto|pago|saldo|conta/i);
  202 |     await gotoMenu(page, ['Financeiro', 'Pagamentos']);
  203 |     await clickAny(page, ['Novo', 'Registrar', 'Adicionar']);
  204 |     await fillField(page, ['conta'], data.purchaseOrder).catch(() => {});
  205 |     await fillField(page, ['valor'], data.money.paymentPartial);
  206 |     await fillField(page, ['data'], '17/06/2026').catch(() => {});
  207 |     await submitForm(page);
  208 |     await expect(page.locator('body')).toHaveText(/parcial|saldo|pago|pagamento/i);
  209 | 
  210 |     await clickAny(page, ['Novo', 'Registrar', 'Adicionar']);
  211 |     await fillField(page, ['conta'], data.purchaseOrder).catch(() => {});
  212 |     await fillField(page, ['valor'], data.money.overBudgetEstimatedValue);
  213 |     await submitForm(page);
  214 |     await expect(page.locator('body')).toHaveText(/saldo|exced|maior|limite|erro|bloque/i);
  215 |   });
  216 | 
  217 |   await stepWithDiagnostic(page, {
  218 |     id: 'CT019-DASHBOARD-AUDITORIA',
  219 |     severity: 'alta',
  220 |     expected: 'Dashboard e auditoria devem refletir compra, pagamentos, aprovacoes e custo real.',
  221 |     impact: 'Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade.',
  222 |     recommendation: 'Corrigir agregacoes do dashboard e garantir eventos de auditoria para criacao, edicao, aprovacao e pagamento.'
  223 |   }, async () => {
  224 |     await gotoMenu(page, ['Dashboard']);
  225 |     await expect(page.locator('body')).toHaveText(/orcado|orçado|comprometido|pago|saldo|custo/i);
```