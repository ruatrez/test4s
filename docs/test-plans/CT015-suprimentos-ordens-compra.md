# CT015 - Ordem de compra

## Modulo
Suprimentos > Ordens de Compra

## Objetivo
Validar geracao de ordem de compra a partir da cotacao concluida, comprometimento do orcamento e criacao/controle de conta a pagar.

## Pre-condicoes
- CT014 aprovado, com cotacao concluida e vencedor.
- CT008 aprovado, com item orcado.

## Dados de teste
- Ordem de compra: `AUTO-4S-${RUN_ID} OC`
- Cotacao: `AUTO-4S-${RUN_ID} Cotacao`
- Fornecedor vencedor: Fornecedor A.
- Previsao de entrega: data futura aceita pelo APP.
- Condicao de pagamento: `Pagamento teste`
- Valor esperado comprometido: valor vencedor da cotacao.

## Cenarios e passos
### Cenario 1 - Criar OC a partir da cotacao
1. Acessar Suprimentos > Ordens de Compra.
2. Acionar `Novo`, `Gerar` ou `Criar`.
3. Selecionar cotacao concluida.
4. Conferir fornecedor vencedor.
5. Conferir obra, centro de custo, itens e valor total.
6. Informar previsao de entrega.
7. Informar condicao de pagamento.
8. Salvar.

Resultado esperado: OC criada e vinculada a cotacao.

### Cenario 2 - Avancar status da OC
1. Abrir a OC.
2. Acionar status disponivel, como `Emitir`, `Concluir` ou `Avancar`.
3. Confirmar operacao.
4. Registrar status final.

Resultado esperado: OC deve avancar conforme fluxo do APP sem erro tecnico.

### Cenario 3 - Validar comprometimento do orcamento
1. Acessar Orcamento > Itens Orcados.
2. Abrir item orcado usado na requisicao.
3. Conferir valor comprometido.
4. Conferir saldo disponivel.

Resultado esperado: valor da OC sai do saldo disponivel e entra como comprometido, sem ser pago ainda.

### Cenario 4 - Validar conta a pagar
1. Acessar Financeiro > Contas a Pagar.
2. Pesquisar pela OC, fornecedor ou prefixo.
3. Conferir conta automatica se o APP gerar nesse status.
4. Se nao gerar automaticamente, registrar ponto do fluxo em que a conta deve ser criada ou controlada manualmente.

Resultado esperado: conta a pagar e gerada automaticamente no ponto previsto pelo APP ou existe regra clara para controle manual.

## Evidencias obrigatorias
- OC criada.
- Itens e fornecedor vencedor.
- Comprometido atualizado no orcamento.
- Conta a pagar gerada ou regra documentada.

## Severidade
Critica. Sem comprometimento do orcamento nao ha controle real de compras.
