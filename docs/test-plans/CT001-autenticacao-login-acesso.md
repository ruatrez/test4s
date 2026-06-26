# CT001 - Autenticacao, login e acesso inicial

## Modulo
- Tela de Login
- Menu pos-login: Dashboard e telas permitidas por perfil

## Objetivo
Validar que o acesso ao APP 4S e controlado por credenciais validas, que logout encerra a sessao, que login invalido e bloqueado e que usuarios acessam somente telas permitidas ao seu perfil.

## Pre-condicoes
- Ambiente `BASE_URL` disponivel.
- Credencial administrativa definida em variaveis de ambiente ou fonte segura do projeto.
- Existir ou criar previamente um usuario operacional para validacao de perfil.

## Dados de teste
- Usuario administrador.
- Usuario operacional: `AUTO-4S-${RUN_ID} Usuario Engenharia` ou credencial operacional disponivel.
- Credencial invalida: `invalid@example.test` / `wrong-password`.

## Cenarios e passos
### Cenario 1 - Login valido como administrador
1. Acessar `BASE_URL`.
2. Informar o e-mail do administrador.
3. Informar a senha do administrador.
4. Acionar `Entrar`, `Login` ou `Acessar`.
5. Aguardar carregamento da aplicacao.

Resultado esperado: o Dashboard deve abrir, sem tela em branco, erro tecnico, excecao JavaScript critica ou HTTP 5xx inesperado.

### Cenario 2 - Logout
1. Com o administrador autenticado, acionar o controle de usuario/sair.
2. Confirmar saida, se houver confirmacao.
3. Aguardar retorno para tela de login.

Resultado esperado: formulario de login deve ficar visivel e a sessao anterior nao deve permitir operar o sistema.

### Cenario 3 - Login invalido
1. Na tela de login, informar `invalid@example.test`.
2. Informar `wrong-password`.
3. Acionar login.

Resultado esperado: acesso deve ser negado com mensagem de credencial invalida, erro de senha, bloqueio ou equivalente. O usuario nao deve chegar ao Dashboard.

### Cenario 4 - Login com outro perfil e acesso fora de permissao
1. Entrar com usuario operacional.
2. Registrar quais grupos do menu estao visiveis.
3. Tentar acessar uma tela fora do perfil, como Financeiro, Workflow ou Usuarios, conforme perfil usado.
4. Se a rota puder ser acessada diretamente, tentar abrir pela URL ou pelo menu.

Resultado esperado: usuario acessa somente telas permitidas. Acesso indevido deve ser bloqueado, redirecionado para tela padrao do perfil ou exibir mensagem clara de permissao.

## Evidencias obrigatorias
- Screenshot do Dashboard apos login valido.
- Screenshot da tela de login apos logout.
- Screenshot da mensagem de login invalido.
- Registro do menu disponivel para o usuario operacional.

## Severidade
Critica. Falha de autenticacao ou permissao invalida compromete toda a validacao da Fase 1.
