# Teste Exploratorio - Sistema 4S

Implementei e executei os testes no próprio sistema [4s.ruatrez.com](https://4s.ruatrez.com), usando o Brave, navegador baseado em chromium, instalado localmente em /usr/bin/brave-browser.

Resultado final da execução limpa mais recente: 22 testes, 8 aprovados, 3 reprovados e 11 bloqueados. Passaram login/logout, login inválido, cadastros base possíveis, permissões/workflow e auditoria. As reprovações documentadas abaixo são CT007, CT011 e CT022.

## Arquivos principais gerados:

- Relatório final: [test-results/diagnostic-report.md](./test-results/diagnostic-report.md)
- Relatório final HTML: [test-results/diagnostic-report.html](./test-results/diagnostic-report.html)
- Resultado Playwright: [test-results/results.json](./test-results/results.json)
- Estratégia/execução: [docs/test-strategy.md](./docs/test-strategy.md)
- Configuração: [playwright.config.js](./playwright.config.js)

## Principais achados

Resultado da suíte completa (npm test):

### Atualizacao - RUN_ID 20260707143527

- CT015 - Severidade: critica | Status: reprovado | Observacao: em Suprimentos > Ordens de Compra, a tela de Nova OC abriu, mas o campo "Cotacao concluida" continha apenas "Selecione...", sem cotacao disponivel para gerar ordem de compra. A falha ocorreu no run dependente e foi confirmada em execucao isolada do CT015. | Evidencias: [screenshot](./test-results/preserved-20260707143527-ct015-confirm/artifacts/04-procurement-finance-e2e-21d1f-omprometimento-do-orcamento-chromium-desktop/test-failed-1.png), [trace](./test-results/preserved-20260707143527-ct015-confirm/artifacts/04-procurement-finance-e2e-21d1f-omprometimento-do-orcamento-chromium-desktop/trace.zip), [contexto](./test-results/preserved-20260707143527-ct015-confirm/artifacts/04-procurement-finance-e2e-21d1f-omprometimento-do-orcamento-chromium-desktop/error-context.md), [triagem consolidada](./test-results/qa-triage-20260707143527.md) | Recomendacao: revisar o fechamento/conclusao da cotacao e o filtro de cotacoes disponiveis para OC; garantir que a cotacao aprovada/concluida apareca no select e que a criacao da OC atualize comprometido e conta a pagar.

### CTs bloqueados por dependencia - RUN_ID 20260707143527

- CT016 - Severidade: media | Bloqueado por CT015 reprovado.
- CT017 - Severidade: critica | Bloqueado por CT015 reprovado.
- CT018 - Severidade: critica | Bloqueado por CT017 bloqueado.
- CT019 - Severidade: alta | Bloqueado por CT018 bloqueado.

### CTs Reprovados

- CT007 - Severidade: média | Observação: em Configurações > Categorias Orç., a automação não confirmou todas as categorias da massa AUTO-4S-20260706123151 após 3 tentativas. A tela exibia tabela paginada com 17 categorias e algumas categorias da massa atual visíveis, indicando possível limitação da automação por paginação, mas sem correção/reexecução confirmatória nesta rodada. | Evidências: [screenshot](./test-results/artifacts/02-master-data-CT007---categorias-orcamentarias-chromium-desktop-retry2/test-failed-1.png), [trace](./test-results/artifacts/02-master-data-CT007---categorias-orcamentarias-chromium-desktop-retry2/trace.zip), [contexto](./test-results/artifacts/02-master-data-CT007---categorias-orcamentarias-chromium-desktop-retry2/error-context.md) | Recomendação: validar persistência/listagem das cinco categorias e, se elas estiverem em páginas diferentes, ajustar a automação para buscar/paginar antes de afirmar ausência.
- CT011 - Severidade: média | Observação: em Configurações > Colaboradores, o cadastro de Novo Colaborador abriu, mas o campo Cargo tinha apenas a opção "Selecione...", impedindo concluir colaborador/alocação. A falha se repetiu nas 3 tentativas. | Evidências: [screenshot](./test-results/artifacts/02-master-data-CT011---col-f430f-ocacao-quando-a-UI-permitir-chromium-desktop-retry2/test-failed-1.png), [trace](./test-results/artifacts/02-master-data-CT011---col-f430f-ocacao-quando-a-UI-permitir-chromium-desktop-retry2/trace.zip), [contexto](./test-results/artifacts/02-master-data-CT011---col-f430f-ocacao-quando-a-UI-permitir-chromium-desktop-retry2/error-context.md) | Recomendação: confirmar se o fluxo exige cadastro prévio de cargos/faixas e ajustar a automação para criar essas entidades antes do colaborador; se a UI deveria prover opções, corrigir cadastro/listagem.
- CT022 - Severidade: alta | Observação: apesar do CT de rotas ter passado no console da suíte, o hook de diagnóstico registrou HTTP 502 inesperado em https://api.lumi.new/lm/p442450294435041280/usuarios/documents/listByPage, com erro de console associado. Pelo runbook, HTTP 5xx inesperado reprova CT022. | Evidências: [http-502](./test-results/HTTP-502-1783352537336.png), [console](./test-results/CONSOLE-1783352537337.png), [triagem consolidada](./test-results/qa-triage-20260706123151.md) | Recomendação: investigar logs do endpoint usuarios/documents/listByPage, corrigir a resposta 502 e adicionar cobertura de contrato/integração.

## Testes implementados

Os testes implementados em [tests/](./tests/) e helpers em [support/](./support/), com massa rastreável AUTO-4S-* e evidências em [test-results/](./test-results/). A execução final foi feita sem vídeo, com screenshots, traces, JSON e relatório Markdown/HTML. A senha de autenticação no ambiente foi admin123.
