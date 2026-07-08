# Relatorio de Diagnostico 4S

Gerado em: 2026-07-08T20:14:22.558Z

## Sumario

Casos Playwright: 22. Falhas: 1. Aprovados: 21.

Status CT001-CT022: aprovado 19, reprovado 2, bloqueado 1, nao aplicavel 0.

Problemas registrados: 5.

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
| CT012 | aprovado | critica | Requisicao dentro do saldo e acima do saldo | CT008 | Comportamento observado conforme esperado. |  | Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes. |
| CT013 | aprovado | alta | Aprovacao e rejeicao de requisicao | CT012 | Comportamento observado conforme esperado. |  | Sincronizar status da aprovacao com a entidade de origem e registrar auditoria. |
| CT014 | reprovado | alta | Cotacao com 3 fornecedores, comparativo e vencedor | CT006, CT013 | [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveText[2m([22m[32mexpected[39m[2m)[22m failed<br><br>Locator: locator('body')<br>Timeout: 10000ms<br>Expected pattern: [32m/AUTO-4S-20260708165317/i[39m<br>Received string:  [31m"[39m<br>[31m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 12 aprovações pendentesADMINISTRADORCotacoes11 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir4S-974444-20264S-297399-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-162076-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-359791-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-845962-20264S-883423-20263 fornecedor(es)AUTO-4S-20260706161854 Fornecedor AR$ 10,00CONCLUIDAExcluir1-10 de 11Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-587617-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-587617-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-587617-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-493593-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-995535-2026-AUTO-4S-20260707162105 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-279280-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 33Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 4Proxima····[39m<br>[31m"[39m<br><br>Call log:<br>[2m  - Expect "toHaveText" with timeout 10000ms[22m<br>[2m  - waiting for locator('body')[22m<br>[2m    24 × locator resolved to <body>…</body>[22m<br>[2m       - unexpected value "[22m<br>[2m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 12 aprovações pendentesADMINISTRADORCotacoes11 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir4S-974444-20264S-297399-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-162076-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-359791-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-845962-20264S-883423-20263 fornecedor(es)AUTO-4S-20260706161854 Fornecedor AR$ 10,00CONCLUIDAExcluir1-10 de 11Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-587617-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-587617-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-587617-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-493593-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-995535-2026-AUTO-4S-20260707162105 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-279280-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 33Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 4Proxima[22m<br>[2m  [22m<br>[2m[22m<br>[2m"[22m<br> | /home/colatto/repo/R3/test4s/test-results/CT014-COTACAO.png | Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor. |
| CT015 | aprovado | critica | Ordem de compra e comprometimento do orcamento | CT014 | Comportamento observado conforme esperado. |  | Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido. |
| CT016 | aprovado | media | Edicao/exclusao/cancelamento de requisicao, cotacao e OC quando permitido | CT012, CT014, CT015 | Comportamento observado conforme esperado. |  | Expor editar/cancelar/inativar com confirmacao ou mensagem objetiva de bloqueio. |
| CT017 | aprovado | critica | Contas a pagar, status e filtros | CT015 | Comportamento observado conforme esperado. |  | Corrigir geracao/listagem de contas a pagar e validacao dos filtros. |
| CT018 | reprovado | critica | Pagamento parcial, final e tentativa acima do saldo | CT017 | locator.click: Timeout 15000ms exceeded.<br>Call log:<br>[2m  - waiting for getByRole('button', { name: /Registrar/i }).first()[22m<br>[2m    - locator resolved to <button class="btn-primary flex items-center gap-2">…</button>[22m<br>[2m  - attempting click action[22m<br>[2m    2 × waiting for element to be visible, enabled and stable[22m<br>[2m      - element is visible, enabled and stable[22m<br>[2m      - scrolling into view if needed[22m<br>[2m      - done scrolling[22m<br>[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m<br>[2m    - retrying click action[22m<br>[2m    - waiting 20ms[22m<br>[2m    2 × waiting for element to be visible, enabled and stable[22m<br>[2m      - element is visible, enabled and stable[22m<br>[2m      - scrolling into view if needed[22m<br>[2m      - done scrolling[22m<br>[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m<br>[2m    - retrying click action[22m<br>[2m      - waiting 100ms[22m<br>[2m    29 × waiting for element to be visible, enabled and stable[22m<br>[2m       - element is visible, enabled and stable[22m<br>[2m       - scrolling into view if needed[22m<br>[2m       - done scrolling[22m<br>[2m       - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m<br>[2m     - retrying click action[22m<br>[2m       - waiting 500ms[22m<br> | /home/colatto/repo/R3/test4s/test-results/CT018-PAGAMENTOS.png | Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard. |
| CT019 | bloqueado | alta | Dashboard financeiro apos compra/pagamento/mao de obra | CT011, CT018 | Caso bloqueado por dependencia CT018 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT018 e reexecutar este fluxo. |
| CT020 | aprovado | alta | Workflow com perfil correto/incorreto, aprovacao e rejeicao | CT002 | Comportamento observado conforme esperado. |  | Aplicar autorizacao no backend e esconder/desabilitar acoes no frontend para perfis sem permissao. |
| CT021 | aprovado | media | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes | CT020 | Comportamento observado conforme esperado. |  | Garantir eventos de auditoria para entidades financeiras, cadastros e workflow. |
| CT022 | aprovado | alta | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx |  | Comportamento observado conforme esperado. |  | Corrigir rota, permissao, carregamento de dados ou componente frontend da tela afetada. |

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT018-PAGAMENTOS | critica | CT018 | https://4s.ruatrez.com/pagamentos | administrador | AUTO-4S-20260708165317 | Executar o caso automatizado "CT018" e observar o resultado registrado. | Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada. | locator.click: Timeout 15000ms exceeded.<br>Call log:<br>[2m  - waiting for getByRole('button', { name: /Registrar/i }).first()[22m<br>[2m    - locator resolved to <button class="btn-primary flex items-center gap-2">…</button>[22m<br>[2m  - attempting click action[22m<br>[2m    2 × waiting for element to be visible, enabled and stable[22m<br>[2m      - element is visible, enabled and stable[22m<br>[2m      - scrolling into view if needed[22m<br>[2m      - done scrolling[22m<br>[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m<br>[2m    - retrying click action[22m<br>[2m    - waiting 20ms[22m<br>[2m    2 × waiting for element to be visible, enabled and stable[22m<br>[2m      - element is visible, enabled and stable[22m<br>[2m      - scrolling into view if needed[22m<br>[2m      - done scrolling[22m<br>[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m<br>[2m    - retrying click action[22m<br>[2m      - waiting 100ms[22m<br>[2m    29 × waiting for element to be visible, enabled and stable[22m<br>[2m       - element is visible, enabled and stable[22m<br>[2m       - scrolling into view if needed[22m<br>[2m       - done scrolling[22m<br>[2m       - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m<br>[2m     - retrying click action[22m<br>[2m       - waiting 500ms[22m<br> | Erro em pagamento distorce custo real, dashboard e tomada de decisao. | /home/colatto/repo/R3/test4s/test-results/CT018-PAGAMENTOS.png | Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard. | reprovado |
| CT018-PAGAMENTOS | critica | CT018 | https://4s.ruatrez.com/pagamentos | administrador | AUTO-4S-20260708165317 | Executar o caso automatizado "CT018" e observar o resultado registrado. | Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada. | locator.click: Timeout 15000ms exceeded.<br>Call log:<br>[2m  - waiting for getByRole('button', { name: /Registrar/i }).first()[22m<br>[2m    - locator resolved to <button class="btn-primary flex items-center gap-2">…</button>[22m<br>[2m  - attempting click action[22m<br>[2m    2 × waiting for element to be visible, enabled and stable[22m<br>[2m      - element is visible, enabled and stable[22m<br>[2m      - scrolling into view if needed[22m<br>[2m      - done scrolling[22m<br>[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m<br>[2m    - retrying click action[22m<br>[2m    - waiting 20ms[22m<br>[2m    2 × waiting for element to be visible, enabled and stable[22m<br>[2m      - element is visible, enabled and stable[22m<br>[2m      - scrolling into view if needed[22m<br>[2m      - done scrolling[22m<br>[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m<br>[2m    - retrying click action[22m<br>[2m      - waiting 100ms[22m<br>[2m    29 × waiting for element to be visible, enabled and stable[22m<br>[2m       - element is visible, enabled and stable[22m<br>[2m       - scrolling into view if needed[22m<br>[2m       - done scrolling[22m<br>[2m       - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m<br>[2m     - retrying click action[22m<br>[2m       - waiting 500ms[22m<br> | Erro em pagamento distorce custo real, dashboard e tomada de decisao. | /home/colatto/repo/R3/test4s/test-results/CT018-PAGAMENTOS.png | Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard. | reprovado |
| CT018-PAGAMENTOS | critica | CT018 | https://4s.ruatrez.com/pagamentos | administrador | AUTO-4S-20260708165317 | Executar o caso automatizado "CT018" e observar o resultado registrado. | Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada. | locator.click: Timeout 15000ms exceeded.<br>Call log:<br>[2m  - waiting for getByRole('button', { name: /Registrar/i }).first()[22m<br>[2m    - locator resolved to <button class="btn-primary flex items-center gap-2">…</button>[22m<br>[2m  - attempting click action[22m<br>[2m    2 × waiting for element to be visible, enabled and stable[22m<br>[2m      - element is visible, enabled and stable[22m<br>[2m      - scrolling into view if needed[22m<br>[2m      - done scrolling[22m<br>[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m<br>[2m    - retrying click action[22m<br>[2m    - waiting 20ms[22m<br>[2m    2 × waiting for element to be visible, enabled and stable[22m<br>[2m      - element is visible, enabled and stable[22m<br>[2m      - scrolling into view if needed[22m<br>[2m      - done scrolling[22m<br>[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m<br>[2m    - retrying click action[22m<br>[2m      - waiting 100ms[22m<br>[2m    29 × waiting for element to be visible, enabled and stable[22m<br>[2m       - element is visible, enabled and stable[22m<br>[2m       - scrolling into view if needed[22m<br>[2m       - done scrolling[22m<br>[2m       - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m<br>[2m     - retrying click action[22m<br>[2m       - waiting 500ms[22m<br> | Erro em pagamento distorce custo real, dashboard e tomada de decisao. | /home/colatto/repo/R3/test4s/test-results/CT018-PAGAMENTOS.png | Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard. | reprovado |
| CT014-COTACAO | alta | CT014 | https://4s.ruatrez.com/cotacoes | administrador | AUTO-4S-20260708165317 | Executar o caso automatizado "CT014" e observar o resultado registrado. | Cotacao deve comparar fornecedores, registrar vencedor e persistir. | [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveText[2m([22m[32mexpected[39m[2m)[22m failed<br><br>Locator: locator('body')<br>Timeout: 10000ms<br>Expected pattern: [32m/AUTO-4S-20260708165317/i[39m<br>Received string:  [31m"[39m<br>[31m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 12 aprovações pendentesADMINISTRADORCotacoes11 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir4S-974444-20264S-297399-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-162076-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-359791-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-845962-20264S-883423-20263 fornecedor(es)AUTO-4S-20260706161854 Fornecedor AR$ 10,00CONCLUIDAExcluir1-10 de 11Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-587617-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-587617-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-587617-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-493593-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-995535-2026-AUTO-4S-20260707162105 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-279280-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 33Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 4Proxima····[39m<br>[31m"[39m<br><br>Call log:<br>[2m  - Expect "toHaveText" with timeout 10000ms[22m<br>[2m  - waiting for locator('body')[22m<br>[2m    24 × locator resolved to <body>…</body>[22m<br>[2m       - unexpected value "[22m<br>[2m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 12 aprovações pendentesADMINISTRADORCotacoes11 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir4S-974444-20264S-297399-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-162076-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-359791-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-845962-20264S-883423-20263 fornecedor(es)AUTO-4S-20260706161854 Fornecedor AR$ 10,00CONCLUIDAExcluir1-10 de 11Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-587617-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-587617-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-587617-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-493593-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-995535-2026-AUTO-4S-20260707162105 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-279280-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 33Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 4Proxima[22m<br>[2m  [22m<br>[2m[22m<br>[2m"[22m<br> | Comparativo incorreto afeta decisao de compra e rastreabilidade. | /home/colatto/repo/R3/test4s/test-results/CT014-COTACAO.png | Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor. | reprovado |
| CT019-DASHBOARD-FINANCEIRO | alta | CT019 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260708165317 | Executar o caso automatizado "CT019" e observar o resultado registrado. | Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos. | Caso bloqueado por dependencia CT018 registrada como reprovado. | Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade. |  | Corrigir primeiro o caso raiz CT018 e reexecutar este fluxo. | bloqueado |

## Detalhes Dos Desvios

### CT018-PAGAMENTOS - critica

- Caso: CT018
- Localizacao: https://4s.ruatrez.com/pagamentos
- Perfil: administrador
- Massa: AUTO-4S-20260708165317
- Passos para reproduzir: Executar o caso automatizado "CT018" e observar o resultado registrado.
- Esperado: Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada.
- Obtido: locator.click: Timeout 15000ms exceeded.
Call log:
[2m  - waiting for getByRole('button', { name: /Registrar/i }).first()[22m
[2m    - locator resolved to <button class="btn-primary flex items-center gap-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    29 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m

- Impacto funcional e negocio: Erro em pagamento distorce custo real, dashboard e tomada de decisao.
- Recomendacao: Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT018-PAGAMENTOS.png

### CT018-PAGAMENTOS - critica

- Caso: CT018
- Localizacao: https://4s.ruatrez.com/pagamentos
- Perfil: administrador
- Massa: AUTO-4S-20260708165317
- Passos para reproduzir: Executar o caso automatizado "CT018" e observar o resultado registrado.
- Esperado: Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada.
- Obtido: locator.click: Timeout 15000ms exceeded.
Call log:
[2m  - waiting for getByRole('button', { name: /Registrar/i }).first()[22m
[2m    - locator resolved to <button class="btn-primary flex items-center gap-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    29 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m

- Impacto funcional e negocio: Erro em pagamento distorce custo real, dashboard e tomada de decisao.
- Recomendacao: Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT018-PAGAMENTOS.png

### CT018-PAGAMENTOS - critica

- Caso: CT018
- Localizacao: https://4s.ruatrez.com/pagamentos
- Perfil: administrador
- Massa: AUTO-4S-20260708165317
- Passos para reproduzir: Executar o caso automatizado "CT018" e observar o resultado registrado.
- Esperado: Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada.
- Obtido: locator.click: Timeout 15000ms exceeded.
Call log:
[2m  - waiting for getByRole('button', { name: /Registrar/i }).first()[22m
[2m    - locator resolved to <button class="btn-primary flex items-center gap-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    29 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m

- Impacto funcional e negocio: Erro em pagamento distorce custo real, dashboard e tomada de decisao.
- Recomendacao: Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT018-PAGAMENTOS.png

### CT014-COTACAO - alta

- Caso: CT014
- Localizacao: https://4s.ruatrez.com/cotacoes
- Perfil: administrador
- Massa: AUTO-4S-20260708165317
- Passos para reproduzir: Executar o caso automatizado "CT014" e observar o resultado registrado.
- Esperado: Cotacao deve comparar fornecedores, registrar vencedor e persistir.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('body')
Timeout: 10000ms
Expected pattern: [32m/AUTO-4S-20260708165317/i[39m
Received string:  [31m"[39m
[31m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 12 aprovações pendentesADMINISTRADORCotacoes11 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir4S-974444-20264S-297399-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-162076-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-359791-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-845962-20264S-883423-20263 fornecedor(es)AUTO-4S-20260706161854 Fornecedor AR$ 10,00CONCLUIDAExcluir1-10 de 11Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-587617-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-587617-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-587617-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-493593-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-995535-2026-AUTO-4S-20260707162105 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-279280-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 33Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 4Proxima····[39m
[31m"[39m

Call log:
[2m  - Expect "toHaveText" with timeout 10000ms[22m
[2m  - waiting for locator('body')[22m
[2m    24 × locator resolved to <body>…</body>[22m
[2m       - unexpected value "[22m
[2m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 12 aprovações pendentesADMINISTRADORCotacoes11 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir4S-974444-20264S-297399-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-162076-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-359791-20264S-402937-20263 fornecedor(es)-R$ 11.750,00ABERTAEditarEleger vencedorExcluir4S-845962-20264S-883423-20263 fornecedor(es)AUTO-4S-20260706161854 Fornecedor AR$ 10,00CONCLUIDAExcluir1-10 de 11Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-587617-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-587617-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-587617-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-493593-2026-AUTO-4S-20260708145148 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-493593-2026-AUTO-4S-20260708145148 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-995535-2026-AUTO-4S-20260707162105 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-995535-2026-AUTO-4S-20260707162105 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-279280-2026-AUTO-4S-20260707162105 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 33Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 4Proxima[22m
[2m  [22m
[2m[22m
[2m"[22m

- Impacto funcional e negocio: Comparativo incorreto afeta decisao de compra e rastreabilidade.
- Recomendacao: Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT014-COTACAO.png

### CT019-DASHBOARD-FINANCEIRO - alta

- Caso: CT019
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260708165317
- Passos para reproduzir: Executar o caso automatizado "CT019" e observar o resultado registrado.
- Esperado: Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos.
- Obtido: Caso bloqueado por dependencia CT018 registrada como reprovado.
- Impacto funcional e negocio: Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade.
- Recomendacao: Corrigir primeiro o caso raiz CT018 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

