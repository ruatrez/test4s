# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-financial-flow.spec.js >> CT004-CT008 - initial registrations and budget item persist across modules
- Location: tests/02-financial-flow.spec.js:21:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/AUTO-4S-20260617153828 Cliente/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/AUTO-4S-20260617153828 Cliente/i).first()

```

```yaml
- img "APP 4S"
- text: Inovando o Amanha com Ciencia, Tecnologia e Engenharia
- heading "Entrar" [level=1]
- text: E-mail
- textbox "seu@email.com"
- text: Senha
- textbox "********"
- button "Entrar"
- paragraph: Acesso restrito. Solicite suas credenciais ao administrador do sistema.
```

# Test source

```ts
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
  142 |   }
  143 |   await submitForm(page);
  144 |   await expect(byText(page, recordName)).toBeVisible();
  145 | }
  146 | 
  147 | async function assertPersistedAfterRefresh(page, text) {
  148 |   await page.reload({ waitUntil: 'networkidle' });
> 149 |   await expect(byText(page, text)).toBeVisible();
      |                                    ^ Error: expect(locator).toBeVisible() failed
  150 | }
  151 | 
  152 | module.exports = {
  153 |   byText,
  154 |   clickAny,
  155 |   gotoMenu,
  156 |   fillField,
  157 |   chooseOption,
  158 |   chooseFirstAvailableOption,
  159 |   submitForm,
  160 |   expectPageReady,
  161 |   tryCreateSimpleRecord,
  162 |   assertPersistedAfterRefresh
  163 | };
  164 | 
```