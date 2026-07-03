# Relatorio de Diagnostico 4S

Gerado em: 2026-07-03T14:33:10.618Z

## Sumario

Casos Playwright: 3. Falhas: 0. Aprovados: 3.

Status CT001-CT022: aprovado 10, reprovado 2, bloqueado 10, nao aplicavel 0.

Problemas registrados: 3.

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
| CT008 | reprovado | critica | Item orcado com previsto, saldo, comprometido e pago | CT004, CT005, CT007 | Could not find field: obra | /home/colatto/repo/R3/test4s/test-results/CT008-ORCAMENTO-BASE.png | Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes. |
| CT009 | bloqueado | critica | Alteracao de orcamento protegida por usuario comum | CT002, CT008 | Caso bloqueado por dependencia CT008 registrada como reprovado. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. |
| CT010 | bloqueado | critica | Exclusao de item orcado por usuario comum e administrador | CT002, CT008 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT011 | reprovado | media | Colaborador, cargo/faixa e alocacao quando a UI permitir | CT005 | Could not find field: nome \| colaborador | /home/colatto/repo/R3/test4s/test-results/CT011-COLABORADOR-ALOCACAO.png | Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade. |
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
| CT008-ORCAMENTO-BASE | critica | CT008 | https://4s.ruatrez.com/orcamento | administrador | AUTO-4S-20260703T000000 | Executar o caso automatizado "CT008" e observar o resultado registrado. | Item orcado deve calcular valor previsto, saldo, comprometido e pago. | Could not find field: obra | Erro no orcamento base compromete controle de saldo, OC e pagamento. | /home/colatto/repo/R3/test4s/test-results/CT008-ORCAMENTO-BASE.png | Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes. | reprovado |
| CT009-ORCAMENTO-PROTEGIDO-ALTERACAO | critica | CT009 | https://4s.ruatrez.com/ | operacional | AUTO-4S-20260703T000000 | Executar o caso automatizado "CT009" e observar o resultado registrado. | Usuario comum nao deve alterar item orcado protegido diretamente; deve gerar aprovacao ou bloqueio. | Caso bloqueado por dependencia CT008 registrada como reprovado. | Alteracao livre de orcamento compromete governanca financeira. |  | Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo. | bloqueado |
| CT011-COLABORADOR-ALOCACAO | media | CT011 | https://4s.ruatrez.com/colaboradores | administrador | AUTO-4S-20260703T000000 | Executar o caso automatizado "CT011" e observar o resultado registrado. | Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo. | Could not find field: nome \| colaborador | Mao de obra ausente distorce custo real e dashboard financeiro. | /home/colatto/repo/R3/test4s/test-results/CT011-COLABORADOR-ALOCACAO.png | Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade. | reprovado |

## Detalhes Dos Desvios

### CT008-ORCAMENTO-BASE - critica

- Caso: CT008
- Localizacao: https://4s.ruatrez.com/orcamento
- Perfil: administrador
- Massa: AUTO-4S-20260703T000000
- Passos para reproduzir: Executar o caso automatizado "CT008" e observar o resultado registrado.
- Esperado: Item orcado deve calcular valor previsto, saldo, comprometido e pago.
- Obtido: Could not find field: obra
- Impacto funcional e negocio: Erro no orcamento base compromete controle de saldo, OC e pagamento.
- Recomendacao: Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT008-ORCAMENTO-BASE.png

### CT009-ORCAMENTO-PROTEGIDO-ALTERACAO - critica

- Caso: CT009
- Localizacao: https://4s.ruatrez.com/
- Perfil: operacional
- Massa: AUTO-4S-20260703T000000
- Passos para reproduzir: Executar o caso automatizado "CT009" e observar o resultado registrado.
- Esperado: Usuario comum nao deve alterar item orcado protegido diretamente; deve gerar aprovacao ou bloqueio.
- Obtido: Caso bloqueado por dependencia CT008 registrada como reprovado.
- Impacto funcional e negocio: Alteracao livre de orcamento compromete governanca financeira.
- Recomendacao: Corrigir primeiro o caso raiz CT008 e reexecutar este fluxo.
- Status: bloqueado
- Evidencia: Nao capturada

### CT011-COLABORADOR-ALOCACAO - media

- Caso: CT011
- Localizacao: https://4s.ruatrez.com/colaboradores
- Perfil: administrador
- Massa: AUTO-4S-20260703T000000
- Passos para reproduzir: Executar o caso automatizado "CT011" e observar o resultado registrado.
- Esperado: Colaborador, cargo/faixa e alocacao devem ser cadastrados quando a UI disponibilizar o fluxo.
- Obtido: Could not find field: nome | colaborador
- Impacto funcional e negocio: Mao de obra ausente distorce custo real e dashboard financeiro.
- Recomendacao: Expor fluxo de cadastro/alocacao de colaboradores ou documentar a regra de indisponibilidade.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT011-COLABORADOR-ALOCACAO.png

