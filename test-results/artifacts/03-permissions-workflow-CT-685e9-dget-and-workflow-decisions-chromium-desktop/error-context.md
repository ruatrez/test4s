# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03-permissions-workflow.spec.js >> CT002, CT009, CT010, CT020 - permissions, protected budget and workflow decisions
- Location: tests/03-permissions-workflow.spec.js:12:1

# Error details

```
Error: Could not find clickable control: Editar | Alterar
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - complementary [ref=e4]:
    - generic [ref=e5]:
      - img "4S Engenharia" [ref=e7] [cursor=pointer]
      - generic [ref=e8]: Núcleo Financeiro
    - navigation [ref=e9]:
      - button "⊙ Configurações ▶" [ref=e11] [cursor=pointer]:
        - generic [ref=e12]: ⊙
        - generic [ref=e13]: Configurações
        - generic [ref=e14]: ▶
      - generic [ref=e15]:
        - button "◑ Orçamento ▶" [ref=e16] [cursor=pointer]:
          - generic [ref=e17]: ◑
          - generic [ref=e18]: Orçamento
          - generic [ref=e19]: ▶
        - button "Itens Orçados" [active] [ref=e20] [cursor=pointer]:
          - generic [ref=e21]: Itens Orçados
      - button "◐ Suprimentos ▶" [ref=e23] [cursor=pointer]:
        - generic [ref=e24]: ◐
        - generic [ref=e25]: Suprimentos
        - generic [ref=e26]: ▶
    - generic [ref=e27]:
      - generic [ref=e29]: A
      - generic [ref=e30]:
        - paragraph [ref=e31]: AUTO-4S-20260617153921 Usuario Engenharia
        - paragraph [ref=e32]: ENGENHARIA
      - button "⏻" [ref=e33] [cursor=pointer]
  - main [ref=e34]:
    - generic [ref=e36]: ENGENHARIA
    - generic [ref=e38]:
      - generic [ref=e39]:
        - generic [ref=e40]:
          - heading "Orçamento Base" [level=1] [ref=e41]
          - paragraph [ref=e42]: Itens orçados por obra e categoria
        - button "+ Item Orçado" [ref=e43] [cursor=pointer]
      - generic [ref=e44]:
        - combobox [ref=e45]:
          - option "Todas as obras" [selected]
          - option "HML 1781630773579 Obra"
          - option "HML 1781630633295 Obra"
          - option "HML 1781630595874 Obra"
          - option "HML 1781630556505 Obra"
          - option "HML 1781630434235 Obra"
          - option "HML 1781630370967 Obra"
          - option "HML 1781630328305 Obra"
          - option "HML 1781630075298 Obra"
          - option "HML 1781630029631 Obra"
          - option "HML 1781629990378 Obra"
          - option "VIA MOBILIDADE - TROCA DE PISOS"
          - option "4S-OBR-053-CAP-VMO"
        - combobox [ref=e46]:
          - option "Todas as categorias" [selected]
          - option "HML 1781630773579 Materiais"
          - option "HML 1781630633295 Materiais"
          - option "HML 1781630595874 Materiais"
          - option "HML 1781630556505 Materiais"
          - option "HML 1781630434235 Materiais"
          - option "HML 1781630370967 Materiais"
          - option "HML 1781630328305 Materiais"
          - option "HML 1781630075298 Materiais"
          - option "HML 1781630029631 Materiais"
          - option "Teste"
        - textbox "Buscar item..." [ref=e47]
      - generic [ref=e48]:
        - generic [ref=e49]:
          - paragraph [ref=e50]: Orçado
          - paragraph [ref=e51]: R$ 60.000,00
        - generic [ref=e52]:
          - paragraph [ref=e53]: Comprometido
          - paragraph [ref=e54]: R$ 0,00
        - generic [ref=e55]:
          - paragraph [ref=e56]: Pago
          - paragraph [ref=e57]: R$ 0,00
        - generic [ref=e58]:
          - paragraph [ref=e59]: Saldo
          - paragraph [ref=e60]: R$ 60.000,00
      - table [ref=e62]:
        - rowgroup [ref=e63]:
          - row "Código Item Obra Categoria Qtd V.Unit Total Comprometido Pago Saldo" [ref=e64]:
            - columnheader "Código" [ref=e65]
            - columnheader "Item" [ref=e66]
            - columnheader "Obra" [ref=e67]
            - columnheader "Categoria" [ref=e68]
            - columnheader "Qtd" [ref=e69]
            - columnheader "V.Unit" [ref=e70]
            - columnheader "Total" [ref=e71]
            - columnheader "Comprometido" [ref=e72]
            - columnheader "Pago" [ref=e73]
            - columnheader "Saldo" [ref=e74]
            - columnheader [ref=e75]
        - rowgroup [ref=e76]:
          - row "4S-221056-2026 HML 1781630773579 Item Orcado HML 1781630773579 Obra HML 1781630773579 Materiais 10 un R$ 1.000,00 R$ 10.000,00 R$ 0,00 R$ 0,00 R$ 10.000,00 Solicitar alteração Solicitar exclusão" [ref=e77]:
            - cell "4S-221056-2026" [ref=e78]
            - cell "HML 1781630773579 Item Orcado" [ref=e79]:
              - generic [ref=e80]: HML 1781630773579 Item Orcado
            - cell "HML 1781630773579 Obra" [ref=e81]
            - cell "HML 1781630773579 Materiais" [ref=e82]
            - cell "10 un" [ref=e83]
            - cell "R$ 1.000,00" [ref=e84]
            - cell "R$ 10.000,00" [ref=e85]
            - cell "R$ 0,00" [ref=e86]
            - cell "R$ 0,00" [ref=e87]
            - cell "R$ 10.000,00" [ref=e88]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e89]:
              - generic [ref=e90]:
                - button "Solicitar alteração" [ref=e91] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e92] [cursor=pointer]
          - row "4S-943111-2026 HML 1781630633295 Item Orcado HML 1781630633295 Obra HML 1781630633295 Materiais 10 un R$ 1.000,00 R$ 10.000,00 R$ 0,00 R$ 0,00 R$ 10.000,00 Solicitar alteração Solicitar exclusão" [ref=e93]:
            - cell "4S-943111-2026" [ref=e94]
            - cell "HML 1781630633295 Item Orcado" [ref=e95]:
              - generic [ref=e96]: HML 1781630633295 Item Orcado
            - cell "HML 1781630633295 Obra" [ref=e97]
            - cell "HML 1781630633295 Materiais" [ref=e98]
            - cell "10 un" [ref=e99]
            - cell "R$ 1.000,00" [ref=e100]
            - cell "R$ 10.000,00" [ref=e101]
            - cell "R$ 0,00" [ref=e102]
            - cell "R$ 0,00" [ref=e103]
            - cell "R$ 10.000,00" [ref=e104]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e105]:
              - generic [ref=e106]:
                - button "Solicitar alteração" [ref=e107] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e108] [cursor=pointer]
          - row "4S-935292-2026 HML 1781630595874 Item Orcado HML 1781630595874 Obra HML 1781630595874 Materiais 10 un R$ 1.000,00 R$ 10.000,00 R$ 0,00 R$ 0,00 R$ 10.000,00 Solicitar alteração Solicitar exclusão" [ref=e109]:
            - cell "4S-935292-2026" [ref=e110]
            - cell "HML 1781630595874 Item Orcado" [ref=e111]:
              - generic [ref=e112]: HML 1781630595874 Item Orcado
            - cell "HML 1781630595874 Obra" [ref=e113]
            - cell "HML 1781630595874 Materiais" [ref=e114]
            - cell "10 un" [ref=e115]
            - cell "R$ 1.000,00" [ref=e116]
            - cell "R$ 10.000,00" [ref=e117]
            - cell "R$ 0,00" [ref=e118]
            - cell "R$ 0,00" [ref=e119]
            - cell "R$ 10.000,00" [ref=e120]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e121]:
              - generic [ref=e122]:
                - button "Solicitar alteração" [ref=e123] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e124] [cursor=pointer]
          - row "4S-241715-2026 HML 1781630556505 Item Orcado HML 1781630556505 Obra HML 1781630556505 Materiais 10 un R$ 1.000,00 R$ 10.000,00 R$ 0,00 R$ 0,00 R$ 10.000,00 Solicitar alteração Solicitar exclusão" [ref=e125]:
            - cell "4S-241715-2026" [ref=e126]
            - cell "HML 1781630556505 Item Orcado" [ref=e127]:
              - generic [ref=e128]: HML 1781630556505 Item Orcado
            - cell "HML 1781630556505 Obra" [ref=e129]
            - cell "HML 1781630556505 Materiais" [ref=e130]
            - cell "10 un" [ref=e131]
            - cell "R$ 1.000,00" [ref=e132]
            - cell "R$ 10.000,00" [ref=e133]
            - cell "R$ 0,00" [ref=e134]
            - cell "R$ 0,00" [ref=e135]
            - cell "R$ 10.000,00" [ref=e136]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e137]:
              - generic [ref=e138]:
                - button "Solicitar alteração" [ref=e139] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e140] [cursor=pointer]
          - row "4S-666481-2026 HML 1781630434235 Item Orcado HML 1781630434235 Obra HML 1781630434235 Materiais 10 un R$ 1.000,00 R$ 10.000,00 R$ 0,00 R$ 0,00 R$ 10.000,00 Solicitar alteração Solicitar exclusão" [ref=e141]:
            - cell "4S-666481-2026" [ref=e142]
            - cell "HML 1781630434235 Item Orcado" [ref=e143]:
              - generic [ref=e144]: HML 1781630434235 Item Orcado
            - cell "HML 1781630434235 Obra" [ref=e145]
            - cell "HML 1781630434235 Materiais" [ref=e146]
            - cell "10 un" [ref=e147]
            - cell "R$ 1.000,00" [ref=e148]
            - cell "R$ 10.000,00" [ref=e149]
            - cell "R$ 0,00" [ref=e150]
            - cell "R$ 0,00" [ref=e151]
            - cell "R$ 10.000,00" [ref=e152]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e153]:
              - generic [ref=e154]:
                - button "Solicitar alteração" [ref=e155] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e156] [cursor=pointer]
          - row "4S-625593-2026 HML 1781630370967 Item Orcado HML 1781630328305 Obra HML 1781630328305 Materiais 10 un R$ 1.000,00 R$ 10.000,00 R$ 0,00 R$ 0,00 R$ 10.000,00 Solicitar alteração Solicitar exclusão" [ref=e157]:
            - cell "4S-625593-2026" [ref=e158]
            - cell "HML 1781630370967 Item Orcado" [ref=e159]:
              - generic [ref=e160]: HML 1781630370967 Item Orcado
            - cell "HML 1781630328305 Obra" [ref=e161]
            - cell "HML 1781630328305 Materiais" [ref=e162]
            - cell "10 un" [ref=e163]
            - cell "R$ 1.000,00" [ref=e164]
            - cell "R$ 10.000,00" [ref=e165]
            - cell "R$ 0,00" [ref=e166]
            - cell "R$ 0,00" [ref=e167]
            - cell "R$ 10.000,00" [ref=e168]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e169]:
              - generic [ref=e170]:
                - button "Solicitar alteração" [ref=e171] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e172] [cursor=pointer]
```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | function byText(page, text) {
  4   |   return page.getByText(new RegExp(escapeRegex(text), 'i')).first();
  5   | }
  6   | 
  7   | function escapeRegex(text) {
  8   |   return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  9   | }
  10  | 
  11  | function xpathLiteral(text) {
  12  |   const value = String(text);
  13  |   if (!value.includes("'")) return `'${value}'`;
  14  |   if (!value.includes('"')) return `"${value}"`;
  15  |   return `concat('${value.replace(/'/g, "',\"'\",'")}')`;
  16  | }
  17  | 
  18  | async function firstVisible(locators) {
  19  |   for (const locator of locators) {
  20  |     if (await locator.count()) {
  21  |       const first = locator.first();
  22  |       if (await first.isVisible().catch(() => false)) return first;
  23  |     }
  24  |   }
  25  |   return null;
  26  | }
  27  | 
  28  | async function clickAny(page, names, options = {}) {
  29  |   const locators = [];
  30  |   for (const name of names) {
  31  |     const pattern = new RegExp(name, 'i');
  32  |     locators.push(page.getByRole('button', { name: pattern }));
  33  |     locators.push(page.getByRole('link', { name: pattern }));
  34  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
  35  |     locators.push(page.getByText(pattern));
  36  |   }
  37  |   if (names.some((name) => /novo|nova|adicionar|cadastrar|criar/i.test(name))) {
  38  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: /^\s*\+/ }));
  39  |   }
  40  |   const target = await firstVisible(locators);
