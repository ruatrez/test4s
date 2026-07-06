# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-procurement-finance-e2e.spec.ts >> CT012 - requisicao dentro do saldo e requisicao acima do saldo
- Location: tests/04-procurement-finance-e2e.spec.ts:14:5

# Error details

```
Error: Could not find available option for: Item orcado | Item orçado
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
    - generic [ref=e56]: ADMINISTRADOR
    - generic [ref=e58]:
      - generic [ref=e59]:
        - generic [ref=e60]:
          - heading "Requisicoes" [level=1] [ref=e61]
          - paragraph [ref=e62]: 0 requisicoes
        - button "+ Nova Requisicao" [ref=e63] [cursor=pointer]
      - generic [ref=e64]:
        - textbox "Buscar..." [ref=e65]
        - combobox [ref=e66]:
          - option "Todas as obras" [selected]
          - option "AUTO-4S-20260706114042 Obra"
          - option "VIA MOBILIDADE - TROCA DE PISOS"
          - option "4S-OBR-053-CAP-VMO"
      - table [ref=e67]:
        - rowgroup [ref=e68]:
          - row "Numero Obra Centro Custo Itens Valor Est. Status Acoes" [ref=e69]:
            - columnheader "Numero" [ref=e70]
            - columnheader "Obra" [ref=e71]
            - columnheader "Centro Custo" [ref=e72]
            - columnheader "Itens" [ref=e73]
            - columnheader "Valor Est." [ref=e74]
            - columnheader "Status" [ref=e75]
            - columnheader "Acoes" [ref=e76]
        - rowgroup
      - generic [ref=e77]:
        - generic [ref=e78]: 0-0 de 0
        - generic [ref=e79]:
          - generic [ref=e80]: Itens por pagina
          - combobox [ref=e81]:
            - option "10 por pagina" [selected]
            - option "20 por pagina"
            - option "50 por pagina"
            - option "100 por pagina"
          - button "Anterior" [disabled] [ref=e82] [cursor=pointer]
          - generic [ref=e83]: Pagina 1 de 1
          - button "Proxima" [disabled] [ref=e84] [cursor=pointer]
      - generic [ref=e86]:
        - heading "Nova Requisicao" [level=2] [ref=e87]
        - paragraph [ref=e88]: Inclua itens vinculados ao orcamento para validar saldo.
        - generic [ref=e89]:
          - generic [ref=e90]:
            - generic [ref=e91]: Obra *
            - combobox [ref=e92]:
              - option "Selecione..."
              - option "AUTO-4S-20260706114042 Obra" [selected]
              - option "VIA MOBILIDADE - TROCA DE PISOS"
              - option "4S-OBR-053-CAP-VMO"
          - generic [ref=e93]:
            - generic [ref=e94]: Centro de custo *
            - combobox [ref=e95]:
              - option "Selecione..."
              - option "AUTO-4S-20260706114042 Centro" [selected]
          - generic [ref=e96]:
            - generic [ref=e97]: Tipo
            - combobox [ref=e98]:
              - option "MATERIAL" [selected]
              - option "SERVICO"
              - option "LOCACAO"
          - generic [ref=e99]:
            - generic [ref=e100]: Data
            - textbox [ref=e101]: 2026-07-06
          - generic [ref=e102]:
            - generic [ref=e103]: Justificativa *
            - textbox [active] [ref=e104]: AUTO-4S-20260706114042 Requisicao
        - generic [ref=e105]:
          - generic [ref=e106]:
            - paragraph [ref=e107]: Itens da requisicao
            - button "+ Item" [ref=e108] [cursor=pointer]
          - generic [ref=e109]:
            - generic [ref=e110]:
              - generic [ref=e111]: Item orcado
              - combobox [ref=e112]:
                - option "Selecione..." [selected]
              - paragraph [ref=e113]: Nenhum item orcado ativo encontrado para a obra selecionada.
            - generic [ref=e114]:
              - generic [ref=e115]: Qtd.
              - spinbutton [ref=e116]: "1"
            - generic [ref=e117]:
              - generic [ref=e118]: Vlr unit.
              - spinbutton [ref=e119]: "0"
            - generic [ref=e120]:
              - generic [ref=e121]: Total
              - generic [ref=e122]: R$ 0,00
            - button "remover" [ref=e123] [cursor=pointer]
          - generic [ref=e124]: "Total: R$ 0,00"
        - generic [ref=e125]:
          - button "Cancelar" [ref=e126] [cursor=pointer]
          - button "Criar Requisicao" [ref=e127] [cursor=pointer]
```

