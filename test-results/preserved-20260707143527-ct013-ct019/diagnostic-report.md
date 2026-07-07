# Relatorio de Diagnostico 4S

Gerado em: 2026-07-07T17:55:16.745Z

## Sumario

Casos Playwright: 7. Falhas: 1. Aprovados: 6.

Status CT001-CT022: aprovado 2, reprovado 1, bloqueado 19, nao aplicavel 0.

Problemas registrados: 5.

## Matriz CT001-CT022

| CT | Status | Severidade | Titulo | Dependencias | Obtido | Evidencia | Recomendacao |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CT001 | bloqueado | critica | Login valido, logout, login invalido e sessao expirada quando observavel |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT002 | bloqueado | alta | Criacao, edicao, inativacao e login bloqueado de usuario inativo |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT003 | bloqueado | media | Atalhos da tela Cadastros |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT004 | bloqueado | alta | Cliente e contrato com edicao, persistencia e vinculo |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT005 | bloqueado | alta | Unidade, obra e centro de custo | CT004 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT006 | bloqueado | media | Fornecedores |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT007 | bloqueado | media | Categorias orcamentarias |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT008 | bloqueado | critica | Item orcado com previsto, saldo, comprometido e pago | CT004, CT005, CT007 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT009 | bloqueado | critica | Alteracao de orcamento protegida por usuario comum | CT002, CT008 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT010 | bloqueado | critica | Exclusao de item orcado por usuario comum e administrador | CT002, CT008 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT011 | bloqueado | media | Colaborador, cargo/faixa e alocacao quando a UI permitir | CT005 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT012 | bloqueado | critica | Requisicao dentro do saldo e acima do saldo | CT008 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT013 | aprovado | alta | Aprovacao e rejeicao de requisicao | CT012 | Comportamento observado conforme esperado. |  | Sincronizar status da aprovacao com a entidade de origem e registrar auditoria. |
| CT014 | aprovado | alta | Cotacao com 3 fornecedores, comparativo e vencedor | CT006, CT013 | Comportamento observado conforme esperado. |  | Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor. |
| CT015 | reprovado | critica | Ordem de compra e comprometimento do orcamento | CT014 | Could not find available option for: Cotacao concluida \| Cotação concluída | /home/colatto/repo/R3/test4s/test-results/CT015-ORDEM-COMPRA.png | Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido. |
| CT016 | bloqueado | media | Edicao/exclusao/cancelamento de requisicao, cotacao e OC quando permitido | CT012, CT014, CT015 | Caso bloqueado por dependencia CT015 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. |
| CT017 | bloqueado | critica | Contas a pagar, status e filtros | CT015 | Caso bloqueado por dependencia CT015 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. |
| CT018 | bloqueado | critica | Pagamento parcial, final e tentativa acima do saldo | CT017 | Caso bloqueado por dependencia CT017 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo. |
| CT019 | bloqueado | alta | Dashboard financeiro apos compra/pagamento/mao de obra | CT011, CT018 | Caso bloqueado por dependencia CT018 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT018 e reexecutar este fluxo. |
| CT020 | bloqueado | alta | Workflow com perfil correto/incorreto, aprovacao e rejeicao | CT002 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT021 | bloqueado | media | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes | CT020 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT022 | bloqueado | alta | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT015-ORDEM-COMPRA | critica | CT015 | https://4s.ruatrez.com/ordens-compra | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT015" e observar o resultado registrado. | OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto. | Could not find available option for: Cotacao concluida \| Cotação concluída | Sem comprometimento do orcamento nao ha controle real de compras. | /home/colatto/repo/R3/test4s/test-results/CT015-ORDEM-COMPRA.png | Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido. | reprovado |
| CT017-CONTAS-PAGAR | critica | CT017 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT017" e observar o resultado registrado. | Contas a pagar devem exibir status e filtros funcionais apos OC. | Caso bloqueado por dependencia CT015 registrada como reprovado. | Sem conta a pagar rastreavel o financeiro nao consegue programar ou reconciliar pagamentos. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. | bloqueado |
| CT018-PAGAMENTOS | critica | CT018 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT018" e observar o resultado registrado. | Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada. | Caso bloqueado por dependencia CT017 registrada como bloqueado. | Erro em pagamento distorce custo real, dashboard e tomada de decisao. |  | Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo. | bloqueado |
| CT019-DASHBOARD-FINANCEIRO | alta | CT019 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT019" e observar o resultado registrado. | Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos. | Caso bloqueado por dependencia CT018 registrada como bloqueado. | Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade. |  | Corrigir primeiro o caso raiz CT018 e reexecutar este fluxo. | bloqueado |
| CT016-EDICAO-CANCELAMENTO-DOCUMENTOS | media | CT016 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT016" e observar o resultado registrado. | Requisicao, cotacao e OC devem permitir edicao/cancelamento quando a regra permitir ou exibir bloqueio de negocio. | Caso bloqueado por dependencia CT015 registrada como reprovado. | Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. | bloqueado |

## Detalhes Dos Desvios

### CT015-ORDEM-COMPRA - critica

- Caso: CT015
- Localizacao: https://4s.ruatrez.com/ordens-compra
- Perfil: administrador
- Massa: AUTO-4S-20260707143527
- Passos para reproduzir: Executar o caso automatizado "CT015" e observar o resultado registrado.
- Esperado: OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto.
- Obtido: Could not find available option for: Cotacao concluida | Cotação concluída
- Impacto funcional e negocio: Sem comprometimento do orcamento nao ha controle real de compras.
- Recomendacao: Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT015-ORDEM-COMPRA.png

### CT017-CONTAS-PAGAR - critica

- Caso: CT017
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260707143527
- Passos para reproduzir: Executar o caso automatizado "CT017" e observar o resultado registrado.
- Esperado: Contas a pagar devem exibir status e filtros funcionais apos OC.
- Obtido: Caso bloqueado por dependencia CT015 registrada como reprovado.
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
- Obtido: Caso bloqueado por dependencia CT015 registrada como reprovado.
- Impacto funcional e negocio: Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro.
- Recomendacao: Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

