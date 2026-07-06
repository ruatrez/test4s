# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-master-data.spec.ts >> CT011 - colaborador, cargo/faixa e alocacao quando a UI permitir
- Location: tests/02-master-data.spec.ts:67:5

# Error details

```
Error: Could not find select/control: cargo
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
      - button "◐ Suprimentos ▶" [ref=e27] [cursor=pointer]:
        - generic [ref=e28]: ◐
        - generic [ref=e29]: Suprimentos
        - generic [ref=e30]: ▶
      - button "◧ Financeiro ▶" [ref=e32] [cursor=pointer]:
        - generic [ref=e33]: ◧
        - generic [ref=e34]: Financeiro
        - generic [ref=e35]: ▶
      - button "◫ Workflow ▶" [ref=e37] [cursor=pointer]:
        - generic [ref=e38]: ◫
        - generic [ref=e39]: Workflow
        - generic [ref=e40]: ▶
    - generic [ref=e41]:
      - generic [ref=e43]: H
      - generic [ref=e44]:
        - paragraph [ref=e45]: Hello
        - paragraph [ref=e46]: ADMINISTRADOR
      - button "⏻" [ref=e47] [cursor=pointer]
  - main [ref=e48]:
    - generic [ref=e50]: ADMINISTRADOR
    - generic [ref=e52]:
      - generic [ref=e53]:
        - heading "Mão de Obra" [level=1] [ref=e54]
        - button "+ Novo Colaborador" [ref=e55] [cursor=pointer]
      - generic [ref=e56]:
        - button "Colaboradores (0)" [ref=e57] [cursor=pointer]
        - button "Alocacoes (0)" [ref=e58] [cursor=pointer]
        - button "Cargos (0)" [ref=e59] [cursor=pointer]
        - button "Faixas de Custo (0)" [ref=e60] [cursor=pointer]
      - generic [ref=e61]:
        - generic [ref=e62]: ðŸ‘·
        - paragraph [ref=e63]: Nenhum colaborador cadastrado
        - button "Cadastrar Colaborador" [ref=e64] [cursor=pointer]
      - generic [ref=e66]:
        - heading "Novo Colaborador" [level=2] [ref=e67]
        - generic [ref=e68]:
          - generic [ref=e69]:
            - generic [ref=e70]: Nome Completo *
            - textbox [ref=e71]: AUTO-4S-20260706123151 Colaborador
          - generic [ref=e72]:
            - generic [ref=e73]: CPF *
            - textbox [ref=e74]: "60706123151"
          - generic [ref=e75]:
            - generic [ref=e76]: Vínculo
            - combobox [ref=e77]:
              - option "CLT" [selected]
              - option "PJ"
              - 'option "TEMPORÃRIO"'
          - generic [ref=e78]:
            - generic [ref=e79]: Cargo
            - combobox [active] [ref=e80]:
              - option "Selecione..." [selected]
          - generic [ref=e81]:
            - generic [ref=e82]: Data Admissão *
            - textbox [ref=e83]
          - generic [ref=e84]:
            - generic [ref=e85]: Salário Base
            - spinbutton [ref=e86]: "0"
          - generic [ref=e87]:
            - generic [ref=e88]: Encargos (%)
            - spinbutton [ref=e89]: "0"
          - generic [ref=e90]:
            - generic [ref=e91]: Benefícios Mensais
            - spinbutton [ref=e92]: "0"
          - generic [ref=e93]: "Custo Total Mensal: R$ 0,00"
        - generic [ref=e94]:
          - button "Cancelar" [ref=e95] [cursor=pointer]
          - button "Salvar" [ref=e96] [cursor=pointer]
```

# Test source

