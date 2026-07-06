# Teste Exploratorio - Sistema 4S

Implementei e executei os testes no próprio sistema [4s.ruatrez.com](https://4s.ruatrez.com), usando o Brave, navegador baseado em chromium, instalado localmente em /usr/bin/brave-browser.

Resultado final da execução limpa mais recente: 22 testes, 14 aprovados, 1 reprovado e 7 bloqueados. Passaram login/logout, login inválido, carregamento das rotas principais, cadastros base, orçamento base, permissões/workflow e auditoria. A reprovação restante ficou concentrada no CT012, bloqueando a cadeia de suprimentos/financeiro.

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

- CT012 - Severidade: crítica | Tipo: falha legítima provável do produto | Descrição: em Suprimentos > Requisições, a obra e o centro da massa AUTO-4S-20260706114042 foram selecionados, mas o select Item orçado ficou vazio e a UI exibiu "Nenhum item orçado ativo encontrado para a obra selecionada", apesar de CT008 ter criado e persistido o item orçado. | Evidências: [screenshot](./test-results/artifacts/04-procurement-finance-e2e-8e21f-e-requisicao-acima-do-saldo-chromium-desktop/test-failed-1.png), [trace](./test-results/artifacts/04-procurement-finance-e2e-8e21f-e-requisicao-acima-do-saldo-chromium-desktop/trace.zip), [diagnostics](./test-results/diagnostics.jsonl) | Recomendação: revisar vínculo/status do item orçado criado no orçamento e sua exposição no módulo de requisições para a mesma obra/centro.

## Testes implementados

Os testes implementados em [tests/](./tests/) e helpers em [support/](./support/), com massa rastreável AUTO-4S-* e evidências em [test-results/](./test-results/). A execução final foi feita sem vídeo, com screenshots, traces, JSON e relatório Markdown/HTML. A senha de autenticação no ambiente foi admin123.
