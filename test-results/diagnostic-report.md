# Relatorio de Diagnostico 4S

Gerado em: 2026-06-26T20:11:53.134Z

## Sumario

Casos Playwright: 22. Falhas: 3. Aprovados: 19.

Status CT001-CT022: aprovado 6, reprovado 3, bloqueado 13, nao aplicavel 0.

Problemas registrados: 16.

## Matriz CT001-CT022

| CT | Status | Severidade | Titulo | Dependencias | Obtido | Evidencia | Recomendacao |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CT001 | aprovado | critica | Login valido, logout, login invalido e sessao expirada quando observavel |  | Comportamento observado conforme esperado. |  | Confirmar credenciais, invalidacao de sessao e mensagens de erro de autenticacao. |
| CT002 | aprovado | alta | Criacao, edicao, inativacao e login bloqueado de usuario inativo |  | Comportamento observado conforme esperado. |  | Revisar matriz de perfis, status de usuario e validacao de login no backend. |
| CT003 | aprovado | media | Atalhos da tela Cadastros |  | Comportamento observado conforme esperado. |  | Corrigir links/rotas dos cards ou botoes da tela Cadastros. |
| CT004 | aprovado | alta | Cliente e contrato com edicao, persistencia e vinculo |  | Comportamento observado conforme esperado. |  | Corrigir persistencia e relacionamento entre cliente e contrato. |
| CT005 | reprovado | alta | Unidade, obra e centro de custo | CT004 | Could not find field: obra | /home/colatto/repo/R3/test4s/test-results/CT005-OBRA-CENTRO.png | Revisar obrigatoriedade, vinculos e persistencia de obras/centros. |
| CT006 | reprovado | media | Fornecedores |  | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260626200547 Fornecedor A/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260626200547 Fornecedor A/i).first()[22m<br> | /home/colatto/repo/R3/test4s/test-results/CT006-FORNECEDORES.png | Garantir cadastro e selecao de fornecedores ativos em cotacoes. |
| CT007 | aprovado | media | Categorias orcamentarias |  | Comportamento observado conforme esperado. |  | Corrigir cadastro, listagem e uso das categorias nos selects de movimento. |
| CT008 | bloqueado | critica | Item orcado com previsto, saldo, comprometido e pago | CT004, CT005, CT007 | Caso bloqueado por dependencia CT005 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT005 e reexecutar este fluxo. |
| CT009 | bloqueado | critica | Alteracao de orcamento protegida por usuario comum | CT002, CT008 | Caso bloqueado por dependencia CT008 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. |
| CT010 | bloqueado | critica | Exclusao de item orcado por usuario comum e administrador | CT002, CT008 | Caso bloqueado por dependencia CT008 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. |
| CT011 | bloqueado | media | Colaborador, cargo/faixa e alocacao quando a UI permitir | CT005 | Caso bloqueado por dependencia CT005 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT005 e reexecutar este fluxo. |
| CT012 | bloqueado | critica | Requisicao dentro do saldo e acima do saldo | CT008 | Caso bloqueado por dependencia CT008 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. |
| CT013 | bloqueado | alta | Aprovacao e rejeicao de requisicao | CT012 | Caso bloqueado por dependencia CT012 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. |
| CT014 | bloqueado | alta | Cotacao com 3 fornecedores, comparativo e vencedor | CT006, CT013 | Caso bloqueado por dependencia CT006 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT006 e reexecutar este fluxo. |
| CT015 | bloqueado | critica | Ordem de compra e comprometimento do orcamento | CT014 | Caso bloqueado por dependencia CT014 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo. |
| CT016 | bloqueado | media | Edicao/exclusao/cancelamento de requisicao, cotacao e OC quando permitido | CT012, CT014, CT015 | Caso bloqueado por dependencia CT012 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. |
| CT017 | bloqueado | critica | Contas a pagar, status e filtros | CT015 | Caso bloqueado por dependencia CT015 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. |
| CT018 | bloqueado | critica | Pagamento parcial, final e tentativa acima do saldo | CT017 | Caso bloqueado por dependencia CT017 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo. |
| CT019 | bloqueado | alta | Dashboard financeiro apos compra/pagamento/mao de obra | CT011, CT018 | Caso bloqueado por dependencia CT011 registrada como bloqueado. |  | Corrigir primeiro o caso raiz CT011 e reexecutar este fluxo. |
| CT020 | reprovado | alta | Workflow com perfil correto/incorreto, aprovacao e rejeicao | CT002 | Could not find clickable control: Workflow | /home/colatto/repo/R3/test4s/test-results/CT020-WORKFLOW-PERFIL-INCORRETO.png | Aplicar autorizacao no backend e esconder/desabilitar acoes no frontend para perfis sem permissao. |
| CT021 | bloqueado | media | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes | CT020 | Caso bloqueado por dependencia CT020 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT020 e reexecutar este fluxo. |
| CT022 | aprovado | alta | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx |  | Comportamento observado conforme esperado. |  | Corrigir rota, permissao, carregamento de dados ou componente frontend da tela afetada. |

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT008-ORCAMENTO-BASE | critica | CT008 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260626200616 | Executar o caso automatizado "CT008" e observar o resultado registrado. | Item orcado deve calcular valor previsto, saldo, comprometido e pago. | Caso bloqueado por dependencia CT005 registrada como reprovado. | Erro no orcamento base compromete controle de saldo, OC e pagamento. |  | Corrigir primeiro o caso raiz CT005 e reexecutar este fluxo. | bloqueado |
| CT009-ORCAMENTO-PROTEGIDO-ALTERACAO | critica | CT009 | https://4s.ruatrez.com/ | operacional | AUTO-4S-20260626200616 | Executar o caso automatizado "CT009" e observar o resultado registrado. | Usuario comum nao deve alterar item orcado protegido diretamente; deve gerar aprovacao ou bloqueio. | Caso bloqueado por dependencia CT008 registrada como bloqueado. | Alteracao livre de orcamento compromete governanca financeira. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. | bloqueado |
| CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO-OPERACIONAL | critica | CT010 | https://4s.ruatrez.com/ | operacional | AUTO-4S-20260626200616 | Executar o caso automatizado "CT010" e observar o resultado registrado. | Exclusao por usuario comum deve gerar aprovacao do administrador. | Caso bloqueado por dependencia CT008 registrada como bloqueado. | Exclusao indevida remove base de controle financeiro e afeta saldos. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. | bloqueado |
| CT012-REQUISICAO-SALDO | critica | CT012 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260626200616 | Executar o caso automatizado "CT012" e observar o resultado registrado. | Requisicao dentro do saldo deve seguir para aprovacao; acima do saldo deve ser bloqueada ou sinalizada. | Caso bloqueado por dependencia CT008 registrada como bloqueado. | Permitir compra acima do saldo rompe controle financeiro da obra. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. | bloqueado |
| CT015-ORDEM-COMPRA | critica | CT015 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260626200616 | Executar o caso automatizado "CT015" e observar o resultado registrado. | OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto. | Caso bloqueado por dependencia CT014 registrada como bloqueado. | Sem comprometimento do orcamento nao ha controle real de compras. |  | Corrigir primeiro o caso raiz CT014 e reexecutar este fluxo. | bloqueado |
| CT017-CONTAS-PAGAR | critica | CT017 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260626200616 | Executar o caso automatizado "CT017" e observar o resultado registrado. | Contas a pagar devem exibir status e filtros funcionais apos OC. | Caso bloqueado por dependencia CT015 registrada como bloqueado. | Sem conta a pagar rastreavel o financeiro nao consegue programar ou reconciliar pagamentos. |  | Corrigir primeiro o caso raiz CT015 e reexecutar este fluxo. | bloqueado |
| CT018-PAGAMENTOS | critica | CT018 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260626200616 | Executar o caso automatizado "CT018" e observar o resultado registrado. | Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada. | Caso bloqueado por dependencia CT017 registrada como bloqueado. | Erro em pagamento distorce custo real, dashboard e tomada de decisao. |  | Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo. | bloqueado |
| CT005-OBRA-CENTRO | alta | CT005 | https://4s.ruatrez.com/obras | administrador | AUTO-4S-20260626200345 | Executar o caso automatizado "CT005" e observar o resultado registrado. | Unidade, obra e centro de custo devem ficar disponiveis para os modulos seguintes. | Could not find field: obra | Falha nesse cadastro impede orcamento, requisicao e financeiro. | /home/colatto/repo/R3/test4s/test-results/CT005-OBRA-CENTRO.png | Revisar obrigatoriedade, vinculos e persistencia de obras/centros. | reprovado |
| CT020-WORKFLOW-PERFIL-INCORRETO | alta | CT020 | https://4s.ruatrez.com/obras | operacional | AUTO-4S-20260626200616 | Executar o caso automatizado "CT020" e observar o resultado registrado. | Perfil incorreto nao deve aprovar ou rejeitar pendencias sem permissao. | Could not find clickable control: Workflow | Aprovacao por perfil indevido quebra governanca do fluxo financeiro. | /home/colatto/repo/R3/test4s/test-results/CT020-WORKFLOW-PERFIL-INCORRETO.png | Aplicar autorizacao no backend e esconder/desabilitar acoes no frontend para perfis sem permissao. | reprovado |
| CT013-APROVACAO-REJEICAO-REQUISICAO | alta | CT013 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260626200616 | Executar o caso automatizado "CT013" e observar o resultado registrado. | Aprovacao deve liberar requisicao para cotacao e rejeicao deve encerrar fluxo com decisao auditavel. | Caso bloqueado por dependencia CT012 registrada como bloqueado. | Workflow quebrado permite avancos indevidos ou bloqueia compras validas. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. | bloqueado |
| CT014-COTACAO | alta | CT014 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260626200616 | Executar o caso automatizado "CT014" e observar o resultado registrado. | Cotacao deve comparar fornecedores, registrar vencedor e persistir. | Caso bloqueado por dependencia CT006 registrada como reprovado. | Comparativo incorreto afeta decisao de compra e rastreabilidade. |  | Corrigir primeiro o caso raiz CT006 e reexecutar este fluxo. | bloqueado |
| CT019-DASHBOARD-FINANCEIRO | alta | CT019 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260626200616 | Executar o caso automatizado "CT019" e observar o resultado registrado. | Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos. | Caso bloqueado por dependencia CT011 registrada como bloqueado. | Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade. |  | Corrigir primeiro o caso raiz CT011 e reexecutar este fluxo. | bloqueado |
| CT006-FORNECEDORES | media | CT006 | https://4s.ruatrez.com/fornecedores | administrador | AUTO-4S-20260626200547 | Executar o caso automatizado "CT006" e observar o resultado registrado. | Tres fornecedores ativos devem poder ser usados em cotacoes. | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260626200547 Fornecedor A/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260626200547 Fornecedor A/i).first()[22m<br> | Sem fornecedores suficientes o comparativo de cotacao fica incompleto. | /home/colatto/repo/R3/test4s/test-results/CT006-FORNECEDORES.png | Garantir cadastro e selecao de fornecedores ativos em cotacoes. | reprovado |
| CT011-COLABORADOR-ALOCACAO | media | CT011 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260626200616 | Executar o caso automatizado "CT011" e observar o resultado registrado. | Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo. | Caso bloqueado por dependencia CT005 registrada como reprovado. | Mao de obra ausente distorce custo real e dashboard financeiro. |  | Corrigir primeiro o caso raiz CT005 e reexecutar este fluxo. | bloqueado |
| CT016-EDICAO-CANCELAMENTO-DOCUMENTOS | media | CT016 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260626200616 | Executar o caso automatizado "CT016" e observar o resultado registrado. | Requisicao, cotacao e OC devem permitir edicao/cancelamento quando a regra permitir ou exibir bloqueio de negocio. | Caso bloqueado por dependencia CT012 registrada como bloqueado. | Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro. |  | Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo. | bloqueado |
| CT021-AUDITORIA | media | CT021 | https://4s.ruatrez.com/dashboard | administrador | AUTO-4S-20260626201132 | Executar o caso automatizado "CT021" e observar o resultado registrado. | Auditoria deve registrar criacao, edicao, exclusao/cancelamento e decisoes com usuario/data/hora. | Caso bloqueado por dependencia CT020 registrada como reprovado. | Auditoria incompleta reduz rastreabilidade e capacidade de apuracao. |  | Corrigir primeiro o caso raiz CT020 e reexecutar este fluxo. | bloqueado |

## Detalhes Dos Desvios

### CT008-ORCAMENTO-BASE - critica

- Caso: CT008
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260626200616
- Passos para reproduzir: Executar o caso automatizado "CT008" e observar o resultado registrado.
- Esperado: Item orcado deve calcular valor previsto, saldo, comprometido e pago.
- Obtido: Caso bloqueado por dependencia CT005 registrada como reprovado.
- Impacto funcional e negocio: Erro no orcamento base compromete controle de saldo, OC e pagamento.
- Recomendacao: Corrigir primeiro o caso raiz CT005 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT009-ORCAMENTO-PROTEGIDO-ALTERACAO - critica

- Caso: CT009
- Localizacao: https://4s.ruatrez.com/
- Perfil: operacional
- Massa: AUTO-4S-20260626200616
- Passos para reproduzir: Executar o caso automatizado "CT009" e observar o resultado registrado.
- Esperado: Usuario comum nao deve alterar item orcado protegido diretamente; deve gerar aprovacao ou bloqueio.
- Obtido: Caso bloqueado por dependencia CT008 registrada como bloqueado.
- Impacto funcional e negocio: Alteracao livre de orcamento compromete governanca financeira.
- Recomendacao: Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO-OPERACIONAL - critica

- Caso: CT010
- Localizacao: https://4s.ruatrez.com/
- Perfil: operacional
- Massa: AUTO-4S-20260626200616
- Passos para reproduzir: Executar o caso automatizado "CT010" e observar o resultado registrado.
- Esperado: Exclusao por usuario comum deve gerar aprovacao do administrador.
- Obtido: Caso bloqueado por dependencia CT008 registrada como bloqueado.
- Impacto funcional e negocio: Exclusao indevida remove base de controle financeiro e afeta saldos.
- Recomendacao: Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT012-REQUISICAO-SALDO - critica

- Caso: CT012
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260626200616
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
- Massa: AUTO-4S-20260626200616
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
- Massa: AUTO-4S-20260626200616
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
- Massa: AUTO-4S-20260626200616
- Passos para reproduzir: Executar o caso automatizado "CT018" e observar o resultado registrado.
- Esperado: Pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada.
- Obtido: Caso bloqueado por dependencia CT017 registrada como bloqueado.
- Impacto funcional e negocio: Erro em pagamento distorce custo real, dashboard e tomada de decisao.
- Recomendacao: Corrigir primeiro o caso raiz CT017 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT005-OBRA-CENTRO - alta

- Caso: CT005
- Localizacao: https://4s.ruatrez.com/obras
- Perfil: administrador
- Massa: AUTO-4S-20260626200345
- Passos para reproduzir: Executar o caso automatizado "CT005" e observar o resultado registrado.
- Esperado: Unidade, obra e centro de custo devem ficar disponiveis para os modulos seguintes.
- Obtido: Could not find field: obra
- Impacto funcional e negocio: Falha nesse cadastro impede orcamento, requisicao e financeiro.
- Recomendacao: Revisar obrigatoriedade, vinculos e persistencia de obras/centros.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT005-OBRA-CENTRO.png

### CT020-WORKFLOW-PERFIL-INCORRETO - alta

- Caso: CT020
- Localizacao: https://4s.ruatrez.com/obras
- Perfil: operacional
- Massa: AUTO-4S-20260626200616
- Passos para reproduzir: Executar o caso automatizado "CT020" e observar o resultado registrado.
- Esperado: Perfil incorreto nao deve aprovar ou rejeitar pendencias sem permissao.
- Obtido: Could not find clickable control: Workflow
- Impacto funcional e negocio: Aprovacao por perfil indevido quebra governanca do fluxo financeiro.
- Recomendacao: Aplicar autorizacao no backend e esconder/desabilitar acoes no frontend para perfis sem permissao.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT020-WORKFLOW-PERFIL-INCORRETO.png

### CT013-APROVACAO-REJEICAO-REQUISICAO - alta

- Caso: CT013
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260626200616
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
- Massa: AUTO-4S-20260626200616
- Passos para reproduzir: Executar o caso automatizado "CT014" e observar o resultado registrado.
- Esperado: Cotacao deve comparar fornecedores, registrar vencedor e persistir.
- Obtido: Caso bloqueado por dependencia CT006 registrada como reprovado.
- Impacto funcional e negocio: Comparativo incorreto afeta decisao de compra e rastreabilidade.
- Recomendacao: Corrigir primeiro o caso raiz CT006 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT019-DASHBOARD-FINANCEIRO - alta

- Caso: CT019
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260626200616
- Passos para reproduzir: Executar o caso automatizado "CT019" e observar o resultado registrado.
- Esperado: Dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos.
- Obtido: Caso bloqueado por dependencia CT011 registrada como bloqueado.
- Impacto funcional e negocio: Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade.
- Recomendacao: Corrigir primeiro o caso raiz CT011 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT006-FORNECEDORES - media

- Caso: CT006
- Localizacao: https://4s.ruatrez.com/fornecedores
- Perfil: administrador
- Massa: AUTO-4S-20260626200547
- Passos para reproduzir: Executar o caso automatizado "CT006" e observar o resultado registrado.
- Esperado: Tres fornecedores ativos devem poder ser usados em cotacoes.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByText(/AUTO-4S-20260626200547 Fornecedor A/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" with timeout 10000ms[22m
[2m  - waiting for getByText(/AUTO-4S-20260626200547 Fornecedor A/i).first()[22m

- Impacto funcional e negocio: Sem fornecedores suficientes o comparativo de cotacao fica incompleto.
- Recomendacao: Garantir cadastro e selecao de fornecedores ativos em cotacoes.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT006-FORNECEDORES.png

### CT011-COLABORADOR-ALOCACAO - media

- Caso: CT011
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260626200616
- Passos para reproduzir: Executar o caso automatizado "CT011" e observar o resultado registrado.
- Esperado: Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo.
- Obtido: Caso bloqueado por dependencia CT005 registrada como reprovado.
- Impacto funcional e negocio: Mao de obra ausente distorce custo real e dashboard financeiro.
- Recomendacao: Corrigir primeiro o caso raiz CT005 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT016-EDICAO-CANCELAMENTO-DOCUMENTOS - media

- Caso: CT016
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260626200616
- Passos para reproduzir: Executar o caso automatizado "CT016" e observar o resultado registrado.
- Esperado: Requisicao, cotacao e OC devem permitir edicao/cancelamento quando a regra permitir ou exibir bloqueio de negocio.
- Obtido: Caso bloqueado por dependencia CT012 registrada como bloqueado.
- Impacto funcional e negocio: Sem acao administrativa clara, documentos incorretos permanecem no fluxo financeiro.
- Recomendacao: Corrigir primeiro o caso raiz CT012 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT021-AUDITORIA - media

- Caso: CT021
- Localizacao: https://4s.ruatrez.com/dashboard
- Perfil: administrador
- Massa: AUTO-4S-20260626201132
- Passos para reproduzir: Executar o caso automatizado "CT021" e observar o resultado registrado.
- Esperado: Auditoria deve registrar criacao, edicao, exclusao/cancelamento e decisoes com usuario/data/hora.
- Obtido: Caso bloqueado por dependencia CT020 registrada como reprovado.
- Impacto funcional e negocio: Auditoria incompleta reduz rastreabilidade e capacidade de apuracao.
- Recomendacao: Corrigir primeiro o caso raiz CT020 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

