# Relatorio de Diagnostico 4S

Gerado em: 2026-07-06T23:07:44.350Z

## Sumario

Casos Playwright: 22. Falhas: 4. Aprovados: 18.

Status CT001-CT022: aprovado 7, reprovado 1, bloqueado 14, nao aplicavel 0.

Problemas registrados: 12.

## Matriz CT001-CT022

| CT | Status | Severidade | Titulo | Dependencias | Obtido | Evidencia | Recomendacao |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CT001 | aprovado | critica | Login valido, logout, login invalido e sessao expirada quando observavel |  | Comportamento observado conforme esperado. |  | Confirmar credenciais, invalidacao de sessao e mensagens de erro de autenticacao. |
| CT002 | aprovado | alta | Criacao, edicao, inativacao e login bloqueado de usuario inativo |  | Comportamento observado conforme esperado. |  | Revisar matriz de perfis, status de usuario e validacao de login no backend. |
| CT003 | aprovado | media | Atalhos da tela Cadastros |  | Comportamento observado conforme esperado. |  | Corrigir links/rotas dos cards ou botoes da tela Cadastros. |
| CT004 | reprovado | alta | Cliente e contrato com edicao, persistencia e vinculo |  | Could not find submit control inside the active modal | /home/colatto/repo/R3/test4s/test-results/CT004-CLIENTE-CONTRATO.png | Corrigir persistencia e relacionamento entre cliente e contrato. |
| CT005 | bloqueado | alta | Unidade, obra e centro de custo | CT004 | Caso bloqueado por dependencia CT004 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT004 e reexecutar este fluxo. |
| CT006 | aprovado | media | Fornecedores |  | Comportamento observado conforme esperado. |  | Garantir cadastro e selecao de fornecedores ativos em cotacoes. |
| CT007 | aprovado | media | Categorias orcamentarias |  | Comportamento observado conforme esperado. |  | Corrigir cadastro, listagem e uso das categorias nos selects de movimento. |
| CT008 | bloqueado | critica | Item orcado com previsto, saldo, comprometido e pago | CT004, CT005, CT007 | Caso bloqueado por dependencia CT004 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT004 e reexecutar este fluxo. |
| CT009 | bloqueado | critica | Alteracao de orcamento protegida por usuario comum | CT002, CT008 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT010 | bloqueado | critica | Exclusao de item orcado por usuario comum e administrador | CT002, CT008 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT011 | bloqueado | media | Colaborador, cargo/faixa e alocacao quando a UI permitir | CT005 | Caso bloqueado por dependencia CT005 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT005 e reexecutar este fluxo. |
| CT012 | bloqueado | critica | Requisicao dentro do saldo e acima do saldo | CT008 | Caso bloqueado por dependencia CT008 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. |
| CT013 | bloqueado | alta | Aprovacao e rejeicao de requisicao | CT012 | Caso bloqueado por dependencia CT012 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. |
| CT014 | bloqueado | alta | Cotacao com 3 fornecedores, comparativo e vencedor | CT006, CT013 | Caso bloqueado por dependencia CT013 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT013 e reexecutar este fluxo. |
| CT015 | bloqueado | critica | Ordem de compra e comprometimento do orcamento | CT014 | Caso bloqueado por dependencia CT014 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo. |
| CT016 | bloqueado | media | Edicao/exclusao/cancelamento de requisicao, cotacao e OC quando permitido | CT012, CT014, CT015 | Caso bloqueado por dependencia CT012 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. |
| CT017 | bloqueado | critica | Contas a pagar, status e filtros | CT015 | Caso bloqueado por dependencia CT015 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. |
| CT018 | bloqueado | critica | Pagamento parcial, final e tentativa acima do saldo | CT017 | Caso bloqueado por dependencia CT017 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo. |
| CT019 | bloqueado | alta | Dashboard financeiro apos compra/pagamento/mao de obra | CT011, CT018 | Caso bloqueado por dependencia CT011 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT011 e reexecutar este fluxo. |
| CT020 | bloqueado | alta | Workflow com perfil correto/incorreto, aprovacao e rejeicao | CT002 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT021 | aprovado | media | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes | CT020 | Comportamento observado conforme esperado. |  | Garantir eventos de auditoria para entidades financeiras, cadastros e workflow. |
| CT022 | aprovado | alta | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx |  | Comportamento observado conforme esperado. |  | Corrigir rota, permissao, carregamento de dados ou componente frontend da tela afetada. |

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT008-ORCAMENTO-BASE | critica | CT008 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260706194727 | Executar o caso automatizado "CT008" e observar o resultado registrado. | Item orcado deve calcular valor previsto, saldo, comprometido e pago. | Caso bloqueado por dependencia CT004 registrada como reprovado. | Erro no orcamento base compromete controle de saldo, OC e pagamento. |  | Corrigir primeiro o caso raiz CT004 e reexecutar este fluxo. | bloqueado |
| CT012-REQUISICAO-SALDO | critica | CT012 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260706194727 | Executar o caso automatizado "CT012" e observar o resultado registrado. | Requisicao dentro do saldo deve seguir para aprovacao; acima do saldo deve ser bloqueada ou sinalizada. | Caso bloqueado por dependencia CT008 registrada como bloqueado. | Permitir compra acima do saldo rompe controle financeiro da obra. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. | bloqueado |
| CT015-ORDEM-COMPRA | critica | CT015 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260706194727 | Executar o caso automatizado "CT015" e observar o resultado registrado. | OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto. | Caso bloqueado por dependencia CT014 registrada como bloqueado. | Sem comprometimento do orcamento nao ha controle real de compras. |  | Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo. | bloqueado |
| CT017-CONTAS-PAGAR | critica | CT017 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260706194727 | Executar o caso automatizado "CT017" e observar o resultado registrado. | Contas a pagar devem exibir status e filtros funcionais apos OC. | Caso bloqueado por dependencia CT015 registrada como bloqueado. | Sem conta a pagar rastreavel o financeiro nao consegue programar ou reconciliar pagamentos. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. | bloqueado |
| CT018-PAGAMENTOS | critica | CT018 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260706194727 | Executar o caso automatizado "CT018" e observar o resultado registrado. | Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada. | Caso bloqueado por dependencia CT017 registrada como bloqueado. | Erro em pagamento distorce custo real, dashboard e tomada de decisao. |  | Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo. | bloqueado |
| CT004-CLIENTE-CONTRATO | alta | CT004 | https://4s.ruatrez.com/clientes | administrador | AUTO-4S-20260706194727 | Executar o caso automatizado "CT004" e observar o resultado registrado. | Cliente e contrato devem ser criados, editados, vinculados e persistidos apos refresh. | Could not find submit control inside the active modal | Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra. | /home/colatto/repo/R3/test4s/test-results/CT004-CLIENTE-CONTRATO.png | Corrigir persistencia e relacionamento entre cliente e contrato. | reprovado |
| CT005-OBRA-CENTRO | alta | CT005 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260706194727 | Executar o caso automatizado "CT005" e observar o resultado registrado. | Unidade, obra e centro de custo devem ficar disponiveis para os modulos seguintes. | Caso bloqueado por dependencia CT004 registrada como reprovado. | Falha nesse cadastro impede orcamento, requisicao e financeiro. |  | Corrigir primeiro o caso raiz CT004 e reexecutar este fluxo. | bloqueado |
| CT013-APROVACAO-REJEICAO-REQUISICAO | alta | CT013 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260706194727 | Executar o caso automatizado "CT013" e observar o resultado registrado. | Aprovacao deve liberar requisicao para cotacao e rejeicao deve encerrar fluxo com decisao auditavel. | Caso bloqueado por dependencia CT012 registrada como bloqueado. | Workflow quebrado permite avancos indevidos ou bloqueia compras validas. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. | bloqueado |
| CT014-COTACAO | alta | CT014 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260706194727 | Executar o caso automatizado "CT014" e observar o resultado registrado. | Cotacao deve comparar fornecedores, registrar vencedor e persistir. | Caso bloqueado por dependencia CT013 registrada como bloqueado. | Comparativo incorreto afeta decisao de compra e rastreabilidade. |  | Corrigir primeiro o caso raiz CT013 e reexecutar este fluxo. | bloqueado |
| CT019-DASHBOARD-FINANCEIRO | alta | CT019 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260706194727 | Executar o caso automatizado "CT019" e observar o resultado registrado. | Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos. | Caso bloqueado por dependencia CT011 registrada como bloqueado. | Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade. |  | Corrigir primeiro o caso raiz CT011 e reexecutar este fluxo. | bloqueado |
| CT011-COLABORADOR-ALOCACAO | media | CT011 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260706194727 | Executar o caso automatizado "CT011" e observar o resultado registrado. | Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo. | Caso bloqueado por dependencia CT005 registrada como bloqueado. | Mao de obra ausente distorce custo real e dashboard financeiro. |  | Corrigir primeiro o caso raiz CT005 e reexecutar este fluxo. | bloqueado |
| CT016-EDICAO-CANCELAMENTO-DOCUMENTOS | media | CT016 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260706194727 | Executar o caso automatizado "CT016" e observar o resultado registrado. | Requisicao, cotacao e OC devem permitir edicao/cancelamento quando a regra permitir ou exibir bloqueio de negocio. | Caso bloqueado por dependencia CT012 registrada como bloqueado. | Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. | bloqueado |

