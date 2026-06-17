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

Locator: getByText(/AUTO-4S-20260617192118 Cliente/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/AUTO-4S-20260617192118 Cliente/i).first()

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
  142 | async function tryCreateSimpleRecord(page, path, recordName, fields = []) {
  143 |   await gotoMenu(page, path);
  144 |   await clickAny(page, ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  145 |   for (const field of fields) {
  146 |     if (field.type === 'select') {
  147 |       await chooseOption(page, field.labels, field.value);
  148 |     } else {
  149 |       await fillField(page, field.labels, field.value);
  150 |     }
  151 |   }
  152 |   await submitForm(page);
  153 |   await expect(byText(page, recordName)).toBeVisible();
  154 | }
  155 | 
  156 | async function assertPersistedAfterRefresh(page, text) {
  157 |   await page.reload({ waitUntil: 'networkidle' });
> 158 |   await expect(byText(page, text)).toBeVisible();
      |                                    ^ Error: expect(locator).toBeVisible() failed
  159 | }
  160 | 
  161 | module.exports = {
  162 |   byText,
  163 |   clickAny,
  164 |   gotoMenu,
  165 |   fillField,
  166 |   chooseOption,
  167 |   chooseFirstAvailableOption,
  168 |   submitForm,
  169 |   expectPageReady,
  170 |   tryCreateSimpleRecord,
  171 |   assertPersistedAfterRefresh
  172 | };
  173 | 
```