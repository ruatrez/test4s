# CT008 - Orcamento base da obra

## Modulo
Orcamento > Itens Orcados

## Objetivo
Validar criacao de item orcado vinculado a obra, centro de custo e categoria, calculo de valor previsto, saldo, comprometido, pago e disponibilidade para requisicoes.

## Pre-condicoes
- CT004 aprovado.
- CT005 aprovado.
- CT007 aprovado.
- Usuario administrador autenticado.

## Dados de teste
- Obra: `AUTO-4S-${RUN_ID} Obra`
- Centro de custo: `AUTO-4S-${RUN_ID} Centro`
- Categoria: `AUTO-4S-${RUN_ID} Materiais`
- Item: `AUTO-4S-${RUN_ID} Item orcado material`
- Unidade de medida: `un`
- Quantidade prevista: `100`
- Valor unitario previsto: `120`
- Valor total esperado: `12000`

## Cenarios e passos
### Cenario 1 - Criar item orcado
1. Acessar Orcamento > Itens Orcados.
2. Acionar `Novo`, `Adicionar`, `Cadastrar` ou `Criar`.
3. Informar descricao do item.
4. Selecionar obra.
5. Selecionar centro de custo.
6. Selecionar categoria.
7. Informar unidade de medida `un`.
8. Informar quantidade `100`.
9. Informar valor unitario `120`.
10. Salvar.

Resultado esperado: item orcado criado e exibido na listagem.

### Cenario 2 - Validar calculos iniciais
1. Abrir o item criado ou observar resumo da listagem.
2. Conferir valor previsto total.
3. Conferir saldo inicial.
4. Conferir comprometido.
5. Conferir pago.

Resultado esperado: valor previsto deve ser `12000`. Saldo inicial deve ser igual ao previsto quando nao houver movimentacao. Comprometido e pago devem iniciar zerados ou equivalentes a nomenclatura do APP.

### Cenario 3 - Persistencia e disponibilidade
1. Atualizar a pagina.
2. Confirmar item orcado.
3. Fazer logout e login.
4. Acessar Orcamento > Itens Orcados.
5. Confirmar item.
6. Acessar Suprimentos > Requisicoes.
7. Iniciar nova requisicao sem salvar se nao for executar fluxo.
8. Confirmar item disponivel para selecao.

Resultado esperado: item persiste e fica disponivel para requisicoes.

## Evidencias obrigatorias
- Item criado.
- Calculo de previsto, saldo, comprometido e pago.
- Item disponivel em Requisicoes.

## Severidade
Critica. Erro no orcamento base compromete controle de saldo, OC e pagamento.
