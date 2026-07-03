# Relatorio de Diagnostico 4S

Gerado em: 2026-07-03T21:15:03.971Z

## Sumario

Casos Playwright: 5. Falhas: 2. Aprovados: 3.

Status CT001-CT022: aprovado 7, reprovado 2, bloqueado 13, nao aplicavel 0.

Problemas registrados: 4.

## Matriz CT001-CT022

| CT | Status | Severidade | Titulo | Dependencias | Obtido | Evidencia | Recomendacao |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CT001 | aprovado | critica | Login valido, logout, login invalido e sessao expirada quando observavel |  | Comportamento observado conforme esperado. |  | Confirmar credenciais, invalidacao de sessao e mensagens de erro de autenticacao. |
| CT002 | aprovado | alta | Criacao, edicao, inativacao e login bloqueado de usuario inativo |  | Comportamento observado conforme esperado. |  | Revisar matriz de perfis, status de usuario e validacao de login no backend. |
| CT003 | aprovado | media | Atalhos da tela Cadastros |  | Comportamento observado conforme esperado. |  | Corrigir links/rotas dos cards ou botoes da tela Cadastros. |
| CT004 | reprovado | alta | Cliente e contrato com edicao, persistencia e vinculo |  | Could not find field: Razão Social \| Razao Social | /home/colatto/repo/R3/test4s/test-results/CT004-CLIENTE-CONTRATO.png | Corrigir persistencia e relacionamento entre cliente e contrato. |
| CT005 | bloqueado | alta | Unidade, obra e centro de custo | CT004 | Caso bloqueado por dependencia CT004 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT004 e reexecutar este fluxo. |
| CT006 | aprovado | media | Fornecedores |  | Comportamento observado conforme esperado. |  | Garantir cadastro e selecao de fornecedores ativos em cotacoes. |
| CT007 | reprovado | media | Categorias orcamentarias |  | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260703120000 Materiais/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260703120000 Materiais/i).first()[22m<br> | /home/colatto/repo/R3/test4s/test-results/CT007-CATEGORIAS.png | Corrigir cadastro, listagem e uso das categorias nos selects de movimento. |
| CT008 | bloqueado | critica | Item orcado com previsto, saldo, comprometido e pago | CT004, CT005, CT007 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT009 | bloqueado | critica | Alteracao de orcamento protegida por usuario comum | CT002, CT008 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT010 | bloqueado | critica | Exclusao de item orcado por usuario comum e administrador | CT002, CT008 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT011 | bloqueado | media | Colaborador, cargo/faixa e alocacao quando a UI permitir | CT005 | Caso bloqueado por dependencia CT005 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT005 e reexecutar este fluxo. |
| CT012 | bloqueado | critica | Requisicao dentro do saldo e acima do saldo | CT008 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT013 | bloqueado | alta | Aprovacao e rejeicao de requisicao | CT012 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT014 | bloqueado | alta | Cotacao com 3 fornecedores, comparativo e vencedor | CT006, CT013 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT015 | bloqueado | critica | Ordem de compra e comprometimento do orcamento | CT014 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT016 | bloqueado | media | Edicao/exclusao/cancelamento de requisicao, cotacao e OC quando permitido | CT012, CT014, CT015 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT017 | bloqueado | critica | Contas a pagar, status e filtros | CT015 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT018 | bloqueado | critica | Pagamento parcial, final e tentativa acima do saldo | CT017 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT019 | bloqueado | alta | Dashboard financeiro apos compra/pagamento/mao de obra | CT011, CT018 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT020 | aprovado | alta | Workflow com perfil correto/incorreto, aprovacao e rejeicao | CT002 | Comportamento observado conforme esperado. |  | Aplicar autorizacao no backend e esconder/desabilitar acoes no frontend para perfis sem permissao. |
| CT021 | aprovado | media | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes | CT020 | Comportamento observado conforme esperado. |  | Garantir eventos de auditoria para entidades financeiras, cadastros e workflow. |
| CT022 | aprovado | alta | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx |  | Comportamento observado conforme esperado. |  | Corrigir rota, permissao, carregamento de dados ou componente frontend da tela afetada. |

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT004-CLIENTE-CONTRATO | alta | CT004 | https://4s.ruatrez.com/clientes | administrador | AUTO-4S-20260703120000 | Executar o caso automatizado "CT004" e observar o resultado registrado. | Cliente e contrato devem ser criados, editados, vinculados e persistidos apos refresh. | Could not find field: Razão Social \| Razao Social | Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra. | /home/colatto/repo/R3/test4s/test-results/CT004-CLIENTE-CONTRATO.png | Corrigir persistencia e relacionamento entre cliente e contrato. | reprovado |
| CT005-OBRA-CENTRO | alta | CT005 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260703120000 | Executar o caso automatizado "CT005" e observar o resultado registrado. | Unidade, obra e centro de custo devem ficar disponiveis para os modulos seguintes. | Caso bloqueado por dependencia CT004 registrada como reprovado. | Falha nesse cadastro impede orcamento, requisicao e financeiro. |  | Corrigir primeiro o caso raiz CT004 e reexecutar este fluxo. | bloqueado |
| CT007-CATEGORIAS | media | CT007 | https://4s.ruatrez.com/categorias | administrador | AUTO-4S-20260703120000 | Executar o caso automatizado "CT007" e observar o resultado registrado. | Categorias orcamentarias devem ficar disponiveis para itens e movimentos. | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260703120000 Materiais/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260703120000 Materiais/i).first()[22m<br> | Classificacao financeira incorreta prejudica dashboard e saldo por categoria. | /home/colatto/repo/R3/test4s/test-results/CT007-CATEGORIAS.png | Corrigir cadastro, listagem e uso das categorias nos selects de movimento. | reprovado |
| CT011-COLABORADOR-ALOCACAO | media | CT011 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260703120000 | Executar o caso automatizado "CT011" e observar o resultado registrado. | Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo. | Caso bloqueado por dependencia CT005 registrada como bloqueado. | Mao de obra ausente distorce custo real e dashboard financeiro. |  | Corrigir primeiro o caso raiz CT005 e reexecutar este fluxo. | bloqueado |

## Detalhes Dos Desvios

### CT004-CLIENTE-CONTRATO - alta

- Caso: CT004
- Localizacao: https://4s.ruatrez.com/clientes
- Perfil: administrador
- Massa: AUTO-4S-20260703120000
- Passos para reproduzir: Executar o caso automatizado "CT004" e observar o resultado registrado.
- Esperado: Cliente e contrato devem ser criados, editados, vinculados e persistidos apos refresh.
- Obtido: Could not find field: Razão Social | Razao Social
- Impacto funcional e negocio: Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra.
- Recomendacao: Corrigir persistencia e relacionamento entre cliente e contrato.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT004-CLIENTE-CONTRATO.png

### CT005-OBRA-CENTRO - alta

- Caso: CT005
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260703120000
- Passos para reproduzir: Executar o caso automatizado "CT005" e observar o resultado registrado.
- Esperado: Unidade, obra e centro de custo devem ficar disponiveis para os modulos seguintes.
- Obtido: Caso bloqueado por dependencia CT004 registrada como reprovado.
- Impacto funcional e negocio: Falha nesse cadastro impede orcamento, requisicao e financeiro.
- Recomendacao: Corrigir primeiro o caso raiz CT004 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT007-CATEGORIAS - media

- Caso: CT007
- Localizacao: https://4s.ruatrez.com/categorias
- Perfil: administrador
- Massa: AUTO-4S-20260703120000
- Passos para reproduzir: Executar o caso automatizado "CT007" e observar o resultado registrado.
- Esperado: Categorias orcamentarias devem ficar disponiveis para itens e movimentos.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByText(/AUTO-4S-20260703120000 Materiais/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" with timeout 10000ms[22m
[2m  - waiting for getByText(/AUTO-4S-20260703120000 Materiais/i).first()[22m

- Impacto funcional e negocio: Classificacao financeira incorreta prejudica dashboard e saldo por categoria.
- Recomendacao: Corrigir cadastro, listagem e uso das categorias nos selects de movimento.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT007-CATEGORIAS.png

### CT011-COLABORADOR-ALOCACAO - media

- Caso: CT011
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260703120000
- Passos para reproduzir: Executar o caso automatizado "CT011" e observar o resultado registrado.
- Esperado: Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo.
- Obtido: Caso bloqueado por dependencia CT005 registrada como bloqueado.
- Impacto funcional e negocio: Mao de obra ausente distorce custo real e dashboard financeiro.
- Recomendacao: Corrigir primeiro o caso raiz CT005 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

