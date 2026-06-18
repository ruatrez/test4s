# Relatorio de Diagnostico 4S

Gerado em: 2026-06-18T19:17:16.649Z

## Sumario

Casos Playwright: 19. Aprovados: 5. Falhas: 3. Nao executados: 11.

CTs consolidados: 22. Aprovados: 6. Reprovados: 3. Bloqueados: 13. Nao aplicaveis: 0.

Problemas registrados: 3.

## Resultado CT001-CT022

| ID | Severidade | Caso | Caminho | Perfil | Massa | Esperado | Obtido | Evidencia | Defeito | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT001 | critica | Login e acesso inicial | Tela de Login | administrador | AUTO-4S-20260618191314 | Login valido permite acesso, login invalido exibe erro, logout encerra sessao e usuarios acessam somente telas permitidas. | Comportamento validado pela automacao. |  |  | aprovado |
| CT008 | critica | Orcamento base da obra | Orçamento > Itens Orçados | administrador | AUTO-4S-20260618191449 | Item orcado calcula valor previsto, exibe saldo/comprometido/pago e fica disponivel para requisicoes. | Could not find field: obra | /home/colatto/repo/R3/4s/test-results/CT008-ORCAMENTO-BASE.png | CT008-ORCAMENTO-BASE | reprovado |
| CT009 | critica | Alteracao de orcamento por usuario comum | Orçamento > Itens Orçados | - | - | Usuario comum nao altera item protegido diretamente; solicitacao fica pendente e decisao gera auditoria. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT010 | critica | Exclusao de item orcado | Orçamento > Itens Orçados | - | - | Exclusao por usuario comum gera aprovacao; administrador decide ou executa acao conforme regra; auditoria registra. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT012 | critica | Requisicoes com itens | Suprimentos > Requisições | administrador | AUTO-4S-20260618191551 | Requisicao com saldo segue para aprovacao; acima do saldo fica bloqueada ou sinalizada e nao gera cotacao. | locator.click: Timeout 15000ms exceeded.<br>Call log:<br>  - waiting for locator('button, [role="button"]').filter({ hasText: /salvar\|confirmar\|enviar\|criar\|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i }).first()<br>    - locator resolved to <button>Enviar aprovacao</button><br>  - attempting click action<br>    2 × waiting for element to be visible, enabled and stable<br>      - element is visible, enabled and stable<br>      - scrolling into view if needed<br>      - done scrolling<br>      - <div>…</div> intercepts pointer events<br>    - retrying click action<br>    - waiting 20ms<br>    2 × waiting for element to be visible, enabled and stable<br>      - element is visible, enabled and stable<br>      - scrolling into view if needed<br>      - done scrolling<br>      - <div>…</div> intercepts pointer events<br>    - retrying click action<br>      - waiting 100ms<br>    29 × waiting for element to be visible, enabled and stable<br>       - element is visible, enabled and stable<br>       - scrolling into view if needed<br>       - done scrolling<br>       - <div>…</div> intercepts pointer events<br>     - retrying click action<br>       - waiting 500ms<br> | /home/colatto/repo/R3/4s/test-results/CT012-REQUISICAO-SALDO.png | CT012-REQUISICAO-SALDO | reprovado |
| CT015 | critica | Ordem de compra | Suprimentos > Ordens de Compra | - | - | OC nasce da cotacao, reflete itens vencedores, compromete orcamento e gera conta a pagar no ponto previsto. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT017 | critica | Contas a pagar | Financeiro > Contas a Pagar | - | - | Conta automatica/manual aparece com status e saldo coerentes; filtros, edicao, exclusao e dashboard funcionam. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT018 | critica | Pagamentos | Financeiro > Pagamentos | - | - | Pagamentos parcial/final atualizam conta, status, orcamento e custo real; pagamento acima do saldo e bloqueado. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT002 | alta | Usuarios e permissoes | Configurações > Usuários | administrador | AUTO-4S-20260618191449 | Usuario e salvo, perfil altera permissoes, usuario inativo nao opera e regras de exclusao protegida sao respeitadas. | Comportamento validado pela automacao. |  |  | aprovado |
| CT004 | alta | Clientes e contratos | Configurações > Clientes e Contratos | administrador | AUTO-4S-20260618191314 | Cliente e contrato sao salvos, vinculados, editaveis, removiveis quando permitido e persistem apos novo acesso. | expect(locator).toBeVisible() failed<br><br>Locator: getByText(/AUTO-4S-20260618191314 Cliente/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>  - Expect "toBeVisible" with timeout 10000ms<br>  - waiting for getByText(/AUTO-4S-20260618191314 Cliente/i).first()<br> | /home/colatto/repo/R3/4s/test-results/CT004-CLIENTE-CONTRATO.png | CT004-CLIENTE-CONTRATO | reprovado |
| CT005 | alta | Obras, unidades e centros de custo | Configurações > Obras e Centros | - | - | Unidade, obra e centro de custo sao criados, vinculados e disponiveis para orcamento, requisicoes e financeiro. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT011 | alta | Colaboradores, cargos, faixas e alocacoes | Configurações > Colaboradores | - | - | Colaborador e alocacao sao vinculados a obra e custo de mao de obra compoe custo real e dashboard. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT013 | alta | Aprovacao de requisicao | Workflow > Aprovações | - | - | Aprovacao libera cotacao, rejeicao bloqueia continuidade e status/historico sao atualizados. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT014 | alta | Cotacoes e comparativo | Suprimentos > Cotações | - | - | Cotacao vinculada compara fornecedores, registra vencedor, persiste e bloqueia aquisicao sem saldo. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT019 | alta | Dashboard financeiro | Dashboard | administrador | AUTO-4S-20260618191624 | Indicadores refletem orcado, comprometido, pago, saldo, mao de obra, alertas e contas conforme fluxo real. | Comportamento validado pela automacao. |  |  | aprovado |
| CT020 | alta | Workflow completo de aprovacao | Workflow > Aprovações | - | - | Somente perfil correto ou administrador aprova; rejeicao bloqueia avanco e modulo de origem/auditoria refletem a decisao. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT021 | alta | Auditoria | Workflow > Auditoria | - | - | Criacao, edicao, exclusao/cancelamento e aprovacoes registram quem fez, o que fez, quando e modulo afetado. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT022 | alta | Validacao tecnica de rotas e entidades | Todas as telas principais da Fase 1 | administrador | AUTO-4S-20260618191314 | Todas as rotas carregam sem tela quebrada e entidades minimas existem para teste funcional. | Comportamento validado pela automacao. |  |  | aprovado |
| CT003 | media | Cadastros rapidos | Cadastros | administrador | AUTO-4S-20260618191314 | Atalhos direcionam corretamente para clientes, contratos, obras, centros, fornecedores, categorias, cargos, faixas e colaboradores. | Comportamento validado pela automacao. |  |  | aprovado |
| CT006 | media | Fornecedores | Configurações > Fornecedores | - | - | Fornecedores sao salvos, editaveis e disponiveis em cotacoes e ordens de compra. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT007 | media | Categorias orcamentarias | Configurações > Categorias Orc. | - | - | Categorias sao salvas e ficam disponiveis para itens orcados e movimentos. | Caso nao executado ou bloqueado antes de registrar resultado. |  |  | bloqueado |
| CT016 | media | Edicao e exclusao de requisicoes, cotacoes e OC | Suprimentos | administrador | AUTO-4S-20260618191624 | Edicoes persistem, exclusoes pedem confirmacao, filhos vinculados e valores comprometidos sao tratados e auditoria registra. | Comportamento validado pela automacao. |  |  | aprovado |

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT008-ORCAMENTO-BASE | critica | CT008 | Orçamento > Itens Orçados | administrador | AUTO-4S-20260618191449 | Executar o caso automatizado "CT008 - budget item persists and exposes balance fields" e observar a etapa que falhou. | Item orcado deve calcular valor previsto e iniciar saldo disponivel. | Could not find field: obra | Erro no orcamento base compromete todo o controle de saldo, OC e pagamento. | /home/colatto/repo/R3/4s/test-results/CT008-ORCAMENTO-BASE.png | Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes. | reprovado |
| CT012-REQUISICAO-SALDO | critica | CT012 | Suprimentos > Requisições | administrador | AUTO-4S-20260618191551 | Executar o caso automatizado "CT012 - requisition validates budget balance" e observar a etapa que falhou. | Requisicao dentro do saldo segue para aprovacao; acima do saldo fica bloqueada ou sinalizada. | locator.click: Timeout 15000ms exceeded.<br>Call log:<br>  - waiting for locator('button, [role="button"]').filter({ hasText: /salvar\|confirmar\|enviar\|criar\|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i }).first()<br>    - locator resolved to <button>Enviar aprovacao</button><br>  - attempting click action<br>    2 × waiting for element to be visible, enabled and stable<br>      - element is visible, enabled and stable<br>      - scrolling into view if needed<br>      - done scrolling<br>      - <div>…</div> intercepts pointer events<br>    - retrying click action<br>    - waiting 20ms<br>    2 × waiting for element to be visible, enabled and stable<br>      - element is visible, enabled and stable<br>      - scrolling into view if needed<br>      - done scrolling<br>      - <div>…</div> intercepts pointer events<br>    - retrying click action<br>      - waiting 100ms<br>    29 × waiting for element to be visible, enabled and stable<br>       - element is visible, enabled and stable<br>       - scrolling into view if needed<br>       - done scrolling<br>       - <div>…</div> intercepts pointer events<br>     - retrying click action<br>       - waiting 500ms<br> | Permitir compra acima do saldo rompe controle financeiro da obra. | /home/colatto/repo/R3/4s/test-results/CT012-REQUISICAO-SALDO.png | Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes. | reprovado |
| CT004-CLIENTE-CONTRATO | alta | CT004 | Configurações > Clientes e Contratos | administrador | AUTO-4S-20260618191314 | Executar o caso automatizado "CT004 - client and contract persist after refresh" e observar a etapa que falhou. | Cliente e contrato devem ser criados, vinculados e persistidos. | expect(locator).toBeVisible() failed<br><br>Locator: getByText(/AUTO-4S-20260618191314 Cliente/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>  - Expect "toBeVisible" with timeout 10000ms<br>  - waiting for getByText(/AUTO-4S-20260618191314 Cliente/i).first()<br> | Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra. | /home/colatto/repo/R3/4s/test-results/CT004-CLIENTE-CONTRATO.png | Corrigir persistencia e relacionamento entre cliente e contrato. | reprovado |

## Detalhes Dos Desvios

### CT008-ORCAMENTO-BASE - critica

- Caso: CT008
- Localizacao: Orçamento > Itens Orçados
- Perfil: administrador
- Massa: AUTO-4S-20260618191449
- Passos para reproduzir: Executar o caso automatizado "CT008 - budget item persists and exposes balance fields" e observar a etapa que falhou.
- Esperado: Item orcado deve calcular valor previsto e iniciar saldo disponivel.
- Obtido: Could not find field: obra
- Impacto funcional e negocio: Erro no orcamento base compromete todo o controle de saldo, OC e pagamento.
- Recomendacao: Corrigir calculo quantidade x valor unitario, persistencia e exposicao do item para requisicoes.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/4s/test-results/CT008-ORCAMENTO-BASE.png

### CT012-REQUISICAO-SALDO - critica

- Caso: CT012
- Localizacao: Suprimentos > Requisições
- Perfil: administrador
- Massa: AUTO-4S-20260618191551
- Passos para reproduzir: Executar o caso automatizado "CT012 - requisition validates budget balance" e observar a etapa que falhou.
- Esperado: Requisicao dentro do saldo segue para aprovacao; acima do saldo fica bloqueada ou sinalizada.
- Obtido: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i }).first()
    - locator resolved to <button>Enviar aprovacao</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    29 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div>…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

- Impacto funcional e negocio: Permitir compra acima do saldo rompe controle financeiro da obra.
- Recomendacao: Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/4s/test-results/CT012-REQUISICAO-SALDO.png

### CT004-CLIENTE-CONTRATO - alta

- Caso: CT004
- Localizacao: Configurações > Clientes e Contratos
- Perfil: administrador
- Massa: AUTO-4S-20260618191314
- Passos para reproduzir: Executar o caso automatizado "CT004 - client and contract persist after refresh" e observar a etapa que falhou.
- Esperado: Cliente e contrato devem ser criados, vinculados e persistidos.
- Obtido: expect(locator).toBeVisible() failed

Locator: getByText(/AUTO-4S-20260618191314 Cliente/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/AUTO-4S-20260618191314 Cliente/i).first()

- Impacto funcional e negocio: Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra.
- Recomendacao: Corrigir persistencia e relacionamento entre cliente e contrato.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/4s/test-results/CT004-CLIENTE-CONTRATO.png

