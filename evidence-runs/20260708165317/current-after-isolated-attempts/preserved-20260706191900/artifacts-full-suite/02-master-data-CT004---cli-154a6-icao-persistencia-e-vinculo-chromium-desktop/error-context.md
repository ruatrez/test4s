# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-master-data.spec.ts >> CT004 - cliente e contrato com edicao, persistencia e vinculo
- Location: tests/02-master-data.spec.ts:11:5

# Error details

```
Error: Could not find submit control inside the active modal
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
      - button "⚠ 5 aprovações pendentes" [ref=e62] [cursor=pointer]
      - generic [ref=e63]: ADMINISTRADOR
    - generic [ref=e65]:
      - generic [ref=e66]:
        - heading "Clientes e Contratos" [level=1] [ref=e68]
        - generic [ref=e69]:
          - button "+ Cliente" [ref=e70] [cursor=pointer]
          - button "+ Contrato" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - button "Clientes" [ref=e73] [cursor=pointer]
        - button "Contratos" [ref=e74] [cursor=pointer]
      - generic [ref=e75]:
        - table [ref=e76]:
          - rowgroup [ref=e77]:
            - row "Razão Social Nome Fantasia CNPJ/CPF Contato Status" [ref=e78]:
              - columnheader [ref=e79]
              - columnheader "Razão Social" [ref=e80]
              - columnheader "Nome Fantasia" [ref=e81]
              - columnheader "CNPJ/CPF" [ref=e82]
              - columnheader "Contato" [ref=e83]
              - columnheader "Status" [ref=e84]
              - columnheader [ref=e85]
          - rowgroup [ref=e86]:
            - row "AUTO-4S-20260706165333 Cliente SA AUTO-4S-20260706165333 Cliente 60706165333 QA Automatizado ATIVO Editar Excluir" [ref=e87]:
              - cell [ref=e88]:
                - checkbox [ref=e89]
              - cell "AUTO-4S-20260706165333 Cliente SA" [ref=e90]
              - cell "AUTO-4S-20260706165333 Cliente" [ref=e91]
              - cell "60706165333" [ref=e92]
              - cell "QA Automatizado" [ref=e93]
              - cell "ATIVO" [ref=e94]
              - cell "Editar Excluir" [ref=e95]:
                - generic [ref=e96]:
                  - button "Editar" [ref=e97] [cursor=pointer]
                  - button "Excluir" [ref=e98] [cursor=pointer]
            - row "AUTO-4S-20260706154931 Cliente SA AUTO-4S-20260706154931 Cliente 60706154931 QA Automatizado Editado ATIVO Editar Excluir" [ref=e99]:
              - cell [ref=e100]:
                - checkbox [ref=e101]
              - cell "AUTO-4S-20260706154931 Cliente SA" [ref=e102]
              - cell "AUTO-4S-20260706154931 Cliente" [ref=e103]
              - cell "60706154931" [ref=e104]
              - cell "QA Automatizado Editado" [ref=e105]
              - cell "ATIVO" [ref=e106]
              - cell "Editar Excluir" [ref=e107]:
                - generic [ref=e108]:
                  - button "Editar" [ref=e109] [cursor=pointer]
                  - button "Excluir" [ref=e110] [cursor=pointer]
            - row "AUTO-4S-20260706161854 Cliente SA AUTO-4S-20260706161854 Cliente 60706161854 QA Automatizado ATIVO Editar Excluir" [ref=e111]:
              - cell [ref=e112]:
                - checkbox [ref=e113]
              - cell "AUTO-4S-20260706161854 Cliente SA" [ref=e114]
              - cell "AUTO-4S-20260706161854 Cliente" [ref=e115]
              - cell "60706161854" [ref=e116]
              - cell "QA Automatizado" [ref=e117]
              - cell "ATIVO" [ref=e118]
              - cell "Editar Excluir" [ref=e119]:
                - generic [ref=e120]:
                  - button "Editar" [ref=e121] [cursor=pointer]
                  - button "Excluir" [ref=e122] [cursor=pointer]
            - row "AUTO-4S-20260706132953 Cliente SA AUTO-4S-20260706132953 Cliente 60706132953 QA Automatizado Editado ATIVO Editar Excluir" [ref=e123]:
              - cell [ref=e124]:
                - checkbox [ref=e125]
              - cell "AUTO-4S-20260706132953 Cliente SA" [ref=e126]
              - cell "AUTO-4S-20260706132953 Cliente" [ref=e127]
              - cell "60706132953" [ref=e128]
              - cell "QA Automatizado Editado" [ref=e129]
              - cell "ATIVO" [ref=e130]
              - cell "Editar Excluir" [ref=e131]:
                - generic [ref=e132]:
                  - button "Editar" [ref=e133] [cursor=pointer]
                  - button "Excluir" [ref=e134] [cursor=pointer]
            - row "AUTO-4S-20260706123151 Cliente SA AUTO-4S-20260706123151 Cliente 60706123151 QA Automatizado Editado ATIVO Editar Excluir" [ref=e135]:
              - cell [ref=e136]:
                - checkbox [ref=e137]
              - cell "AUTO-4S-20260706123151 Cliente SA" [ref=e138]
              - cell "AUTO-4S-20260706123151 Cliente" [ref=e139]
              - cell "60706123151" [ref=e140]
              - cell "QA Automatizado Editado" [ref=e141]
              - cell "ATIVO" [ref=e142]
              - cell "Editar Excluir" [ref=e143]:
                - generic [ref=e144]:
                  - button "Editar" [ref=e145] [cursor=pointer]
                  - button "Excluir" [ref=e146] [cursor=pointer]
            - row "AUTO-4S-20260706114042 Cliente SA AUTO-4S-20260706114042 Cliente 60706114042 QA Automatizado Editado ATIVO Editar Excluir" [ref=e147]:
              - cell [ref=e148]:
                - checkbox [ref=e149]
              - cell "AUTO-4S-20260706114042 Cliente SA" [ref=e150]
              - cell "AUTO-4S-20260706114042 Cliente" [ref=e151]
              - cell "60706114042" [ref=e152]
              - cell "QA Automatizado Editado" [ref=e153]
              - cell "ATIVO" [ref=e154]
              - cell "Editar Excluir" [ref=e155]:
                - generic [ref=e156]:
                  - button "Editar" [ref=e157] [cursor=pointer]
                  - button "Excluir" [ref=e158] [cursor=pointer]
            - row "AUTO-4S-20260706122306 Cliente SA AUTO-4S-20260706122306 Cliente 60706122306 QA Automatizado ATIVO Editar Excluir" [ref=e159]:
              - cell [ref=e160]:
                - checkbox [ref=e161]
              - cell "AUTO-4S-20260706122306 Cliente SA" [ref=e162]
              - cell "AUTO-4S-20260706122306 Cliente" [ref=e163]
              - cell "60706122306" [ref=e164]
              - cell "QA Automatizado" [ref=e165]
              - cell "ATIVO" [ref=e166]
              - cell "Editar Excluir" [ref=e167]:
                - generic [ref=e168]:
                  - button "Editar" [ref=e169] [cursor=pointer]
                  - button "Excluir" [ref=e170] [cursor=pointer]
            - row "ENGENHARIA E COMERCIO BANDEIRANTES LTDA ENGENHARIA E COMERCIO BANDEIRANTES LTDA 20.147.506/0001-35 QA Automatizado Editado ATIVO Editar Excluir" [ref=e171]:
              - cell [ref=e172]:
                - checkbox [ref=e173]
              - cell "ENGENHARIA E COMERCIO BANDEIRANTES LTDA" [ref=e174]
              - cell "ENGENHARIA E COMERCIO BANDEIRANTES LTDA" [ref=e175]
              - cell "20.147.506/0001-35" [ref=e176]
              - cell "QA Automatizado Editado" [ref=e177]
              - cell "ATIVO" [ref=e178]
              - cell "Editar Excluir" [ref=e179]:
                - generic [ref=e180]:
                  - button "Editar" [ref=e181] [cursor=pointer]
                  - button "Excluir" [ref=e182] [cursor=pointer]
            - row "RUMO MALHA PAULISTA S.A. RUMO MALHA PAULISTA S.A. 02.502.844/0001-66 INATIVO Editar Excluir" [ref=e183]:
              - cell [ref=e184]:
                - checkbox [ref=e185]
              - cell "RUMO MALHA PAULISTA S.A." [ref=e186]
              - cell "RUMO MALHA PAULISTA S.A." [ref=e187]
              - cell "02.502.844/0001-66" [ref=e188]
              - cell [ref=e189]
              - cell "INATIVO" [ref=e190]
              - cell "Editar Excluir" [ref=e191]:
                - generic [ref=e192]:
                  - button "Editar" [ref=e193] [cursor=pointer]
                  - button "Excluir" [ref=e194] [cursor=pointer]
            - row "ON TRILHOS - ADMINISTRACAO E PARTICIPACOES S.A ON TRILHOS - ADMINISTRACAO E PARTICIPACOES S.A 44.719.129/0001-20 ATIVO Editar Excluir" [ref=e195]:
              - cell [ref=e196]:
                - checkbox [ref=e197]
              - cell "ON TRILHOS - ADMINISTRACAO E PARTICIPACOES S.A" [ref=e198]
              - cell "ON TRILHOS - ADMINISTRACAO E PARTICIPACOES S.A" [ref=e199]
              - cell "44.719.129/0001-20" [ref=e200]
              - cell [ref=e201]
              - cell "ATIVO" [ref=e202]
              - cell "Editar Excluir" [ref=e203]:
                - generic [ref=e204]:
                  - button "Editar" [ref=e205] [cursor=pointer]
                  - button "Excluir" [ref=e206] [cursor=pointer]
        - generic [ref=e207]:
          - generic [ref=e208]: 1-10 de 10
          - generic [ref=e209]:
            - generic [ref=e210]: Itens por pagina
            - combobox [ref=e211]:
              - option "10 por pagina" [selected]
              - option "20 por pagina"
              - option "50 por pagina"
              - option "100 por pagina"
            - button "Anterior" [disabled] [ref=e212] [cursor=pointer]
            - generic [ref=e213]: Pagina 1 de 1
            - button "Proxima" [disabled] [ref=e214] [cursor=pointer]
      - generic [ref=e216]:
        - generic [ref=e217]:
          - heading "Novo Cliente" [level=2] [ref=e218]
          - button "X" [ref=e219] [cursor=pointer]
        - generic [ref=e220]:
          - generic [ref=e221]: Razão Social *
          - textbox [ref=e222]: AUTO-4S-20260706191900 Cliente SA
        - generic [ref=e223]:
          - generic [ref=e224]: Nome Fantasia
          - textbox [ref=e225]: AUTO-4S-20260706191900 Cliente
        - generic [ref=e226]:
          - generic [ref=e227]: CNPJ/CPF *
          - textbox [ref=e228]: "60706191900"
        - generic [ref=e229]:
          - generic [ref=e230]: E-mail
          - textbox [ref=e231]: cliente.auto@example.test
        - generic [ref=e232]:
          - generic [ref=e233]: Telefone
          - textbox [ref=e234]
        - generic [ref=e235]:
          - generic [ref=e236]: Contato Principal
          - textbox [active] [ref=e237]: QA Automatizado
        - generic [ref=e238]:
          - paragraph [ref=e239]: Endereco
          - generic [ref=e240]:
            - generic [ref=e241]: CEP
            - textbox [ref=e242]
          - generic [ref=e243]:
            - generic [ref=e244]: Logradouro
            - textbox [ref=e245]
          - generic [ref=e246]:
            - generic [ref=e247]: Numero
            - textbox [ref=e248]
          - generic [ref=e249]:
            - generic [ref=e250]: Complemento
            - textbox [ref=e251]
          - generic [ref=e252]:
            - generic [ref=e253]: Bairro
            - textbox [ref=e254]
          - generic [ref=e255]:
            - generic [ref=e256]: Cidade
            - textbox [ref=e257]
          - generic [ref=e258]:
            - generic [ref=e259]: UF
            - textbox [ref=e260]
        - generic [ref=e261]:
          - generic [ref=e262]: Status
          - combobox [ref=e263]:
            - option "Selecione..."
            - option "Ativo" [selected]
            - option "Inativo"
        - generic [ref=e264]:
          - button "Cancelar" [ref=e265] [cursor=pointer]
          - button "Salvar" [ref=e266] [cursor=pointer]
```

