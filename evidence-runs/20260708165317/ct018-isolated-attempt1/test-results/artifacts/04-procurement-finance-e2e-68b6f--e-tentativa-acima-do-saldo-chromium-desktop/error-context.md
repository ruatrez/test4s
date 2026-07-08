# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-procurement-finance-e2e.spec.ts >> CT018 - pagamento parcial, final e tentativa acima do saldo
- Location: tests/04-procurement-finance-e2e.spec.ts:104:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /Registrar/i }).first()
    - locator resolved to <button class="btn-primary flex items-center gap-2">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    29 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="modal-overlay fixed inset-0 flex items-center justify-center z-50">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

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
      - generic [ref=e31]:
        - button "◧ Financeiro ▶" [ref=e32] [cursor=pointer]:
          - generic [ref=e33]: ◧
          - generic [ref=e34]: Financeiro
          - generic [ref=e35]: ▶
        - button "Contas a Pagar" [ref=e36] [cursor=pointer]:
          - generic [ref=e37]: Contas a Pagar
        - button "Pagamentos" [ref=e38] [cursor=pointer]:
          - generic [ref=e39]: Pagamentos
      - button "◫ Workflow ▶" [ref=e41] [cursor=pointer]:
        - generic [ref=e42]: ◫
        - generic [ref=e43]: Workflow
        - generic [ref=e44]: ▶
    - generic [ref=e45]:
      - generic [ref=e47]: H
      - generic [ref=e48]:
        - paragraph [ref=e49]: Hello
        - paragraph [ref=e50]: ADMINISTRADOR
      - button "⏻" [ref=e51] [cursor=pointer]
  - main [ref=e52]:
    - generic [ref=e53]:
      - button "⚠ 13 aprovações pendentes" [ref=e54] [cursor=pointer]
      - generic [ref=e55]: ADMINISTRADOR
    - generic [ref=e57]:
      - generic [ref=e58]:
        - generic [ref=e59]:
          - heading "Pagamentos" [level=1] [ref=e60]
          - paragraph [ref=e61]: Registro de baixas financeiras
        - button "+ Registrar Pagamento" [ref=e62] [cursor=pointer]:
          - generic [ref=e63]: +
          - text: Registrar Pagamento
      - generic [ref=e64]:
        - combobox [ref=e65]:
          - option "Todas as obras" [selected]
          - option "AUTO-4S-20260708165317 Obra"
          - option "AUTO-4S-20260708145148 Obra"
          - option "AUTO-4S-20260707162105 Obra"
          - option "AUTO-4S-20260707153000 Obra"
          - option "AUTO-4S-20260707143527 Obra"
          - option "AUTO-4S-20260707150237 Obra"
          - option "AUTO-4S-20260706165333 Obra"
          - option "AUTO-4S-20260706161854 Obra"
          - option "AUTO-4S-20260706154931 Obra"
          - option "AUTO-4S-20260706132953 Obra"
          - option "AUTO-4S-20260706123151 Obra"
          - option "AUTO-4S-20260706122306 Obra"
          - option "AUTO-4S-20260706114042 Obra"
          - option "VIA MOBILIDADE - TROCA DE PISOS"
          - option "4S-OBR-053-CAP-VMO"
        - combobox [ref=e66]:
          - option "Todas as formas" [selected]
          - option "PIX"
          - option "TED"
          - option "BOLETO"
          - option "DINHEIRO"
          - option "OUTRO"
      - generic [ref=e67]:
        - generic [ref=e68]:
          - generic [ref=e69]: Total pago (filtro)
          - text: R$ 0,00
        - generic [ref=e70]:
          - generic [ref=e71]: Registros
          - text: "0"
      - table [ref=e73]:
        - rowgroup [ref=e74]:
          - row "Conta / Título Data Forma Valor Pago Doc / Banco" [ref=e75]:
            - columnheader "Conta / Título" [ref=e76]
            - columnheader "Data" [ref=e77]
            - columnheader "Forma" [ref=e78]
            - columnheader "Valor Pago" [ref=e79]
            - columnheader "Doc / Banco" [ref=e80]
            - columnheader [ref=e81]
        - rowgroup [ref=e82]:
          - row "Nenhum pagamento registrado." [ref=e83]:
            - cell "Nenhum pagamento registrado." [ref=e84]
      - generic [ref=e86]:
        - generic [ref=e87]:
          - heading "Registrar Pagamento" [level=2] [ref=e88]
          - button "×" [ref=e89] [cursor=pointer]
        - generic [ref=e90]: Selecione a conta a pagar.
        - generic [ref=e91]:
          - generic [ref=e92]:
            - generic [ref=e93]: Conta a Pagar *
            - combobox [ref=e94]:
              - option "Selecione..." [selected]
              - 'option "4S-975878-2026 — AUTO-4S-20260708145148 Fornecedor A — Saldo: R$ 1.175,00"'
          - generic [ref=e95]:
            - generic [ref=e96]:
              - generic [ref=e97]: Data Pagamento *
              - textbox [ref=e98]
            - generic [ref=e99]:
              - generic [ref=e100]: Valor Pago *
              - spinbutton [ref=e101]: "500"
          - generic [ref=e102]:
            - generic [ref=e103]:
              - generic [ref=e104]: Forma Pagamento
              - combobox [ref=e105]:
                - option "PIX" [selected]
                - option "TED"
                - option "BOLETO"
                - option "DINHEIRO"
                - option "OUTRO"
            - generic [ref=e106]:
              - generic [ref=e107]: Banco
              - 'textbox "Ex: Bradesco" [ref=e108]'
          - generic [ref=e109]:
            - generic [ref=e110]: Nº Documento / Comprovante
            - textbox "TED-001, Chave PIX..." [ref=e111]
          - generic [ref=e112]:
            - generic [ref=e113]: Observações
            - textbox [ref=e114]
        - generic [ref=e115]:
          - button "Cancelar" [ref=e116] [cursor=pointer]
          - button "Salvar" [active] [ref=e117] [cursor=pointer]
