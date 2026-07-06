# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03-budget-labor.spec.ts >> CT010 - exclusao de item orcado por usuario comum e administrador
- Location: tests/03-budget-labor.spec.ts:58:5

# Error details

```
Error: Could not find clickable control: Orçamento
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - img "APP 4S" [ref=e7]
    - generic [ref=e8]: Inovando o Amanha com Ciencia, Tecnologia e Engenharia
  - generic [ref=e9]:
    - heading "Entrar" [level=1] [ref=e10]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13]: E-mail
        - textbox "seu@email.com" [ref=e14]: auto-4s-20260706114042@example.test
      - generic [ref=e15]:
        - generic [ref=e16]: Senha
        - textbox "********" [ref=e17]: Admin123
      - generic [ref=e18]: E-mail ou senha incorretos. Verifique os dados e tente novamente.
      - button "Entrar" [ref=e19] [cursor=pointer]
    - paragraph [ref=e21]: Acesso restrito. Solicite suas credenciais ao administrador do sistema.
```

# Test source

```ts
  1   | import { expect, type Locator, type Page } from '@playwright/test';
  2   | 
  3   | export type FieldSpec = {
  4   |   labels: string[];
  5   |   value: string | number;
  6   |   type?: 'select' | 'text';
  7   |   optional?: boolean;
  8   |   fallbackToFirstOption?: boolean;
  9   | };
  10  | 
  11  | export function byText(page: Page, text: string | RegExp) {
  12  |   const pattern = typeof text === 'string' ? new RegExp(escapeRegex(text), 'i') : text;
  13  |   return page.getByText(pattern).first();
  14  | }
  15  | 
  16  | export function escapeRegex(text: string) {
  17  |   return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  18  | }
  19  | 
  20  | function xpathLiteral(text: string) {
  21  |   const value = String(text);
  22  |   if (!value.includes("'")) return `'${value}'`;
  23  |   if (!value.includes('"')) return `"${value}"`;
  24  |   return `concat('${value.replace(/'/g, "',\"'\",'")}')`;
  25  | }
  26  | 
  27  | function xpathStartsWithText(text: string) {
  28  |   const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÀÂÃÉÊÍÓÔÕÚÇ';
  29  |   const lower = 'abcdefghijklmnopqrstuvwxyzáàâãéêíóôõúç';
  30  |   return `starts-with(translate(normalize-space(.), ${xpathLiteral(upper)}, ${xpathLiteral(lower)}), ${xpathLiteral(String(text).toLowerCase())})`;
  31  | }
  32  | 
  33  | export async function firstVisible(locators: Locator[]) {
  34  |   for (const locator of locators) {
  35  |     if (await locator.count()) {
  36  |       const first = locator.first();
  37  |       if (await first.isVisible().catch(() => false)) return first;
  38  |     }
  39  |   }
  40  |   return null;
  41  | }
  42  | 
  43  | export async function clickAny(page: Page, names: string[], options: Parameters<Locator['click']>[0] = {}) {
  44  |   const locators: Locator[] = [];
  45  |   for (const name of names) {
  46  |     const pattern = new RegExp(escapeRegex(name), 'i');
  47  |     locators.push(page.getByRole('button', { name: pattern }));
  48  |     locators.push(page.getByRole('link', { name: pattern }));
  49  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
  50  |     locators.push(page.getByText(pattern));
  51  |   }
  52  |   if (names.some((name) => /novo|nova|adicionar|cadastrar|criar/i.test(name))) {
  53  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: /^\s*\+/ }));
  54  |   }
  55  |   const target = await firstVisible(locators);
> 56  |   if (!target) throw new Error(`Could not find clickable control: ${names.join(' | ')}`);
      |                      ^ Error: Could not find clickable control: Orçamento
  57  |   await target.click(options);
  58  | }
  59  | 
  60  | export async function clickExactControl(page: Page, names: string[], options: Parameters<Locator['click']>[0] = {}) {
  61  |   const locators: Locator[] = [];
  62  |   for (const name of names) {
  63  |     const pattern = new RegExp(`^\\s*${escapeRegex(name)}\\s*$`, 'i');
  64  |     locators.push(page.getByRole('button', { name: pattern }));
  65  |     locators.push(page.getByRole('link', { name: pattern }));
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
```