```ts
  105 |       candidates.push(page.getByPlaceholder(pattern));
  106 |     }
  107 |     candidates.push(page.locator(`input[name*="${label}" i]`));
  108 |     candidates.push(page.locator(`textarea[name*="${label}" i]`));
  109 |     const labelText = xpathStartsWithText(label);
  110 |     candidates.push(page.locator(`xpath=//*[${labelText} and (./input or ./textarea)]//*[self::input or self::textarea]`));
  111 |     candidates.push(page.locator(`xpath=//*[${labelText}]/ancestor::*[.//input or .//textarea][1]//*[self::input or self::textarea][not(@type="hidden")]`));
  112 |   }
  113 |   const target = await firstVisible(candidates);
  114 |   if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
  115 |   await target.fill(String(value));
  116 | }
  117 | 
  118 | export async function chooseOption(page: Page, labels: string[], value: string) {
  119 |   const candidates = labels.flatMap((label) => {
  120 |     const labelText = xpathStartsWithText(label);
  121 |     return [
  122 |       page.getByLabel(new RegExp(label, 'i')),
  123 |       page.locator(`select[name*="${label}" i]`),
  124 |       page.locator(`xpath=//*[${labelText} and ./select]//select`),
  125 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
  126 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
  127 |     ];
  128 |   });
  129 |   const target = await firstVisible(candidates);
  130 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  131 | 
  132 |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  133 |   const select = tagName === 'select'
  134 |     ? target
  135 |     : await firstVisible([target.locator('select')]);
  136 |   if (select) {
  137 |     const options = await select.locator('option').evaluateAll((items) => items.map((item) => ({
  138 |       value: item.value,
  139 |       text: (item.textContent || '').replace(/\s+/g, ' ').trim()
  140 |     })));
  141 |     const expected = normalizeText(value).toLowerCase();
  142 |     const option = options.find((item) => item.text.toLowerCase() === expected)
  143 |       || (expected.length > 2 ? options.find((item) => item.text.toLowerCase().includes(expected)) : undefined);
  144 |     if (option) {
  145 |       await select.selectOption(option.value);
  146 |       const selectedText = await select.evaluate((element) => {
  147 |         const selectElement = element as HTMLSelectElement;
  148 |         return (selectElement.selectedOptions[0]?.textContent || '').replace(/\s+/g, ' ').trim();
  149 |       });
  150 |       const selected = normalizeText(selectedText).toLowerCase();
  151 |       const selectedMatches = expected.length > 2 ? selected.includes(expected) : selected === expected;
  152 |       if (!selectedMatches) {
  153 |         throw new Error(`Selected option mismatch for ${labels.join(' | ')}: expected "${value}", got "${selectedText}"`);
  154 |       }
  155 |       return;
  156 |     }
  157 |   }
  158 | 
  159 |   await target.click();
  160 |   const optionPattern = new RegExp(`^\\s*${escapeRegex(value)}\\s*$`, 'i');
  161 |   const optionTarget = await firstVisible([
  162 |     page.getByRole('option', { name: optionPattern }),
  163 |     page.locator('[role="option"], li, [data-radix-select-item], [data-value]').filter({ hasText: optionPattern }),
  164 |     page.getByText(optionPattern)
  165 |   ]);
  166 |   if (!optionTarget) {
  167 |     throw new Error(`Could not find option "${value}" for: ${labels.join(' | ')}`);
  168 |   }
  169 |   await optionTarget.click();
  170 | }
  171 | 
  172 | export async function expectSelectedOption(page: Page, labels: string[], expectedValue: string) {
  173 |   const candidates = labels.flatMap((label) => {
  174 |     const labelText = xpathStartsWithText(label);
  175 |     return [
  176 |       page.getByLabel(new RegExp(label, 'i')),
  177 |       page.locator(`select[name*="${label}" i]`),
  178 |       page.locator(`xpath=//*[${labelText} and ./select]//select`),
  179 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
  180 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
  181 |     ];
  182 |   });
  183 |   const target = await firstVisible(candidates);
  184 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  185 | 
  186 |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  187 |   const select = tagName === 'select'
  188 |     ? target
  189 |     : await firstVisible([target.locator('select')]);
  190 |   const selectedText = select
  191 |     ? await select.evaluate((element) => {
  192 |       const selectElement = element as HTMLSelectElement;
  193 |       return (selectElement.selectedOptions[0]?.textContent || '').replace(/\s+/g, ' ').trim();
  194 |     })
  195 |     : await target.innerText().catch(() => '');
  196 |   expect(normalizeText(selectedText).toLowerCase()).toContain(normalizeText(expectedValue).toLowerCase());
  197 | }
  198 | 
  199 | export async function chooseFirstAvailableOption(page: Page, labels: string[]) {
  200 |   const candidates = labels.flatMap((label) => [
  201 |     page.getByLabel(new RegExp(label, 'i')),
  202 |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  203 |   ]);
  204 |   const target = await firstVisible(candidates);
> 205 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
      |                      ^ Error: Could not find select/control: cargo
  206 |   const optionValue = await target.locator('option').evaluateAll((options) => {
  207 |     const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
  208 |     return option ? option.value : '';
  209 |   });
  210 |   if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
  211 |   await target.selectOption(optionValue);
  212 | }
  213 | 
  214 | export async function submitForm(page: Page) {
  215 |   const primarySubmit = await firstVisible([
  216 |     page.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
  217 |     page.locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i })
  218 |   ]);
  219 |   if (primarySubmit) {
  220 |     await primarySubmit.click();
  221 |   } else {
  222 |     await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  223 |   }
  224 |   await page.waitForLoadState('networkidle').catch(() => {});
  225 |   await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
  226 | }
  227 | 
  228 | export async function expectPageReady(page: Page, expectedTexts: string[] = []) {
  229 |   await expect(page.locator('body')).toBeVisible();
  230 |   await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not/i);
  231 |   for (const text of expectedTexts) {
  232 |     await expect(byText(page, text)).toBeVisible();
  233 |   }
  234 | }
  235 | 
  236 | export async function tryCreateSimpleRecord(
  237 |   page: Page,
  238 |   path: string[],
  239 |   recordName: string,
  240 |   fields: FieldSpec[] = [],
  241 |   options: { createButtonNames?: string[]; assertionTimeout?: number; listButtonNames?: string[] } = {}
  242 | ) {
  243 |   await gotoMenu(page, path);
  244 |   if (options.listButtonNames) await clickExactControl(page, options.listButtonNames);
  245 |   await clickAny(page, options.createButtonNames ?? ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  246 |   for (const field of fields) {
  247 |     try {
  248 |       if (field.type === 'select') {
  249 |         await chooseOption(page, field.labels, String(field.value)).catch(async (error) => {
  250 |           if (!field.fallbackToFirstOption) throw error;
  251 |           await chooseFirstAvailableOption(page, field.labels);
  252 |         });
  253 |       } else {
  254 |         await fillField(page, field.labels, field.value);
  255 |       }
  256 |     } catch (error) {
  257 |       if (!field.optional) throw error;
  258 |     }
  259 |   }
  260 |   await submitForm(page);
  261 |   if (options.listButtonNames) await clickExactControl(page, options.listButtonNames);
  262 |   await expect(byText(page, recordName)).toBeVisible({ timeout: options.assertionTimeout });
  263 | }
  264 | 
  265 | export async function assertPersistedAfterRefresh(page: Page, text: string, timeout?: number) {
  266 |   await page.reload({ waitUntil: 'networkidle' });
  267 |   await expect(byText(page, text)).toBeVisible({ timeout });
  268 | }
  269 | 
  270 | export async function tryEditCurrentRecord(page: Page, fields: FieldSpec[]) {
  271 |   await clickAny(page, ['Editar', 'Alterar']).catch(() => {});
  272 |   for (const field of fields) {
  273 |     if (field.type === 'select') {
  274 |       await chooseOption(page, field.labels, String(field.value)).catch(() => {});
  275 |     } else {
  276 |       await fillField(page, field.labels, field.value).catch(() => {});
  277 |     }
  278 |   }
  279 |   await submitForm(page);
  280 | }
  281 | 
  282 | export async function tryCancelInactivateOrDelete(page: Page) {
  283 |   await clickAny(page, ['Cancelar', 'Inativar', 'Excluir', 'Remover']);
  284 |   await fillField(page, ['justificativa', 'observacao', 'observação'], 'Acao automatizada de teste').catch(() => {});
  285 |   await clickAny(page, ['Confirmar', 'Salvar', 'Sim', 'Enviar']).catch(() => {});
  286 |   await page.waitForLoadState('networkidle').catch(() => {});
  287 | }
  288 | 
```