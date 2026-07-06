# Instruções para Execução e Triagem da Suíte E2E do APP 4S

Você é o agente de QA responsável pela execução e triagem da suíte E2E do APP 4S.

Use `playwright-agent-runbook.md` como fonte de verdade operacional. Consulte também:

* `docs/test-plans`: resultado esperado de cada CT.
* `docs/test-strategy.md`: critérios gerais de avaliação.

Sempre que precisar julgar uma falha, use esses documentos como referência.

---

## 1. Antes de começar

1. Confirme o acesso de rede a:

   ```text
   https://4s.ruatrez.com
   ```

   a partir do seu ambiente de execução.

   Se a rede vier restrita por padrão no sandbox, libere o acesso antes de continuar. Não trate uma falha de conexão inicial como bug da aplicação.

2. Confirme que o executável definido em `BROWSER_EXECUTABLE` existe.

   Valor padrão:

   ```text
   /usr/bin/brave-browser
   ```

   Se o executável não existir, pare e me avise em vez de trocar de navegador silenciosamente.

3. Verifique se as variáveis abaixo estão definidas:

   ```text
   OPERATIONAL_EMAIL
   OPERATIONAL_PASSWORD
   ```

   Se não estiverem definidas, veja se é possível criar um usuário comum via `CT002`, usando o administrador, e reaproveitá-lo nos cenários que dependem de um perfil não administrador, como:

   * `CT009`
   * `CT010`
   * `CT020`

   Se mesmo assim não for viável, classifique esses cenários como **bloqueados**, com evidência, conforme a regra do runbook.

4. Gere um `RUN_ID` novo para esta rodada.

   Só reutilize um `RUN_ID` anterior ou use `PRESERVE_DIAGNOSTICS=true` se eu pedir explicitamente para retomar uma massa já existente.

---

## 2. Execução

Rode a suíte completa:

```bash
BASE_URL=https://4s.ruatrez.com \
ADMIN_EMAIL=hello@ruatrez.com \
ADMIN_PASSWORD=admin123 \
RUN_ID=$(date +%Y%m%d%H%M%S) \
npm test
```

Confira se `playwright.config.ts` já define `retries`.

Se não definir, use apenas nesta execução:

```bash
npm test -- --retries=2
```

Não altere o arquivo versionado.

A ordem abaixo reflete a matriz de dependências:

```text
01-smoke → 05-permissions-audit
```

Exemplos de dependência:

* `CT005` depende de `CT004`.
* `CT008` depende de `CT004`, `CT005` e `CT007`.

Verifique se a configuração, incluindo `workers` e `fullyParallel`, respeita essa ordem entre specs diferentes.

Se os testes rodarem em paralelo sem isolamento, uma falha em `CT008` pode ser efeito colateral de concorrência com `CT004` ou `CT005`, e não necessariamente um bug real.

Se houver suspeita disso, rode o grupo isolado depois que o grupo anterior tiver terminado, antes de classificar a falha. Exemplo:

```bash
npx playwright test tests/03-budget-labor.spec.ts
```

Se um grupo inicial, como smoke ou cadastros/base, falhar, investigue esse grupo antes de seguir gastando tempo confirmando reprovações em cascata nos grupos seguintes.

---

## 3. Timeouts e retry

Em caso de timeout de ação, navegação ou teste, reexecute o CT isolado no máximo 2 vezes:

```bash
npx playwright test -g "CTxxx"
```

Se passar em uma das repetições, classifique como **aprovado**, mas registre no relatório:

```text
Passou na tentativa N.
```

Isso indica instabilidade e merece nota, mesmo sem impedir a aprovação.

Se falhar nas 2 repetições, trate como falha real e aplique a triagem da seção 4.

Não repita indefinidamente.

---

## 4. Falha legítima vs. limitação de automação

Só classifique uma falha como **limitação de automação** se confirmar, pela evidência de trace, screenshot ou vídeo, todos os pontos abaixo:

1. O comportamento da aplicação no trace está correto frente ao resultado esperado em `docs/test-plans`.

2. A causa raiz é claramente do teste, por exemplo:

   * Seletor ambíguo ou `strict mode`.
   * Asserção sem esperar o estado correto.
   * Timing de toast ou animação.
   * Efeito de paralelismo entre specs.

   A causa não pode ser uma regra de negócio da aplicação.

3. O CT foi reexecutado isoladamente e o problema desaparece quando corrigido no teste, não na aplicação.

Observação: o Brave possui Shields, com bloqueio de trackers e fingerprinting, e pode se comportar de forma diferente do Chromium puro.

Se a falha parecer ligada a script de terceiros ou detecção de automação, teste também com Chromium puro antes de concluir.

Se os três pontos se confirmarem:

* Registre como **limitação de automação** à parte.
* Corrija a automação se for trivial.
* Reexecute para confirmar.
* Nunca reporte como aprovado sem essa nota explícita.

Se qualquer ponto falhar, ou se restar dúvida:

* Classifique como **reprovado**; ou
* Classifique como **bloqueado**, se uma dependência quebrada impedir a execução.

Inclua toda a evidência exigida.

Na dúvida, use sempre o rótulo mais conservador. **Limitação do Playwright** nunca deve virar desculpa para falta de evidência ou para descartar um comportamento potencialmente incorreto da aplicação.

---

## 5. Classificação e dependências entre CTs

Use a matriz `CT001–CT022` do runbook.

Se um CT do qual outros dependem falhar, não marque os dependentes como aprovados por tabela.

Execute-os mesmo assim, conforme o runbook, e classifique cada um como:

* **Aprovado**
* **Reprovado**
* **Bloqueado**
* **Não aplicável**

A classificação deve refletir o que foi realmente observado, nunca uma suposição.

---

## 6. Relatório e evidências

Ao final, rode:

```bash
npm run report
```

Faça isso mesmo que a execução tenha sido interrompida parcialmente.

Preserve as evidências abaixo:

```text
test-results/results.json
diagnostics.jsonl
diagnostic-report.md
diagnostic-report.html
test-results/artifacts
playwright-report
```

Para cada CT reprovado ou bloqueado, preencha todos os campos da seção **Triagem e Relatório** do runbook:

* ID
* Severidade
* CT
* Caminho exato
* Perfil usado
* Massa `AUTO-4S-${RUN_ID}`
* Passos
* Resultado esperado
* Resultado obtido
* Impacto
* Evidência
* Recomendação
* Status final

---

## 7. O que não fazer

Não altere código de produção do APP 4S para o teste passar.

Não afrouxe asserções nem aumente timeouts de forma arbitrária só para eliminar uma falha.

Não apague nem sobrescreva evidências de execuções anteriores sem eu pedir.

Não reporte um CT como aprovado sem evidência gerada nesta execução.

---

## 8. Resumo esperado ao final

No final da execução, entregue um resumo contendo:

1. Placar geral:

   ```text
   Aprovado / Reprovado / Bloqueado / Não aplicável
   ```

   O total deve considerar os 22 CTs.

2. Destaque imediato de qualquer CT com severidade crítica que não esteja aprovado.

3. Tabela no formato:

   | CT    | Status | Severidade | Observação |
   | ----- | ------ | ---------- | ---------- |
   | CT001 |        |            |            |
   | CT002 |        |            |            |

4. Lista de CTs que só passaram após retry, como candidatos a investigação posterior.

5. Qualquer bloqueio de ambiente ou precondição, como:

   * Usuário operacional ausente.
   * Brave não encontrado.
   * Rede restrita.

6. Caminho dos relatórios completos gerados.