# Test source

```ts
  172 |     })));
  173 |     const option = options.find((item) => optionMatches(item, value));
  174 |     if (option) {
  175 |       await select.selectOption(option.value);
  176 |       const selectedText = await select.evaluate((element) => {
  177 |         const selectElement = element as HTMLSelectElement;
  178 |         return (selectElement.selectedOptions[0]?.textContent || '').replace(/\s+/g, ' ').trim();
  179 |       });
  180 |       const selectedValue = await select.evaluate((element) => (element as HTMLSelectElement).value);
  181 |       if (!optionMatches({ text: selectedText, value: selectedValue }, value)) {
  182 |         throw new Error(`Selected option mismatch for ${labels.join(' | ')}: expected "${value}", got "${selectedText}"`);
  183 |       }
  184 |       return;
  185 |     }
  186 |   }
  187 | 
  188 |   await target.click();
  189 |   const optionPattern = new RegExp(`^\\s*${escapeRegex(value)}\\s*$`, 'i');
  190 |   const optionTarget = await firstVisible([
  191 |     page.getByRole('option', { name: optionPattern }),
  192 |     page.locator('[role="option"], li, [data-radix-select-item], [data-value]').filter({ hasText: optionPattern }),
  193 |     page.getByText(optionPattern)
  194 |   ]);
  195 |   if (!optionTarget) {
  196 |     throw new Error(`Could not find option "${value}" for: ${labels.join(' | ')}`);
  197 |   }
  198 |   await optionTarget.click();
  199 | }
  200 | 
  201 | export async function expectSelectedOption(page: Page, labels: string[], expectedValue: string) {
  202 |   const candidates = labels.flatMap((label) => {
  203 |     const labelText = xpathStartsWithText(label);
  204 |     return [
  205 |       page.locator(`select[name*="${label}" i]`),
  206 |       page.locator(`xpath=//*[${labelText} and ./select]//select`),
  207 |       page.locator(`xpath=//*[${labelText} and not(.//select)]/following::select[1]`),
  208 |       page.getByLabel(new RegExp(label, 'i')),
  209 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
  210 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
  211 |     ];
  212 |   });
  213 |   const target = await firstVisible(candidates);
  214 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  215 | 
  216 |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  217 |   const select = tagName === 'select'
  218 |     ? target
  219 |     : await firstVisible([target.locator('select')]);
  220 |   const selectedText = select
  221 |     ? await select.evaluate((element) => {
  222 |       const selectElement = element as HTMLSelectElement;
  223 |       return (selectElement.selectedOptions[0]?.textContent || '').replace(/\s+/g, ' ').trim();
  224 |     })
  225 |     : await target.innerText().catch(() => '');
  226 |   expect(normalizeText(selectedText).toLowerCase()).toContain(normalizeText(expectedValue).toLowerCase());
  227 | }
  228 | 
  229 | export async function chooseFirstAvailableOption(page: Page, labels: string[]) {
  230 |   const candidates = labels.flatMap((label) => {
  231 |     const labelText = xpathStartsWithText(label);
  232 |     return [
  233 |       page.locator(`select[name*="${label}" i]`),
  234 |       page.locator(`xpath=//*[${labelText} and ./select]//select`),
  235 |       page.locator(`xpath=//*[${labelText} and not(.//select)]/following::select[1]`),
  236 |       page.getByLabel(new RegExp(label, 'i')),
  237 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
  238 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
  239 |     ];
  240 |   });
  241 |   const target = await firstVisible(candidates);
  242 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  243 |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  244 |   const select = tagName === 'select'
  245 |     ? target
  246 |     : await firstVisible([target.locator('select')]);
  247 |   if (!select) throw new Error(`Could not find native select for: ${labels.join(' | ')}`);
  248 |   const optionValue = await select.locator('option').evaluateAll((options) => {
  249 |     const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
  250 |     return option ? option.value : '';
  251 |   });
  252 |   if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
  253 |   await select.selectOption(optionValue);
  254 | }
  255 | 
  256 | function submitCandidates(root: SearchRoot) {
  257 |   return [
  258 |     root.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
  259 |     root.locator('button, [role="button"]')
  260 |       .filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i })
  261 |       .filter({ hasNotText: /cadastrar mais/i })
  262 |   ];
  263 | }
  264 | 
  265 | export async function submitForm(page: Page) {
  266 |   const modal = await visibleModal(page);
  267 |   const searchRoot: SearchRoot = modal ?? page;
  268 |   const primarySubmit = await firstVisible(submitCandidates(searchRoot));
  269 |   if (primarySubmit) {
  270 |     await primarySubmit.click();
  271 |   } else if (modal) {
> 272 |     throw new Error('Could not find submit control inside the active modal');
      |           ^ Error: Could not find submit control inside the active modal
  273 |   } else {
  274 |     await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  275 |   }
  276 |   await page.waitForLoadState('networkidle').catch(() => {});
  277 |   await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
  278 | }
  279 | 
  280 | export async function expectPageReady(page: Page, expectedTexts: string[] = []) {
  281 |   await expect(page.locator('body')).toBeVisible();
  282 |   await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not/i);
  283 |   for (const text of expectedTexts) {
  284 |     await expect(byText(page, text)).toBeVisible();
  285 |   }
  286 | }
  287 | 
  288 | async function findSearchInput(page: Page) {
  289 |   return firstVisible([
  290 |     page.getByPlaceholder(/buscar|pesquisar|filtro/i),
  291 |     page.getByRole('textbox', { name: /buscar|pesquisar|filtro/i }),
  292 |     page.locator('input[type="search"]'),
  293 |     page.locator('input[placeholder*="buscar" i], input[placeholder*="pesquisar" i], input[placeholder*="filtro" i]')
  294 |   ]);
  295 | }
  296 | 
  297 | async function findEnabledNextButton(page: Page) {
  298 |   const candidates = [
  299 |     page.getByRole('button', { name: /^(proxima|próxima|next)$/i }),
  300 |     page.locator('button, [role="button"]').filter({ hasText: /^(proxima|próxima|next)$/i })
  301 |   ];
  302 | 
  303 |   for (const candidate of candidates) {
  304 |     const count = await candidate.count();
  305 |     for (let index = 0; index < count; index += 1) {
  306 |       const item = candidate.nth(index);
  307 |       if (!await item.isVisible().catch(() => false)) continue;
  308 |       if (await item.isDisabled().catch(() => false)) continue;
  309 |       const ariaDisabled = await item.getAttribute('aria-disabled').catch(() => null);
  310 |       if (ariaDisabled === 'true') continue;
  311 |       return item;
  312 |     }
  313 |   }
  314 | 
  315 |   return null;
  316 | }
  317 | 
  318 | async function expectRecordVisibleInSearchOrPagination(page: Page, recordName: string, timeout?: number) {
  319 |   const record = byText(page, recordName);
  320 |   const finalTimeout = timeout ?? 10_000;
  321 |   if (await waitForVisible(record)) return;
  322 | 
  323 |   const search = await findSearchInput(page);
  324 |   if (search) {
  325 |     await search.fill(recordName);
  326 |     await page.waitForLoadState('networkidle').catch(() => {});
  327 |     await page.waitForTimeout(500);
  328 |     if (await waitForVisible(record, Math.min(finalTimeout, 5_000))) return;
  329 |     await search.clear().catch(() => {});
  330 |     await page.waitForLoadState('networkidle').catch(() => {});
  331 |     await page.waitForTimeout(500);
  332 |   }
  333 | 
  334 |   for (let pageIndex = 0; pageIndex < 20; pageIndex += 1) {
  335 |     if (await waitForVisible(record, 1_000)) return;
  336 |     const next = await findEnabledNextButton(page);
  337 |     if (!next) break;
  338 |     await next.click();
  339 |     await page.waitForLoadState('networkidle').catch(() => {});
  340 |   }
  341 | 
  342 |   await expect(record).toBeVisible({ timeout: finalTimeout });
  343 | }
  344 | 
  345 | export async function tryCreateSimpleRecord(
  346 |   page: Page,
  347 |   path: string[],
  348 |   recordName: string,
  349 |   fields: FieldSpec[] = [],
  350 |   options: {
  351 |     createButtonNames?: string[];
  352 |     assertionTimeout?: number;
  353 |     listButtonNames?: string[];
  354 |     verifyWithSearchAndPagination?: boolean;
  355 |   } = {}
  356 | ) {
  357 |   await gotoMenu(page, path);
  358 |   if (options.listButtonNames) await clickExactControl(page, options.listButtonNames);
  359 |   await clickAny(page, options.createButtonNames ?? ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  360 |   for (const field of fields) {
  361 |     try {
  362 |       if (field.type === 'select') {
  363 |         await chooseOption(page, field.labels, String(field.value)).catch(async (error) => {
  364 |           if (!field.fallbackToFirstOption) throw error;
  365 |           await chooseFirstAvailableOption(page, field.labels);
  366 |         });
  367 |       } else {
  368 |         await fillField(page, field.labels, field.value);
  369 |       }
  370 |     } catch (error) {
  371 |       if (!field.optional) throw error;
  372 |     }
```