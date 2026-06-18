# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03-budget-permissions.spec.ts >> CT008 - budget item persists and exposes balance fields
- Location: tests/03-budget-permissions.spec.ts:47:5

# Error details

```
Error: Could not find field: obra
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
      - generic [ref=e21]:
        - button "◑ Orçamento ▶" [ref=e22] [cursor=pointer]:
          - generic [ref=e23]: ◑
          - generic [ref=e24]: Orçamento
          - generic [ref=e25]: ▶
        - button "Itens Orçados" [ref=e26] [cursor=pointer]:
          - generic [ref=e27]: Itens Orçados
      - button "◐ Suprimentos ▶" [ref=e29] [cursor=pointer]:
        - generic [ref=e30]: ◐
        - generic [ref=e31]: Suprimentos
        - generic [ref=e32]: ▶
      - button "◧ Financeiro ▶" [ref=e34] [cursor=pointer]:
        - generic [ref=e35]: ◧
        - generic [ref=e36]: Financeiro
        - generic [ref=e37]: ▶
      - button "◫ Workflow ▶" [ref=e39] [cursor=pointer]:
        - generic [ref=e40]: ◫
        - generic [ref=e41]: Workflow
        - generic [ref=e42]: ▶
    - generic [ref=e43]:
      - generic [ref=e45]: H
      - generic [ref=e46]:
        - paragraph [ref=e47]: Hello
        - paragraph [ref=e48]: ADMINISTRADOR
      - button "⏻" [ref=e49] [cursor=pointer]
  - main [ref=e50]:
    - generic [ref=e51]:
      - button "⚠ 2 aprovações pendentes" [ref=e52] [cursor=pointer]
      - generic [ref=e53]: ADMINISTRADOR
    - generic [ref=e55]:
      - generic [ref=e56]:
        - generic [ref=e57]:
          - heading "Orçamento Base" [level=1] [ref=e58]
          - paragraph [ref=e59]: Itens orçados por obra e categoria
        - button "+ Item Orçado" [ref=e60] [cursor=pointer]
      - generic [ref=e61]:
        - combobox [ref=e62]:
          - option "Todas as obras" [selected]
          - option "AUTO-4S-1781787507433 Obra"
          - option "AUTO-4S-1781787088837 Obra"
          - option "AUTO-4S-1781787027511 Obra"
          - option "AUTO-4S-1781786933497 Obra"
          - option "AUTO-4S-1781786851917 Obra"
          - option "AUTO-4S-1781786769827 Obra"
          - option "AUTO-4S-1781786694588 Obra"
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
        - combobox [ref=e63]:
          - option "Todas as categorias" [selected]
          - option "AUTO-4S-1781787555185 Categoria"
          - option "AUTO-4S-1781787507433 Categoria"
          - option "AUTO-4S-1781787088837 Categoria"
          - option "AUTO-4S-1781787027511 Categoria"
          - option "AUTO-4S-1781786933497 Categoria"
          - option "AUTO-4S-1781786851917 Categoria"
          - option "AUTO-4S-1781786769827 Categoria"
          - option "PW CT009 20260617184225 Categoria"
          - option "PW CT012 20260617184225 Categoria"
          - option "PW CT012 20260617184145 Categoria"
          - option "PW CT009 20260617183934 Categoria"
          - option "PW CT012 20260617183903 Categoria"
          - option "PW CT009 20260617183009 Categoria"
          - option "PW CT012 20260617182923 Categoria"
          - option "PW CT009 20260617181324 Categoria"
          - option "PW CT009 20260617181227 Categoria"
          - option "PW CT012 20260617181146 Categoria"
          - option "PW CT009 20260617181057 Categoria"
          - option "PW CT009 20260617181022 Categoria"
          - option "PW CT012 20260617180951 Categoria"
          - option "PW CT009 20260617180719 Categoria"
          - option "PW CT012 20260617180638 Categoria"
          - option "PW CT009 20260617180259 Categoria"
          - option "PW CT012 20260617180228 Categoria"
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
        - textbox "Buscar item..." [active] [ref=e64]: AUTO-4S-20260618191449 Item orcado material
      - generic [ref=e65]:
        - generic [ref=e66]:
          - paragraph [ref=e67]: Orçado
          - paragraph [ref=e68]: R$ 0,00
        - generic [ref=e69]:
          - paragraph [ref=e70]: Comprometido
          - paragraph [ref=e71]: R$ 0,00
        - generic [ref=e72]:
          - paragraph [ref=e73]: Pago
          - paragraph [ref=e74]: R$ 0,00
        - generic [ref=e75]:
          - paragraph [ref=e76]: Saldo
          - paragraph [ref=e77]: R$ 0,00
      - generic [ref=e79]:
        - text: Nenhum item orçado encontrado.
        - button "+ Novo Item" [ref=e80] [cursor=pointer]
      - generic [ref=e82]:
        - generic [ref=e83]:
          - heading "Novo Item Orçado" [level=2] [ref=e84]
          - button "×" [ref=e85] [cursor=pointer]
        - generic [ref=e86]:
          - generic [ref=e87]: Obra *
          - combobox [ref=e88]:
            - option "Selecione..." [selected]
            - option "AUTO-4S-1781787507433 Obra"
            - option "AUTO-4S-1781787088837 Obra"
            - option "AUTO-4S-1781787027511 Obra"
            - option "AUTO-4S-1781786933497 Obra"
            - option "AUTO-4S-1781786851917 Obra"
            - option "AUTO-4S-1781786769827 Obra"
            - option "AUTO-4S-1781786694588 Obra"
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
        - generic [ref=e89]:
          - generic [ref=e90]: Centro de Custo
          - combobox [ref=e91]:
            - option "Selecione..." [selected]
            - option "AUTO-4S-1781787507433 Centro"
            - option "AUTO-4S-1781787088837 Centro"
            - option "AUTO-4S-1781787027511 Centro"
            - option "AUTO-4S-1781786933497 Centro"
            - option "AUTO-4S-1781786851917 Centro"
            - option "AUTO-4S-1781786769827 Centro"
            - option "AUTO-4S-1781786694588 Centro"
            - option "PW CT009 20260617184225 Centro"
            - option "PW CT012 20260617184225 Centro"
            - option "PW CT012 20260617184145 Centro"
            - option "PW CT009 20260617183934 Centro"
            - option "PW CT012 20260617183903 Centro"
            - option "PW CT009 20260617183009 Centro"
            - option "PW CT012 20260617182923 Centro"
            - option "1"
            - option "HML 1781629990378 Centro"
            - option "4S-OBR-053-CAP-VMO"
            - option "4S-OBR-056-VLB-VMO"
            - option "4S-OBR-053-CAP-VMO"
        - generic [ref=e92]:
          - generic [ref=e93]: Categoria *
          - combobox [ref=e94]:
            - option "Selecione..." [selected]
            - option "AUTO-4S-1781787555185 Categoria"
            - option "AUTO-4S-1781787507433 Categoria"
            - option "AUTO-4S-1781787088837 Categoria"
            - option "AUTO-4S-1781787027511 Categoria"
            - option "AUTO-4S-1781786933497 Categoria"
            - option "AUTO-4S-1781786851917 Categoria"
            - option "AUTO-4S-1781786769827 Categoria"
            - option "PW CT009 20260617184225 Categoria"
            - option "PW CT012 20260617184225 Categoria"
            - option "PW CT012 20260617184145 Categoria"
            - option "PW CT009 20260617183934 Categoria"
            - option "PW CT012 20260617183903 Categoria"
            - option "PW CT009 20260617183009 Categoria"
            - option "PW CT012 20260617182923 Categoria"
            - option "PW CT009 20260617181324 Categoria"
            - option "PW CT009 20260617181227 Categoria"
            - option "PW CT012 20260617181146 Categoria"
            - option "PW CT009 20260617181057 Categoria"
            - option "PW CT009 20260617181022 Categoria"
            - option "PW CT012 20260617180951 Categoria"
            - option "PW CT009 20260617180719 Categoria"
            - option "PW CT012 20260617180638 Categoria"
            - option "PW CT009 20260617180259 Categoria"
            - option "PW CT012 20260617180228 Categoria"
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
        - generic [ref=e95]:
          - generic [ref=e96]: Nome do Item *
          - textbox [ref=e97]
        - generic [ref=e98]:
          - generic [ref=e99]: Descrição
          - textbox [ref=e100]
        - generic [ref=e101]:
          - generic [ref=e102]: Unidade de Medida
          - generic [ref=e103]:
            - combobox [ref=e104]:
              - option "Selecione..." [selected]
              - option "un"
              - option "pc"
              - option "cj"
              - option "cx"
              - option "sc"
              - option "kg"
              - option "t"
              - option "m"
              - option "m2"
              - option "m3"
              - option "L"
              - option "h"
              - option "dia"
              - option "mes"
              - option "vb"
            - button "Cadastrar mais" [ref=e105] [cursor=pointer]
        - generic [ref=e106]:
          - generic [ref=e107]: Quantidade Prevista
          - spinbutton [ref=e108]
        - generic [ref=e109]:
          - generic [ref=e110]: Valor Unitário Previsto (R$)
          - spinbutton [ref=e111]
        - generic [ref=e112]: "Total calculado: R$ 0,00"
        - generic [ref=e113]:
          - generic [ref=e114]: Etapa de Referência
          - textbox [ref=e115]
        - generic [ref=e116]:
          - button "Cancelar" [ref=e117] [cursor=pointer]
          - button "Salvar" [ref=e118] [cursor=pointer]
```

