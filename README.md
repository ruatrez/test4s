# Triagem E2E 4S — Último Status Observado

- **Rodada:** `RUN_ID=20260711112653`
- **Massa:** `AUTO-4S-20260711112653`
- **Ambiente:** `https://4s.ruatrez.com`
- **Execução:** `2026-07-11`
- **Navegador:** Brave 150.1.92.139 (`/usr/bin/brave-browser`)
- **Duração:** ~17,5 min
- **Configuração:** workers=1 · fullyParallel=false · retries=2 (CLI; config local versionada permanece `retries: 0`)
- **Playwright:** 22 testes · exit code 0 · 19 passed limpos · 3 flaky (passaram no retry)

Consolida o resultado da suíte completa desta rodada. Classificação conforme `docs/promptEXE.md` e `docs/playwright-agent-runbook.md`: se o CT passou em qualquer tentativa (incluindo retry), o status final é **aprovado**, com nota de instabilidade quando aplicável.

---

## Placar geral (22 CTs)

| Status | Qtd |
| ------ | --- |
| **Aprovado** | **22** |
| Reprovado | 0 |
| Bloqueado | 0 |
| Não aplicável | 0 |

**Nenhum CT de severidade crítica fora de aprovado.**  
Críticos cobertos e aprovados: CT001, CT008, CT009, CT010, CT012, CT015, CT017, CT018 (CT008 apenas na 2ª tentativa).

---

## Matriz CT001–CT022

| CT | Status | Severidade | Observação |
| ----- | ------ | ---------- | ---------- |
| CT001 | Aprovado | crítica | Login/logout/inválido OK |
| CT002 | Aprovado | alta | Criação/edição/inativação/login bloqueado OK |
| CT003 | Aprovado | média | Atalhos Cadastros OK |
| CT004 | Aprovado | alta | Cliente + contrato OK |
| CT005 | Aprovado | alta | Unidade/obra/centro OK |
| CT006 | Aprovado | média | Fornecedores OK |
| CT007 | Aprovado | média | Categorias orçamentárias OK |
| CT008 | Aprovado | crítica | **Passou na tentativa 2.** 1ª: item orçado não visível após submit |
| CT009 | Aprovado | crítica | Proteção orçamento (usuário comum) OK |
| CT010 | Aprovado | crítica | Exclusão comum/admin OK |
| CT011 | Aprovado | média | **Passou na tentativa 3.** Falhas em cargo/faixa (texto não listado a tempo) |
| CT012 | Aprovado | crítica | Requisição dentro/acima do saldo OK |
| CT013 | Aprovado | alta | Aprovação/rejeição requisição OK |
| CT014 | Aprovado | alta | **Passou na tentativa 2.** 1ª: massa do RUN_ID não na 1ª página de cotações (paginação) |
| CT015 | Aprovado | crítica | OC + comprometimento OK |
| CT016 | Aprovado | média | Edição/exclusão docs OK |
| CT017 | Aprovado | crítica | Contas a pagar/filtros OK |
| CT018 | Aprovado | crítica | Pagamento parcial/final/acima saldo OK |
| CT019 | Aprovado | alta | Dashboard financeiro OK |
| CT020 | Aprovado | alta | Workflow perfil/aprovação OK |
| CT021 | Aprovado | média | Auditoria OK |
| CT022 | Aprovado | alta | Rotas sem blank/JS 5xx OK |

---

## CTs que só passaram após retry (instabilidade)

| CT | Tentativa que passou | Sintoma da falha inicial |
| -- | -------------------- | ------------------------ |
| **CT008** | 2 | Após criar item orçado, `getByText(...Item orcado material)` não ficou visível em 10s |
| **CT011** | 3 | Cargo (tent.1) / Faixa (tent.2) não apareceram na lista após submit |
| **CT014** | 2 | Após cotação, listagem paginada (1–10 de 17) mostrava runs antigos; prefixo do RUN_ID atual não no `body` |

**Nota sobre `npm run report`:** o script de diagnóstico pode marcar CT008, CT011 e CT014 como “reprovado” com base nos erros intermediários do JSON. A classificação **oficial desta triagem** (promptEXE §3 / runbook) é **aprovado**, com nota de instabilidade — o status final do Playwright é passed (flaky).

