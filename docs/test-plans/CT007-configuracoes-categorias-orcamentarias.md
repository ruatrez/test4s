# CT007 - Categorias orcamentarias

## Modulo
Configuracoes > Categorias Orc.

## Objetivo
Validar criacao, edicao, disponibilidade em orcamento e movimentos, e exclusao/cancelamento de categorias.

## Pre-condicoes
- Usuario administrador autenticado.
- CT001 aprovado.

## Dados de teste
- `AUTO-4S-${RUN_ID} Mao de obra`
- `AUTO-4S-${RUN_ID} Materiais`
- `AUTO-4S-${RUN_ID} Equipamentos`
- `AUTO-4S-${RUN_ID} Subempreiteiros`
- `AUTO-4S-${RUN_ID} Custos indiretos`

## Cenarios e passos
### Cenario 1 - Criar categorias minimas
1. Acessar Configuracoes > Categorias Orc.
2. Acionar criacao de categoria.
3. Preencher nome ou descricao da categoria `Mao de obra`.
4. Preencher status Ativo, tipo ou campos obrigatorios exibidos.
5. Salvar.
6. Repetir para Materiais, Equipamentos, Subempreiteiros e Custos indiretos.
7. Confirmar as cinco categorias na listagem.

Resultado esperado: categorias salvas corretamente e visiveis na listagem.

### Cenario 2 - Editar categoria
1. Abrir categoria Materiais.
2. Alterar descricao, codigo ou observacao.
3. Salvar.
4. Atualizar a pagina.
5. Confirmar alteracao.

Resultado esperado: edicao deve persistir.

### Cenario 3 - Disponibilidade em orcamento e movimentos
1. Acessar Orcamento > Itens Orcados.
2. Iniciar criacao de item orcado.
3. Abrir campo de categoria.
4. Confirmar categorias criadas disponiveis.
5. Acessar Suprimentos > Requisicoes e Financeiro > Contas a Pagar.
6. Confirmar uso das categorias em filtros ou classificacoes quando disponiveis.

Resultado esperado: categorias ficam disponiveis para itens orcados e movimentos financeiros.

### Cenario 4 - Exclusao quando permitido
1. Tentar excluir uma categoria de teste sem movimentacao.
2. Confirmar exclusao quando solicitado.
3. Se vinculada, tentar cancelar ou inativar.
4. Registrar mensagem.

Resultado esperado: exclusao funciona quando permitida; categoria vinculada deve ser bloqueada ou inativada.

## Evidencias obrigatorias
- Cinco categorias criadas.
- Categoria editada.
- Categoria disponivel no Orcamento.
- Resultado da exclusao/inativacao.

## Severidade
Media. Classificacao incorreta prejudica dashboard e saldo por categoria.
