# Runbook Playwright Para Agente 4S

## Objetivo

Executar a validacao E2E automatizada do APP 4S em `https://4s.ruatrez.com` usando Playwright + TypeScript, cobrindo os planos `CT001` a `CT022` de `docs/test-plans`.

Use este arquivo como roteiro operacional. Os detalhes funcionais de cada caso ficam nos arquivos individuais em `docs/test-plans`, e a estrategia geral fica em `docs/test-strategy.md`.

## Acesso E Ambiente

Credencial administrativa:

```bash
ADMIN_EMAIL=hello@ruatrez.com
ADMIN_PASSWORD=admin123
```

URL padrao:

```bash
BASE_URL=https://4s.ruatrez.com
```

Variaveis suportadas pela automacao:

| Variavel | Uso | Padrao |
| --- | --- | --- |
| `BASE_URL` | URL base do ambiente 4S. | `https://4s.ruatrez.com` |
| `ADMIN_EMAIL` | Usuario administrador para login. | `hello@ruatrez.com` |
| `ADMIN_PASSWORD` | Senha do administrador. | `admin123` |
| `OPERATIONAL_EMAIL` | Usuario operacional existente, quando disponivel. | vazio |
| `OPERATIONAL_PASSWORD` | Senha do usuario operacional, quando disponivel. | vazio |
| `RUN_ID` | Identificador da massa `AUTO-4S-${RUN_ID}`. | timestamp gerado no runtime |
| `PRESERVE_DIAGNOSTICS` | Quando `true`, preserva relatorios anteriores antes da execucao. | vazio |
| `BROWSER_EXECUTABLE` | Caminho do navegador Chromium/Brave. | `/usr/bin/brave-browser` |

## Comandos

Instalar dependencias se necessario:

```bash
npm install
```

Executar smoke tecnico:

```bash
npm run test:smoke
```

Executar fluxo de suprimentos/financeiro:

```bash
npm run test:e2e
```

Executar a suite completa:

```bash
npm test
```

Gerar relatorio diagnostico Markdown/HTML apos a execucao:

```bash
npm run report
```

Abrir o relatorio HTML do Playwright:

```bash
npm run show-report
```

Execucao completa recomendada:

```bash
BASE_URL=https://4s.ruatrez.com \
ADMIN_EMAIL=hello@ruatrez.com \
ADMIN_PASSWORD=admin123 \
RUN_ID=$(date +%Y%m%d%H%M%S) \
npm test

npm run report
```

## Ordem Recomendada

Execute em ordem quando precisar diagnosticar por dominio ou retomar apos uma falha.

| Ordem | Grupo | Specs | CTs |
| --- | --- | --- | --- |
| 1 | Smoke tecnico | `tests/01-smoke.spec.ts` | CT001, CT003, CT022 |
| 2 | Cadastros/base | `tests/02-master-data.spec.ts` | CT004, CT005, CT006, CT007, CT011 |
| 3 | Orcamento | `tests/03-budget-labor.spec.ts` | CT008, CT009, CT010 |
| 4 | Suprimentos/financeiro | `tests/04-procurement-finance-e2e.spec.ts` | CT012, CT013, CT014, CT015, CT016, CT017, CT018, CT019 |
| 5 | Permissoes/auditoria | `tests/05-permissions-audit.spec.ts` | CT002, CT020, CT021 |

Para rodar um grupo especifico:

```bash
npx playwright test tests/02-master-data.spec.ts
```

Para rodar um CT especifico pelo titulo:

```bash
npx playwright test -g "CT005"
```

## Matriz CT001-CT022