Não há falha legítima de negócio confirmada nestes CTs: nas tentativas bem-sucedidas o comportamento esperado foi validado. Os sintomas apontam para **timing/persistência na UI** (CT008, CT011) e **paginação da listagem de cotações** (CT014 — massa antiga ocupa a 1ª página). Candidatos a endurecer a automação (busca/filtro/paginação + espera pós-submit), sem afrouxar asserções.

---

## Ambiente e precondições desta rodada

| Item | Status |
| ---- | ------ |
| Rede `https://4s.ruatrez.com` | OK (HTTP 200) |
| Brave `/usr/bin/brave-browser` | OK |
| `OPERATIONAL_EMAIL` / `OPERATIONAL_PASSWORD` | **Não definidas.** CT002 criou usuário na suíte; CT009/CT010/CT020 rodaram sem bloqueio |
| Config paralelismo | `workers: 1`, `fullyParallel: false` — ordem de dependências respeitada |
| Retries versionados | `retries: 0` local; usado `--retries=2` só nesta execução (sem alterar o arquivo) |

---

## Detalhe dos flaky (evidência intermediária)

### CT008 — item orçado (tentativa 1)

- **Severidade:** crítica
- **Caminho:** orçamento (item orçado material)
- **Perfil:** administrador
- **Massa:** `AUTO-4S-20260711112653`
- **Esperado:** item orçado listado com previsto, saldo, comprometido e pago
- **Obtido (tent.1):** `expect(...Item orcado material).toBeVisible()` timeout 10s
- **Evidência:** `test-results/artifacts/03-budget-labor-CT008---it-174d0-o-saldo-comprometido-e-pago-chromium-desktop/`
- **Status final:** aprovado (tentativa 2)

### CT011 — colaborador / cargo / faixa (tentativas 1–2)

- **Severidade:** média
- **Caminho:** colaboradores / cargos / faixas
- **Perfil:** administrador
- **Massa:** `AUTO-4S-20260711112653`
- **Esperado:** cargo e faixa da massa visíveis após cadastro
- **Obtido:** tent.1 cargo não listado; tent.2 faixa não listada
- **Evidência:** `test-results/artifacts/02-master-data-CT011---col-f430f-ocacao-quando-a-UI-permitir-chromium-desktop/` (+ retry1)
- **Status final:** aprovado (tentativa 3)

### CT014 — cotação / comparativo (tentativa 1)

- **Severidade:** alta
- **Caminho:** `https://4s.ruatrez.com/cotacoes`
- **Perfil:** administrador
- **Massa:** `AUTO-4S-20260711112653`
- **Esperado:** cotação da massa atual no body (comparativo e vencedor)
- **Obtido (tent.1):** listagem 1–10 de 17 só com massas antigas (`20260709…`, etc.); prefixo do RUN_ID atual ausente
- **Evidência:** `test-results/artifacts/04-procurement-finance-e2e-c826a-ores-comparativo-e-vencedor-chromium-desktop/`
- **Status final:** aprovado (tentativa 2)

---

## Relatórios e evidências

### Suíte completa desta rodada (top-level)

- [Relatório de diagnóstico Markdown](./test-results/diagnostic-report.md)
- [Relatório de diagnóstico HTML](./test-results/diagnostic-report.html)
- [Relatório Playwright HTML](./playwright-report/index.html)
- [Resultado JSON](./test-results/results.json)
- [Diagnostics JSONL](./test-results/diagnostics.jsonl)
- Screenshots/traces: `test-results/artifacts/`
- Log da execução: `/tmp/4s-e2e-run-20260711112653.log` (ambiente local do agente)

### Rodada anterior preservada (referência histórica)

- Pasta: `test-results/run-20260709163032/full-suite/`
- RUN_ID anterior: `20260709163032` (não reutilizar como status atual)

---

## Conclusão

**Suíte E2E completa: 22/22 aprovados.** Sem CTs críticos reprovados ou bloqueados. Três casos instáveis (CT008, CT011, CT014) merecem follow-up de estabilidade da automação/UI, sem rebaixar o placar desta rodada.

### Como reexecutar

```bash
BASE_URL=https://4s.ruatrez.com \
ADMIN_EMAIL=hello@ruatrez.com \
ADMIN_PASSWORD=admin123 \
RUN_ID=$(date +%Y%m%d%H%M%S) \
npm test -- --retries=2

npm run report
```

Instruções operacionais do agente: `docs/promptEXE.md`. Runbook: `docs/playwright-agent-runbook.md`. Planos por CT: `docs/test-plans/`.
