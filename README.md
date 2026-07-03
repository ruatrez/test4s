# Teste Exploratorio - Sistema 4S

Implementei e executei os testes no próprio sistema [4s.ruatrez.com](https://4s.ruatrez.com), usando o Brave, navegador baseado em chromium, instalado localmente em /usr/bin/brave-browser.

Resultado final da execução limpa mais recente: 6 testes, 4 aprovados e 2 reprovados. Passaram login/logout, login inválido, carregamento das rotas principais, permissões/workflow e regressão básica de filtros/telas. As reprovações restantes ficaram concentradas no cadastro de obra/centro e no avanço da requisição para aprovação após sobreposição modal.

## Arquivos principais gerados:

- Relatório final: [test-results/diagnostic-report.md](./test-results/diagnostic-report.md)
- Relatório final HTML: [test-results/diagnostic-report.html](./test-results/diagnostic-report.html)
- Resultado Playwright: [test-results/results.json](./test-results/results.json)
- Estratégia/execução: [docs/test-strategy.md](./docs/test-strategy.md)
- Configuração: [playwright.config.js](./playwright.config.js)

## Principais achados

Resultado da suíte completa (npm test):

Por Spec

Spec-------------------------------| Aprovados | Reprovados | Bloqueados ¬
- 01-smoke------------------------|-----3-----|------0-----|------0-----|
- 02-master-data------------------|-----5-----|------0-----|------0-----|
- 03-budget-labor-----------------|-----1-----|------2-----|------0-----|
- 04-procurement-finance-e2e--|-----0-----|------1-----|------7------|
- 05-permissions-audit-----------|-----3-----|------0-----|------0-----|

Pulado CT012-CT019 dependem da cadeia quebrada.

### CTs Reprovados

- CT009 - Controle Orçamento não ficou clicável - [test-results/CT009-ORCAMENTO-PROTEGIDO-ALTERACAO.png](./test-results/CT009-ORCAMENTO-PROTEGIDO-ALTERACAO.png)
- CT010 - Controle Orçamento não ficou clicável - [test-results/CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO-OPERACIONAL.png](./test-results/CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO-OPERACIONAL.png)
- CT012 - Não encontrou opção disponível para Item orçado - [test-results/CT012-REQUISICAO-SALDO.png](./test-results/CT012-REQUISICAO-SALDO.png)

## Testes implementados

Os testes implementados em [tests/](./tests/) e helpers em [support/](./support/), com massa rastreável AUTO-4S-* e evidências em [test-results/](./test-results/). A execução final foi feita sem vídeo, com screenshots, traces, JSON e relatório Markdown/HTML. A senha de autenticação no ambiente foi admin123.