| CT | Titulo | Severidade | Dependencias |
| --- | --- | --- | --- |
| CT001 | Login valido, logout, login invalido e sessao expirada quando observavel | critica | - |
| CT002 | Criacao, edicao, inativacao e login bloqueado de usuario inativo | alta | - |
| CT003 | Atalhos da tela Cadastros | media | - |
| CT004 | Cliente e contrato com edicao, persistencia e vinculo | alta | - |
| CT005 | Unidade, obra e centro de custo | alta | CT004 |
| CT006 | Fornecedores | media | - |
| CT007 | Categorias orcamentarias | media | - |
| CT008 | Item orcado com previsto, saldo, comprometido e pago | critica | CT004, CT005, CT007 |
| CT009 | Alteracao de orcamento protegida por usuario comum | critica | CT002, CT008 |
| CT010 | Exclusao de item orcado por usuario comum e administrador | critica | CT002, CT008 |
| CT011 | Colaborador, cargo/faixa e alocacao quando a UI permitir | media | CT005 |
| CT012 | Requisicao dentro do saldo e acima do saldo | critica | CT008 |
| CT013 | Aprovacao e rejeicao de requisicao | alta | CT012 |
| CT014 | Cotacao com 3 fornecedores, comparativo e vencedor | alta | CT006, CT013 |
| CT015 | Ordem de compra e comprometimento do orcamento | critica | CT014 |
| CT016 | Edicao/exclusao/cancelamento de requisicao, cotacao e OC quando permitido | media | CT012, CT014, CT015 |
| CT017 | Contas a pagar, status e filtros | critica | CT015 |
| CT018 | Pagamento parcial, final e tentativa acima do saldo | critica | CT017 |
| CT019 | Dashboard financeiro apos compra/pagamento/mao de obra | alta | CT011, CT018 |
| CT020 | Workflow com perfil correto/incorreto, aprovacao e rejeicao | alta | CT002 |
| CT021 | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes | media | CT020 |
| CT022 | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx | alta | - |

## Evidencias Obrigatorias

Ao final da execucao, conferir e preservar:

| Caminho | Conteudo |
| --- | --- |
| `test-results/results.json` | Resultado JSON do reporter Playwright. |
| `test-results/diagnostics.jsonl` | Eventos de diagnostico gravados pelos helpers. |
| `test-results/diagnostic-report.md` | Relatorio consolidado em Markdown gerado por `npm run report`. |
| `test-results/diagnostic-report.html` | Relatorio consolidado em HTML gerado por `npm run report`. |
| `test-results/artifacts` | Screenshots, traces e contexto de falha por teste. |
| `playwright-report` | Relatorio HTML nativo do Playwright. |

Se precisar manter relatorios antigos durante uma nova execucao:

```bash
PRESERVE_DIAGNOSTICS=true npm test
```

## Triagem E Relatorio

Depois de `npm test`, execute sempre:

```bash
npm run report
```

Classifique cada CT como:

| Status | Criterio |
| --- | --- |
| `aprovado` | O comportamento esperado foi validado com evidencia suficiente. |
| `reprovado` | Houve falha funcional, tecnica, visual relevante ou divergencia de regra de negocio. |
| `bloqueado` | O CT nao pode ser executado por dependencia quebrada, ambiente indisponivel, login falhando ou rota inacessivel. |
| `nao aplicavel` | A regra ou tela nao existe no ambiente validado e a indisponibilidade foi documentada. |

Priorize problemas por severidade:

| Severidade | Criterio |
| --- | --- |
| `critica` | Bloqueia fluxo financeiro E2E, corrompe saldo/custo real/dashboard ou permite acao sem permissao. |
| `alta` | Quebra aprovacao, persistencia, vinculos entre modulos ou regras centrais. |
| `media` | Falha contornavel de filtro, auditoria incompleta, validacao parcial ou inconsistencia secundaria. |
| `baixa` | Problema visual, texto, mensagem ou usabilidade sem bloqueio operacional. |

Para cada falha, registrar no relatorio:

- ID do problema.
- Severidade.
- CT relacionado.
- Caminho exato no sistema.
- Perfil usado.
- Massa `AUTO-4S-${RUN_ID}`.
- Passos para reproduzir.
- Resultado esperado conforme `docs/test-plans`.
- Resultado obtido.
- Impacto funcional e de negocio.
- Evidencia: screenshot, trace, video ou log.
- Recomendacao implementavel.
- Status final.

## Regras Operacionais

- Usar massa rastreavel com prefixo `AUTO-4S-${RUN_ID}`.
- Nao reutilizar `RUN_ID` entre execucoes completas, exceto para retomar diagnostico de uma mesma massa.
- Se exclusao nao for permitida pela regra de negocio, tentar cancelar ou inativar; se tambem nao for permitido, registrar o bloqueio.
- Se o usuario operacional nao estiver disponivel, executar os CTs possiveis com administrador e marcar cenarios dependentes como bloqueados com evidencia.
- Se uma dependencia falhar, nao mascarar CTs dependentes como aprovados; registrar como bloqueados ou reprovados conforme o comportamento observado.
- Falhas de console criticas, HTTP 5xx, tela em branco e dados que somem apos refresh devem ser reportados mesmo quando a assercao principal passar.
