# Teste Exploratorio - Sistema 4S

Implementei e executei os testes no próprio sistema [4s.ruatrez.com](https://4s.ruatrez.com), usando o Brave, navegador baseado em chromium, instalado localmente em /usr/bin/brave-browser.

Resultado final da execução limpa mais recente: 6 testes, 4 aprovados e 2 reprovados. Passaram login/logout, login inválido, carregamento das rotas principais, permissões/workflow e regressão básica de filtros/telas. As reprovações restantes ficaram concentradas no cadastro de obra/centro e no avanço da requisição para aprovação após sobreposição modal.

## Arquivos principais gerados:

- Relatório final: [test-results/diagnostic-report.md](./test-results/diagnostic-report.md)
- Relatório final HTML: [test-results/diagnostic-report.html](./test-results/diagnostic-report.html)
- Resultado Playwright: [test-results/results.json](./test-results/results.json)
- Estratégia/execução: [docs/test-strategy.md](./docs/test-strategy.md)
- Configuração: [playwright.config.js](./playwright.config.js)

## Principais achados:

- Crítica: a requisição encontrou o botão `Enviar aprovacao`, mas o clique foi bloqueado pela sobreposição `requisicao-modal-overlay`. Isso bloqueia o fluxo E2E antes de aprovação, cotação, ordem de compra, contas a pagar e pagamento.

- Alta: o cadastro de obra/centro falhou ao procurar o campo `unidade`. Isso impede confirmar unidade, obra e centro de custo como base confiável para orçamento, requisição e financeiro.

## Resultado por bloco

- Execução mais recente: 6 testes, 4 aprovados e 2 reprovados, iniciada em 2026-06-19T17:55:25Z. Evidências consolidadas em [test-results/results.json](./test-results/results.json), [test-results/diagnostic-report.md](./test-results/diagnostic-report.md), [test-results/diagnostic-report.html](./test-results/diagnostic-report.html) e [playwright-report/index.html](./playwright-report/index.html).
- Aprovado: CT001 - login, logout e login inválido. Evidências: [CT001-LOGIN-ADMIN.png](./test-results/CT001-LOGIN-ADMIN.png) e [CT001-LOGOUT.png](./test-results/CT001-LOGOUT.png).
- Aprovado: CT022 - carregamento das rotas principais sem telas em branco. Evidências: [CT022-Dashboard.png](./test-results/CT022-Dashboard.png) e [CT022-Configura--es-Obras-e-Centros.png](./test-results/CT022-Configura--es-Obras-e-Centros.png).
- Aprovado: CT002, CT009, CT010 e CT020 - usuários, permissões, orçamento protegido e decisões de workflow. Evidências: [CT002-USUARIO-OPERACIONAL.png](./test-results/CT002-USUARIO-OPERACIONAL.png), [CT009-ORCAMENTO-PROTEGIDO-ALTERACAO.png](./test-results/CT009-ORCAMENTO-PROTEGIDO-ALTERACAO.png) e [CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO.png](./test-results/CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO.png).
- Aprovado: regressão básica de filtros, telas e confirmações destrutivas, sem falhas técnicas inesperadas na execução final.
- Reprovado: CT004-CT008 - cadastros iniciais e orçamento; a execução com massa `AUTO-4S-20260619175525` chegou em Obras e Centros, mas falhou ao preencher o campo `unidade` antes de concluir a cadeia unidade, obra, centro de custo e orçamento. Evidências: [CT005-OBRA-CENTRO.png](./test-results/CT005-OBRA-CENTRO.png), [error-context.md](./test-results/artifacts/02-financial-flow-CT004-CT-0e947-item-persist-across-modules-chromium-desktop/error-context.md) e [trace.zip](./test-results/artifacts/02-financial-flow-CT004-CT-0e947-item-persist-across-modules-chromium-desktop/trace.zip).
- Reprovado: CT012-CT019 - fluxo integrado de requisição, aprovação, cotação, OC, financeiro, dashboard e auditoria; o botão `Enviar aprovacao` foi encontrado, mas o clique ficou bloqueado por uma sobreposição (`<div>` interceptando eventos), impedindo avançar a requisição para aprovação. Evidências: [CT012-REQUISICAO-SALDO.png](./test-results/CT012-REQUISICAO-SALDO.png), [error-context.md](./test-results/artifacts/02-financial-flow-CT012-CT-da056-nt-dashboard-and-audit-flow-chromium-desktop/error-context.md) e [trace.zip](./test-results/artifacts/02-financial-flow-CT012-CT-da056-nt-dashboard-and-audit-flow-chromium-desktop/trace.zip).

## Testes implementados

Os testes implementados em [tests/](./tests/) e helpers em [support/](./support/), com massa rastreável AUTO-4S-* e evidências em [test-results/](./test-results/). A execução final foi feita sem vídeo, com screenshots, traces, JSON e relatório Markdown/HTML. A senha de autenticação no ambiente foi admin123.
