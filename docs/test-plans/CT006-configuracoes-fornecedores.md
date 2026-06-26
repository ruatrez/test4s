# CT006 - Fornecedores

## Modulo
Configuracoes > Fornecedores

## Objetivo
Validar cadastro, edicao, disponibilidade em compras e exclusao/cancelamento de fornecedores de teste.

## Pre-condicoes
- Usuario administrador autenticado.
- CT001 aprovado.

## Dados de teste
- `AUTO-4S-${RUN_ID} Fornecedor A`
- `AUTO-4S-${RUN_ID} Fornecedor B`
- `AUTO-4S-${RUN_ID} Fornecedor C`
- E-mails derivados dos nomes ou campos obrigatorios equivalentes.
- Status: Ativo.

## Cenarios e passos
### Cenario 1 - Criar tres fornecedores ativos
1. Acessar Configuracoes > Fornecedores.
2. Acionar criacao de fornecedor.
3. Preencher nome/razao social do Fornecedor A.
4. Preencher documento, e-mail, contato, telefone ou campos obrigatorios exibidos.
5. Selecionar status Ativo, se houver.
6. Salvar.
7. Repetir para Fornecedor B e Fornecedor C.
8. Confirmar os tres na listagem.

Resultado esperado: os tres fornecedores devem ser salvos e ativos.

### Cenario 2 - Editar fornecedor
1. Abrir Fornecedor A.
2. Alterar contato, e-mail ou observacao.
3. Salvar.
4. Atualizar a pagina.
5. Confirmar alteracao.

Resultado esperado: edicao deve persistir.

### Cenario 3 - Disponibilidade em cotacao e ordem de compra
1. Acessar Suprimentos > Cotacoes.
2. Iniciar nova cotacao, sem salvar se nao houver pre-condicao completa.
3. Abrir campo de fornecedor.
4. Confirmar Fornecedor A, B e C disponiveis.
5. Acessar Suprimentos > Ordens de Compra.
6. Confirmar que fornecedor vencedor ou lista de fornecedores esta disponivel quando aplicavel.

Resultado esperado: fornecedores ativos ficam disponiveis para compras.

### Cenario 4 - Exclusao, cancelamento ou inativacao
1. Tentar excluir fornecedor de teste sem movimentacao.
2. Confirmar exclusao quando solicitado.
3. Se houver movimentacao ou bloqueio, tentar cancelar ou inativar.
4. Registrar comportamento.

Resultado esperado: exclusao funciona quando permitida; fornecedor vinculado deve ser bloqueado ou inativado com regra clara.

## Evidencias obrigatorias
- Tres fornecedores salvos.
- Fornecedor editado.
- Fornecedores disponiveis em Cotacoes.
- Resultado da exclusao/inativacao.

## Severidade
Media. Sem fornecedores suficientes, o comparativo de cotacao fica incompleto.
