# Relatorio de Diagnostico 4S

Gerado em: 2026-07-11T14:44:26.038Z

## Sumario

Casos Playwright: 22. Falhas: 0. Aprovados: 22.

Status CT001-CT022: aprovado 19, reprovado 3, bloqueado 0, nao aplicavel 0.

Problemas registrados: 4.

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
| CT008 | reprovado | critica | Item orcado com previsto, saldo, comprometido e pago | CT004, CT005, CT007 | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260711112653 Item orcado material/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260711112653 Item orcado material/i).first()[22m<br> | /home/colatto/repo/R3/test4s/test-results/CT008-ORCAMENTO-BASE.png | Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes. |
| CT009 | aprovado | critica | Alteracao de orcamento protegida por usuario comum | CT002, CT008 | Comportamento observado conforme esperado. |  | Bloquear edicao direta para perfis nao autorizados e encaminhar solicitacao ao Workflow > Aprovacoes. |
| CT010 | aprovado | critica | Exclusao de item orcado por usuario comum e administrador | CT002, CT008 | Comportamento observado conforme esperado. |  | Exigir aprovacao administrativa e auditar exclusoes de itens orcados. |
| CT011 | reprovado | media | Colaborador, cargo/faixa e alocacao quando a UI permitir | CT005 | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260711112653 Cargo/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260711112653 Cargo/i).first()[22m<br> | /home/colatto/repo/R3/test4s/test-results/CT011-COLABORADOR-ALOCACAO.png | Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade. |
| CT012 | aprovado | critica | Requisicao dentro do saldo e acima do saldo | CT008 | Comportamento observado conforme esperado. |  | Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes. |
| CT013 | aprovado | alta | Aprovacao e rejeicao de requisicao | CT012 | Comportamento observado conforme esperado. |  | Sincronizar status da aprovacao com a entidade de origem e registrar auditoria. |
| CT014 | reprovado | alta | Cotacao com 3 fornecedores, comparativo e vencedor | CT006, CT013 | [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveText[2m([22m[32mexpected[39m[2m)[22m failed<br><br>Locator: locator('body')<br>Timeout: 10000ms<br>Expected pattern: [32m/AUTO-4S-20260711112653/i[39m<br>Received string:  [31m"[39m<br>[31m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 17 aprovações pendentesADMINISTRADORCotacoes17 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-805001-20264S-474830-20263 fornecedor(es)AUTO-4S-20260709163032 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-808990-20264S-474830-20263 fornecedor(es)AUTO-4S-20260709163032 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-598771-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 2.350,00EM ANALISEVerificar aprovacaoExcluir4S-936516-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-730720-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-427961-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir1-10 de 17Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-805001-2026-AUTO-4S-20260709163032 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-805001-2026-AUTO-4S-20260709163032 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-805001-2026-AUTO-4S-20260709163032 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-808990-2026-AUTO-4S-20260709163032 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-808990-2026-AUTO-4S-20260709163032 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-808990-2026-AUTO-4S-20260709163032 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-1-10 de 54Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 6Proxima····[39m<br>[31m"[39m<br><br>Call log:<br>[2m  - Expect "toHaveText" with timeout 10000ms[22m<br>[2m  - waiting for locator('body')[22m<br>[2m    24 × locator resolved to <body>…</body>[22m<br>[2m       - unexpected value "[22m<br>[2m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 17 aprovações pendentesADMINISTRADORCotacoes17 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-805001-20264S-474830-20263 fornecedor(es)AUTO-4S-20260709163032 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-808990-20264S-474830-20263 fornecedor(es)AUTO-4S-20260709163032 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-598771-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 2.350,00EM ANALISEVerificar aprovacaoExcluir4S-936516-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-730720-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-427961-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir1-10 de 17Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-805001-2026-AUTO-4S-20260709163032 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-805001-2026-AUTO-4S-20260709163032 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-805001-2026-AUTO-4S-20260709163032 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-808990-2026-AUTO-4S-20260709163032 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-808990-2026-AUTO-4S-20260709163032 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-808990-2026-AUTO-4S-20260709163032 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-1-10 de 54Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 6Proxima[22m<br>[2m  [22m<br>[2m[22m<br>[2m"[22m<br> | /home/colatto/repo/R3/test4s/test-results/CT014-COTACAO.png | Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor. |
| CT015 | aprovado | critica | Ordem de compra e comprometimento do orcamento | CT014 | Comportamento observado conforme esperado. |  | Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido. |
| CT016 | aprovado | media | Edicao/exclusao/cancelamento de requisicao, cotacao e OC quando permitido | CT012, CT014, CT015 | Comportamento observado conforme esperado. |  | Expor editar/cancelar/inativar com confirmacao ou mensagem objetiva de bloqueio. |
| CT017 | aprovado | critica | Contas a pagar, status e filtros | CT015 | Comportamento observado conforme esperado. |  | Corrigir geracao/listagem de contas a pagar e validacao dos filtros. |
| CT018 | aprovado | critica | Pagamento parcial, final e tentativa acima do saldo | CT017 | Comportamento observado conforme esperado. |  | Recalcular saldos no backend, bloquear pagamento excedente e propagar valores para orcamento/dashboard. |
| CT019 | aprovado | alta | Dashboard financeiro apos compra/pagamento/mao de obra | CT011, CT018 | Comportamento observado conforme esperado. |  | Corrigir agregacoes do dashboard e garantir eventos de auditoria para criacao, edicao, aprovacao e pagamento. |
| CT020 | aprovado | alta | Workflow com perfil correto/incorreto, aprovacao e rejeicao | CT002 | Comportamento observado conforme esperado. |  | Aplicar autorizacao no backend e esconder/desabilitar acoes no frontend para perfis sem permissao. |
| CT021 | aprovado | media | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes | CT020 | Comportamento observado conforme esperado. |  | Garantir eventos de auditoria para entidades financeiras, cadastros e workflow. |
| CT022 | aprovado | alta | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx |  | Comportamento observado conforme esperado. |  | Corrigir rota, permissao, carregamento de dados ou componente frontend da tela afetada. |

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT008-ORCAMENTO-BASE | critica | CT008 | https://4s.ruatrez.com/orcamento | administrador | AUTO-4S-20260711112653 | Executar o caso automatizado "CT008" e observar o resultado registrado. | Item orcado deve calcular valor previsto, saldo, comprometido e pago. | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260711112653 Item orcado material/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260711112653 Item orcado material/i).first()[22m<br> | Erro no orcamento base compromete controle de saldo, OC e pagamento. | /home/colatto/repo/R3/test4s/test-results/CT008-ORCAMENTO-BASE.png | Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes. | reprovado |
| CT014-COTACAO | alta | CT014 | https://4s.ruatrez.com/cotacoes | administrador | AUTO-4S-20260711112653 | Executar o caso automatizado "CT014" e observar o resultado registrado. | Cotacao deve comparar fornecedores, registrar vencedor e persistir. | [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveText[2m([22m[32mexpected[39m[2m)[22m failed<br><br>Locator: locator('body')<br>Timeout: 10000ms<br>Expected pattern: [32m/AUTO-4S-20260711112653/i[39m<br>Received string:  [31m"[39m<br>[31m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 17 aprovações pendentesADMINISTRADORCotacoes17 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-805001-20264S-474830-20263 fornecedor(es)AUTO-4S-20260709163032 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-808990-20264S-474830-20263 fornecedor(es)AUTO-4S-20260709163032 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-598771-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 2.350,00EM ANALISEVerificar aprovacaoExcluir4S-936516-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-730720-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-427961-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir1-10 de 17Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-805001-2026-AUTO-4S-20260709163032 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-805001-2026-AUTO-4S-20260709163032 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-805001-2026-AUTO-4S-20260709163032 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-808990-2026-AUTO-4S-20260709163032 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-808990-2026-AUTO-4S-20260709163032 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-808990-2026-AUTO-4S-20260709163032 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-1-10 de 54Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 6Proxima····[39m<br>[31m"[39m<br><br>Call log:<br>[2m  - Expect "toHaveText" with timeout 10000ms[22m<br>[2m  - waiting for locator('body')[22m<br>[2m    24 × locator resolved to <body>…</body>[22m<br>[2m       - unexpected value "[22m<br>[2m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 17 aprovações pendentesADMINISTRADORCotacoes17 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-805001-20264S-474830-20263 fornecedor(es)AUTO-4S-20260709163032 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-808990-20264S-474830-20263 fornecedor(es)AUTO-4S-20260709163032 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-598771-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 2.350,00EM ANALISEVerificar aprovacaoExcluir4S-936516-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-730720-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-427961-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir1-10 de 17Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-805001-2026-AUTO-4S-20260709163032 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-805001-2026-AUTO-4S-20260709163032 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-805001-2026-AUTO-4S-20260709163032 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-808990-2026-AUTO-4S-20260709163032 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-808990-2026-AUTO-4S-20260709163032 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-808990-2026-AUTO-4S-20260709163032 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-1-10 de 54Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 6Proxima[22m<br>[2m  [22m<br>[2m[22m<br>[2m"[22m<br> | Comparativo incorreto afeta decisao de compra e rastreabilidade. | /home/colatto/repo/R3/test4s/test-results/CT014-COTACAO.png | Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor. | reprovado |
| CT011-COLABORADOR-ALOCACAO | media | CT011 | https://4s.ruatrez.com/colaboradores | administrador | AUTO-4S-20260711112653 | Executar o caso automatizado "CT011" e observar o resultado registrado. | Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo. | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260711112653 Cargo/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260711112653 Cargo/i).first()[22m<br> | Mao de obra ausente distorce custo real e dashboard financeiro. | /home/colatto/repo/R3/test4s/test-results/CT011-COLABORADOR-ALOCACAO.png | Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade. | reprovado |
| CT011-COLABORADOR-ALOCACAO | media | CT011 | https://4s.ruatrez.com/colaboradores | administrador | AUTO-4S-20260711112653 | Executar o caso automatizado "CT011" e observar o resultado registrado. | Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo. | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260711112653 Faixa/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260711112653 Faixa/i).first()[22m<br> | Mao de obra ausente distorce custo real e dashboard financeiro. | /home/colatto/repo/R3/test4s/test-results/CT011-COLABORADOR-ALOCACAO.png | Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade. | reprovado |

## Detalhes Dos Desvios

### CT008-ORCAMENTO-BASE - critica

- Caso: CT008
- Localizacao: https://4s.ruatrez.com/orcamento
- Perfil: administrador
- Massa: AUTO-4S-20260711112653
- Passos para reproduzir: Executar o caso automatizado "CT008" e observar o resultado registrado.
- Esperado: Item orcado deve calcular valor previsto, saldo, comprometido e pago.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByText(/AUTO-4S-20260711112653 Item orcado material/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" with timeout 10000ms[22m
[2m  - waiting for getByText(/AUTO-4S-20260711112653 Item orcado material/i).first()[22m

- Impacto funcional e negocio: Erro no orcamento base compromete controle de saldo, OC e pagamento.
- Recomendacao: Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT008-ORCAMENTO-BASE.png

### CT014-COTACAO - alta

- Caso: CT014
- Localizacao: https://4s.ruatrez.com/cotacoes
- Perfil: administrador
- Massa: AUTO-4S-20260711112653
- Passos para reproduzir: Executar o caso automatizado "CT014" e observar o resultado registrado.
- Esperado: Cotacao deve comparar fornecedores, registrar vencedor e persistir.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('body')
Timeout: 10000ms
Expected pattern: [32m/AUTO-4S-20260711112653/i[39m
Received string:  [31m"[39m
[31m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 17 aprovações pendentesADMINISTRADORCotacoes17 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-805001-20264S-474830-20263 fornecedor(es)AUTO-4S-20260709163032 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-808990-20264S-474830-20263 fornecedor(es)AUTO-4S-20260709163032 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-598771-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 2.350,00EM ANALISEVerificar aprovacaoExcluir4S-936516-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-730720-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-427961-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir1-10 de 17Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-805001-2026-AUTO-4S-20260709163032 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-805001-2026-AUTO-4S-20260709163032 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-805001-2026-AUTO-4S-20260709163032 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-808990-2026-AUTO-4S-20260709163032 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-808990-2026-AUTO-4S-20260709163032 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-808990-2026-AUTO-4S-20260709163032 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-1-10 de 54Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 6Proxima····[39m
[31m"[39m

Call log:
[2m  - Expect "toHaveText" with timeout 10000ms[22m
[2m  - waiting for locator('body')[22m
[2m    24 × locator resolved to <body>…</body>[22m
[2m       - unexpected value "[22m
[2m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 17 aprovações pendentesADMINISTRADORCotacoes17 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-805001-20264S-474830-20263 fornecedor(es)AUTO-4S-20260709163032 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-808990-20264S-474830-20263 fornecedor(es)AUTO-4S-20260709163032 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-598771-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 2.350,00EM ANALISEVerificar aprovacaoExcluir4S-936516-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-730720-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-427961-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir1-10 de 17Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-805001-2026-AUTO-4S-20260709163032 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-805001-2026-AUTO-4S-20260709163032 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-805001-2026-AUTO-4S-20260709163032 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-808990-2026-AUTO-4S-20260709163032 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-808990-2026-AUTO-4S-20260709163032 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-808990-2026-AUTO-4S-20260709163032 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-1-10 de 54Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 6Proxima[22m
[2m  [22m
[2m[22m
[2m"[22m

- Impacto funcional e negocio: Comparativo incorreto afeta decisao de compra e rastreabilidade.
- Recomendacao: Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT014-COTACAO.png

### CT011-COLABORADOR-ALOCACAO - media

- Caso: CT011
- Localizacao: https://4s.ruatrez.com/colaboradores
- Perfil: administrador
- Massa: AUTO-4S-20260711112653
- Passos para reproduzir: Executar o caso automatizado "CT011" e observar o resultado registrado.
- Esperado: Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByText(/AUTO-4S-20260711112653 Cargo/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" with timeout 10000ms[22m
[2m  - waiting for getByText(/AUTO-4S-20260711112653 Cargo/i).first()[22m

- Impacto funcional e negocio: Mao de obra ausente distorce custo real e dashboard financeiro.
- Recomendacao: Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT011-COLABORADOR-ALOCACAO.png

### CT011-COLABORADOR-ALOCACAO - media

- Caso: CT011
- Localizacao: https://4s.ruatrez.com/colaboradores
- Perfil: administrador
- Massa: AUTO-4S-20260711112653
- Passos para reproduzir: Executar o caso automatizado "CT011" e observar o resultado registrado.
- Esperado: Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByText(/AUTO-4S-20260711112653 Faixa/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" with timeout 10000ms[22m
[2m  - waiting for getByText(/AUTO-4S-20260711112653 Faixa/i).first()[22m

- Impacto funcional e negocio: Mao de obra ausente distorce custo real e dashboard financeiro.
- Recomendacao: Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT011-COLABORADOR-ALOCACAO.png

