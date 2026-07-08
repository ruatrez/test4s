# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-procurement-finance-e2e.spec.ts >> CT015 - ordem de compra a partir da cotacao e comprometimento do orcamento
- Location: tests/04-procurement-finance-e2e.spec.ts:60:5

# Error details

```
Error: Could not find available option for: Cotacao concluida | Cotação concluída
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - complementary [ref=e4]:
    - generic [ref=e5]:
      - img "4S Engenharia" [ref=e7] [cursor=pointer]
      - generic [ref=e8]: Núcleo Financeiro
    - navigation [ref=e9]:
      - button "◈ Dashboard" [ref=e10] [cursor=pointer]:
        - generic [ref=e11]: ◈
        - generic [ref=e12]: Dashboard
      - button "⊞ Cadastros" [ref=e13] [cursor=pointer]:
        - generic [ref=e14]: ⊞
        - generic [ref=e15]: Cadastros
      - button "⊙ Configurações ▶" [ref=e17] [cursor=pointer]:
        - generic [ref=e18]: ⊙
        - generic [ref=e19]: Configurações
        - generic [ref=e20]: ▶
      - button "◑ Orçamento ▶" [ref=e22] [cursor=pointer]:
        - generic [ref=e23]: ◑
        - generic [ref=e24]: Orçamento
        - generic [ref=e25]: ▶
      - generic [ref=e26]:
        - button "◐ Suprimentos ▶" [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: ◐
          - generic [ref=e29]: Suprimentos
          - generic [ref=e30]: ▶
        - button "Requisições" [ref=e31] [cursor=pointer]:
          - generic [ref=e32]: Requisições
        - button "Cotações" [ref=e33] [cursor=pointer]:
          - generic [ref=e34]: Cotações
        - button "Ordens de Compra" [ref=e35] [cursor=pointer]:
          - generic [ref=e36]: Ordens de Compra
      - button "◧ Financeiro ▶" [ref=e38] [cursor=pointer]:
        - generic [ref=e39]: ◧
        - generic [ref=e40]: Financeiro
        - generic [ref=e41]: ▶
      - button "◫ Workflow ▶" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: ◫
        - generic [ref=e45]: Workflow
        - generic [ref=e46]: ▶
    - generic [ref=e47]:
      - generic [ref=e49]: H
      - generic [ref=e50]:
        - paragraph [ref=e51]: Hello
        - paragraph [ref=e52]: ADMINISTRADOR
      - button "⏻" [ref=e53] [cursor=pointer]
  - main [ref=e54]:
    - generic [ref=e55]:
      - button "⚠ 5 aprovações pendentes" [ref=e56] [cursor=pointer]
      - generic [ref=e57]: ADMINISTRADOR
    - generic [ref=e59]:
      - generic [ref=e60]:
        - generic [ref=e61]:
          - heading "Ordens de Compra" [level=1] [ref=e62]
          - paragraph [ref=e63]: 0 ordens
        - button "+ Nova OC" [ref=e64] [cursor=pointer]
      - table [ref=e65]:
        - rowgroup [ref=e66]:
          - row "Numero OC Cotacao Fornecedor Obra Centro Itens Valor Status Acoes" [ref=e67]:
            - columnheader "Numero OC" [ref=e68]
            - columnheader "Cotacao" [ref=e69]
            - columnheader "Fornecedor" [ref=e70]
            - columnheader "Obra" [ref=e71]
            - columnheader "Centro" [ref=e72]
            - columnheader "Itens" [ref=e73]
            - columnheader "Valor" [ref=e74]
            - columnheader "Status" [ref=e75]
            - columnheader "Acoes" [ref=e76]
        - rowgroup
      - generic [ref=e78]:
        - heading "Nova Ordem de Compra" [level=2] [ref=e79]
        - generic [ref=e80]:
          - generic [ref=e81]:
            - generic [ref=e82]: Cotacao concluida *
            - combobox [active] [ref=e83]:
              - option "Selecione..." [selected]
          - generic [ref=e84]:
            - generic [ref=e85]: Emissao
            - textbox [ref=e86]: 2026-07-07
          - generic [ref=e87]:
            - generic [ref=e88]: Previsao entrega *
            - textbox [ref=e89]
          - generic [ref=e90]:
            - generic [ref=e91]: Condicao pagamento
            - textbox [ref=e92]: 30 dias
        - generic [ref=e93]:
          - button "Cancelar" [ref=e94] [cursor=pointer]
          - button "Criar OC" [ref=e95] [cursor=pointer]
```

# Test source