## Detalhes Dos Desvios

### CT008-ORCAMENTO-BASE - critica

- Caso: CT008
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260706194727
- Passos para reproduzir: Executar o caso automatizado "CT008" e observar o resultado registrado.
- Esperado: Item orcado deve calcular valor previsto, saldo, comprometido e pago.
- Obtido: Caso bloqueado por dependencia CT004 registrada como reprovado.
- Impacto funcional e negocio: Erro no orcamento base compromete controle de saldo, OC e pagamento.
- Recomendacao: Corrigir primeiro o caso raiz CT004 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT012-REQUISICAO-SALDO - critica

- Caso: CT012
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260706194727
- Passos para reproduzir: Executar o caso automatizado "CT012" e observar o resultado registrado.
- Esperado: Requisicao dentro do saldo deve seguir para aprovacao; acima do saldo deve ser bloqueada ou sinalizada.
- Obtido: Caso bloqueado por dependencia CT008 registrada como bloqueado.
- Impacto funcional e negocio: Permitir compra acima do saldo rompe controle financeiro da obra.
- Recomendacao: Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT015-ORDEM-COMPRA - critica

- Caso: CT015
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260706194727
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
- Massa: AUTO-4S-20260706194727
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
- Massa: AUTO-4S-20260706194727
- Passos para reproduzir: Executar o caso automatizado "CT018" e observar o resultado registrado.
- Esperado: Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada.
- Obtido: Caso bloqueado por dependencia CT017 registrada como bloqueado.
- Impacto funcional e negocio: Erro em pagamento distorce custo real, dashboard e tomada de decisao.
- Recomendacao: Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT004-CLIENTE-CONTRATO - alta

