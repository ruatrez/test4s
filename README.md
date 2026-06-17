# Teste Exploratorio - Sistema 4S

Implementei e executei os testes no próprio sistema [4s.ruatrez.com](https://4s.ruatrez.com), usando o Brave, navegador baseado em chromium, instalado localmente em /usr/bin/brave-browser.

Resultado final da execução limpa: 6 testes, 4 aprovados e 2 reprovados. Passaram login/logout, login inválido, carregamento das rotas principais, permissões/workflow de orçamento protegido e regressão básica de filtros/telas. As reprovações restantes ficaram concentradas em persistência de cadastros e no avanço da requisição para aprovação.

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

- Aprovado: CT001 - login, logout e login inválido.
- Aprovado: CT022 - carregamento das rotas principais sem telas em branco.
- Aprovado: CT002, CT009, CT010 e CT020 - usuários, permissões, orçamento protegido e workflow.
- Aprovado: regressão básica de filtros, telas e confirmações destrutivas.
- Reprovado: CT004-CT008 - cadastros iniciais e orçamento; falhou em persistência de cliente após refresh.
- Reprovado: CT012-CT019 - fluxo integrado de requisição, aprovação, cotação, OC, financeiro, dashboard e auditoria; falhou no envio da requisição para aprovação.

## Testes implementados

Os testes implementados em [tests/](./tests/) e helpers em [support/](./support/), com massa rastreável AUTO-4S-* e evidências em [test-results/](./test-results/). A execução final foi feita sem vídeo, com screenshots, traces, JSON e relatório Markdown/HTML. A senha de autenticação no ambiente foi admin123.
