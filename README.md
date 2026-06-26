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

  - 22 testes executados
  - 6 passaram
  - 3 falharam
  - 13 foram pulados/bloqueados por dependência

- CT005 reprovado: não encontrou campo obra em Obras e Centros.
    Evidência: [test-results/CTOO5-OBRA-CENTRO.png](./test-results/CT005-OBRA-CENTRO.png)
- CT006 reprovado: fornecedor criado não apareceu na listagem dentro do timeout.
    Evidência: [test-results/CTOO6-FORNECEDORES.png](./test-results/CT006-FORNECEDORES.png)
- CT020 reprovado: perfil operacional não tinha acesso/controle Workflow.
    Evidência: [test-results/CTO20-WORKFLOW-PERFIL-INCORRETO.png](./test-results/CT020-WORKFLOW-PERFIL-INCORRETO.png)

## Testes implementados

Os testes implementados em [tests/](./tests/) e helpers em [support/](./support/), com massa rastreável AUTO-4S-* e evidências em [test-results/](./test-results/). A execução final foi feita sem vídeo, com screenshots, traces, JSON e relatório Markdown/HTML. A senha de autenticação no ambiente foi admin123.