```

# Test source

```ts
  1   | import { expect, type Locator, type Page } from '@playwright/test';
  2   | 
  3   | type SearchRoot = Page | Locator;
  4   | 
  5   | export type FieldSpec = {
  6   |   labels: string[];
  7   |   value: string | number;
  8   |   type?: 'select' | 'text';
  9   |   optional?: boolean;
  10  |   fallbackToFirstOption?: boolean;
  11  | };
  12  | 
  13  | export function byText(page: Page, text: string | RegExp) {
  14  |   const pattern = typeof text === 'string' ? new RegExp(escapeRegex(text), 'i') : text;
  15  |   return page.getByText(pattern).first();
  16  | }
  17  | 
  18  | export function escapeRegex(text: string) {
  19  |   return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  20  | }
  21  | 
  22  | function normalizeText(text: string) {
  23  |   return String(text).replace(/\s+/g, ' ').trim();
  24  | }
  25  | 
  26  | function optionMatches(option: { value: string; text: string }, expected: string) {
  27  |   const expectedText = normalizeText(expected).toLowerCase();
  28  |   const optionText = normalizeText(option.text).toLowerCase();
  29  |   const optionValue = normalizeText(option.value).toLowerCase();
  30  |   return optionText === expectedText
  31  |     || optionValue === expectedText
  32  |     || (expectedText.length > 2 && (optionText.includes(expectedText) || optionValue.includes(expectedText)));
  33  | }
  34  | 
  35  | function xpathLiteral(text: string) {
  36  |   const value = String(text);
  37  |   if (!value.includes("'")) return `'${value}'`;
  38  |   if (!value.includes('"')) return `"${value}"`;
  39  |   return `concat('${value.replace(/'/g, "',\"'\",'")}')`;
  40  | }
  41  | 
  42  | export function xpathStartsWithText(text: string) {
  43  |   const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÀÂÃÉÊÍÓÔÕÚÇ';
  44  |   const lower = 'abcdefghijklmnopqrstuvwxyzáàâãéêíóôõúç';
  45  |   return `starts-with(translate(normalize-space(.), ${xpathLiteral(upper)}, ${xpathLiteral(lower)}), ${xpathLiteral(String(text).toLowerCase())})`;
  46  | }
  47  | 
  48  | export async function firstVisible(locators: Locator[]) {
  49  |   for (const locator of locators) {
  50  |     const count = await locator.count();
  51  |     for (let index = 0; index < count; index += 1) {
  52  |       const candidate = locator.nth(index);
  53  |       if (await candidate.isVisible().catch(() => false)) return candidate;
  54  |     }
  55  |   }
  56  |   return null;
  57  | }
  58  | 
  59  | async function waitForVisible(locator: Locator, timeout = 2_000) {
  60  |   return locator.waitFor({ state: 'visible', timeout }).then(() => true).catch(() => false);
  61  | }
  62  | 
  63  | async function isUsableModalContainer(locator: Locator) {
  64  |   if (!await locator.isVisible().catch(() => false)) return false;
  65  |   return await locator.locator('input, textarea, select, button, [role="button"]').count().then((count) => count > 0);
  66  | }
  67  | 
  68  | export async function visibleModal(page: Page) {
  69  |   const candidates = page.locator([
  70  |     '[role="dialog"]',
  71  |     '.modal-overlay > .modal-panel',
  72  |     '.modal-panel',
  73  |     '.modal-overlay',
  74  |     '.modal',
  75  |     '[data-testid*="modal"]'
  76  |   ].join(', '));
  77  |   const count = await candidates.count();
  78  |   for (let index = count - 1; index >= 0; index -= 1) {
  79  |     const candidate = candidates.nth(index);
  80  |     if (await isUsableModalContainer(candidate)) return candidate;
  81  |   }
  82  |   return null;
  83  | }
  84  | 
  85  | export async function clickAny(page: Page, names: string[], options: Parameters<Locator['click']>[0] = {}) {
  86  |   const locators: Locator[] = [];
  87  |   for (const name of names) {
  88  |     const pattern = new RegExp(escapeRegex(name), 'i');
  89  |     locators.push(page.getByRole('button', { name: pattern }));
  90  |     locators.push(page.getByRole('link', { name: pattern }));
  91  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
  92  |     locators.push(page.getByText(pattern));
  93  |   }
  94  |   if (names.some((name) => /novo|nova|adicionar|cadastrar|criar/i.test(name))) {
  95  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: /^\s*\+/ }));
  96  |   }
  97  |   const target = await firstVisible(locators);
  98  |   if (!target) throw new Error(`Could not find clickable control: ${names.join(' | ')}`);
