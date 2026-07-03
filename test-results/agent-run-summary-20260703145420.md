# Resumo da Execucao Playwright - RUN_ID 20260703145420

Ambiente: `https://4s.ruatrez.com`
Navegador: Brave (`/usr/bin/brave-browser`)
Data: 2026-07-03

Observacao operacional: a primeira tentativa do smoke dentro do sandbox falhou ao iniciar o Brave (`setsockopt: Operation not permitted`). O spec foi reexecutado fora do sandbox com sucesso e os resultados abaixo consideram as execucoes validas com Brave.

## Resultado Por Spec

| Ordem | Spec | Aprovados | Reprovados | Bloqueados/skipped | Resultado |
| --- | --- | ---: | ---: | ---: | --- |
| 1 | `tests/01-smoke.spec.ts` | 3 | 0 | 0 | aprovado |
| 2 | `tests/02-master-data.spec.ts` | 5 | 0 | 0 | aprovado |
| 3 | `tests/03-budget-labor.spec.ts` | 1 | 2 | 0 | reprovado |
| 4 | `tests/04-procurement-finance-e2e.spec.ts` | 0 | 1 | 7 | reprovado com bloqueios dependentes |
| 5 | `tests/05-permissions-audit.spec.ts` | 3 | 0 | 0 | aprovado |

Totais da execucao por spec: 12 aprovados, 3 reprovados, 7 bloqueados/skipped.

## Resultado Por CT

| CT | Status | Observacao |
| --- | --- | --- |
| CT001 | aprovado | Login valido/logout/login invalido validados. |
| CT002 | aprovado | Criacao, edicao, inativacao e login bloqueado de usuario inativo validados. |
| CT003 | aprovado | Atalhos de Cadastros abriram os dominios principais. |
| CT004 | aprovado | Cliente e contrato com edicao, persistencia e vinculo validados. |
| CT005 | aprovado | Unidade, obra e centro de custo validados. |
| CT006 | aprovado | Fornecedores validados. |
| CT007 | aprovado | Categorias orcamentarias validadas. |
| CT008 | aprovado | Item orcado, previsto, saldo, comprometido e pago validados. |
| CT009 | reprovado | Falha tecnica/funcional: controle `Orcamento` nao ficou clicavel para o perfil usado. |
| CT010 | reprovado | Falha tecnica/funcional: controle `Orcamento` nao ficou clicavel para o perfil usado. |
| CT011 | aprovado | Colaborador, cargo/faixa e alocacao validados quando a UI permitiu. |
| CT012 | reprovado | Falha ao criar requisicao: sem opcao disponivel para `Item orcado`/`Item orcado`. |
| CT013 | bloqueado | Skipped por dependencia de CT012. |
| CT014 | bloqueado | Skipped por dependencia de CT013. |
| CT015 | bloqueado | Skipped por dependencia de CT014. |
| CT016 | bloqueado | Skipped por dependencia de CT012/CT014/CT015. |
| CT017 | bloqueado | Skipped por dependencia de CT015. |
| CT018 | bloqueado | Skipped por dependencia de CT017. |
| CT019 | bloqueado | Skipped por dependencia de CT018. |
| CT020 | aprovado | Workflow com perfil correto/incorreto, aprovacao e rejeicao validado. |
| CT021 | aprovado | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes validada. |
| CT022 | aprovado | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx. |

## Evidencias Principais

- CT009: `test-results/CT009-ORCAMENTO-PROTEGIDO-ALTERACAO.png`
- CT010: `test-results/CT010-ORCAMENTO-PROTEGIDO-EXCLUSAO-OPERACIONAL.png`
- CT012: `test-results/CT012-REQUISICAO-SALDO.png`
- Relatorio gerado: `test-results/diagnostic-report.md`
- Relatorio HTML gerado: `test-results/diagnostic-report.html`

## Resultado Do `npm run report`

O comando executou com sucesso e gerou:

- `test-results/diagnostic-report.md`
- `test-results/diagnostic-report.html`

Como os specs foram executados individualmente, o `test-results/results.json` do Playwright foi sobrescrito pelo ultimo spec (`tests/05-permissions-audit.spec.ts`). Por isso, o relatorio consolidado gerado pelo script mostrou apenas 3 casos Playwright, todos aprovados (`CT002`, `CT020`, `CT021`), e marcou os demais como bloqueados/nao registrados. O resumo acima consolida a sequencia completa a partir dos resultados observados em cada execucao.