> 41  |   if (!target) throw new Error(`Could not find clickable control: ${names.join(' | ')}`);
      |                      ^ Error: Could not find clickable control: Editar | Alterar
  42  |   await target.click(options);
  43  | }
  44  | 
  45  | async function gotoMenu(page, path) {
  46  |   for (let index = 0; index < path.length; index += 1) {
  47  |     const segment = path[index];
  48  |     const nextSegment = path[index + 1];
  49  |     if (segment === 'Dashboard' && await page.getByRole('heading', { name: /dashboard/i }).count()) {
  50  |       continue;
  51  |     }
  52  |     if (nextSegment) {
  53  |       const childVisible = await page.locator('button, a, [role="button"]')
  54  |         .filter({ hasText: new RegExp(escapeRegex(nextSegment), 'i') })
  55  |         .first()
  56  |         .isVisible()
  57  |         .catch(() => false);
  58  |       if (childVisible) continue;
  59  |     }
  60  |     await clickAny(page, [segment]);
  61  |     await page.waitForLoadState('networkidle').catch(() => {});
  62  |   }
  63  | }
  64  | 
  65  | async function fillField(page, labels, value) {
  66  |   const candidates = [];
  67  |   for (const label of labels) {
  68  |     const patterns = [new RegExp(label, 'i')];
  69  |     if (/^email$/i.test(label)) patterns.push(/e-?mail/i);
  70  |     for (const pattern of patterns) {
  71  |       candidates.push(page.getByLabel(pattern));
  72  |       candidates.push(page.getByPlaceholder(pattern));
  73  |     }
  74  |     candidates.push(page.locator(`input[name*="${label}" i]`));
  75  |     candidates.push(page.locator(`textarea[name*="${label}" i]`));
  76  |     candidates.push(page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and (./input or ./textarea)]//*[self::input or self::textarea]`));
  77  |   }
  78  |   const target = await firstVisible(candidates);
  79  |   if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
  80  |   await target.fill(String(value));
  81  | }
  82  | 
  83  | async function chooseOption(page, labels, value) {
  84  |   const candidates = labels.flatMap((label) => [
  85  |     page.getByLabel(new RegExp(label, 'i')),
  86  |     page.locator(`select[name*="${label}" i]`),
  87  |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  88  |   ]);
  89  |   const target = await firstVisible(candidates);
  90  |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  91  | 
  92  |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  93  |   if (tagName === 'select') {
  94  |     const option = await target.locator('option').filter({ hasText: new RegExp(escapeRegex(value), 'i') }).first();
  95  |     if (await option.count()) {
  96  |       await target.selectOption({ label: await option.innerText() });
  97  |       return;
  98  |     }
  99  |   }
  100 | 
  101 |   await target.click();
  102 |   await clickAny(page, [value]);
  103 | }
  104 | 
  105 | async function chooseFirstAvailableOption(page, labels) {
  106 |   const candidates = labels.flatMap((label) => [
  107 |     page.getByLabel(new RegExp(label, 'i')),
  108 |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  109 |   ]);
  110 |   const target = await firstVisible(candidates);
  111 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  112 |   const optionValue = await target.locator('option').evaluateAll((options) => {
  113 |     const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
  114 |     return option ? option.value : '';
  115 |   });
  116 |   if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
  117 |   await target.selectOption(optionValue);
  118 | }
  119 | 
  120 | async function submitForm(page) {
  121 |   await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  122 |   await page.waitForLoadState('networkidle').catch(() => {});
  123 | }
  124 | 
  125 | async function expectPageReady(page, expectedTexts = []) {
  126 |   await expect(page.locator('body')).toBeVisible();
  127 |   await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not/i);
  128 |   for (const text of expectedTexts) {
  129 |     await expect(byText(page, text)).toBeVisible();
  130 |   }
  131 | }
  132 | 
  133 | async function tryCreateSimpleRecord(page, path, recordName, fields = []) {
  134 |   await gotoMenu(page, path);
  135 |   await clickAny(page, ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  136 |   for (const field of fields) {
  137 |     if (field.type === 'select') {
  138 |       await chooseOption(page, field.labels, field.value);
  139 |     } else {
  140 |       await fillField(page, field.labels, field.value);
  141 |     }
```