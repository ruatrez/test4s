# CT013 - Aprovacao de requisicao

## Modulo
Workflow > Aprovacoes e Suprimentos > Requisicoes

## Objetivo
Validar aprovacao e rejeicao de requisicoes, atualizacao do status de origem e rastreabilidade da decisao.

## Pre-condicoes
- CT012 aprovado.
- Existir uma requisicao valida pendente.
- Criar ou possuir uma segunda requisicao pendente para rejeicao.
- Usuario com perfil correto ou administrador autenticado.

## Dados de teste
- Requisicao para aprovar: `AUTO-4S-${RUN_ID} Requisicao`
- Requisicao para rejeitar: `AUTO-4S-${RUN_ID} Requisicao rejeicao`
- Observacao de aprovacao: `Aprovacao automatizada de teste`
- Observacao de rejeicao: `Rejeicao automatizada de teste`

## Cenarios e passos
### Cenario 1 - Aprovar requisicao
1. Acessar Workflow > Aprovacoes.
2. Localizar a requisicao para aprovar.
3. Abrir detalhes da pendencia.
4. Conferir obra, centro, item, valor e solicitante.
5. Acionar `Aprovar`.
6. Informar observacao.
7. Confirmar.
8. Acessar Suprimentos > Requisicoes.
9. Localizar a requisicao aprovada.

Resultado esperado: requisicao aprovada fica com status aprovado/liberado e disponivel para cotacao.

### Cenario 2 - Rejeitar requisicao
1. Criar ou localizar segunda requisicao pendente.
2. Acessar Workflow > Aprovacoes.
3. Localizar a requisicao para rejeitar.
4. Acionar `Rejeitar`.
5. Informar observacao.
6. Confirmar.
7. Acessar Suprimentos > Requisicoes.
8. Verificar status da requisicao rejeitada.

Resultado esperado: requisicao rejeitada nao deve avancar para cotacao.

### Cenario 3 - Historico e auditoria da decisao
1. Acessar Workflow > Auditoria ou historico da requisicao.
2. Pesquisar pelas requisicoes.
3. Conferir usuario, perfil, data, horario e observacao.

Resultado esperado: decisoes devem ficar registradas com dados suficientes para rastreabilidade.

## Evidencias obrigatorias
- Pendencia antes da decisao.
- Status aprovado na origem.
- Status rejeitado na origem.
- Historico/auditoria das decisoes.

## Severidade
Alta. Workflow quebrado permite avancos indevidos ou bloqueia compras validas.
