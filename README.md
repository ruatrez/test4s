# Teste Exploratorio - Sistema 4S

Suite Playwright + TypeScript para validacao E2E da Fase 1 do APP 4S em [4s.ruatrez.com](https://4s.ruatrez.com), baseada no roteiro `RoteirodeTestes4S.pdf`.

Os testes cobrem CT001 a CT022, com massa rastreavel `AUTO-4S-*`, Page Objects por dominio, captura de console/network errors, screenshots/traces em falha e relatorio consolidado Markdown/HTML.

## Execucao

```bash
npm install
npm run test:smoke
npm test
npm run report
```

Variaveis aceitas:

- `BASE_URL`: padrao `https://4s.ruatrez.com`
- `ADMIN_EMAIL`: padrao `hello@ruatrez.com`
- `ADMIN_PASSWORD`: padrao `admin123`
- `OPERATIONAL_EMAIL` e `OPERATIONAL_PASSWORD`: opcionais
- `RUN_ID`: identificador da massa de teste
- `BROWSER_EXECUTABLE`: padrao `/usr/bin/brave-browser`, com fallback para Chromium instalado pelo Playwright
- `PW_VIDEO=1`: grava videos em falha

## Arquivos principais

- Relatorio final: [test-results/diagnostic-report.md](./test-results/diagnostic-report.md)
- Relatorio final HTML: [test-results/diagnostic-report.html](./test-results/diagnostic-report.html)
- Resultado Playwright: [test-results/results.json](./test-results/results.json)
- Resultado consolidado por CT: [test-results/case-results.jsonl](./test-results/case-results.jsonl)
- Estrategia/execucao: [docs/test-strategy.md](./docs/test-strategy.md)
- Configuracao: [playwright.config.ts](./playwright.config.ts)

## Resultado por bloco

Resultado consolidado CT001-CT022:

 - 6 aprovados
 - 3 reprovados
 - 13 bloqueados - Foram pulados automaticamente — não por escolha, mas porque dependiam dos testes que falharam.

Falhas principais registradas:

 - CT004: cliente/contrato não aparece após refresh.
 - CT008: tela de orçamento não expõe campo obra esperado para criar item orçado.
 - CT012: botão Enviar aprovacao fica bloqueado por overlay/interceptação de clique.

## Cobertura

- Smoke, login/logout, login invalido, atalhos e rotas principais.
- Cadastros: cliente/contrato, unidade/obra/centro, fornecedores, categorias e colaboradores.
- Orcamento protegido, permissoes e workflow.
- Fluxo integrado: requisicao, aprovacao, cotacao, OC, contas a pagar, pagamentos, dashboard e auditoria.
- Cenarios negativos: saldo excedido, perfil incorreto, usuario inativo, pagamento acima do saldo e alteracao/exclusao protegida.
