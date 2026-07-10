# Relatorio de Diagnostico 4S

Gerado em: 2026-07-09T20:01:31.013Z

## Sumario

Casos Playwright: 5. Falhas: 0. Aprovados: 5.

Status CT001-CT022: aprovado 9, reprovado 4, bloqueado 9, nao aplicavel 0.

Problemas registrados: 20.

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
| CT008 | reprovado | critica | Item orcado com previsto, saldo, comprometido e pago | CT004, CT005, CT007 | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260709163032 Item orcado material/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260709163032 Item orcado material/i).first()[22m<br> | /home/colatto/repo/R3/test4s/test-results/CT008-ORCAMENTO-BASE.png | Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes. |
| CT009 | bloqueado | critica | Alteracao de orcamento protegida por usuario comum | CT002, CT008 | Caso bloqueado por dependencia CT008 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. |
| CT010 | bloqueado | critica | Exclusao de item orcado por usuario comum e administrador | CT002, CT008 | Caso bloqueado por dependencia CT008 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. |
| CT011 | reprovado | media | Colaborador, cargo/faixa e alocacao quando a UI permitir | CT005 | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260709163032 Cargo/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260709163032 Cargo/i).first()[22m<br> | /home/colatto/repo/R3/test4s/test-results/CT011-COLABORADOR-ALOCACAO.png | Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade. |
| CT012 | bloqueado | critica | Requisicao dentro do saldo e acima do saldo | CT008 | Caso bloqueado por dependencia CT008 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. |
| CT013 | bloqueado | alta | Aprovacao e rejeicao de requisicao | CT012 | Caso bloqueado por dependencia CT012 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. |
| CT014 | reprovado | alta | Cotacao com 3 fornecedores, comparativo e vencedor | CT006, CT013 | [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveText[2m([22m[32mexpected[39m[2m)[22m failed<br><br>Locator: locator('body')<br>Timeout: 10000ms<br>Expected pattern: [32m/AUTO-4S-20260709163032/i[39m<br>Received string:  [31m"[39m<br>[31m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 15 aprovações pendentesADMINISTRADORCotacoes15 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-936516-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-598771-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 2.350,00EM ANALISEVerificar aprovacaoExcluir4S-730720-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-427961-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir1-10 de 15Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-936516-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-936516-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-936516-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-730720-2026-AUTO-4S-20260708165317 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 48Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 5Proxima····[39m<br>[31m"[39m<br><br>Call log:<br>[2m  - Expect "toHaveText" with timeout 10000ms[22m<br>[2m  - waiting for locator('body')[22m<br>[2m    24 × locator resolved to <body>…</body>[22m<br>[2m       - unexpected value "[22m<br>[2m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 15 aprovações pendentesADMINISTRADORCotacoes15 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-936516-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-598771-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 2.350,00EM ANALISEVerificar aprovacaoExcluir4S-730720-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-427961-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir1-10 de 15Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-936516-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-936516-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-936516-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-730720-2026-AUTO-4S-20260708165317 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 48Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 5Proxima[22m<br>[2m  [22m<br>[2m[22m<br>[2m"[22m<br> | /home/colatto/repo/R3/test4s/test-results/CT014-COTACAO.png | Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor. |
| CT015 | bloqueado | critica | Ordem de compra e comprometimento do orcamento | CT014 | Caso bloqueado por dependencia CT014 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo. |
| CT016 | bloqueado | media | Edicao/exclusao/cancelamento de requisicao, cotacao e OC quando permitido | CT012, CT014, CT015 | Caso bloqueado por dependencia CT012 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. |
| CT017 | bloqueado | critica | Contas a pagar, status e filtros | CT015 | Caso bloqueado por dependencia CT015 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. |
| CT018 | bloqueado | critica | Pagamento parcial, final e tentativa acima do saldo | CT017 | Caso bloqueado por dependencia CT017 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo. |
| CT019 | bloqueado | alta | Dashboard financeiro apos compra/pagamento/mao de obra | CT011, CT018 | Caso bloqueado por dependencia CT011 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT011 e reexecutar este fluxo. |
| CT020 | aprovado | alta | Workflow com perfil correto/incorreto, aprovacao e rejeicao | CT002 | Comportamento observado conforme esperado. |  | Aplicar autorizacao no backend e esconder/desabilitar acoes no frontend para perfis sem permissao. |
| CT021 | aprovado | media | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes | CT020 | Comportamento observado conforme esperado. |  | Garantir eventos de auditoria para entidades financeiras, cadastros e workflow. |
| CT022 | reprovado | alta | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx |  | 502 https://api.lumi.new/lm/p442450294435041280/usuarios/documents/listByPage | /home/colatto/repo/R3/test4s/test-results/HTTP-502-1783626618673.png | Investigar logs do endpoint, corrigir falha e cobrir a rota com teste de integracao ou contrato. |

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT008-ORCAMENTO-BASE | critica | CT008 | https://4s.ruatrez.com/orcamento | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT008" e observar o resultado registrado. | Item orcado deve calcular valor previsto, saldo, comprometido e pago. | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260709163032 Item orcado material/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260709163032 Item orcado material/i).first()[22m<br> | Erro no orcamento base compromete controle de saldo, OC e pagamento. | /home/colatto/repo/R3/test4s/test-results/CT008-ORCAMENTO-BASE.png | Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes. | reprovado |
| CT009-ORCAMENTO-PROTEGIDO-ALTERACAO | critica | CT009 | https://4s.ruatrez.com/orcamento | operacional | AUTO-4S-20260709163032 | Executar o caso automatizado "CT009" e observar o resultado registrado. | Usuario comum nao deve alterar item orcado protegido diretamente; deve gerar aprovacao ou bloqueio. | Caso bloqueado por dependencia CT008 registrada como reprovado. | Alteracao livre de orcamento compromete governanca financeira. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. | bloqueado |
| CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO-OPERACIONAL | critica | CT010 | https://4s.ruatrez.com/orcamento | operacional | AUTO-4S-20260709163032 | Executar o caso automatizado "CT010" e observar o resultado registrado. | Exclusao por usuario comum deve gerar aprovacao do administrador. | Caso bloqueado por dependencia CT008 registrada como reprovado. | Exclusao indevida remove base de controle financeiro e afeta saldos. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. | bloqueado |
| CT012-REQUISICAO-SALDO | critica | CT012 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT012" e observar o resultado registrado. | Requisicao dentro do saldo deve seguir para aprovacao; acima do saldo deve ser bloqueada ou sinalizada. | Caso bloqueado por dependencia CT008 registrada como reprovado. | Permitir compra acima do saldo rompe controle financeiro da obra. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. | bloqueado |
| CT015-ORDEM-COMPRA | critica | CT015 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT015" e observar o resultado registrado. | OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto. | Caso bloqueado por dependencia CT014 registrada como bloqueado. | Sem comprometimento do orcamento nao ha controle real de compras. |  | Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo. | bloqueado |
| CT017-CONTAS-PAGAR | critica | CT017 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT017" e observar o resultado registrado. | Contas a pagar devem exibir status e filtros funcionais apos OC. | Caso bloqueado por dependencia CT015 registrada como bloqueado. | Sem conta a pagar rastreavel o financeiro nao consegue programar ou reconciliar pagamentos. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. | bloqueado |
| CT018-PAGAMENTOS | critica | CT018 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT018" e observar o resultado registrado. | Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada. | Caso bloqueado por dependencia CT017 registrada como bloqueado. | Erro em pagamento distorce custo real, dashboard e tomada de decisao. |  | Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo. | bloqueado |
| CT015-ORDEM-COMPRA | critica | CT015 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT015" e observar o resultado registrado. | OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto. | Caso bloqueado por dependencia CT014 registrada como reprovado. | Sem comprometimento do orcamento nao ha controle real de compras. |  | Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo. | bloqueado |
| CT017-CONTAS-PAGAR | critica | CT017 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT017" e observar o resultado registrado. | Contas a pagar devem exibir status e filtros funcionais apos OC. | Caso bloqueado por dependencia CT015 registrada como bloqueado. | Sem conta a pagar rastreavel o financeiro nao consegue programar ou reconciliar pagamentos. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. | bloqueado |
| CT018-PAGAMENTOS | critica | CT018 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT018" e observar o resultado registrado. | Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada. | Caso bloqueado por dependencia CT017 registrada como bloqueado. | Erro em pagamento distorce custo real, dashboard e tomada de decisao. |  | Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo. | bloqueado |
| HTTP-502-1783626618673 | alta | CT022 | https://4s.ruatrez.com/orcamento/ | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT022" e observar o resultado registrado. | Requisicoes da aplicacao devem responder sem erro 4xx/5xx inesperado. | 502 https://api.lumi.new/lm/p442450294435041280/usuarios/documents/listByPage | Erro HTTP pode bloquear carregamento de telas, persistencia de dados ou integracao entre modulos. | /home/colatto/repo/R3/test4s/test-results/HTTP-502-1783626618673.png | Investigar logs do endpoint, corrigir falha e cobrir a rota com teste de integracao ou contrato. | reprovado |
| CT014-COTACAO | alta | CT014 | https://4s.ruatrez.com/cotacoes | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT014" e observar o resultado registrado. | Cotacao deve comparar fornecedores, registrar vencedor e persistir. | [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveText[2m([22m[32mexpected[39m[2m)[22m failed<br><br>Locator: locator('body')<br>Timeout: 10000ms<br>Expected pattern: [32m/AUTO-4S-20260709163032/i[39m<br>Received string:  [31m"[39m<br>[31m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 15 aprovações pendentesADMINISTRADORCotacoes15 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-936516-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-598771-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 2.350,00EM ANALISEVerificar aprovacaoExcluir4S-730720-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-427961-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir1-10 de 15Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-936516-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-936516-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-936516-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-730720-2026-AUTO-4S-20260708165317 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 48Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 5Proxima····[39m<br>[31m"[39m<br><br>Call log:<br>[2m  - Expect "toHaveText" with timeout 10000ms[22m<br>[2m  - waiting for locator('body')[22m<br>[2m    24 × locator resolved to <body>…</body>[22m<br>[2m       - unexpected value "[22m<br>[2m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 15 aprovações pendentesADMINISTRADORCotacoes15 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-936516-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-598771-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 2.350,00EM ANALISEVerificar aprovacaoExcluir4S-730720-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-427961-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir1-10 de 15Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-936516-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-936516-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-936516-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-730720-2026-AUTO-4S-20260708165317 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 48Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 5Proxima[22m<br>[2m  [22m<br>[2m[22m<br>[2m"[22m<br> | Comparativo incorreto afeta decisao de compra e rastreabilidade. | /home/colatto/repo/R3/test4s/test-results/CT014-COTACAO.png | Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor. | reprovado |
| CT013-APROVACAO-REJEICAO-REQUISICAO | alta | CT013 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT013" e observar o resultado registrado. | Aprovacao deve liberar requisicao para cotacao e rejeicao deve encerrar fluxo com decisao auditavel. | Caso bloqueado por dependencia CT012 registrada como bloqueado. | Workflow quebrado permite avancos indevidos ou bloqueia compras validas. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. | bloqueado |
| CT014-COTACAO | alta | CT014 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT014" e observar o resultado registrado. | Cotacao deve comparar fornecedores, registrar vencedor e persistir. | Caso bloqueado por dependencia CT013 registrada como bloqueado. | Comparativo incorreto afeta decisao de compra e rastreabilidade. |  | Corrigir primeiro o caso raiz CT013 e reexecutar este fluxo. | bloqueado |
| CT019-DASHBOARD-FINANCEIRO | alta | CT019 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT019" e observar o resultado registrado. | Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos. | Caso bloqueado por dependencia CT011 registrada como reprovado. | Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade. |  | Corrigir primeiro o caso raiz CT011 e reexecutar este fluxo. | bloqueado |
| CT019-DASHBOARD-FINANCEIRO | alta | CT019 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT019" e observar o resultado registrado. | Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos. | Caso bloqueado por dependencia CT018 registrada como bloqueado. | Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade. |  | Corrigir primeiro o caso raiz CT018 e reexecutar este fluxo. | bloqueado |
| CT011-COLABORADOR-ALOCACAO | media | CT011 | https://4s.ruatrez.com/colaboradores | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT011" e observar o resultado registrado. | Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo. | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260709163032 Cargo/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260709163032 Cargo/i).first()[22m<br> | Mao de obra ausente distorce custo real e dashboard financeiro. | /home/colatto/repo/R3/test4s/test-results/CT011-COLABORADOR-ALOCACAO.png | Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade. | reprovado |
| CONSOLE-1783626618673 | media | CT022 | https://4s.ruatrez.com/orcamento/ | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT022" e observar o resultado registrado. | A tela nao deve emitir erros JavaScript no console. | Failed to load resource: the server responded with a status of 502 () | Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica. | /home/colatto/repo/R3/test4s/test-results/CONSOLE-1783626618673.png | Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada. | reprovado |
| CT016-EDICAO-CANCELAMENTO-DOCUMENTOS | media | CT016 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT016" e observar o resultado registrado. | Requisicao, cotacao e OC devem permitir edicao/cancelamento quando a regra permitir ou exibir bloqueio de negocio. | Caso bloqueado por dependencia CT012 registrada como bloqueado. | Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. | bloqueado |
| CT016-EDICAO-CANCELAMENTO-DOCUMENTOS | media | CT016 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260709163032 | Executar o caso automatizado "CT016" e observar o resultado registrado. | Requisicao, cotacao e OC devem permitir edicao/cancelamento quando a regra permitir ou exibir bloqueio de negocio. | Caso bloqueado por dependencia CT014 registrada como reprovado. | Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro. |  | Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo. | bloqueado |

## Detalhes Dos Desvios

### CT008-ORCAMENTO-BASE - critica

- Caso: CT008
- Localizacao: https://4s.ruatrez.com/orcamento
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT008" e observar o resultado registrado.
- Esperado: Item orcado deve calcular valor previsto, saldo, comprometido e pago.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByText(/AUTO-4S-20260709163032 Item orcado material/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" with timeout 10000ms[22m
[2m  - waiting for getByText(/AUTO-4S-20260709163032 Item orcado material/i).first()[22m

- Impacto funcional e negocio: Erro no orcamento base compromete controle de saldo, OC e pagamento.
- Recomendacao: Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT008-ORCAMENTO-BASE.png

### CT009-ORCAMENTO-PROTEGIDO-ALTERACAO - critica

- Caso: CT009
- Localizacao: https://4s.ruatrez.com/orcamento
- Perfil: operacional
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT009" e observar o resultado registrado.
- Esperado: Usuario comum nao deve alterar item orcado protegido diretamente; deve gerar aprovacao ou bloqueio.
- Obtido: Caso bloqueado por dependencia CT008 registrada como reprovado.
- Impacto funcional e negocio: Alteracao livre de orcamento compromete governanca financeira.
- Recomendacao: Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO-OPERACIONAL - critica

- Caso: CT010
- Localizacao: https://4s.ruatrez.com/orcamento
- Perfil: operacional
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT010" e observar o resultado registrado.
- Esperado: Exclusao por usuario comum deve gerar aprovacao do administrador.
- Obtido: Caso bloqueado por dependencia CT008 registrada como reprovado.
- Impacto funcional e negocio: Exclusao indevida remove base de controle financeiro e afeta saldos.
- Recomendacao: Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT012-REQUISICAO-SALDO - critica

- Caso: CT012
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT012" e observar o resultado registrado.
- Esperado: Requisicao dentro do saldo deve seguir para aprovacao; acima do saldo deve ser bloqueada ou sinalizada.
- Obtido: Caso bloqueado por dependencia CT008 registrada como reprovado.
- Impacto funcional e negocio: Permitir compra acima do saldo rompe controle financeiro da obra.
- Recomendacao: Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT015-ORDEM-COMPRA - critica

- Caso: CT015
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
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
- Massa: AUTO-4S-20260709163032
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
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT018" e observar o resultado registrado.
- Esperado: Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada.
- Obtido: Caso bloqueado por dependencia CT017 registrada como bloqueado.
- Impacto funcional e negocio: Erro em pagamento distorce custo real, dashboard e tomada de decisao.
- Recomendacao: Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT015-ORDEM-COMPRA - critica

- Caso: CT015
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT015" e observar o resultado registrado.
- Esperado: OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto.
- Obtido: Caso bloqueado por dependencia CT014 registrada como reprovado.
- Impacto funcional e negocio: Sem comprometimento do orcamento nao ha controle real de compras.
- Recomendacao: Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT017-CONTAS-PAGAR - critica

- Caso: CT017
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
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
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT018" e observar o resultado registrado.
- Esperado: Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada.
- Obtido: Caso bloqueado por dependencia CT017 registrada como bloqueado.
- Impacto funcional e negocio: Erro em pagamento distorce custo real, dashboard e tomada de decisao.
- Recomendacao: Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### HTTP-502-1783626618673 - alta

- Caso: CT022
- Localizacao: https://4s.ruatrez.com/orcamento/
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT022" e observar o resultado registrado.
- Esperado: Requisicoes da aplicacao devem responder sem erro 4xx/5xx inesperado.
- Obtido: 502 https://api.lumi.new/lm/p442450294435041280/usuarios/documents/listByPage
- Impacto funcional e negocio: Erro HTTP pode bloquear carregamento de telas, persistencia de dados ou integracao entre modulos.
- Recomendacao: Investigar logs do endpoint, corrigir falha e cobrir a rota com teste de integracao ou contrato.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/HTTP-502-1783626618673.png

### CT014-COTACAO - alta

- Caso: CT014
- Localizacao: https://4s.ruatrez.com/cotacoes
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT014" e observar o resultado registrado.
- Esperado: Cotacao deve comparar fornecedores, registrar vencedor e persistir.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('body')
Timeout: 10000ms
Expected pattern: [32m/AUTO-4S-20260709163032/i[39m
Received string:  [31m"[39m
[31m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 15 aprovações pendentesADMINISTRADORCotacoes15 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-936516-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-598771-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 2.350,00EM ANALISEVerificar aprovacaoExcluir4S-730720-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-427961-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir1-10 de 15Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-936516-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-936516-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-936516-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-730720-2026-AUTO-4S-20260708165317 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 48Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 5Proxima····[39m
[31m"[39m

Call log:
[2m  - Expect "toHaveText" with timeout 10000ms[22m
[2m  - waiting for locator('body')[22m
[2m    24 × locator resolved to <body>…</body>[22m
[2m       - unexpected value "[22m
[2m    Núcleo Financeiro◈Dashboard⊞Cadastros⊙Configurações▶◑Orçamento▶◐Suprimentos▶RequisiçõesCotaçõesOrdens de Compra◧Financeiro▶◫Workflow▶HHelloADMINISTRADOR⏻⚠ 15 aprovações pendentesADMINISTRADORCotacoes15 cotacoes+ Nova CotacaoNumeroRequisicaoFornecedoresVencedorMenor valorStatusAcoes4S-936516-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-598771-20264S-623022-20263 fornecedor(es)AUTO-4S-20260709160023 Fornecedor AR$ 2.350,00EM ANALISEVerificar aprovacaoExcluir4S-730720-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-427961-20264S-675991-20263 fornecedor(es)AUTO-4S-20260708165317 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-587617-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-493593-20264S-718458-20263 fornecedor(es)AUTO-4S-20260708145148 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-995535-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00EM ANALISEVerificar aprovacaoExcluir4S-279280-20264S-808728-20263 fornecedor(es)AUTO-4S-20260707162105 Fornecedor AR$ 1.175,00CONCLUIDAExcluir4S-664187-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00EM ANALISEVerificar aprovacaoExcluir4S-434135-20264S-402937-20263 fornecedor(es)AUTO-4S-20260707153000 Fornecedor AR$ 11.750,00CONCLUIDAExcluir1-10 de 15Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 2ProximaComparativo de propostasCotacaoItemFornecedorQtd.Vlr. unit.TotalPrazoVencedor4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-936516-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-936516-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-936516-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor B1R$ 1.190,00R$ 1.190,0010 dias-4S-598771-2026-AUTO-4S-20260709160023 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim4S-598771-2026-AUTO-4S-20260709160023 Fornecedor C1R$ 1.210,00R$ 1.210,0010 dias-4S-730720-2026-AUTO-4S-20260708165317 Fornecedor A1R$ 1.175,00R$ 1.175,0010 diassim1-10 de 48Itens por pagina10 por pagina20 por pagina50 por pagina100 por paginaAnteriorPagina 1 de 5Proxima[22m
[2m  [22m
[2m[22m
[2m"[22m

- Impacto funcional e negocio: Comparativo incorreto afeta decisao de compra e rastreabilidade.
- Recomendacao: Corrigir vinculo com requisicao, propostas por fornecedor e persistencia do vencedor.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT014-COTACAO.png

### CT013-APROVACAO-REJEICAO-REQUISICAO - alta

- Caso: CT013
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
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
- Massa: AUTO-4S-20260709163032
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
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT019" e observar o resultado registrado.
- Esperado: Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos.
- Obtido: Caso bloqueado por dependencia CT011 registrada como reprovado.
- Impacto funcional e negocio: Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade.
- Recomendacao: Corrigir primeiro o caso raiz CT011 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT019-DASHBOARD-FINANCEIRO - alta

- Caso: CT019
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT019" e observar o resultado registrado.
- Esperado: Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos.
- Obtido: Caso bloqueado por dependencia CT018 registrada como bloqueado.
- Impacto funcional e negocio: Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade.
- Recomendacao: Corrigir primeiro o caso raiz CT018 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT011-COLABORADOR-ALOCACAO - media

- Caso: CT011
- Localizacao: https://4s.ruatrez.com/colaboradores
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT011" e observar o resultado registrado.
- Esperado: Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByText(/AUTO-4S-20260709163032 Cargo/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" with timeout 10000ms[22m
[2m  - waiting for getByText(/AUTO-4S-20260709163032 Cargo/i).first()[22m

- Impacto funcional e negocio: Mao de obra ausente distorce custo real e dashboard financeiro.
- Recomendacao: Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT011-COLABORADOR-ALOCACAO.png

### CONSOLE-1783626618673 - media

- Caso: CT022
- Localizacao: https://4s.ruatrez.com/orcamento/
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT022" e observar o resultado registrado.
- Esperado: A tela nao deve emitir erros JavaScript no console.
- Obtido: Failed to load resource: the server responded with a status of 502 ()
- Impacto funcional e negocio: Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica.
- Recomendacao: Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CONSOLE-1783626618673.png

### CT016-EDICAO-CANCELAMENTO-DOCUMENTOS - media

- Caso: CT016
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT016" e observar o resultado registrado.
- Esperado: Requisicao, cotacao e OC devem permitir edicao/cancelamento quando a regra permitir ou exibir bloqueio de negocio.
- Obtido: Caso bloqueado por dependencia CT012 registrada como bloqueado.
- Impacto funcional e negocio: Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro.
- Recomendacao: Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT016-EDICAO-CANCELAMENTO-DOCUMENTOS - media

- Caso: CT016
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260709163032
- Passos para reproduzir: Executar o caso automatizado "CT016" e observar o resultado registrado.
- Esperado: Requisicao, cotacao e OC devem permitir edicao/cancelamento quando a regra permitir ou exibir bloqueio de negocio.
- Obtido: Caso bloqueado por dependencia CT014 registrada como reprovado.
- Impacto funcional e negocio: Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro.
- Recomendacao: Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

