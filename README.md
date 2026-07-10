# Triagem E2E 4S - Ultimo Status Observado

- Rodada: `RUN_ID=20260709163032`
- Massa: `AUTO-4S-20260709163032`
- Ambiente: `https://4s.ruatrez.com`
- Execucao: `2026-07-09`

Esta consolidacao considera, para cada CT, o ultimo resultado observado na suite completa e nas reexecucoes posteriores da mesma rodada.

## Placar Consolidado

- Aprovados: 21
- Reprovados: 1
- Bloqueados: 0
- Nao aplicaveis: 0
- Total: 22

## Matriz CT001-CT022

| CT | Status | Severidade | Observacao |
| --- | --- | --- | --- |
| CT001 | Aprovado | Critica | Login valido, logout, login invalido e sessao expirada observados conforme esperado na suite completa. |
| CT002 | Aprovado | Alta | Criacao, edicao, inativacao e bloqueio de login do usuario inativo observados conforme esperado na suite completa. |
| CT003 | Aprovado | Media | Atalhos da tela Cadastros observados conforme esperado na suite completa. |
| CT004 | Aprovado | Alta | Cliente e contrato, incluindo persistencia e vinculo, observados conforme esperado na suite completa. |
| CT005 | Aprovado | Alta | Unidade, obra e centro de custo observados conforme esperado na suite completa. |
| CT006 | Aprovado | Media | Cadastro e uso de fornecedores observados conforme esperado na suite completa. |
| CT007 | Aprovado | Media | Categorias orcamentarias observadas conforme esperado na suite completa. |
| CT008 | Aprovado | Critica | Falhou na suite completa porque o item orcado da massa atual nao apareceu na listagem; passou na primeira reexecucao posterior. Manter como candidato a investigacao de instabilidade. |
| CT009 | Aprovado | Critica | Ficou bloqueado na suite completa por depender do CT008; alteracao protegida por usuario comum passou na reexecucao posterior. |
| CT010 | Aprovado | Critica | Ficou bloqueado na suite completa por depender do CT008; exclusao protegida foi aprovada na reexecucao para os perfis operacional e administrador. |
| CT011 | Aprovado | Media | Falhou na suite completa porque o cargo da massa atual nao apareceu na listagem; passou na primeira reexecucao posterior. Manter como candidato a investigacao de instabilidade. |
| CT012 | Aprovado | Critica | Ficou bloqueado na suite completa por depender do CT008; requisicao dentro e acima do saldo passou na reexecucao posterior. |
| CT013 | Aprovado | Alta | Ficou bloqueado na suite completa por depender do CT012; aprovacao e rejeicao de requisicao passaram na reexecucao posterior. |
| CT014 | Aprovado | Alta | Ficou bloqueado na suite completa, falhou na primeira reexecucao porque a cotacao da massa atual nao apareceu e passou na tentativa seguinte. Manter como candidato a investigacao de instabilidade. |
| CT015 | Aprovado | Critica | Ficou bloqueado enquanto CT014 nao estava aprovado; ordem de compra e comprometimento do orcamento passaram no bloco final reexecutado. |
| CT016 | Aprovado | Media | Ficou bloqueado enquanto as dependencias anteriores nao estavam aprovadas; edicao ou cancelamento de documentos passou no bloco final reexecutado. |
| CT017 | Aprovado | Critica | Ficou bloqueado por CT015; contas a pagar, status e filtros passaram no bloco final reexecutado. |
| CT018 | Aprovado | Critica | Ficou bloqueado por CT017; pagamento parcial, final e tentativa acima do saldo passaram no bloco final reexecutado. |
| CT019 | Aprovado | Alta | Ficou bloqueado pelas dependencias CT011 e CT018; dashboard financeiro passou no bloco final reexecutado. |
| CT020 | Aprovado | Alta | Workflow com perfil correto e incorreto, incluindo aprovacao e rejeicao, observado conforme esperado na suite completa. |
| CT021 | Aprovado | Media | Auditoria de criacao, edicao, exclusao ou cancelamento e decisoes observada conforme esperado na suite completa. |
| CT022 | Reprovado | Alta | Passou na suite completa, mas a observacao posterior registrou HTTP 502 no endpoint de usuarios durante a validacao da rota de orcamento, acompanhado de erro no console. |

Nenhum CT permaneceu bloqueado depois das reexecucoes. Os CT008, CT011 e CT014 foram aprovados somente apos nova tentativa e devem continuar sob observacao por possivel instabilidade.

## Triagem do Desvio Final

### CT022 - HTTP 502 na validacao de rotas

- ID: `HTTP-502-1783626618673`
- Severidade: alta
- Caminho observado: `https://4s.ruatrez.com/orcamento/`
- Endpoint: `https://api.lumi.new/lm/p442450294435041280/usuarios/documents/listByPage`
- Perfil: administrador
- Esperado: as requisicoes da aplicacao devem responder sem erros HTTP 4xx ou 5xx inesperados e sem erro correspondente no console.
- Obtido: resposta HTTP 502 no endpoint de usuarios e mensagem `Failed to load resource: the server responded with a status of 502 ()` no console.
- Impacto: a falha pode impedir o carregamento de dados, a persistencia ou a integracao entre modulos, mesmo que a rota tenha passado anteriormente na suite completa.
- Evidencia: [screenshot do HTTP 502](./test-results/HTTP-502-1783626618673.png).
- Recomendacao: investigar os logs do endpoint, corrigir a falha e adicionar cobertura de integracao ou contrato para a requisicao.
- Status final: reprovado.

## Relatorios e Evidencias

### Suite completa preservada

- [Relatorio de diagnostico Markdown](./test-results/run-20260709163032/full-suite/diagnostic-report.md)
- [Relatorio de diagnostico HTML](./test-results/run-20260709163032/full-suite/diagnostic-report.html)
- [Relatorio Playwright HTML](./test-results/run-20260709163032/full-suite/playwright-report/index.html)
- [Resultado JSON](./test-results/run-20260709163032/full-suite/results.json)
- [Diagnostics JSONL](./test-results/run-20260709163032/full-suite/diagnostics.jsonl)

### Estado top-level apos as reexecucoes

- [Relatorio de diagnostico Markdown](./test-results/diagnostic-report.md)
- [Relatorio de diagnostico HTML](./test-results/diagnostic-report.html)
- [Relatorio Playwright HTML](./playwright-report/index.html)
- [Resultado JSON](./test-results/results.json)
- [Diagnostics JSONL consolidado](./test-results/diagnostics.jsonl)
- Screenshots persistidos: `test-results/CT*.png` e `test-results/HTTP-*.png`.

## Nota

A suite completa preservada terminou com 10 aprovados, 2 reprovados e 10 bloqueados. As reexecucoes da mesma massa mudaram o ultimo estado observado: CT008, CT011 e CT014 passaram em tentativas posteriores, e os casos antes bloqueados foram exercitados e aprovados.

Os arquivos top-level `results.json`, `diagnostic-report.md`, `diagnostic-report.html` e `playwright-report/index.html` foram atualizados pelas reexecucoes e, isoladamente, nao representam o placar consolidado dos 22 CTs. O `diagnostics.jsonl` top-level preserva a sequencia cronologica usada nesta consolidacao. Por isso, este README registra o ultimo status observado de cada CT, enquanto a pasta `test-results/run-20260709163032/full-suite/` preserva o resultado inicial da suite completa.
