# CT016 - Edicao e exclusao de requisicoes, cotacoes e OC

## Modulo
Suprimentos > Requisicoes, Cotacoes e Ordens de Compra

## Objetivo
Validar edicao, exclusao, cancelamento ou bloqueio por regra de negocio de documentos de suprimentos e efeitos nos vinculos.

## Pre-condicoes
- CT012 aprovado.
- CT014 aprovado.
- CT015 aprovado.
- Existir documentos de teste que possam ser editados/cancelados sem prejudicar o fluxo principal, ou duplicatas especificas para este CT.

## Dados de teste
- Requisicao de teste.
- Cotacao de teste.
- OC de teste.
- Observacao de edicao: `Edicao automatizada`
- Observacao de cancelamento: `Cancelamento automatizado`

## Cenarios e passos
### Cenario 1 - Editar requisicao
1. Acessar Suprimentos > Requisicoes.
2. Abrir requisicao de teste em status que permita edicao.
3. Alterar justificativa, observacao ou campo permitido.
4. Salvar.
5. Atualizar a pagina.
6. Confirmar alteracao.

Resultado esperado: edicao salva corretamente ou sistema informa que status atual bloqueia alteracao.

### Cenario 2 - Excluir ou cancelar requisicao
1. Abrir requisicao de teste.
2. Acionar `Excluir`, `Remover`, `Cancelar` ou `Inativar`.
3. Confirmar a acao.
4. Verificar itens e aprovacoes vinculadas.

Resultado esperado: exclusao/cancelamento deve pedir confirmacao. Filhos vinculados devem ser removidos, cancelados ou preservados conforme regra clara.

### Cenario 3 - Editar e excluir/cancelar cotacao
1. Acessar Suprimentos > Cotacoes.
2. Abrir cotacao de teste.
3. Alterar observacao, proposta ou dado permitido.
4. Salvar e validar persistencia.
5. Tentar excluir/cancelar.
6. Verificar propostas e aprovacoes vinculadas.

Resultado esperado: edicoes persistem. Exclusao/cancelamento trata propostas e aprovacoes vinculadas corretamente.

### Cenario 4 - Editar e excluir/cancelar OC
1. Acessar Suprimentos > Ordens de Compra.
2. Abrir OC de teste.
3. Alterar campo permitido, como previsao ou observacao.
4. Salvar.
5. Tentar excluir/cancelar OC emitida ou com conta vinculada.
6. Conferir orcamento e conta a pagar.

Resultado esperado: se OC for cancelada, valor comprometido deve retornar ao saldo quando aplicavel. Se bloqueada, mensagem deve explicar a regra.

### Cenario 5 - Auditoria
1. Acessar Workflow > Auditoria.
2. Pesquisar prefixo de teste.
3. Conferir eventos de edicao e exclusao/cancelamento.

Resultado esperado: auditoria registra acoes relevantes.

## Evidencias obrigatorias
- Edicao de cada tipo de documento.
- Confirmacao ou bloqueio de exclusao/cancelamento.
- Estado dos filhos vinculados.
- Reversao de comprometido, quando aplicavel.
- Auditoria.

## Severidade
Media. Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro.
