# CT018 - Pagamentos

## Modulo
Financeiro > Pagamentos

## Objetivo
Validar pagamento parcial, pagamento final, bloqueio de pagamento acima do saldo, edicao/exclusao de pagamento e atualizacao de conta, orcamento, custo real e dashboard.

## Pre-condicoes
- CT017 aprovado.
- Existir conta a pagar com saldo aberto.
- Usuario administrador ou Financeiro autenticado.

## Dados de teste
- Conta vinculada a OC: `AUTO-4S-${RUN_ID} OC` ou conta gerada.
- Pagamento: `AUTO-4S-${RUN_ID} Pagamento`
- Valor parcial: `500`
- Valor final: `675`
- Valor excedente: `999999`
- Datas de pagamento: datas validas aceitas pelo APP.

## Cenarios e passos
### Cenario 1 - Registrar pagamento parcial
1. Acessar Financeiro > Pagamentos.
2. Acionar `Novo`, `Registrar` ou `Adicionar`.
3. Selecionar conta a pagar com saldo aberto.
4. Informar valor `500`.
5. Informar data de pagamento.
6. Informar forma, observacao ou campos obrigatorios.
7. Salvar.
8. Acessar Financeiro > Contas a Pagar.
9. Abrir a conta.

Resultado esperado: conta fica parcialmente paga quando aplicavel, valor pago e saldo em aberto sao atualizados.

### Cenario 2 - Registrar pagamento final
1. Acessar Financeiro > Pagamentos.
2. Registrar novo pagamento para a mesma conta.
3. Informar valor final igual ao saldo remanescente.
4. Salvar.
5. Abrir a conta em Contas a Pagar.

Resultado esperado: conta fica paga/quitada e saldo em aberto fica zero.

### Cenario 3 - Bloquear pagamento acima do saldo
1. Criar ou localizar conta com saldo aberto.
2. Iniciar novo pagamento.
3. Informar valor `999999`, acima do saldo.
4. Tentar salvar.

Resultado esperado: pagamento acima do saldo deve ser bloqueado com mensagem clara. Valor pago, saldo da conta e orcamento nao devem ser corrompidos.

### Cenario 4 - Edicao e exclusao de pagamento
1. Abrir pagamento de teste.
2. Editar data, observacao ou valor quando permitido.
3. Salvar e validar recalculo.
4. Tentar excluir ou cancelar pagamento.
5. Conferir conta e orcamento apos exclusao/cancelamento.

Resultado esperado: edicao e exclusao recalculam conta e orcamento; se bloqueadas, exibem regra clara.

### Cenario 5 - Reflexos financeiros
1. Acessar Orcamento > Itens Orcados.
2. Conferir valor pago no item.
3. Acessar Dashboard.
4. Conferir valor pago, custo real, saldo e indicadores.

Resultado esperado: pagamento atualiza conta, orcamento, custo real da obra e dashboard.

## Evidencias obrigatorias
- Pagamento parcial.
- Pagamento final.
- Bloqueio de excedente.
- Conta recalculada.
- Orcamento/Dashboard atualizados.

## Severidade
Critica. Erro em pagamento distorce custo real, dashboard e tomada de decisao.
