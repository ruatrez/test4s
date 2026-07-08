# Triagem E2E 4S - Itens Reprovados e Bloqueados

Rodada: `RUN_ID=20260708165317`  
Massa: `AUTO-4S-20260708165317`  
Ambiente: `https://4s.ruatrez.com`

## Itens

| CT | Status | Severidade | Observacao | Evidencias |
| --- | --- | --- | --- | --- |
| CT018 | Reprovado | Critica | Em `Financeiro > Pagamentos`, o registro de pagamento nao conclui. O modal permanece aberto com a validacao `Selecione a conta a pagar`; a lista de contas disponiveis nao apresenta conta da massa atual e o `modal-overlay` intercepta novas acoes. A falha ocorreu na suite completa, nos 2 retries da suite e em 2 reexecucoes isoladas do CT. | [screenshot](./test-results/artifacts/04-procurement-finance-e2e-68b6f--e-tentativa-acima-do-saldo-chromium-desktop/test-failed-1.png), [trace](./test-results/artifacts/04-procurement-finance-e2e-68b6f--e-tentativa-acima-do-saldo-chromium-desktop/trace.zip), [contexto](./test-results/artifacts/04-procurement-finance-e2e-68b6f--e-tentativa-acima-do-saldo-chromium-desktop/error-context.md), [retry 1](./test-results/artifacts/04-procurement-finance-e2e-68b6f--e-tentativa-acima-do-saldo-chromium-desktop-retry1/trace.zip), [retry 2](./test-results/artifacts/04-procurement-finance-e2e-68b6f--e-tentativa-acima-do-saldo-chromium-desktop-retry2/trace.zip), [isolado 1](./evidence-runs/20260708165317/ct018-isolated-attempt1/test-results/artifacts/04-procurement-finance-e2e-68b6f--e-tentativa-acima-do-saldo-chromium-desktop/trace.zip), [isolado 2](./evidence-runs/20260708165317/ct018-isolated-attempt2/test-results/artifacts/04-procurement-finance-e2e-68b6f--e-tentativa-acima-do-saldo-chromium-desktop/trace.zip) |
| CT019 | Bloqueado | Alta | `Dashboard financeiro` nao foi executado porque depende de CT018 aprovado para validar indicadores apos pagamentos. Como CT018 permaneceu reprovado, nao houve base confiavel para validar valor pago, custo real, saldo e indicadores do dashboard. | [diagnostic-report.md](./test-results/diagnostic-report.md), [diagnostic-report.html](./test-results/diagnostic-report.html), [results.json](./test-results/results.json) |

## Observacoes

- CT018 esperado: pagamento parcial/final deve atualizar saldo e tentativa acima do saldo deve ser bloqueada sem corromper conta, orcamento ou dashboard.
- CT018 obtido: a conta a pagar da massa `AUTO-4S-20260708165317` nao ficou selecionavel no modal de pagamento; o fluxo parou antes de validar pagamento parcial, pagamento final e bloqueio de excedente.
- CT019 esperado: dashboard deve refletir compra, pagamentos, mao de obra, custo real e saldos.
- CT019 obtido: bloqueado por dependencia direta de CT018.
