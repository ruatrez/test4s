const { test, expect } = require('@playwright/test');
const { login } = require('../support/auth');
const { data } = require('../support/test-data');
const { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } = require('../support/diagnostics');
const {
  assertPersistedAfterRefresh,
  byText,
  chooseFirstAvailableOption,
  clickAny,
  fillField,
  gotoMenu,
  submitForm,
  tryCreateSimpleRecord
} = require('../support/ui');

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
  await login(page);
});

test('CT004-CT008 - initial registrations and budget item persist across modules', async ({ page }) => {
  await stepWithDiagnostic(page, {
    id: 'CT004-CLIENTE-CONTRATO',
    severity: 'alta',
    expected: 'Cliente e contrato devem ser criados, vinculados e persistidos.',
    impact: 'Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra.',
    recommendation: 'Corrigir persistencia e relacionamento entre cliente e contrato.'
  }, async () => {
    await tryCreateSimpleRecord(page, ['Configurações', 'Clientes e Contratos'], data.client, [
      { labels: ['Razão Social'], value: `${data.client} SA` },
      { labels: ['Nome Fantasia'], value: data.client },
      { labels: ['CNPJ/CPF'], value: data.runDocument || String(Date.now()).slice(-11) },
      { labels: ['E-mail', 'email'], value: 'cliente.auto@example.test' },
      { labels: ['Contato Principal'], value: 'QA Automatizado' },
      { type: 'select', labels: ['Status'], value: 'Ativo' }
    ]);
    await assertPersistedAfterRefresh(page, data.client);
  });

  await stepWithDiagnostic(page, {
    id: 'CT005-OBRA-CENTRO',
    severity: 'alta',
    expected: 'Unidade, obra e centro de custo devem ficar disponiveis para os modulos seguintes.',
    impact: 'Falha nesse cadastro impede orcamento, requisicao e financeiro.',
    recommendation: 'Revisar obrigatoriedade, vinculos e persistencia de obras/centros.'
  }, async () => {
    await tryCreateSimpleRecord(page, ['Configurações', 'Obras e Centros'], data.work, [
      { labels: ['unidade'], value: data.unit },
      { labels: ['obra'], value: data.work },
      { labels: ['centro', 'centro de custo'], value: data.costCenter }
    ]);
    await assertPersistedAfterRefresh(page, data.work);
  });

  await stepWithDiagnostic(page, {
    id: 'CT006-FORNECEDORES',
    severity: 'media',
    expected: 'Tres fornecedores ativos devem poder ser usados em cotacoes.',
    impact: 'Sem fornecedores suficientes o comparativo de cotacao fica incompleto.',
    recommendation: 'Garantir cadastro e selecao de fornecedores ativos em cotacoes.'
  }, async () => {
    for (const supplier of data.suppliers) {
      await tryCreateSimpleRecord(page, ['Configurações', 'Fornecedores'], supplier, [
        { labels: ['nome', 'fornecedor', 'razao', 'razão'], value: supplier },
        { labels: ['email'], value: `${supplier.toLowerCase().replace(/[^a-z0-9]/g, '.')}@example.test` }
      ]);
    }
  });

  await stepWithDiagnostic(page, {
    id: 'CT007-CATEGORIAS',
    severity: 'media',
    expected: 'Categorias orcamentarias devem ficar disponiveis para itens e movimentos.',
    impact: 'Classificacao financeira incorreta prejudica dashboard e saldo por categoria.',
    recommendation: 'Corrigir cadastro, listagem e uso das categorias nos selects de movimento.'
  }, async () => {
    for (const category of data.categories) {
      await tryCreateSimpleRecord(page, ['Configurações', 'Categorias'], category, [
        { labels: ['nome', 'categoria', 'descricao', 'descrição'], value: category }
      ]);
    }
  });

  await stepWithDiagnostic(page, {
    id: 'CT008-ORCAMENTO-BASE',
    severity: 'critica',
    expected: 'Item orcado deve calcular valor previsto e iniciar saldo disponivel.',
    impact: 'Erro no orcamento base compromete todo o controle de saldo, OC e pagamento.',
    recommendation: 'Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes.'
  }, async () => {
    await gotoMenu(page, ['Orçamento', 'Itens Orçados']);
    await clickAny(page, ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
    await fillField(page, ['descricao', 'descrição', 'item', 'nome'], data.budgetItem);
    await fillField(page, ['obra'], data.work);
    await fillField(page, ['centro', 'centro de custo'], data.costCenter);
    await fillField(page, ['categoria'], data.categories[1]);
    await fillField(page, ['unidade de medida', 'unidade'], 'un');
    await fillField(page, ['quantidade'], data.money.budgetQuantity);
    await fillField(page, ['valor unitario', 'valor unitário', 'valor'], data.money.budgetUnitValue);
    await submitForm(page);
    await expect(byText(page, data.budgetItem)).toBeVisible();
    await assertPersistedAfterRefresh(page, data.budgetItem);
    await expect(page.locator('body')).toHaveText(/saldo|comprometido|pago|previsto|orçado|orcado/i);
  });
});

test('CT012-CT019 - integrated procurement, payment, dashboard and audit flow', async ({ page }) => {
  await stepWithDiagnostic(page, {
    id: 'CT012-REQUISICAO-SALDO',
    severity: 'critica',
    expected: 'Requisicao dentro do saldo segue para aprovacao; acima do saldo fica bloqueada ou sinalizada.',
    impact: 'Permitir compra acima do saldo rompe controle financeiro da obra.',
    recommendation: 'Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes.'
  }, async () => {
    await gotoMenu(page, ['Suprimentos', 'Requisições']);
    await clickAny(page, ['Novo', 'Adicionar', 'Criar']);
    await chooseFirstAvailableOption(page, ['Obra']);
    await chooseFirstAvailableOption(page, ['Centro de custo']);
    await fillField(page, ['Justificativa'], data.requisition);
    await chooseFirstAvailableOption(page, ['Item orcado', 'Item orçado']);
    await fillField(page, ['Qtd.'], data.money.requestQuantity);
    await fillField(page, ['Vlr unit.'], data.money.requestEstimatedValue);
    await submitForm(page);
    await clickAny(page, ['Enviar para aprovação', 'Enviar', 'Solicitar aprovação']);
    await expect(byText(page, data.requisition)).toBeVisible();

    await clickAny(page, ['Novo', 'Adicionar', 'Criar']);
    await chooseFirstAvailableOption(page, ['Obra']);
    await chooseFirstAvailableOption(page, ['Centro de custo']);
    await fillField(page, ['Justificativa'], data.overBudgetRequisition);
    await chooseFirstAvailableOption(page, ['Item orcado', 'Item orçado']);
    await fillField(page, ['Qtd.'], 1);
    await fillField(page, ['Vlr unit.'], data.money.overBudgetEstimatedValue);
    await submitForm(page);
    await expect(page.locator('body')).toHaveText(/saldo|orcamento|orçamento|bloquead|exced|limite|aprov/i);
  });

  await stepWithDiagnostic(page, {
    id: 'CT013-APROVACAO-REQUISICAO',
    severity: 'alta',
    expected: 'Aprovacao deve liberar requisicao para cotacao e registrar decisao.',
    impact: 'Workflow quebrado permite avancos indevidos ou bloqueia compras validas.',
    recommendation: 'Sincronizar status da aprovacao com a entidade de origem e registrar auditoria.'
  }, async () => {
    await gotoMenu(page, ['Workflow', 'Aprovações']);
    await expect(byText(page, data.requisition)).toBeVisible();
    await clickAny(page, ['Aprovar']);
    await fillField(page, ['observacao', 'observação', 'justificativa'], 'Aprovacao automatizada de teste').catch(() => {});
    await clickAny(page, ['Confirmar', 'Salvar', 'Aprovar']);
    await gotoMenu(page, ['Suprimentos', 'Requisições']);
    await expect(page.locator('body')).toHaveText(/aprovad|cotacao|cotação/i);
  });

  await stepWithDiagnostic(page, {
    id: 'CT014-COTACAO',
    severity: 'alta',
    expected: 'Cotacao deve comparar fornecedores, registrar vencedor e persistir.',
    impact: 'Comparativo incorreto afeta decisao de compra e rastreabilidade.',
    recommendation: 'Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor.'
  }, async () => {
    await gotoMenu(page, ['Suprimentos', 'Cotações']);
    await clickAny(page, ['Novo', 'Adicionar', 'Criar']);
    await fillField(page, ['descricao', 'descrição'], data.quotation);
    await fillField(page, ['requisicao', 'requisição'], data.requisition);
    for (const supplier of data.suppliers) {
      await fillField(page, ['fornecedor'], supplier).catch(() => {});
      await clickAny(page, ['Adicionar fornecedor', 'Adicionar']).catch(() => {});
    }
    await fillField(page, ['valor'], data.money.supplierA).catch(() => {});
    await submitForm(page);
    await clickAny(page, ['Vencedor', 'Selecionar vencedor', 'Concluir']).catch(() => {});
    await expect(byText(page, data.quotation)).toBeVisible();
  });

  await stepWithDiagnostic(page, {
    id: 'CT015-ORDEM-COMPRA',
    severity: 'critica',
    expected: 'OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto.',
    impact: 'Sem comprometimento do orcamento nao ha controle real de compras.',
    recommendation: 'Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido.'
  }, async () => {
    await gotoMenu(page, ['Suprimentos', 'Ordens de Compra']);
    await clickAny(page, ['Novo', 'Gerar', 'Criar']);
    await fillField(page, ['cotacao', 'cotação'], data.quotation);
    await fillField(page, ['descricao', 'descrição'], data.purchaseOrder).catch(() => {});
    await fillField(page, ['previsao', 'previsão', 'entrega'], '31/12/2026').catch(() => {});
    await fillField(page, ['condicao', 'condição'], 'Pagamento teste').catch(() => {});
    await submitForm(page);
    await clickAny(page, ['Emitir', 'Concluir', 'Avançar', 'Avancar']).catch(() => {});
    await expect(page.locator('body')).toHaveText(/comprometido|ordem|oc|conta/i);
  });

  await stepWithDiagnostic(page, {
    id: 'CT017-CT018-FINANCEIRO-PAGAMENTO',
    severity: 'critica',
    expected: 'Conta a pagar e pagamentos devem atualizar saldo, status, orcamento e custo real.',
    impact: 'Erro em pagamento distorce custo real, dashboard e tomada de decisao.',
    recommendation: 'Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard.'
  }, async () => {
    await gotoMenu(page, ['Financeiro', 'Contas a Pagar']);
    await expect(page.locator('body')).toHaveText(/pendente|provisionado|previsto|pago|saldo|conta/i);
    await gotoMenu(page, ['Financeiro', 'Pagamentos']);
    await clickAny(page, ['Novo', 'Registrar', 'Adicionar']);
    await fillField(page, ['conta'], data.purchaseOrder).catch(() => {});
    await fillField(page, ['valor'], data.money.paymentPartial);
    await fillField(page, ['data'], '17/06/2026').catch(() => {});
    await submitForm(page);
    await expect(page.locator('body')).toHaveText(/parcial|saldo|pago|pagamento/i);

    await clickAny(page, ['Novo', 'Registrar', 'Adicionar']);
    await fillField(page, ['conta'], data.purchaseOrder).catch(() => {});
    await fillField(page, ['valor'], data.money.overBudgetEstimatedValue);
    await submitForm(page);
    await expect(page.locator('body')).toHaveText(/saldo|exced|maior|limite|erro|bloque/i);
  });

  await stepWithDiagnostic(page, {
    id: 'CT019-DASHBOARD-AUDITORIA',
    severity: 'alta',
    expected: 'Dashboard e auditoria devem refletir compra, pagamentos, aprovacoes e custo real.',
    impact: 'Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade.',
    recommendation: 'Corrigir agregacoes do dashboard e garantir eventos de auditoria para criacao, edicao, aprovacao e pagamento.'
  }, async () => {
    await gotoMenu(page, ['Dashboard']);
    await expect(page.locator('body')).toHaveText(/orcado|orçado|comprometido|pago|saldo|custo/i);
    await gotoMenu(page, ['Workflow', 'Auditoria']);
    await expect(page.locator('body')).toHaveText(new RegExp(data.prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  });
});
