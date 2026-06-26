# CT014 - Cotacoes e comparativo

## Modulo
Suprimentos > Cotacoes

## Objetivo
Validar criacao de cotacao vinculada a requisicao aprovada, comparativo com tres fornecedores, registro de propostas e fornecedor vencedor.

## Pre-condicoes
- CT006 aprovado, com tres fornecedores ativos.
- CT013 aprovado, com requisicao aprovada.

## Dados de teste
- Cotacao: `AUTO-4S-${RUN_ID} Cotacao`
- Requisicao aprovada: `AUTO-4S-${RUN_ID} Requisicao`
- Fornecedores A, B e C do CT006.
- Proposta A: `1175`
- Proposta B: `1190`
- Proposta C: `1210`
- Vencedor esperado: Fornecedor A, se menor preco for criterio principal.

## Cenarios e passos
### Cenario 1 - Criar cotacao vinculada
1. Acessar Suprimentos > Cotacoes.
2. Acionar `Novo`, `Adicionar` ou `Criar`.
3. Informar descricao da cotacao.
4. Selecionar requisicao aprovada.
5. Conferir itens importados da requisicao.
6. Salvar rascunho, se aplicavel.

Resultado esperado: cotacao vinculada corretamente a requisicao aprovada.

### Cenario 2 - Adicionar fornecedores e propostas
1. Selecionar Fornecedor A.
2. Informar proposta `1175`, prazo e condicao se campos existirem.
3. Adicionar Fornecedor B com proposta `1190`.
4. Adicionar Fornecedor C com proposta `1210`.
5. Salvar.

Resultado esperado: cotacao permite comparativo com no minimo tres fornecedores quando massa de dados permitir.

### Cenario 3 - Comparativo e vencedor
1. Abrir comparativo por item/fornecedor.
2. Conferir que todos os valores estao exibidos.
3. Selecionar fornecedor vencedor.
4. Registrar justificativa, se solicitada.
5. Concluir ou enviar aprovacao conforme fluxo do APP.

Resultado esperado: comparativo exibido, vencedor registrado e decisao persistida.

### Cenario 4 - Persistencia
1. Atualizar a pagina.
2. Pesquisar pela cotacao.
3. Abrir detalhes.
4. Conferir requisicao, propostas e vencedor.

Resultado esperado: dados persistem apos refresh.

### Cenario 5 - Requisicao bloqueada por orcamento
1. Tentar criar cotacao para requisicao excedente do CT012.
2. Registrar comportamento.

Resultado esperado: requisicao bloqueada por orcamento nao permite cotacao.

## Evidencias obrigatorias
- Cotacao criada.
- Tres fornecedores/propostas.
- Comparativo visivel.
- Vencedor registrado.
- Bloqueio para requisicao excedente.

## Severidade
Alta. Comparativo incorreto afeta decisao de compra e rastreabilidade.
