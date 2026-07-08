# Relatorio de Diagnostico 4S

Gerado em: 2026-07-07T17:48:20.481Z

## Sumario

Casos Playwright: 22. Falhas: 1. Aprovados: 21.

Status CT001-CT022: aprovado 14, reprovado 1, bloqueado 7, nao aplicavel 0.

Problemas registrados: 8.

## Matriz CT001-CT022

| CT | Status | Severidade | Titulo | Dependencias | Obtido | Evidencia | Recomendacao |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CT001 | aprovado | critica | Login valido, logout, login invalido e sessao expirada quando observavel |  | Comportamento observado conforme esperado. |  | Confirmar credenciais, invalidacao de sessao e mensagens de erro de autenticacao. |
| CT002 | aprovado | alta | Criacao, edicao, inativacao e login bloqueado de usuario inativo |  | Comportamento observado conforme esperado. |  | Revisar matriz de perfis, status de usuario e validacao de login no backend. |
| CT003 | aprovado | media | Atalhos da tela Cadastros |  | Comportamento observado conforme esperado. |  | Corrigir links/rotas dos cards ou botoes da tela Cadastros. |
| CT004 | aprovado | alta | Cliente e contrato com edicao, persistencia e vinculo |  | Comportamento observado conforme esperado. |  | Corrigir persistencia e relacionamento entre cliente e contrato. |
| CT005 | aprovado | alta | Unidade, obra e centro de custo | CT004 | Comportamento observado conforme esperado. |  | Revisar obrigatoriedade, vinculos e persistencia de obras/centros. |
| CT006 | aprovado | media | Fornecedores |  | Comportamento observado conforme esperado. |  | Garantir cadastro e selecao de fornecedores ativos em cotacoes. |
| CT007 | aprovado | media | Categorias orcamentarias |  | Comportamento observado conforme esperado. |  | Corrigir cadastro, listagem e uso das categorias nos selects de movimento. |
| CT008 | aprovado | critica | Item orcado com previsto, saldo, comprometido e pago | CT004, CT005, CT007 | Comportamento observado conforme esperado. |  | Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes. |
| CT009 | aprovado | critica | Alteracao de orcamento protegida por usuario comum | CT002, CT008 | Comportamento observado conforme esperado. |  | Bloquear edicao direta para perfis nao autorizados e encaminhar solicitacao ao Workflow > Aprovacoes. |
| CT010 | aprovado | critica | Exclusao de item orcado por usuario comum e administrador | CT002, CT008 | Comportamento observado conforme esperado. |  | Exigir aprovacao administrativa e auditar exclusoes de itens orcados. |
| CT011 | aprovado | media | Colaborador, cargo/faixa e alocacao quando a UI permitir | CT005 | Comportamento observado conforme esperado. |  | Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade. |
| CT012 | reprovado | critica | Requisicao dentro do saldo e acima do saldo | CT008 | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByRole('row').filter({ hasText: 'AUTO-4S-20260707143527 Obra' }).filter({ hasText: 'AUTO-4S-20260707143527 Centro' }).filter({ hasText: 'AUTO-4S-20260707143527 Item orcado material' }).filter({ has: getByRole('button', { name: /enviar.*aprova\|solicitar.*aprova/i }) }).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByRole('row').filter({ hasText: 'AUTO-4S-20260707143527 Obra' }).filter({ hasText: 'AUTO-4S-20260707143527 Centro' }).filter({ hasText: 'AUTO-4S-20260707143527 Item orcado material' }).filter({ has: getByRole('button', { name: /enviar.*aprova\|solicitar.*aprova/i }) }).first()[22m<br> | /home/colatto/repo/R3/test4s/test-results/CT012-REQUISICAO-SALDO.png | Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes. |
| CT013 | bloqueado | alta | Aprovacao e rejeicao de requisicao | CT012 | Caso bloqueado por dependencia CT012 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. |
| CT014 | bloqueado | alta | Cotacao com 3 fornecedores, comparativo e vencedor | CT006, CT013 | Caso bloqueado por dependencia CT013 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT013 e reexecutar este fluxo. |
| CT015 | bloqueado | critica | Ordem de compra e comprometimento do orcamento | CT014 | Caso bloqueado por dependencia CT014 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo. |
| CT016 | bloqueado | media | Edicao/exclusao/cancelamento de requisicao, cotacao e OC quando permitido | CT012, CT014, CT015 | Caso bloqueado por dependencia CT012 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. |
| CT017 | bloqueado | critica | Contas a pagar, status e filtros | CT015 | Caso bloqueado por dependencia CT015 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. |
| CT018 | bloqueado | critica | Pagamento parcial, final e tentativa acima do saldo | CT017 | Caso bloqueado por dependencia CT017 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo. |
| CT019 | bloqueado | alta | Dashboard financeiro apos compra/pagamento/mao de obra | CT011, CT018 | Caso bloqueado por dependencia CT018 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT018 e reexecutar este fluxo. |
| CT020 | aprovado | alta | Workflow com perfil correto/incorreto, aprovacao e rejeicao | CT002 | Comportamento observado conforme esperado. |  | Aplicar autorizacao no backend e esconder/desabilitar acoes no frontend para perfis sem permissao. |
| CT021 | aprovado | media | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes | CT020 | Comportamento observado conforme esperado. |  | Garantir eventos de auditoria para entidades financeiras, cadastros e workflow. |
| CT022 | aprovado | alta | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx |  | Comportamento observado conforme esperado. |  | Corrigir rota, permissao, carregamento de dados ou componente frontend da tela afetada. |

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT012-REQUISICAO-SALDO | critica | CT012 | https://4s.ruatrez.com/requisicoes | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT012" e observar o resultado registrado. | Requisicao dentro do saldo deve seguir para aprovacao; acima do saldo deve ser bloqueada ou sinalizada. | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByRole('row').filter({ hasText: 'AUTO-4S-20260707143527 Obra' }).filter({ hasText: 'AUTO-4S-20260707143527 Centro' }).filter({ hasText: 'AUTO-4S-20260707143527 Item orcado material' }).filter({ has: getByRole('button', { name: /enviar.*aprova\|solicitar.*aprova/i }) }).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByRole('row').filter({ hasText: 'AUTO-4S-20260707143527 Obra' }).filter({ hasText: 'AUTO-4S-20260707143527 Centro' }).filter({ hasText: 'AUTO-4S-20260707143527 Item orcado material' }).filter({ has: getByRole('button', { name: /enviar.*aprova\|solicitar.*aprova/i }) }).first()[22m<br> | Permitir compra acima do saldo rompe controle financeiro da obra. | /home/colatto/repo/R3/test4s/test-results/CT012-REQUISICAO-SALDO.png | Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes. | reprovado |
| CT015-ORDEM-COMPRA | critica | CT015 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT015" e observar o resultado registrado. | OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto. | Caso bloqueado por dependencia CT014 registrada como bloqueado. | Sem comprometimento do orcamento nao ha controle real de compras. |  | Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo. | bloqueado |
| CT017-CONTAS-PAGAR | critica | CT017 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT017" e observar o resultado registrado. | Contas a pagar devem exibir status e filtros funcionais apos OC. | Caso bloqueado por dependencia CT015 registrada como bloqueado. | Sem conta a pagar rastreavel o financeiro nao consegue programar ou reconciliar pagamentos. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. | bloqueado |
| CT018-PAGAMENTOS | critica | CT018 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT018" e observar o resultado registrado. | Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada. | Caso bloqueado por dependencia CT017 registrada como bloqueado. | Erro em pagamento distorce custo real, dashboard e tomada de decisao. |  | Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo. | bloqueado |
| CT013-APROVACAO-REJEICAO-REQUISICAO | alta | CT013 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT013" e observar o resultado registrado. | Aprovacao deve liberar requisicao para cotacao e rejeicao deve encerrar fluxo com decisao auditavel. | Caso bloqueado por dependencia CT012 registrada como reprovado. | Workflow quebrado permite avancos indevidos ou bloqueia compras validas. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. | bloqueado |
| CT014-COTACAO | alta | CT014 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT014" e observar o resultado registrado. | Cotacao deve comparar fornecedores, registrar vencedor e persistir. | Caso bloqueado por dependencia CT013 registrada como bloqueado. | Comparativo incorreto afeta decisao de compra e rastreabilidade. |  | Corrigir primeiro o caso raiz CT013 e reexecutar este fluxo. | bloqueado |
| CT019-DASHBOARD-FINANCEIRO | alta | CT019 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT019" e observar o resultado registrado. | Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos. | Caso bloqueado por dependencia CT018 registrada como bloqueado. | Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade. |  | Corrigir primeiro o caso raiz CT018 e reexecutar este fluxo. | bloqueado |
| CT016-EDICAO-CANCELAMENTO-DOCUMENTOS | media | CT016 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT016" e observar o resultado registrado. | Requisicao, cotacao e OC devem permitir edicao/cancelamento quando a regra permitir ou exibir bloqueio de negocio. | Caso bloqueado por dependencia CT012 registrada como reprovado. | Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. | bloqueado |

## Detalhes Dos Desvios

### CT012-REQUISICAO-SALDO - critica

- Caso: CT012
- Localizacao: https://4s.ruatrez.com/requisicoes
- Perfil: administrador
- Massa: AUTO-4S-20260707143527
- Passos para reproduzir: Executar o caso automatizado "CT012" e observar o resultado registrado.
- Esperado: Requisicao dentro do saldo deve seguir para aprovacao; acima do saldo deve ser bloqueada ou sinalizada.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByRole('row').filter({ hasText: 'AUTO-4S-20260707143527 Obra' }).filter({ hasText: 'AUTO-4S-20260707143527 Centro' }).filter({ hasText: 'AUTO-4S-20260707143527 Item orcado material' }).filter({ has: getByRole('button', { name: /enviar.*aprova|solicitar.*aprova/i }) }).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" with timeout 10000ms[22m
[2m  - waiting for getByRole('row').filter({ hasText: 'AUTO-4S-20260707143527 Obra' }).filter({ hasText: 'AUTO-4S-20260707143527 Centro' }).filter({ hasText: 'AUTO-4S-20260707143527 Item orcado material' }).filter({ has: getByRole('button', { name: /enviar.*aprova|solicitar.*aprova/i }) }).first()[22m

- Impacto funcional e negocio: Permitir compra acima do saldo rompe controle financeiro da obra.
- Recomendacao: Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT012-REQUISICAO-SALDO.png

### CT015-ORDEM-COMPRA - critica

- Caso: CT015
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260707143527
- Passos para reproduzir: Executar o caso automatizado "CT015" e observar o resultado registrado.
- Esperado: OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto.
- Obtido: Caso bloqueado por dependencia CT014 registrada como bloqueado.
- Impacto funcional e negocio: Sem comprometimento do orcamento nao ha controle real de compras.
- Recomendacao: Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT017-CONTAS-PAGAR - critica

- Caso: CT017
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260707143527
- Passos para reproduzir: Executar o caso automatizado "CT017" e observar o resultado registrado.
- Esperado: Contas a pagar devem exibir status e filtros funcionais apos OC.
- Obtido: Caso bloqueado por dependencia CT015 registrada como bloqueado.
- Impacto funcional e negocio: Sem conta a pagar rastreavel o financeiro nao consegue programar ou reconciliar pagamentos.
- Recomendacao: Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT018-PAGAMENTOS - critica

- Caso: CT018
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260707143527
- Passos para reproduzir: Executar o caso automatizado "CT018" e observar o resultado registrado.
- Esperado: Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada.
- Obtido: Caso bloqueado por dependencia CT017 registrada como bloqueado.
- Impacto funcional e negocio: Erro em pagamento distorce custo real, dashboard e tomada de decisao.
- Recomendacao: Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT013-APROVACAO-REJEICAO-REQUISICAO - alta

- Caso: CT013
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260707143527
- Passos para reproduzir: Executar o caso automatizado "CT013" e observar o resultado registrado.
- Esperado: Aprovacao deve liberar requisicao para cotacao e rejeicao deve encerrar fluxo com decisao auditavel.
- Obtido: Caso bloqueado por dependencia CT012 registrada como reprovado.
- Impacto funcional e negocio: Workflow quebrado permite avancos indevidos ou bloqueia compras validas.
- Recomendacao: Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT014-COTACAO - alta

- Caso: CT014
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260707143527
- Passos para reproduzir: Executar o caso automatizado "CT014" e observar o resultado registrado.
- Esperado: Cotacao deve comparar fornecedores, registrar vencedor e persistir.
- Obtido: Caso bloqueado por dependencia CT013 registrada como bloqueado.
- Impacto funcional e negocio: Comparativo incorreto afeta decisao de compra e rastreabilidade.
- Recomendacao: Corrigir primeiro o caso raiz CT013 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT019-DASHBOARD-FINANCEIRO - alta

- Caso: CT019
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260707143527
- Passos para reproduzir: Executar o caso automatizado "CT019" e observar o resultado registrado.
- Esperado: Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos.
- Obtido: Caso bloqueado por dependencia CT018 registrada como bloqueado.
- Impacto funcional e negocio: Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade.
- Recomendacao: Corrigir primeiro o caso raiz CT018 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT016-EDICAO-CANCELAMENTO-DOCUMENTOS - media

- Caso: CT016
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260707143527
- Passos para reproduzir: Executar o caso automatizado "CT016" e observar o resultado registrado.
- Esperado: Requisicao, cotacao e OC devem permitir edicao/cancelamento quando a regra permitir ou exibir bloqueio de negocio.
- Obtido: Caso bloqueado por dependencia CT012 registrada como reprovado.
- Impacto funcional e negocio: Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro.
- Recomendacao: Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

