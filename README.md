# Teste Exploratorio - Sistema 4S

Implementei e executei os testes no próprio sistema [4s.ruatrez.com](https://4s.ruatrez.com), usando o Brave, navegador baseado em chromium, instalado localmente em /usr/bin/brave-browser.

Resultado final da execução limpa mais recente: 6 testes, 3 aprovados e 3 reprovados. Passaram login/logout, login inválido, carregamento das rotas principais e regressão básica de filtros/telas. As reprovações restantes ficaram concentradas em persistência de cadastros, avanço da requisição para aprovação e conclusão do fluxo de permissões/workflow após sobreposição modal.

## Arquivos principais gerados:

- Relatório final: [test-results/diagnostic-report.md](./test-results/diagnostic-report.md)
- Relatório final HTML: [test-results/diagnostic-report.html](./test-results/diagnostic-report.html)
- Resultado Playwright: [test-results/results.json](./test-results/results.json)
- Estratégia/execução: [docs/test-strategy.md](./docs/test-strategy.md)
- Configuração: [playwright.config.js](./playwright.config.js)

## Principais achados:

- Crítica: a requisição foi salva como bloqueada por saldo orçamentário e não apresentou ação para enviar à aprovação. Isso bloqueia o fluxo E2E antes de aprovação, cotação, ordem de compra, contas a pagar e pagamento.

- Alta: o cliente criado não permaneceu visível após refresh; a aplicação voltou para a tela de login durante a validação de persistência. Isso impede confirmar cliente/contrato como base confiável para a cadeia financeira da obra.

## Resultado por bloco

- Execução mais recente: 6 testes, 3 aprovados e 3 reprovados, iniciada em 2026-06-19T15:52:00Z. Evidências consolidadas em [test-results/results.json](./test-results/results.json), [test-results/diagnostic-report.md](./test-results/diagnostic-report.md) e [playwright-report/index.html](./playwright-report/index.html).
- Aprovado: CT001 - login, logout e login inválido. Evidências: [CT001-LOGIN-ADMIN.png](./test-results/CT001-LOGIN-ADMIN.png) e [CT001-LOGOUT.png](./test-results/CT001-LOGOUT.png).
- Aprovado: CT022 - carregamento das rotas principais sem telas em branco. Evidências: [CT022-Dashboard.png](./test-results/CT022-Dashboard.png) e [CT022-Configura--es-Obras-e-Centros.png](./test-results/CT022-Configura--es-Obras-e-Centros.png).
- Aprovado: regressão básica de filtros, telas e confirmações destrutivas, sem falhas técnicas inesperadas na execução final.
- Reprovado: CT004-CT008 - cadastros iniciais e orçamento; o cliente `AUTO-4S-20260619155201 Cliente` não permaneceu visível após refresh e a tela voltou ao login. Evidências: [CT004-CLIENTE-CONTRATO.png](./test-results/CT004-CLIENTE-CONTRATO.png), [error-context.md](./test-results/artifacts/02-financial-flow-CT004-CT-0e947-item-persist-across-modules-chromium-desktop/error-context.md) e [trace.zip](./test-results/artifacts/02-financial-flow-CT004-CT-0e947-item-persist-across-modules-chromium-desktop/trace.zip).
- Reprovado: CT012-CT019 - fluxo integrado de requisição, aprovação, cotação, OC, financeiro, dashboard e auditoria; o botão `Enviar aprovacao` foi encontrado, mas o clique ficou bloqueado por uma sobreposição (`<div>` interceptando eventos), impedindo avançar a requisição para aprovação. Evidências: [CT012-REQUISICAO-SALDO.png](./test-results/CT012-REQUISICAO-SALDO.png), [error-context.md](./test-results/artifacts/02-financial-flow-CT012-CT-da056-nt-dashboard-and-audit-flow-chromium-desktop/error-context.md) e [trace.zip](./test-results/artifacts/02-financial-flow-CT012-CT-da056-nt-dashboard-and-audit-flow-chromium-desktop/trace.zip).
- Reprovado: CT002, CT009, CT010 e CT020 - usuários, permissões, orçamento protegido e workflow; a automação criou o usuário operacional e chegou ao orçamento protegido, mas uma `modal-overlay` interceptou o botão de logout, bloqueando a troca de sessão e a conclusão das decisões de workflow. Evidências: [CT002-USUARIO-OPERACIONAL.png](./test-results/CT002-USUARIO-OPERACIONAL.png), [CT009-ORCAMENTO-PROTEGIDO-ALTERACAO.png](./test-results/CT009-ORCAMENTO-PROTEGIDO-ALTERACAO.png), [CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO.png](./test-results/CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO.png), [error-context.md](./test-results/artifacts/03-permissions-workflow-CT-685e9-dget-and-workflow-decisions-chromium-desktop/error-context.md) e [trace.zip](./test-results/artifacts/03-permissions-workflow-CT-685e9-dget-and-workflow-decisions-chromium-desktop/trace.zip).

## Testes implementados

Os testes implementados em [tests/](./tests/) e helpers em [support/](./support/), com massa rastreável AUTO-4S-* e evidências em [test-results/](./test-results/). A execução final foi feita sem vídeo, com screenshots, traces, JSON e relatório Markdown/HTML. A senha de autenticação no ambiente foi admin123.
