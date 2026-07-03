# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-master-data.spec.ts >> CT004 - cliente e contrato com edicao, persistencia e vinculo
- Location: tests/02-master-data.spec.ts:11:5

# Error details

```
Error: Could not find field: Razão Social | Razao Social
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
      - generic [ref=e16]:
        - button "⊙ Configurações ▶" [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: ⊙
          - generic [ref=e19]: Configurações
          - generic [ref=e20]: ▶
        - button "Clientes e Contratos" [ref=e21] [cursor=pointer]:
          - generic [ref=e22]: Clientes e Contratos
        - button "Obras e Centros" [ref=e23] [cursor=pointer]:
          - generic [ref=e24]: Obras e Centros
        - button "Fornecedores" [ref=e25] [cursor=pointer]:
          - generic [ref=e26]: Fornecedores
        - button "Categorias Orç." [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Categorias Orç.
        - button "Colaboradores" [ref=e29] [cursor=pointer]:
          - generic [ref=e30]: Colaboradores
        - button "Usuários" [ref=e31] [cursor=pointer]:
          - generic [ref=e32]: Usuários
      - button "◑ Orçamento ▶" [ref=e34] [cursor=pointer]:
        - generic [ref=e35]: ◑
        - generic [ref=e36]: Orçamento
        - generic [ref=e37]: ▶
      - button "◐ Suprimentos ▶" [ref=e39] [cursor=pointer]:
        - generic [ref=e40]: ◐
        - generic [ref=e41]: Suprimentos
        - generic [ref=e42]: ▶
      - button "◧ Financeiro ▶" [ref=e44] [cursor=pointer]:
        - generic [ref=e45]: ◧
        - generic [ref=e46]: Financeiro
        - generic [ref=e47]: ▶
      - button "◫ Workflow ▶" [ref=e49] [cursor=pointer]:
        - generic [ref=e50]: ◫
        - generic [ref=e51]: Workflow
        - generic [ref=e52]: ▶
    - generic [ref=e53]:
      - generic [ref=e55]: H
      - generic [ref=e56]:
        - paragraph [ref=e57]: Hello
        - paragraph [ref=e58]: ADMINISTRADOR
      - button "⏻" [ref=e59] [cursor=pointer]
  - main [ref=e60]:
    - generic [ref=e61]:
      - button "⚠ 35 aprovações pendentes" [ref=e62] [cursor=pointer]
      - generic [ref=e63]: ADMINISTRADOR
    - generic [ref=e65]:
      - generic [ref=e66]:
        - heading "Clientes e Contratos" [level=1] [ref=e68]
        - generic [ref=e69]:
          - button "+ Cliente" [active] [ref=e70] [cursor=pointer]
          - button "+ Contrato" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - button "Clientes" [ref=e73] [cursor=pointer]
        - button "Contratos" [ref=e74] [cursor=pointer]
      - generic [ref=e75]:
        - table [ref=e76]:
          - rowgroup [ref=e77]:
            - row "RazÃ£o Social Nome Fantasia CNPJ/CPF Contato Status" [ref=e78]:
              - columnheader [ref=e79]
              - columnheader "RazÃ£o Social" [ref=e80]
              - columnheader "Nome Fantasia" [ref=e81]
              - columnheader "CNPJ/CPF" [ref=e82]
              - columnheader "Contato" [ref=e83]
              - columnheader "Status" [ref=e84]
              - columnheader [ref=e85]
          - rowgroup [ref=e86]:
            - row "AUTO-4S-20260703T000000 Cliente SA AUTO-4S-20260703T000000 Cliente 60703000000 QA Automatizado Editado ATIVO Editar Excluir" [ref=e87]:
              - cell [ref=e88]:
                - checkbox [ref=e89]
              - cell "AUTO-4S-20260703T000000 Cliente SA" [ref=e90]
              - cell "AUTO-4S-20260703T000000 Cliente" [ref=e91]
              - cell "60703000000" [ref=e92]
              - cell "QA Automatizado Editado" [ref=e93]
              - cell "ATIVO" [ref=e94]
              - cell "Editar Excluir" [ref=e95]:
                - generic [ref=e96]:
                  - button "Editar" [ref=e97] [cursor=pointer]
                  - button "Excluir" [ref=e98] [cursor=pointer]
            - row "AUTO-4S-20260703145420 Cliente SA AUTO-4S-20260703145420 Cliente 60703145420 QA Automatizado ATIVO Editar Excluir" [ref=e99]:
              - cell [ref=e100]:
                - checkbox [ref=e101]
              - cell "AUTO-4S-20260703145420 Cliente SA" [ref=e102]
              - cell "AUTO-4S-20260703145420 Cliente" [ref=e103]
              - cell "60703145420" [ref=e104]
              - cell "QA Automatizado" [ref=e105]
              - cell "ATIVO" [ref=e106]
              - cell "Editar Excluir" [ref=e107]:
                - generic [ref=e108]:
                  - button "Editar" [ref=e109] [cursor=pointer]
                  - button "Excluir" [ref=e110] [cursor=pointer]
            - row "AUTO-4S-20260701121300 Cliente SA AUTO-4S-20260701121300 Cliente 60701121300 QA Automatizado Editado ATIVO Editar Excluir" [ref=e111]:
              - cell [ref=e112]:
                - checkbox [ref=e113]
              - cell "AUTO-4S-20260701121300 Cliente SA" [ref=e114]
              - cell "AUTO-4S-20260701121300 Cliente" [ref=e115]
              - cell "60701121300" [ref=e116]
              - cell "QA Automatizado Editado" [ref=e117]
              - cell "ATIVO" [ref=e118]
              - cell "Editar Excluir" [ref=e119]:
                - generic [ref=e120]:
                  - button "Editar" [ref=e121] [cursor=pointer]
                  - button "Excluir" [ref=e122] [cursor=pointer]
            - row "CONCESSIONARIA DAS LINHAS 5 E 17 DO METRO DE SAO PAULO S.A. CONCESSIONARIA DAS LINHAS 5 E 17 DO METRO DE SAO PAULO S.A. 29.938.085/0001-35 QA Automatizado Editado ATIVO Editar Excluir" [ref=e123]:
              - cell [ref=e124]:
                - checkbox [ref=e125]
              - cell "CONCESSIONARIA DAS LINHAS 5 E 17 DO METRO DE SAO PAULO S.A." [ref=e126]
              - cell "CONCESSIONARIA DAS LINHAS 5 E 17 DO METRO DE SAO PAULO S.A." [ref=e127]
              - cell "29.938.085/0001-35" [ref=e128]
              - cell "QA Automatizado Editado" [ref=e129]
              - cell "ATIVO" [ref=e130]
              - cell "Editar Excluir" [ref=e131]:
                - generic [ref=e132]:
                  - button "Editar" [ref=e133] [cursor=pointer]
                  - button "Excluir" [ref=e134] [cursor=pointer]
            - row "ENGENHARIA E COMERCIO BANDEIRANTES LTDA ENGENHARIA E COMERCIO BANDEIRANTES LTDA 20.147.506/0001-35 ATIVO Editar Excluir" [ref=e135]:
              - cell [ref=e136]:
                - checkbox [ref=e137]
              - cell "ENGENHARIA E COMERCIO BANDEIRANTES LTDA" [ref=e138]
              - cell "ENGENHARIA E COMERCIO BANDEIRANTES LTDA" [ref=e139]
              - cell "20.147.506/0001-35" [ref=e140]
              - cell [ref=e141]
              - cell "ATIVO" [ref=e142]
              - cell "Editar Excluir" [ref=e143]:
                - generic [ref=e144]:
                  - button "Editar" [ref=e145] [cursor=pointer]
                  - button "Excluir" [ref=e146] [cursor=pointer]
            - row "RUMO MALHA PAULISTA S.A. RUMO MALHA PAULISTA S.A. 02.502.844/0001-66 INATIVO Editar Excluir" [ref=e147]:
              - cell [ref=e148]:
                - checkbox [ref=e149]
              - cell "RUMO MALHA PAULISTA S.A." [ref=e150]
              - cell "RUMO MALHA PAULISTA S.A." [ref=e151]
              - cell "02.502.844/0001-66" [ref=e152]
              - cell [ref=e153]
              - cell "INATIVO" [ref=e154]
              - cell "Editar Excluir" [ref=e155]:
                - generic [ref=e156]:
                  - button "Editar" [ref=e157] [cursor=pointer]
                  - button "Excluir" [ref=e158] [cursor=pointer]
            - row "ON TRILHOS - ADMINISTRACAO E PARTICIPACOES S.A ON TRILHOS - ADMINISTRACAO E PARTICIPACOES S.A 44.719.129/0001-20 ATIVO Editar Excluir" [ref=e159]:
              - cell [ref=e160]:
                - checkbox [ref=e161]
              - cell "ON TRILHOS - ADMINISTRACAO E PARTICIPACOES S.A" [ref=e162]
              - cell "ON TRILHOS - ADMINISTRACAO E PARTICIPACOES S.A" [ref=e163]
              - cell "44.719.129/0001-20" [ref=e164]
              - cell [ref=e165]
              - cell "ATIVO" [ref=e166]
              - cell "Editar Excluir" [ref=e167]:
                - generic [ref=e168]:
                  - button "Editar" [ref=e169] [cursor=pointer]
                  - button "Excluir" [ref=e170] [cursor=pointer]
        - generic [ref=e171]:
          - generic [ref=e172]: 1-7 de 7
          - generic [ref=e173]:
            - generic [ref=e174]: Itens por pagina
            - combobox [ref=e175]:
              - option "10 por pagina" [selected]
              - option "20 por pagina"
              - option "50 por pagina"
              - option "100 por pagina"
            - button "Anterior" [disabled] [ref=e176] [cursor=pointer]
            - generic [ref=e177]: Pagina 1 de 1
            - button "Proxima" [disabled] [ref=e178] [cursor=pointer]
      - generic [ref=e180]:
        - generic [ref=e181]:
          - heading "Novo Cliente" [level=2] [ref=e182]
          - button "Ã—" [ref=e183] [cursor=pointer]
        - generic [ref=e184]:
          - generic [ref=e185]: RazÃ£o Social *
          - textbox [ref=e186]
        - generic [ref=e187]:
          - generic [ref=e188]: Nome Fantasia
          - textbox [ref=e189]
        - generic [ref=e190]:
          - generic [ref=e191]: CNPJ/CPF *
          - textbox [ref=e192]
        - generic [ref=e193]:
          - generic [ref=e194]: E-mail
          - textbox [ref=e195]
        - generic [ref=e196]:
          - generic [ref=e197]: Telefone
          - textbox [ref=e198]
        - generic [ref=e199]:
          - generic [ref=e200]: Contato Principal
          - textbox [ref=e201]
        - generic [ref=e202]:
          - paragraph [ref=e203]: Endereco
          - generic [ref=e204]:
            - generic [ref=e205]: CEP
            - textbox [ref=e206]
          - generic [ref=e207]:
            - generic [ref=e208]: Logradouro
            - textbox [ref=e209]
          - generic [ref=e210]:
            - generic [ref=e211]: Numero
            - textbox [ref=e212]
          - generic [ref=e213]:
            - generic [ref=e214]: Complemento
            - textbox [ref=e215]
          - generic [ref=e216]:
            - generic [ref=e217]: Bairro
            - textbox [ref=e218]
          - generic [ref=e219]:
            - generic [ref=e220]: Cidade
            - textbox [ref=e221]
          - generic [ref=e222]:
            - generic [ref=e223]: UF
            - textbox [ref=e224]
        - generic [ref=e225]:
          - generic [ref=e226]: Status
          - combobox [ref=e227]:
            - option "Selecione..." [selected]
            - option "Ativo"
            - option "Inativo"
        - generic [ref=e228]:
          - button "Cancelar" [ref=e229] [cursor=pointer]
          - button "Salvar" [ref=e230] [cursor=pointer]
```

# Test source

```ts
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
  56  |   if (!target) throw new Error(`Could not find clickable control: ${names.join(' | ')}`);
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
> 110 |   if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
      |                      ^ Error: Could not find field: Razão Social | Razao Social
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
  166 |   if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
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
```