# Test source

```ts
  1   | import { expect, Locator, Page } from '@playwright/test';
  2   | 
  3   | export type FieldInput =
  4   |   | { type?: 'text'; labels: string[]; value: string | number }
  5   |   | { type: 'select'; labels: string[]; value: string };
  6   | 
  7   | export function escapeRegex(text: string | number) {
  8   |   return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  9   | }
  10  | 
  11  | export function byText(page: Page, text: string | number) {
  12  |   return page.getByText(new RegExp(escapeRegex(text), 'i')).first();
  13  | }
  14  | 
  15  | function xpathLiteral(text: string) {
  16  |   const value = String(text);
  17  |   if (!value.includes("'")) return `'${value}'`;
  18  |   if (!value.includes('"')) return `"${value}"`;
  19  |   return `concat('${value.replace(/'/g, "',\"'\",'")}')`;
  20  | }
  21  | 
  22  | async function firstVisible(locators: Locator[]) {
  23  |   for (const locator of locators) {
  24  |     if (await locator.count()) {
  25  |       const first = locator.first();
  26  |       if (await first.isVisible().catch(() => false)) return first;
  27  |     }
  28  |   }
  29  |   return null;
  30  | }
  31  | 
  32  | export async function clickAny(page: Page, names: Array<string | number>, options = {}) {
  33  |   const locators: Locator[] = [];
  34  |   for (const name of names) {
  35  |     const pattern = new RegExp(escapeRegex(name), 'i');
  36  |     locators.push(page.getByRole('button', { name: pattern }));
  37  |     locators.push(page.getByRole('link', { name: pattern }));
  38  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
  39  |     locators.push(page.getByText(pattern));
  40  |   }
  41  |   if (names.some((name) => /novo|nova|adicionar|cadastrar|criar/i.test(String(name)))) {
  42  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: /^\s*\+/ }));
  43  |   }
  44  |   const target = await firstVisible(locators);
  45  |   if (!target) throw new Error(`Could not find clickable control: ${names.join(' | ')}`);
  46  |   await target.click(options);
  47  | }
  48  | 
  49  | export async function gotoMenu(page: Page, menuPath: string[]) {
  50  |   for (let index = 0; index < menuPath.length; index += 1) {
  51  |     const segment = menuPath[index];
  52  |     const nextSegment = menuPath[index + 1];
  53  |     if (segment === 'Dashboard' && await page.getByRole('heading', { name: /dashboard/i }).count()) {
  54  |       continue;
  55  |     }
  56  |     if (nextSegment) {
  57  |       const childVisible = await page.locator('button, a, [role="button"]')
  58  |         .filter({ hasText: new RegExp(escapeRegex(nextSegment), 'i') })
  59  |         .first()
  60  |         .isVisible()
  61  |         .catch(() => false);
  62  |       if (childVisible) continue;
  63  |     }
  64  |     await clickAny(page, [segment]);
  65  |     await page.waitForLoadState('networkidle').catch(() => {});
  66  |   }
  67  | }
  68  | 
  69  | export async function fillField(page: Page, labels: string[], value: string | number) {
  70  |   const candidates: Locator[] = [];
  71  |   for (const label of labels) {
  72  |     const patterns = [new RegExp(label, 'i')];
  73  |     if (/^email$/i.test(label)) patterns.push(/e-?mail/i);
  74  |     for (const pattern of patterns) {
  75  |       candidates.push(page.getByLabel(pattern));
  76  |       candidates.push(page.getByPlaceholder(pattern));
  77  |     }
  78  |     candidates.push(page.locator(`input[name*="${label}" i]`));
  79  |     candidates.push(page.locator(`textarea[name*="${label}" i]`));
  80  |     candidates.push(page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and (./input or ./textarea)]//*[self::input or self::textarea]`));
  81  |   }
  82  |   const target = await firstVisible(candidates);
> 83  |   if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
      |                      ^ Error: Could not find field: obra
  84  |   await target.fill(String(value));
  85  | }
  86  | 
  87  | export async function chooseOption(page: Page, labels: string[], value: string) {
  88  |   const candidates = labels.flatMap((label) => [
  89  |     page.getByLabel(new RegExp(label, 'i')),
  90  |     page.locator(`select[name*="${label}" i]`),
  91  |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  92  |   ]);
  93  |   const target = await firstVisible(candidates);
  94  |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  95  | 
  96  |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  97  |   if (tagName === 'select') {
  98  |     const option = await target.locator('option').filter({ hasText: new RegExp(escapeRegex(value), 'i') }).first();
  99  |     if (await option.count()) {
  100 |       await target.selectOption({ label: await option.innerText() });
  101 |       return;
  102 |     }
  103 |   }
  104 | 
  105 |   await target.click();
  106 |   await clickAny(page, [value]);
  107 | }
  108 | 
  109 | export async function chooseFirstAvailableOption(page: Page, labels: string[]) {
  110 |   const candidates = labels.flatMap((label) => [
  111 |     page.getByLabel(new RegExp(label, 'i')),
  112 |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  113 |   ]);
  114 |   const target = await firstVisible(candidates);
  115 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  116 |   const optionValue = await target.locator('option').evaluateAll((options) => {
  117 |     const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
  118 |     return option ? option.value : '';
  119 |   });
  120 |   if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
  121 |   await target.selectOption(optionValue);
  122 | }
  123 | 
  124 | export async function submitForm(page: Page) {
  125 |   const primarySubmit = await firstVisible([
  126 |     page.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
  127 |     page.locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i })
  128 |   ]);
  129 |   if (primarySubmit) {
  130 |     await primarySubmit.click();
  131 |   } else {
  132 |     await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  133 |   }
  134 |   await page.waitForLoadState('networkidle').catch(() => {});
  135 |   await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
  136 | }
  137 | 
  138 | export async function expectPageReady(page: Page, expectedTexts: string[] = []) {
  139 |   await expect(page.locator('body')).toBeVisible();
  140 |   await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not|cannot read/i);
  141 |   for (const text of expectedTexts) {
  142 |     await expect(byText(page, text)).toBeVisible();
  143 |   }
  144 | }
  145 | 
  146 | export async function tryCreateSimpleRecord(page: Page, menuPath: string[], recordName: string, fields: FieldInput[] = []) {
  147 |   await gotoMenu(page, menuPath);
  148 |   await clickAny(page, ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  149 |   for (const field of fields) {
  150 |     if (field.type === 'select') {
  151 |       await chooseOption(page, field.labels, field.value);
  152 |     } else {
  153 |       await fillField(page, field.labels, field.value);
  154 |     }
  155 |   }
  156 |   await submitForm(page);
  157 |   await expect(byText(page, recordName)).toBeVisible();
  158 | }
  159 | 
  160 | export async function assertPersistedAfterRefresh(page: Page, text: string) {
  161 |   await page.reload({ waitUntil: 'networkidle' });
  162 |   await expect(byText(page, text)).toBeVisible();
  163 | }
  164 | 
```