# Test source

```ts
  66  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
  67  |   }
  68  |   const target = await firstVisible(locators);
  69  |   if (!target) throw new Error(`Could not find exact clickable control: ${names.join(' | ')}`);
  70  |   await target.click(options);
  71  |   await page.waitForLoadState('networkidle').catch(() => {});
  72  | }
  73  | 
  74  | export async function gotoMenu(page: Page, path: string[]) {
  75  |   for (let index = 0; index < path.length; index += 1) {
  76  |     const segment = path[index];
  77  |     const nextSegment = path[index + 1];
  78  |     if (segment === 'Dashboard' && await page.getByRole('heading', { name: /dashboard/i }).count()) {
  79  |       continue;
  80  |     }
  81  |     if (nextSegment) {
  82  |       const childVisible = await page.locator('button, a, [role="button"]')
  83  |         .filter({ hasText: new RegExp(escapeRegex(nextSegment), 'i') })
  84  |         .first()
  85  |         .isVisible()
  86  |         .catch(() => false);
  87  |       if (childVisible) continue;
  88  |     }
  89  |     await clickAny(page, [segment]);
  90  |     await page.waitForLoadState('networkidle').catch(() => {});
  91  |   }
  92  | }
  93  | 
  94  | export async function fillField(page: Page, labels: string[], value: string | number) {
  95  |   const candidates: Locator[] = [];
  96  |   for (const label of labels) {
  97  |     const patterns = [new RegExp(label, 'i')];
  98  |     if (/^email$/i.test(label)) patterns.push(/e-?mail/i);
  99  |     for (const pattern of patterns) {
  100 |       candidates.push(page.getByLabel(pattern));
  101 |       candidates.push(page.getByPlaceholder(pattern));
  102 |     }
  103 |     candidates.push(page.locator(`input[name*="${label}" i]`));
  104 |     candidates.push(page.locator(`textarea[name*="${label}" i]`));
  105 |     const labelText = xpathStartsWithText(label);
  106 |     candidates.push(page.locator(`xpath=//*[${labelText} and (./input or ./textarea)]//*[self::input or self::textarea]`));
  107 |     candidates.push(page.locator(`xpath=//*[${labelText}]/ancestor::*[.//input or .//textarea][1]//*[self::input or self::textarea][not(@type="hidden")]`));
  108 |   }
  109 |   const target = await firstVisible(candidates);
  110 |   if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
  111 |   await target.fill(String(value));
  112 | }
  113 | 
  114 | export async function chooseOption(page: Page, labels: string[], value: string) {
  115 |   const candidates = labels.flatMap((label) => {
  116 |     const labelText = xpathStartsWithText(label);
  117 |     return [
  118 |       page.getByLabel(new RegExp(label, 'i')),
  119 |       page.locator(`select[name*="${label}" i]`),
  120 |       page.locator(`xpath=//*[${labelText} and ./select]//select`),
  121 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
  122 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
  123 |     ];
  124 |   });
  125 |   const target = await firstVisible(candidates);
  126 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  127 | 
  128 |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  129 |   const select = tagName === 'select'
  130 |     ? target
  131 |     : await firstVisible([target.locator('select')]);
  132 |   if (select) {
  133 |     const option = select.locator('option').filter({ hasText: new RegExp(escapeRegex(value), 'i') }).first();
  134 |     if (await option.count()) {
  135 |       await select.selectOption({ label: await option.innerText() });
  136 |       return;
  137 |     }
  138 |   }
  139 | 
  140 |   await target.click();
  141 |   const optionPattern = new RegExp(`^\\s*${escapeRegex(value)}\\s*$`, 'i');
  142 |   const optionTarget = await firstVisible([
  143 |     page.getByRole('option', { name: optionPattern }),
  144 |     page.locator('[role="option"], li, [data-radix-select-item], [data-value]').filter({ hasText: optionPattern }),
  145 |     page.getByText(optionPattern)
  146 |   ]);
  147 |   if (!optionTarget) {
  148 |     await target.press('ArrowDown').catch(() => {});
  149 |     await target.press('Enter').catch(() => {});
  150 |     return;
  151 |   }
  152 |   await optionTarget.click();
  153 | }
  154 | 
  155 | export async function chooseFirstAvailableOption(page: Page, labels: string[]) {
  156 |   const candidates = labels.flatMap((label) => [
  157 |     page.getByLabel(new RegExp(label, 'i')),
  158 |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  159 |   ]);
  160 |   const target = await firstVisible(candidates);
  161 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  162 |   const optionValue = await target.locator('option').evaluateAll((options) => {
  163 |     const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
  164 |     return option ? option.value : '';
  165 |   });
> 166 |   if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
      |                           ^ Error: Could not find available option for: Item orcado | Item orçado
  167 |   await target.selectOption(optionValue);
  168 | }
  169 | 
  170 | export async function submitForm(page: Page) {
  171 |   const primarySubmit = await firstVisible([
  172 |     page.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
  173 |     page.locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i })
  174 |   ]);
  175 |   if (primarySubmit) {
  176 |     await primarySubmit.click();
  177 |   } else {
  178 |     await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  179 |   }
  180 |   await page.waitForLoadState('networkidle').catch(() => {});
  181 |   await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
  182 | }
  183 | 
  184 | export async function expectPageReady(page: Page, expectedTexts: string[] = []) {
  185 |   await expect(page.locator('body')).toBeVisible();
  186 |   await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not/i);
  187 |   for (const text of expectedTexts) {
  188 |     await expect(byText(page, text)).toBeVisible();
  189 |   }
  190 | }
  191 | 
  192 | export async function tryCreateSimpleRecord(
  193 |   page: Page,
  194 |   path: string[],
  195 |   recordName: string,
  196 |   fields: FieldSpec[] = [],
  197 |   options: { createButtonNames?: string[]; assertionTimeout?: number; listButtonNames?: string[] } = {}
  198 | ) {
  199 |   await gotoMenu(page, path);
  200 |   if (options.listButtonNames) await clickExactControl(page, options.listButtonNames);
  201 |   await clickAny(page, options.createButtonNames ?? ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  202 |   for (const field of fields) {
  203 |     try {
  204 |       if (field.type === 'select') {
  205 |         await chooseOption(page, field.labels, String(field.value)).catch(async (error) => {
  206 |           if (!field.fallbackToFirstOption) throw error;
  207 |           await chooseFirstAvailableOption(page, field.labels);
  208 |         });
  209 |       } else {
  210 |         await fillField(page, field.labels, field.value);
  211 |       }
  212 |     } catch (error) {
  213 |       if (!field.optional) throw error;
  214 |     }
  215 |   }
  216 |   await submitForm(page);
  217 |   if (options.listButtonNames) await clickExactControl(page, options.listButtonNames);
  218 |   await expect(byText(page, recordName)).toBeVisible({ timeout: options.assertionTimeout });
  219 | }
  220 | 
  221 | export async function assertPersistedAfterRefresh(page: Page, text: string, timeout?: number) {
  222 |   await page.reload({ waitUntil: 'networkidle' });
  223 |   await expect(byText(page, text)).toBeVisible({ timeout });
  224 | }
  225 | 
  226 | export async function tryEditCurrentRecord(page: Page, fields: FieldSpec[]) {
  227 |   await clickAny(page, ['Editar', 'Alterar']).catch(() => {});
  228 |   for (const field of fields) {
  229 |     if (field.type === 'select') {
  230 |       await chooseOption(page, field.labels, String(field.value)).catch(() => {});
  231 |     } else {
  232 |       await fillField(page, field.labels, field.value).catch(() => {});
  233 |     }
  234 |   }
  235 |   await submitForm(page);
  236 | }
  237 | 
  238 | export async function tryCancelInactivateOrDelete(page: Page) {
  239 |   await clickAny(page, ['Cancelar', 'Inativar', 'Excluir', 'Remover']);
  240 |   await fillField(page, ['justificativa', 'observacao', 'observação'], 'Acao automatizada de teste').catch(() => {});
  241 |   await clickAny(page, ['Confirmar', 'Salvar', 'Sim', 'Enviar']).catch(() => {});
  242 |   await page.waitForLoadState('networkidle').catch(() => {});
  243 | }
  244 | 
```