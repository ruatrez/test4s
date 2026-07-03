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

Spec----------------------------| Aprovados | Reprovados | Bloqueados ¬
- 01-smoke----------------------|-----3-----|------0-----|------0-----|
- 02-master-data----------------|-----4-----|------1-----|------0-----|
- 03-budget-labor---------------|-----0-----|------1-----|------2-----|
- 04-procurement-finance-e2e----|-----0-----|------0-----|------8-----|
- 05-permissions-audit----------|-----3-----|------0-----|------0-----|

O spec 04 foi pulado porque CT012-CT019 dependem da cadeia quebrada em CT008.

### CTs Reprovados

CT    |       Observação                  |       Evidência
008   |   Campo obra não encontrado       |   [test-results/CT008-ORCAMENTO-BASE.png](./test-results/CT008-ORCAMENTO-BASE.png)
011   |   Campo nome / colaborador não    |   [test-results/CT011-COLABORADOR-ALOCACAO.png](./test-results/CT011-COLABORADOR-ALOCACAO.png)
                    encontrado

OBS: CT009, CT010 e do CT012 ao CT019, foram bloqueados por dependências do CT008. 


## Testes implementados

Os testes implementados em [tests/](./tests/) e helpers em [support/](./support/), com massa rastreável AUTO-4S-* e evidências em [test-results/](./test-results/). A execução final foi feita sem vídeo, com screenshots, traces, JSON e relatório Markdown/HTML. A senha de autenticação no ambiente foi admin123.
