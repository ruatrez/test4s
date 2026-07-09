# Relatorio de Diagnostico 4S

Gerado em: 2026-07-09T19:14:14.057Z

## Sumario

Casos Playwright: 22. Falhas: 2. Aprovados: 20.

Status CT001-CT022: aprovado 9, reprovado 1, bloqueado 12, nao aplicavel 0.

Problemas registrados: 2.

## Matriz CT001-CT022

| CT | Status | Severidade | Titulo | Dependencias | Obtido | Evidencia | Recomendacao |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CT001 | bloqueado | critica | Login valido, logout, login invalido e sessao expirada quando observavel |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT002 | aprovado | alta | Criacao, edicao, inativacao e login bloqueado de usuario inativo |  | Comportamento observado conforme esperado. |  | Revisar matriz de perfis, status de usuario e validacao de login no backend. |
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
| CT013 | bloqueado | alta | Aprovacao e rejeicao de requisicao | CT012 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT014 | aprovado | alta | Cotacao com 3 fornecedores, comparativo e vencedor | CT006, CT013 | Comportamento observado conforme esperado. |  | Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor. |
| CT015 | aprovado | critica | Ordem de compra e comprometimento do orcamento | CT014 | Comportamento observado conforme esperado. |  | Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido. |
| CT016 | aprovado | media | Edicao/exclusao/cancelamento de requisicao, cotacao e OC quando permitido | CT012, CT014, CT015 | Comportamento observado conforme esperado. |  | Expor editar/cancelar/inativar com confirmacao ou mensagem objetiva de bloqueio. |
| CT017 | aprovado | critica | Contas a pagar, status e filtros | CT015 | Comportamento observado conforme esperado. |  | Corrigir geracao/listagem de contas a pagar e validacao dos filtros. |
| CT018 | aprovado | critica | Pagamento parcial, final e tentativa acima do saldo | CT017 | Comportamento observado conforme esperado. |  | Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard. |
| CT019 | aprovado | alta | Dashboard financeiro apos compra/pagamento/mao de obra | CT011, CT018 | Comportamento observado conforme esperado. |  | Corrigir agregacoes do dashboard e garantir eventos de auditoria para criacao, edicao, aprovacao e pagamento. |
| CT020 | aprovado | alta | Workflow com perfil correto/incorreto, aprovacao e rejeicao | CT002 | Comportamento observado conforme esperado. |  | Aplicar autorizacao no backend e esconder/desabilitar acoes no frontend para perfis sem permissao. |
| CT021 | aprovado | media | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes | CT020 | Comportamento observado conforme esperado. |  | Garantir eventos de auditoria para entidades financeiras, cadastros e workflow. |
| CT022 | reprovado | alta | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx |  | 502 https://api.lumi.new/lm/p442450294435041280/usuarios/documents/listByPage | /home/colatto/repo/R3/test4s/test-results/HTTP-502-1783624356653.png | Investigar logs do endpoint, corrigir falha e cobrir a rota com teste de integracao ou contrato. |

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HTTP-502-1783624356653 | alta | CT022 | https://4s.ruatrez.com/ | administrador | AUTO-4S-20260709160023 | Executar o caso automatizado "CT022" e observar o resultado registrado. | Requisicoes da aplicacao devem responder sem erro 4xx/5xx inesperado. | 502 https://api.lumi.new/lm/p442450294435041280/usuarios/documents/listByPage | Erro HTTP pode bloquear carregamento de telas, persistencia de dados ou integracao entre modulos. | /home/colatto/repo/R3/test4s/test-results/HTTP-502-1783624356653.png | Investigar logs do endpoint, corrigir falha e cobrir a rota com teste de integracao ou contrato. | reprovado |
| CONSOLE-1783624356653 | media | CT022 | https://4s.ruatrez.com/ | administrador | AUTO-4S-20260709160023 | Executar o caso automatizado "CT022" e observar o resultado registrado. | A tela nao deve emitir erros JavaScript no console. | Failed to load resource: the server responded with a status of 502 () | Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica. | /home/colatto/repo/R3/test4s/test-results/CONSOLE-1783624356653.png | Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada. | reprovado |

## Detalhes Dos Desvios

### HTTP-502-1783624356653 - alta

- Caso: CT022
- Localizacao: https://4s.ruatrez.com/
- Perfil: administrador
- Massa: AUTO-4S-20260709160023
- Passos para reproduzir: Executar o caso automatizado "CT022" e observar o resultado registrado.
- Esperado: Requisicoes da aplicacao devem responder sem erro 4xx/5xx inesperado.
- Obtido: 502 https://api.lumi.new/lm/p442450294435041280/usuarios/documents/listByPage
- Impacto funcional e negocio: Erro HTTP pode bloquear carregamento de telas, persistencia de dados ou integracao entre modulos.
- Recomendacao: Investigar logs do endpoint, corrigir falha e cobrir a rota com teste de integracao ou contrato.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/HTTP-502-1783624356653.png

### CONSOLE-1783624356653 - media

- Caso: CT022
- Localizacao: https://4s.ruatrez.com/
- Perfil: administrador
- Massa: AUTO-4S-20260709160023
- Passos para reproduzir: Executar o caso automatizado "CT022" e observar o resultado registrado.
- Esperado: A tela nao deve emitir erros JavaScript no console.
- Obtido: Failed to load resource: the server responded with a status of 502 ()
- Impacto funcional e negocio: Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica.
- Recomendacao: Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CONSOLE-1783624356653.png

