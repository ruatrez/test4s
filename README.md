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
- 02-master-data------------------|-----1-----|------2-----|------2-----|
- 03-budget-labor-----------------|-----0-----|------0-----|------3-----|
- 04-procurement-finance-e2e--|-----0-----|------0-----|------8------|
- 05-permissions-audit-----------|-----3-----|------0-----|------0-----|

Pulado CT005, CT008-CT019 dependem da cadeia quebrada.

### CTs Reprovados

- CT004 - Não encontrou o campo Razão Social | Razão Social - [test-results/artifacts/02-master-data-CT004---cli-154a6-icao-persistencia-e-vinculo-chromium-desktop/test-failed-1.png](./test-results/artifacts/02-master-data-CT004---cli-154a6-icao-persistencia-e-vinculo-chromium-desktop/test-failed-1.png)
- CT007 - Categoria criada não apareceu na listagem (AUTO-4S-20260703120000 Materiais) - [test-results/artifacts/02-master-data-CT007---categorias-orcamentarias-chromium-desktop/test-failed-1.png](./test-results/artifacts/02-master-data-CT007---categorias-orcamentarias-chromium-desktop/test-failed-1.png)

## Testes implementados

Os testes implementados em [tests/](./tests/) e helpers em [support/](./support/), com massa rastreável AUTO-4S-* e evidências em [test-results/](./test-results/). A execução final foi feita sem vídeo, com screenshots, traces, JSON e relatório Markdown/HTML. A senha de autenticação no ambiente foi admin123.
