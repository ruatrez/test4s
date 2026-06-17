# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-financial-flow.spec.js >> CT012-CT019 - integrated procurement, payment, dashboard and audit flow
- Location: tests/02-financial-flow.spec.js:107:1

# Error details

```
Error: Could not find clickable control: Enviar para aprovação | Enviar | Solicitar aprovação
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
      - generic [ref=e59]: Requisicao salva, mas bloqueada por saldo orcamentario.
      - generic [ref=e60]:
        - generic [ref=e61]:
          - heading "Requisicoes" [level=1] [ref=e62]
          - paragraph [ref=e63]: 11 requisicoes
        - button "+ Nova Requisicao" [ref=e64] [cursor=pointer]
      - generic [ref=e65]:
        - textbox "Buscar..." [ref=e66]
        - combobox [ref=e67]:
          - option "Todas as obras" [selected]
          - option "PW CT009 20260617184225 Obra"
          - option "PW CT012 20260617184225 Obra"
          - option "PW CT012 20260617184145 Obra"
          - option "PW CT009 20260617183934 Obra"
          - option "PW CT012 20260617183903 Obra"
          - option "PW CT009 20260617183009 Obra"
          - option "PW CT012 20260617182923 Obra"
          - option "R3"
          - option "VIA MOBILIDADE - TROCA DE PISOS"
          - option "4S-OBR-053-CAP-VMO"
      - table [ref=e68]:
        - rowgroup [ref=e69]:
          - row "Numero Obra Centro Custo Itens Valor Est. Status Acoes" [ref=e70]:
            - columnheader "Numero" [ref=e71]
            - columnheader "Obra" [ref=e72]
            - columnheader "Centro Custo" [ref=e73]
            - columnheader "Itens" [ref=e74]
            - columnheader "Valor Est." [ref=e75]
            - columnheader "Status" [ref=e76]
            - columnheader "Acoes" [ref=e77]
        - rowgroup [ref=e78]:
          - row "4S-165544-2026 PW CT009 20260617184225 Obra PW CT009 20260617184225 Centro 0 item(ns) R$ 12.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e79]:
            - cell "4S-165544-2026" [ref=e80]
            - cell "PW CT009 20260617184225 Obra" [ref=e81]
            - cell "PW CT009 20260617184225 Centro" [ref=e82]
            - cell "0 item(ns)" [ref=e83]: 0 item(ns)
            - cell "R$ 12.000,00" [ref=e84]
            - cell "RASCUNHOBLOQUEADA" [ref=e85]
            - cell "Editar Excluir" [ref=e86]:
              - button "Editar" [ref=e87] [cursor=pointer]
              - button "Excluir" [ref=e88] [cursor=pointer]
          - row "4S-435113-2026 PW CT009 20260617184225 Obra PW CT009 20260617184225 Centro 0 item(ns) R$ 12.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e89]:
            - cell "4S-435113-2026" [ref=e90]
            - cell "PW CT009 20260617184225 Obra" [ref=e91]
            - cell "PW CT009 20260617184225 Centro" [ref=e92]
            - cell "0 item(ns)" [ref=e93]: 0 item(ns)
            - cell "R$ 12.000,00" [ref=e94]
            - cell "RASCUNHOBLOQUEADA" [ref=e95]
            - cell "Editar Excluir" [ref=e96]:
              - button "Editar" [ref=e97] [cursor=pointer]
              - button "Excluir" [ref=e98] [cursor=pointer]
          - row "4S-393562-2026 R3 1 1 item(ns) 1 R$ 3.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e99]:
            - cell "4S-393562-2026" [ref=e100]
            - cell "R3" [ref=e101]
            - cell "1" [ref=e102]
            - cell "1 item(ns) 1" [ref=e103]:
              - text: 1 item(ns)
              - generic [ref=e104]: "1"
            - cell "R$ 3.000,00" [ref=e105]
            - cell "RASCUNHOBLOQUEADA" [ref=e106]
            - cell "Editar Excluir" [ref=e107]:
              - button "Editar" [ref=e108] [cursor=pointer]
              - button "Excluir" [ref=e109] [cursor=pointer]
          - row "4S-711572-2026 PW CT012 20260617184225 Obra PW CT012 20260617184225 Centro 1 item(ns) PW CT012 20260617184225 Item R$ 200,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e110]:
            - cell "4S-711572-2026" [ref=e111]
            - cell "PW CT012 20260617184225 Obra" [ref=e112]
            - cell "PW CT012 20260617184225 Centro" [ref=e113]
            - cell "1 item(ns) PW CT012 20260617184225 Item" [ref=e114]:
              - text: 1 item(ns)
              - generic [ref=e115]: PW CT012 20260617184225 Item
            - cell "R$ 200,00" [ref=e116]
            - cell "RASCUNHOBLOQUEADA" [ref=e117]
            - cell "Editar Excluir" [ref=e118]:
              - button "Editar" [ref=e119] [cursor=pointer]
              - button "Excluir" [ref=e120] [cursor=pointer]
          - row "4S-645894-2026 PW CT012 20260617184145 Obra PW CT012 20260617184145 Centro 1 item(ns) PW CT012 20260617184145 Item R$ 200,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e121]:
            - cell "4S-645894-2026" [ref=e122]
            - cell "PW CT012 20260617184145 Obra" [ref=e123]
            - cell "PW CT012 20260617184145 Centro" [ref=e124]
            - cell "1 item(ns) PW CT012 20260617184145 Item" [ref=e125]:
              - text: 1 item(ns)
              - generic [ref=e126]: PW CT012 20260617184145 Item
            - cell "R$ 200,00" [ref=e127]
            - cell "RASCUNHOBLOQUEADA" [ref=e128]
            - cell "Editar Excluir" [ref=e129]:
              - button "Editar" [ref=e130] [cursor=pointer]
              - button "Excluir" [ref=e131] [cursor=pointer]
          - row "4S-469309-2026 PW CT012 20260617183903 Obra PW CT012 20260617183903 Centro 1 item(ns) PW CT012 20260617183903 Item R$ 200,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e132]:
            - cell "4S-469309-2026" [ref=e133]
            - cell "PW CT012 20260617183903 Obra" [ref=e134]
            - cell "PW CT012 20260617183903 Centro" [ref=e135]
            - cell "1 item(ns) PW CT012 20260617183903 Item" [ref=e136]:
              - text: 1 item(ns)
              - generic [ref=e137]: PW CT012 20260617183903 Item
            - cell "R$ 200,00" [ref=e138]
            - cell "RASCUNHOBLOQUEADA" [ref=e139]
            - cell "Editar Excluir" [ref=e140]:
              - button "Editar" [ref=e141] [cursor=pointer]
              - button "Excluir" [ref=e142] [cursor=pointer]
          - row "4S-930525-2026 - - 1 item(ns) HML 1781630370967 Item Orcado R$ 2.000,00 REJEITADA Editar Excluir" [ref=e143]:
            - cell "4S-930525-2026" [ref=e144]
            - cell "-" [ref=e145]
            - cell "-" [ref=e146]
            - cell "1 item(ns) HML 1781630370967 Item Orcado" [ref=e147]:
              - text: 1 item(ns)
              - generic [ref=e148]: HML 1781630370967 Item Orcado
            - cell "R$ 2.000,00" [ref=e149]
            - cell "REJEITADA" [ref=e150]
            - cell "Editar Excluir" [ref=e151]:
              - button "Editar" [ref=e152] [cursor=pointer]
              - button "Excluir" [ref=e153] [cursor=pointer]
          - row "4S-260167-2026 - - 1 item(ns) HML 1781630633295 Item Orcado R$ 2.000,00 REJEITADA Editar Excluir" [ref=e154]:
            - cell "4S-260167-2026" [ref=e155]
            - cell "-" [ref=e156]
            - cell "-" [ref=e157]
            - cell "1 item(ns) HML 1781630633295 Item Orcado" [ref=e158]:
              - text: 1 item(ns)
              - generic [ref=e159]: HML 1781630633295 Item Orcado
            - cell "R$ 2.000,00" [ref=e160]
            - cell "REJEITADA" [ref=e161]
            - cell "Editar Excluir" [ref=e162]:
              - button "Editar" [ref=e163] [cursor=pointer]
              - button "Excluir" [ref=e164] [cursor=pointer]
          - row "4S-911856-2026 - - 1 item(ns) HML 1781630595874 Item Orcado R$ 2.000,00 REJEITADA Editar Excluir" [ref=e165]:
            - cell "4S-911856-2026" [ref=e166]
            - cell "-" [ref=e167]
            - cell "-" [ref=e168]
            - cell "1 item(ns) HML 1781630595874 Item Orcado" [ref=e169]:
              - text: 1 item(ns)
              - generic [ref=e170]: HML 1781630595874 Item Orcado
            - cell "R$ 2.000,00" [ref=e171]
            - cell "REJEITADA" [ref=e172]
            - cell "Editar Excluir" [ref=e173]:
              - button "Editar" [ref=e174] [cursor=pointer]
              - button "Excluir" [ref=e175] [cursor=pointer]
          - row "4S-985811-2026 - - 1 item(ns) HML 1781630773579 Item Orcado R$ 2.000,00 APROVADA Editar Excluir" [ref=e176]:
            - cell "4S-985811-2026" [ref=e177]
            - cell "-" [ref=e178]
            - cell "-" [ref=e179]
            - cell "1 item(ns) HML 1781630773579 Item Orcado" [ref=e180]:
              - text: 1 item(ns)
              - generic [ref=e181]: HML 1781630773579 Item Orcado
            - cell "R$ 2.000,00" [ref=e182]
            - cell "APROVADA" [ref=e183]
            - cell "Editar Excluir" [ref=e184]:
              - button "Editar" [ref=e185] [cursor=pointer]
              - button "Excluir" [ref=e186] [cursor=pointer]
          - row "4S-432322-2026 PW CT009 20260617184225 Obra PW CT009 20260617184225 Centro 1 item(ns) PW CT009 20260617184225 Item R$ 12.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e187]:
            - cell "4S-432322-2026" [ref=e188]
            - cell "PW CT009 20260617184225 Obra" [ref=e189]
            - cell "PW CT009 20260617184225 Centro" [ref=e190]
            - cell "1 item(ns) PW CT009 20260617184225 Item" [ref=e191]:
              - text: 1 item(ns)
              - generic [ref=e192]: PW CT009 20260617184225 Item
            - cell "R$ 12.000,00" [ref=e193]
            - cell "RASCUNHOBLOQUEADA" [ref=e194]
            - cell "Editar Excluir" [ref=e195]:
              - button "Editar" [ref=e196] [cursor=pointer]
              - button "Excluir" [ref=e197] [cursor=pointer]
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
      |                      ^ Error: Could not find clickable control: Enviar para aprovação | Enviar | Solicitar aprovação
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
  121 |   const primarySubmit = await firstVisible([
  122 |     page.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
  123 |     page.locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i })
  124 |   ]);
  125 |   if (primarySubmit) {
  126 |     await primarySubmit.click();
  127 |   } else {
  128 |     await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  129 |   }
  130 |   await page.waitForLoadState('networkidle').catch(() => {});
  131 |   await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
  132 | }
  133 | 
  134 | async function expectPageReady(page, expectedTexts = []) {
  135 |   await expect(page.locator('body')).toBeVisible();
  136 |   await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not/i);
  137 |   for (const text of expectedTexts) {
  138 |     await expect(byText(page, text)).toBeVisible();
  139 |   }
  140 | }
  141 | 
```