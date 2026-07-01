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
  - 8 passaram
  - 2 falharam
  - 12 foram pulados/bloqueados por dependência

 CT005 reprovado: Unidade, Obra e Centro de Custo: unidade cadastrada não ficou visível após cadastro.
  Evidência: [test-results/CT005-OBRA-CENTRO.png](./test-results/CT005-OBRA-CENTRO.png)
 CT006 reprovado: Fornecedor: fornecedor cadastrado não ficou visível após cadastro. 
  Evidência: [test-results/CT006-FORNECEDORES.png](./test-results/CT006-FORNECEDORES.png)

## Causa principal dos bloqueios

 CT005: Bloqueou orçamento, obra/alocação e cadeia financeira. 
 CT006: Bloqueou cotação com fornecedores e os fluxos dependentes. 

## Testes implementados

Os testes implementados em [tests/](./tests/) e helpers em [support/](./support/), com massa rastreável AUTO-4S-* e evidências em [test-results/](./test-results/). A execução final foi feita sem vídeo, com screenshots, traces, JSON e relatório Markdown/HTML. A senha de autenticação no ambiente foi admin123.