> 99  |   await target.click(options);
      |                ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  100 | }
  101 | 
  102 | export async function clickExactControl(page: Page, names: string[], options: Parameters<Locator['click']>[0] = {}) {
  103 |   const locators: Locator[] = [];
  104 |   for (const name of names) {
  105 |     const pattern = new RegExp(`^\\s*${escapeRegex(name)}\\s*$`, 'i');
  106 |     locators.push(page.getByRole('button', { name: pattern }));
  107 |     locators.push(page.getByRole('link', { name: pattern }));
  108 |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
  109 |   }
  110 |   const target = await firstVisible(locators);
  111 |   if (!target) throw new Error(`Could not find exact clickable control: ${names.join(' | ')}`);
  112 |   await target.click(options);
  113 |   await page.waitForLoadState('networkidle').catch(() => {});
  114 | }
  115 | 
  116 | export async function gotoMenu(page: Page, path: string[]) {
  117 |   for (let index = 0; index < path.length; index += 1) {
  118 |     const segment = path[index];
  119 |     const nextSegment = path[index + 1];
  120 |     if (segment === 'Dashboard' && await page.getByRole('heading', { name: /dashboard/i }).count()) {
  121 |       continue;
  122 |     }
  123 |     if (/^(orçamento|orcamento)$/i.test(segment)
  124 |       && /itens orçados|itens orcados/i.test(nextSegment || '')
  125 |       && await page.getByRole('heading', { name: /orçamento base|orcamento base/i }).count()) {
  126 |       continue;
  127 |     }
  128 |     if (nextSegment) {
  129 |       const childVisible = await page.locator('button, a, [role="button"]')
  130 |         .filter({ hasText: new RegExp(escapeRegex(nextSegment), 'i') })
  131 |         .first()
  132 |         .isVisible()
  133 |         .catch(() => false);
  134 |       if (childVisible) continue;
  135 |     }
  136 |     await clickAny(page, [segment]);
  137 |     await page.waitForLoadState('networkidle').catch(() => {});
  138 |   }
  139 | }
  140 | 
  141 | export async function fillField(page: Page, labels: string[], value: string | number) {
  142 |   const candidates: Locator[] = [];
  143 |   for (const label of labels) {
  144 |     const patterns = [new RegExp(label, 'i')];
  145 |     if (/^email$/i.test(label)) patterns.push(/e-?mail/i);
  146 |     for (const pattern of patterns) {
  147 |       candidates.push(page.getByLabel(pattern));
  148 |       candidates.push(page.getByPlaceholder(pattern));
  149 |     }
  150 |     candidates.push(page.locator(`input[name*="${label}" i]`));
  151 |     candidates.push(page.locator(`textarea[name*="${label}" i]`));
  152 |     const labelText = xpathStartsWithText(label);
  153 |     candidates.push(page.locator(`xpath=//*[${labelText} and (./input or ./textarea)]//*[self::input or self::textarea]`));
  154 |     candidates.push(page.locator(`xpath=//*[${labelText}]/ancestor::*[.//input or .//textarea][1]//*[self::input or self::textarea][not(@type="hidden")]`));
  155 |   }
  156 |   const target = await firstVisible(candidates);
  157 |   if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
  158 |   await target.fill(String(value));
  159 | }
  160 | 
  161 | export async function chooseOption(page: Page, labels: string[], value: string) {
  162 |   const candidates = labels.flatMap((label) => {
  163 |     const labelText = xpathStartsWithText(label);
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
```