```ts
  164 |     return [
  165 |       page.locator(`select[name*="${label}" i]`),
  166 |       page.locator(`xpath=//*[${labelText} and ./select]//select`),
  167 |       page.locator(`xpath=//*[${labelText} and not(.//select)]/following::select[1]`),
  168 |       page.getByLabel(new RegExp(label, 'i')),
  169 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
  170 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
  171 |     ];
  172 |   });
  173 |   const target = await firstVisible(candidates);
  174 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  175 | 
  176 |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  177 |   const select = tagName === 'select'
  178 |     ? target
  179 |     : await firstVisible([target.locator('select')]);
  180 |   if (select) {
  181 |     const options = await select.locator('option').evaluateAll((items) => items.map((item) => ({
  182 |       value: item.value,
  183 |       text: (item.textContent || '').replace(/\s+/g, ' ').trim()
  184 |     })));
  185 |     const option = options.find((item) => optionMatches(item, value));
  186 |     if (option) {
  187 |       await select.selectOption(option.value);
  188 |       const selectedText = await select.evaluate((element) => {
  189 |         const selectElement = element as HTMLSelectElement;
  190 |         return (selectElement.selectedOptions[0]?.textContent || '').replace(/\s+/g, ' ').trim();
  191 |       });
  192 |       const selectedValue = await select.evaluate((element) => (element as HTMLSelectElement).value);
  193 |       if (!optionMatches({ text: selectedText, value: selectedValue }, value)) {
  194 |         throw new Error(`Selected option mismatch for ${labels.join(' | ')}: expected "${value}", got "${selectedText}"`);
  195 |       }
  196 |       return;
  197 |     }
  198 |   }
  199 | 
  200 |   await target.click();
  201 |   const optionPattern = new RegExp(`^\\s*${escapeRegex(value)}\\s*$`, 'i');
  202 |   const optionTarget = await firstVisible([
  203 |     page.getByRole('option', { name: optionPattern }),
  204 |     page.locator('[role="option"], li, [data-radix-select-item], [data-value]').filter({ hasText: optionPattern }),
  205 |     page.getByText(optionPattern)
  206 |   ]);
  207 |   if (!optionTarget) {
  208 |     throw new Error(`Could not find option "${value}" for: ${labels.join(' | ')}`);
  209 |   }
  210 |   await optionTarget.click();
  211 | }
  212 | 
  213 | export async function expectSelectedOption(page: Page, labels: string[], expectedValue: string) {
  214 |   const candidates = labels.flatMap((label) => {
  215 |     const labelText = xpathStartsWithText(label);
  216 |     return [
  217 |       page.locator(`select[name*="${label}" i]`),
  218 |       page.locator(`xpath=//*[${labelText} and ./select]//select`),
  219 |       page.locator(`xpath=//*[${labelText} and not(.//select)]/following::select[1]`),
  220 |       page.getByLabel(new RegExp(label, 'i')),
  221 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
  222 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
  223 |     ];
  224 |   });
  225 |   const target = await firstVisible(candidates);
  226 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  227 | 
  228 |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  229 |   const select = tagName === 'select'
  230 |     ? target
  231 |     : await firstVisible([target.locator('select')]);
  232 |   const selectedText = select
  233 |     ? await select.evaluate((element) => {
  234 |       const selectElement = element as HTMLSelectElement;
  235 |       return (selectElement.selectedOptions[0]?.textContent || '').replace(/\s+/g, ' ').trim();
  236 |     })
  237 |     : await target.innerText().catch(() => '');
  238 |   expect(normalizeText(selectedText).toLowerCase()).toContain(normalizeText(expectedValue).toLowerCase());
  239 | }
  240 | 
  241 | export async function chooseFirstAvailableOption(page: Page, labels: string[]) {
  242 |   const candidates = labels.flatMap((label) => {
  243 |     const labelText = xpathStartsWithText(label);
  244 |     return [
  245 |       page.locator(`select[name*="${label}" i]`),
  246 |       page.locator(`xpath=//*[${labelText} and ./select]//select`),
  247 |       page.locator(`xpath=//*[${labelText} and not(.//select)]/following::select[1]`),
  248 |       page.getByLabel(new RegExp(label, 'i')),
  249 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
  250 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
  251 |     ];
  252 |   });
  253 |   const target = await firstVisible(candidates);
  254 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  255 |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  256 |   const select = tagName === 'select'
  257 |     ? target
  258 |     : await firstVisible([target.locator('select')]);
  259 |   if (!select) throw new Error(`Could not find native select for: ${labels.join(' | ')}`);
  260 |   const optionValue = await select.locator('option').evaluateAll((options) => {
  261 |     const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
  262 |     return option ? option.value : '';
  263 |   });
> 264 |   if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
      |                           ^ Error: Could not find available option for: Cotacao concluida | Cotação concluída
  265 |   await select.selectOption(optionValue);
  266 | }
  267 | 
  268 | function submitCandidates(root: SearchRoot) {
  269 |   return [
  270 |     root.locator('button[type="submit"], input[type="submit"]'),
  271 |     root.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
  272 |     root.locator('button, [role="button"]')
  273 |       .filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i })
  274 |       .filter({ hasNotText: /cadastrar mais/i })
  275 |   ];
  276 | }
  277 | 
  278 | async function findSubmitControl(root: SearchRoot) {
  279 |   return firstVisible(submitCandidates(root));
  280 | }
  281 | 
  282 | async function scrollToModalEnd(modal: Locator) {
  283 |   await modal.evaluate((element) => {
  284 |     element.scrollTo({ top: element.scrollHeight, behavior: 'instant' });
  285 |   }).catch(() => {});
  286 | }
  287 | 
  288 | export async function submitForm(page: Page) {
  289 |   const modal = await visibleModal(page);
  290 |   const searchRoot: SearchRoot = modal ?? page;
  291 |   let primarySubmit = await findSubmitControl(searchRoot);
  292 |   if (!primarySubmit && modal) {
  293 |     await scrollToModalEnd(modal);
  294 |     primarySubmit = await findSubmitControl(modal);
  295 |   }
  296 |   if (primarySubmit) {
  297 |     await primarySubmit.scrollIntoViewIfNeeded().catch(() => {});
  298 |     await primarySubmit.click();
  299 |   } else if (modal) {
  300 |     throw new Error('Could not find submit control inside the active modal');
  301 |   } else {
  302 |     await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  303 |   }
  304 |   await page.waitForLoadState('networkidle').catch(() => {});
  305 |   await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
  306 | }
  307 | 
  308 | export async function expectPageReady(page: Page, expectedTexts: string[] = []) {
  309 |   await expect(page.locator('body')).toBeVisible();
  310 |   await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not/i);
  311 |   for (const text of expectedTexts) {
  312 |     await expect(byText(page, text)).toBeVisible();
  313 |   }
  314 | }
  315 | 
  316 | async function findSearchInput(page: Page) {
  317 |   return firstVisible([
  318 |     page.getByPlaceholder(/buscar|pesquisar|filtro/i),
  319 |     page.getByRole('textbox', { name: /buscar|pesquisar|filtro/i }),
  320 |     page.locator('input[type="search"]'),
  321 |     page.locator('input[placeholder*="buscar" i], input[placeholder*="pesquisar" i], input[placeholder*="filtro" i]')
  322 |   ]);
  323 | }
  324 | 
  325 | async function findEnabledNextButton(page: Page) {
  326 |   const candidates = [
  327 |     page.getByRole('button', { name: /^(proxima|próxima|next)$/i }),
  328 |     page.locator('button, [role="button"]').filter({ hasText: /^(proxima|próxima|next)$/i })
  329 |   ];
  330 | 
  331 |   for (const candidate of candidates) {
  332 |     const count = await candidate.count();
  333 |     for (let index = 0; index < count; index += 1) {
  334 |       const item = candidate.nth(index);
  335 |       if (!await item.isVisible().catch(() => false)) continue;
  336 |       if (await item.isDisabled().catch(() => false)) continue;
  337 |       const ariaDisabled = await item.getAttribute('aria-disabled').catch(() => null);
  338 |       if (ariaDisabled === 'true') continue;
  339 |       return item;
  340 |     }
  341 |   }
  342 | 
  343 |   return null;
  344 | }
  345 | 
  346 | async function expectRecordVisibleInSearchOrPagination(page: Page, recordName: string, timeout?: number) {
  347 |   const record = byText(page, recordName);
  348 |   const finalTimeout = timeout ?? 10_000;
  349 |   if (await waitForVisible(record)) return;
  350 | 
  351 |   const search = await findSearchInput(page);
  352 |   if (search) {
  353 |     await search.fill(recordName);
  354 |     await page.waitForLoadState('networkidle').catch(() => {});
  355 |     await page.waitForTimeout(500);
  356 |     if (await waitForVisible(record, Math.min(finalTimeout, 5_000))) return;
  357 |     await search.clear().catch(() => {});
  358 |     await page.waitForLoadState('networkidle').catch(() => {});
  359 |     await page.waitForTimeout(500);
  360 |   }
  361 | 
  362 |   for (let pageIndex = 0; pageIndex < 20; pageIndex += 1) {
  363 |     if (await waitForVisible(record, 1_000)) return;
  364 |     const next = await findEnabledNextButton(page);
```