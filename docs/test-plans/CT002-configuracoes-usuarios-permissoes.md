# CT002 - Usuarios e permissoes

## Modulo
Configuracoes > Usuarios

## Objetivo
Validar criacao, edicao, inativacao, tentativa de login com usuario inativo e restricoes de exclusao de usuarios sensiveis.

## Pre-condicoes
- Usuario administrador autenticado.
- CT001 aprovado.

## Dados de teste
- Nome: `AUTO-4S-${RUN_ID} Usuario Engenharia`
- E-mail: `auto-4s-${RUN_ID}@example.test`
- Senha temporaria definida pelo executor.
- Perfil inicial: Engenharia.
- Usuario inativo: `AUTO-4S-${RUN_ID} Usuario Inativo`
- E-mail inativo: `auto-4s-inativo-${RUN_ID}@example.test`

## Cenarios e passos
### Cenario 1 - Criar usuario operacional
1. Acessar Configuracoes > Usuarios.
2. Acionar `Novo`, `Adicionar`, `Cadastrar` ou `Criar`.
3. Preencher nome, e-mail, senha e confirmacao de senha.
4. Selecionar perfil diferente de Administrador, preferencialmente Engenharia.
5. Salvar.
6. Atualizar a pagina.
7. Pesquisar pelo usuario criado.

Resultado esperado: usuario salvo e persistido, com perfil correto e status ativo.

### Cenario 2 - Editar perfil do usuario
1. Abrir o usuario criado.
2. Alterar perfil para Suprimentos, Financeiro ou Operacional.
3. Salvar.
4. Fazer logout.
5. Entrar com o usuario alterado.
6. Validar menus exibidos.

Resultado esperado: permissoes exibidas no menu devem refletir o novo perfil.

### Cenario 3 - Inativar usuario
1. Entrar novamente como administrador.
2. Acessar Configuracoes > Usuarios.
3. Abrir o usuario de teste.
4. Alterar status para Inativo ou acionar `Inativar`.
5. Salvar.
6. Fazer logout.
7. Tentar login com o usuario inativado.

Resultado esperado: usuario inativo nao deve conseguir autenticar ou operar. A mensagem deve indicar bloqueio, inativacao, permissao ou credencial invalida.

### Cenario 4 - Restricoes de exclusao
1. Como administrador, tentar excluir o usuario logado.
2. Tentar excluir o ultimo administrador ativo, se o sistema permitir identificar essa condicao.
3. Tentar excluir ou inativar usuario de teste sem vinculos relevantes.

Resultado esperado: nao deve ser possivel excluir o usuario logado nem o ultimo administrador ativo. Usuario de teste pode ser excluido, cancelado ou inativado conforme regra do APP.

## Evidencias obrigatorias
- Usuario criado na listagem.
- Perfil alterado e menu apos login.
- Login bloqueado para usuario inativo.
- Mensagem de bloqueio para exclusao proibida.

## Severidade
Alta. Permissoes incorretas podem expor financeiro, workflow ou configuracoes a perfis indevidos.
