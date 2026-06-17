# Teste Exploratorio

Implementei e executei os testes no próprio sistema [4s.ruatrez.com](https://4s.ruatrez.com), usando o Brave, navegador baseado em chromium, instalado localmente em /usr/bin/brave-browser.

Resultado final da execução limpa: 6 testes, 3 aprovados e 3 falharam. Passaram login/logout, login inválido, carregamento das rotas principais e regressão básica de filtros/telas. As falhas relevantes ficaram concentradas em persistência/sincronização de dados e permissões.

## Arquivos principais gerados:

- Relatório final: [test-results/diagnostic-report.md](./test-results/diagnostic-report.md)
- Resultado Playwright: [test-results/results.json](./test-results/results.json)
- Estratégia/execução: [docs/test-strategy.md](./docs/test-strategy.md)
- Configuração: [playwright.config.js](./playwright.config.js)

## Principais achados:

- Crítica: requisição não persistiu/ficou visível após criação; console registrou Insufficient permissions to update document para requisicoes e logs_auditoria.

- Crítica: validação de orçamento protegido não conseguiu seguir porque a tela de orçamento não apresentou ação Editar/Alterar para o item esperado.

- Alta: cliente criado não apareceu após refresh; console registrou falhas de sincronização com Lumi para clientes e logs_auditoria.

## Testes implementados

Os testes implementados em [tests/](./tests/) e helpers em [support/](./support/), com massa rastreável AUTO-4S-* e evidências em [test-results/](./test-results/). A senha de autenticação no ambiente foi admin123.