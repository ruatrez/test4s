# CT005 - Obras, unidades e centros de custo

## Modulo
Configuracoes > Obras e Centros

## Objetivo
Validar criacao, edicao, vinculo, persistencia e disponibilidade de unidade, obra e centro de custo nos modulos dependentes.

## Pre-condicoes
- Usuario administrador autenticado.
- CT004 aprovado, com cliente e contrato disponiveis.

## Dados de teste
- Unidade: `AUTO-4S-${RUN_ID} Unidade`
- Obra: `AUTO-4S-${RUN_ID} Obra`
- Centro de custo: `AUTO-4S-${RUN_ID} Centro`
- Cliente e contrato criados no CT004.

## Cenarios e passos
### Cenario 1 - Criar unidade
1. Acessar Configuracoes > Obras e Centros.
2. Acionar criacao de unidade.
3. Preencher nome da unidade e campos obrigatorios.
4. Salvar.
5. Confirmar unidade na listagem.

Resultado esperado: unidade criada e disponivel para vincular obra.

### Cenario 2 - Criar obra vinculada
1. Acionar criacao de obra.
2. Informar nome da obra.
3. Selecionar unidade criada.
4. Selecionar cliente e contrato do CT004, quando campos estiverem disponiveis.
5. Preencher valor contratado ou campos adicionais exigidos.
6. Salvar.
7. Confirmar obra na listagem.

Resultado esperado: obra criada com vinculo correto a unidade, cliente e contrato quando aplicavel.

### Cenario 3 - Criar centro de custo
1. Acionar criacao de centro de custo.
2. Informar nome do centro.
3. Selecionar a obra criada.
4. Salvar.
5. Confirmar centro na listagem.

Resultado esperado: centro de custo vinculado corretamente a obra.

### Cenario 4 - Edicao e persistencia
1. Editar unidade, obra ou centro com uma observacao ou descricao de teste.
2. Salvar.
3. Atualizar a pagina.
4. Fazer logout e login novamente.
5. Confirmar que os registros continuam disponiveis.

Resultado esperado: registros persistem apos refresh e novo acesso.

### Cenario 5 - Disponibilidade em modulos dependentes
1. Acessar Orcamento > Itens Orcados.
2. Acionar criacao de item.
3. Confirmar que obra e centro podem ser selecionados.
4. Acessar Suprimentos > Requisicoes.
5. Confirmar disponibilidade de obra e centro.
6. Acessar Financeiro > Contas a Pagar.
7. Confirmar filtros ou campos por obra/centro quando disponiveis.

Resultado esperado: obra e centro ficam disponiveis para orcamento, requisicoes e financeiro.

### Cenario 6 - Exclusao quando permitido
1. Tentar excluir registros de teste sem movimentacao.
2. Confirmar exclusao quando solicitado.
3. Se houver bloqueio por vinculo, tentar cancelar ou inativar.
4. Registrar comportamento.

Resultado esperado: exclusao funciona se nao houver vinculo; caso contrario, bloqueio ou cancelamento/inativacao deve ser claro.

## Evidencias obrigatorias
- Unidade, obra e centro criados.
- Vinculo obra/centro visivel.
- Disponibilidade em Orcamento e Suprimentos.
- Mensagem de bloqueio ou confirmacao de exclusao.

## Severidade
Alta. Falha nesse cadastro impede orcamento, requisicao e financeiro.
