# CT012 - Requisicoes com itens e validacao de saldo

## Modulo
Suprimentos > Requisicoes

## Objetivo
Validar criacao de requisicao vinculada ao orcamento, envio para aprovacao e bloqueio/sinalizacao de requisicao acima do saldo.

## Pre-condicoes
- CT008 aprovado, com item orcado de saldo suficiente.
- Usuario administrador ou Engenharia autenticado.

## Dados de teste
- Requisicao valida: `AUTO-4S-${RUN_ID} Requisicao`
- Requisicao excedente: `AUTO-4S-${RUN_ID} Requisicao acima saldo`
- Obra: `AUTO-4S-${RUN_ID} Obra`
- Centro de custo: `AUTO-4S-${RUN_ID} Centro`
- Item orcado: `AUTO-4S-${RUN_ID} Item orcado material`
- Quantidade valida: `10`
- Valor unitario valido: `120`
- Valor excedente: `999999`
- Justificativa: nome da requisicao.

## Cenarios e passos
### Cenario 1 - Criar requisicao dentro do saldo
1. Acessar Suprimentos > Requisicoes.
2. Acionar `Novo`, `Adicionar` ou `Criar`.
3. Selecionar obra.
4. Selecionar centro de custo.
5. Selecionar tipo material, servico ou locacao conforme disponivel.
6. Informar solicitante, se houver.
7. Informar justificativa.
8. Adicionar item vinculado ao item orcado.
9. Informar quantidade `10`.
10. Informar valor unitario ou estimado `120`.
11. Salvar.
12. Acionar `Enviar para aprovacao` ou equivalente.

Resultado esperado: requisicao criada com itens e enviada para aprovacao.

### Cenario 2 - Validar status e disponibilidade para Workflow
1. Permanecer em Requisicoes ou atualizar a pagina.
2. Localizar a requisicao.
3. Conferir status pendente/em aprovacao.
4. Acessar Workflow > Aprovacoes.
5. Confirmar pendencia gerada.

Resultado esperado: requisicao deve aparecer como pendente de aprovacao.

### Cenario 3 - Requisicao acima do saldo
1. Voltar a Suprimentos > Requisicoes.
2. Criar nova requisicao.
3. Selecionar mesma obra, centro e item orcado.
4. Informar quantidade `1`.
5. Informar valor unitario ou estimado `999999`.
6. Salvar ou tentar enviar para aprovacao.

Resultado esperado: requisicao acima do saldo deve ser bloqueada ou claramente sinalizada e nao deve avancar livremente para cotacao.

### Cenario 4 - Cotacao bloqueada para requisicao excedente
1. Acessar Suprimentos > Cotacoes.
2. Tentar criar cotacao para requisicao excedente.
3. Registrar comportamento.

Resultado esperado: requisicao bloqueada por orcamento nao permite abertura de cotacao.

## Evidencias obrigatorias
- Requisicao valida criada e enviada.
- Pendencia no Workflow.
- Bloqueio ou sinalizacao da requisicao excedente.
- Impedimento de cotacao para requisicao excedente.

## Severidade
Critica. Permitir compra acima do saldo rompe controle financeiro da obra.