- Caso: CT004
- Localizacao: https://4s.ruatrez.com/clientes
- Perfil: administrador
- Massa: AUTO-4S-20260706194727
- Passos para reproduzir: Executar o caso automatizado "CT004" e observar o resultado registrado.
- Esperado: Cliente e contrato devem ser criados, editados, vinculados e persistidos apos refresh.
- Obtido: Could not find submit control inside the active modal
- Impacto funcional e negocio: Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra.
- Recomendacao: Corrigir persistencia e relacionamento entre cliente e contrato.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT004-CLIENTE-CONTRATO.png

### CT005-OBRA-CENTRO - alta

- Caso: CT005
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260706194727
- Passos para reproduzir: Executar o caso automatizado "CT005" e observar o resultado registrado.
- Esperado: Unidade, obra e centro de custo devem ficar disponiveis para os modulos seguintes.
- Obtido: Caso bloqueado por dependencia CT004 registrada como reprovado.
- Impacto funcional e negocio: Falha nesse cadastro impede orcamento, requisicao e financeiro.
- Recomendacao: Corrigir primeiro o caso raiz CT004 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT013-APROVACAO-REJEICAO-REQUISICAO - alta

- Caso: CT013
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260706194727
- Passos para reproduzir: Executar o caso automatizado "CT013" e observar o resultado registrado.
- Esperado: Aprovacao deve liberar requisicao para cotacao e rejeicao deve encerrar fluxo com decisao auditavel.
- Obtido: Caso bloqueado por dependencia CT012 registrada como bloqueado.
- Impacto funcional e negocio: Workflow quebrado permite avancos indevidos ou bloqueia compras validas.
- Recomendacao: Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT014-COTACAO - alta

- Caso: CT014
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260706194727
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
- Massa: AUTO-4S-20260706194727
- Passos para reproduzir: Executar o caso automatizado "CT019" e observar o resultado registrado.
- Esperado: Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos.
- Obtido: Caso bloqueado por dependencia CT011 registrada como bloqueado.
- Impacto funcional e negocio: Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade.
- Recomendacao: Corrigir primeiro o caso raiz CT011 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT011-COLABORADOR-ALOCACAO - media

- Caso: CT011
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260706194727
- Passos para reproduzir: Executar o caso automatizado "CT011" e observar o resultado registrado.
- Esperado: Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo.
- Obtido: Caso bloqueado por dependencia CT005 registrada como bloqueado.
- Impacto funcional e negocio: Mao de obra ausente distorce custo real e dashboard financeiro.
- Recomendacao: Corrigir primeiro o caso raiz CT005 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT016-EDICAO-CANCELAMENTO-DOCUMENTOS - media

- Caso: CT016
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260706194727
- Passos para reproduzir: Executar o caso automatizado "CT016" e observar o resultado registrado.
- Esperado: Requisicao, cotacao e OC devem permitir edicao/cancelamento quando a regra permitir ou exibir bloqueio de negocio.
- Obtido: Caso bloqueado por dependencia CT012 registrada como bloqueado.
- Impacto funcional e negocio: Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro.
- Recomendacao: Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

