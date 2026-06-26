# CT017 - Contas a pagar

## Modulo
Financeiro > Contas a Pagar

## Objetivo
Validar conta gerada por OC, criacao manual quando aplicavel, status financeiros, filtros, edicao, exclusao/cancelamento e reflexo no dashboard.

## Pre-condicoes
- CT015 aprovado.
- Usuario administrador ou Financeiro autenticado.

## Dados de teste
- OC: `AUTO-4S-${RUN_ID} OC`
- Conta manual: `AUTO-4S-${RUN_ID} Conta`
- Obra, centro, fornecedor e categoria do fluxo.
- Valor previsto: valor da OC ou valor manual controlado.
- Vencimento: data futura para pendente; data vencida para validar atrasado quando seguro.

## Cenarios e passos
### Cenario 1 - Validar conta automatica da OC
1. Acessar Financeiro > Contas a Pagar.
2. Pesquisar pela OC, fornecedor ou prefixo.
3. Abrir conta encontrada.
4. Conferir origem, obra, centro de custo, fornecedor, categoria, valor previsto e vencimento.

Resultado esperado: conta automatica da OC aparece na lista quando regra do APP preve geracao automatica.

### Cenario 2 - Criar conta manual quando aplicavel
1. Acionar `Novo`, `Adicionar` ou `Criar`.
2. Informar descricao da conta.
3. Selecionar obra, centro, fornecedor e categoria.
4. Informar valor e vencimento.
5. Salvar.
6. Confirmar conta na listagem.

Resultado esperado: conta manual de teste pode ser criada se o modulo permitir controle manual.

### Cenario 3 - Validar status financeiro
1. Conferir status inicial da conta.
2. Identificar nomenclaturas disponiveis: previsto, provisionado, pendente, parcialmente pago, pago, atrasado ou cancelado.
3. Registrar status e saldo em aberto.

Resultado esperado: status e saldo devem ser coerentes com pagamentos e vencimento.

### Cenario 4 - Validar filtros
1. Aplicar filtro por unidade, se disponivel.
2. Aplicar filtro por obra.
3. Aplicar filtro por fornecedor.
4. Aplicar filtro por categoria.
5. Aplicar filtro por status.
6. Aplicar filtro por periodo.
7. Limpar filtros.

Resultado esperado: filtros funcionam especialmente por obra, fornecedor, periodo e categoria quando disponiveis, sem erro tecnico.

### Cenario 5 - Edicao e exclusao/cancelamento
1. Abrir conta de teste.
2. Editar vencimento, observacao ou campo permitido.
3. Salvar e validar persistencia.
4. Tentar excluir, cancelar ou inativar conta de teste.
5. Verificar tratamento de pagamentos vinculados, se existirem.

Resultado esperado: edicao e exclusao/cancelamento funcionam ou exibem bloqueio claro. Pagamentos vinculados devem ser tratados corretamente.

### Cenario 6 - Reflexo no Dashboard
1. Acessar Dashboard.
2. Conferir contas a pagar da semana, contas atrasadas ou indicadores financeiros relacionados.

Resultado esperado: dashboard financeiro reflete a conta.

## Evidencias obrigatorias
- Conta da OC ou regra documentada.
- Conta manual, se aplicavel.
- Status e saldo em aberto.
- Filtros aplicados.
- Reflexo no Dashboard.

## Severidade
Critica. Sem conta a pagar rastreavel, o financeiro nao consegue programar ou reconciliar pagamentos.
