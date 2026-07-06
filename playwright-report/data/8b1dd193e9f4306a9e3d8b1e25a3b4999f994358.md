# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-master-data.spec.ts >> CT007 - categorias orcamentarias
- Location: tests/02-master-data.spec.ts:53:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/AUTO-4S-20260706123151 Equipamentos/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/AUTO-4S-20260706123151 Equipamentos/i).first()

```

```yaml
- complementary:
  - img "4S Engenharia"
  - text: Núcleo Financeiro
  - navigation:
    - button "◈ Dashboard"
    - button "⊞ Cadastros"
    - button "⊙ Configurações ▶"
    - button "Clientes e Contratos"
    - button "Obras e Centros"
    - button "Fornecedores"
    - button "Categorias Orç."
    - button "Colaboradores"
    - button "Usuários"
    - button "◑ Orçamento ▶"
    - button "◐ Suprimentos ▶"
    - button "◧ Financeiro ▶"
    - button "◫ Workflow ▶"
  - text: H
  - paragraph: Hello
  - paragraph: ADMINISTRADOR
  - button "⏻"
- main:
  - text: ADMINISTRADOR
  - heading "Categorias Orçamentárias" [level=1]
  - paragraph: 17 categorias cadastradas
  - button "+ Nova Categoria"
  - textbox "Buscar categoria..."
  - table:
    - rowgroup:
      - row "Código Nome Grupo Natureza Req. Rateio Status Ações":
        - columnheader:
          - checkbox
        - columnheader "Código"
        - columnheader "Nome"
        - columnheader "Grupo"
        - columnheader "Natureza"
        - columnheader "Req."
        - columnheader "Rateio"
        - columnheader "Status"
        - columnheader "Ações"
    - rowgroup:
      - row "4S-305459-2026 AUTO-4S-20260706123151 Materiais MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-305459-2026"
        - cell "AUTO-4S-20260706123151 Materiais"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-389564-2026 AUTO-4S-20260706123151 Mao de obra MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-389564-2026"
        - cell "AUTO-4S-20260706123151 Mao de obra"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-734152-2026 AUTO-4S-20260706123151 Mao de obra MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-734152-2026"
        - cell "AUTO-4S-20260706123151 Mao de obra"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-773518-2026 AUTO-4S-20260706122306 Equipamentos MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-773518-2026"
        - cell "AUTO-4S-20260706122306 Equipamentos"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-160811-2026 AUTO-4S-20260706122306 Materiais MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-160811-2026"
        - cell "AUTO-4S-20260706122306 Materiais"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-849358-2026 AUTO-4S-20260706122306 Custos indiretos MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-849358-2026"
        - cell "AUTO-4S-20260706122306 Custos indiretos"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-131391-2026 AUTO-4S-20260706122306 Subempreiteiros MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-131391-2026"
        - cell "AUTO-4S-20260706122306 Subempreiteiros"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-293269-2026 AUTO-4S-20260706122306 Mao de obra MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-293269-2026"
        - cell "AUTO-4S-20260706122306 Mao de obra"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-663537-2026 AUTO-4S-20260706114042 Equipamentos MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-663537-2026"
        - cell "AUTO-4S-20260706114042 Equipamentos"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-242849-2026 AUTO-4S-20260706114042 Custos indiretos MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-242849-2026"
        - cell "AUTO-4S-20260706114042 Custos indiretos"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
  - text: 1-10 de 17 Itens por pagina
  - combobox:
    - option "10 por pagina" [selected]
    - option "20 por pagina"
    - option "50 por pagina"
    - option "100 por pagina"
  - button "Anterior" [disabled]
  - text: Pagina 1 de 2
  - button "Proxima"
```

# Test source

```ts
  162 |     page.getByRole('option', { name: optionPattern }),
  163 |     page.locator('[role="option"], li, [data-radix-select-item], [data-value]').filter({ hasText: optionPattern }),
  164 |     page.getByText(optionPattern)
  165 |   ]);
  166 |   if (!optionTarget) {
  167 |     throw new Error(`Could not find option "${value}" for: ${labels.join(' | ')}`);
  168 |   }
  169 |   await optionTarget.click();
  170 | }
  171 | 
  172 | export async function expectSelectedOption(page: Page, labels: string[], expectedValue: string) {
  173 |   const candidates = labels.flatMap((label) => {
  174 |     const labelText = xpathStartsWithText(label);
  175 |     return [
  176 |       page.getByLabel(new RegExp(label, 'i')),
  177 |       page.locator(`select[name*="${label}" i]`),
  178 |       page.locator(`xpath=//*[${labelText} and ./select]//select`),
  179 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
  180 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
  181 |     ];
  182 |   });
  183 |   const target = await firstVisible(candidates);
  184 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  185 | 
  186 |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  187 |   const select = tagName === 'select'
  188 |     ? target
  189 |     : await firstVisible([target.locator('select')]);
  190 |   const selectedText = select
  191 |     ? await select.evaluate((element) => {
  192 |       const selectElement = element as HTMLSelectElement;
  193 |       return (selectElement.selectedOptions[0]?.textContent || '').replace(/\s+/g, ' ').trim();
  194 |     })
  195 |     : await target.innerText().catch(() => '');
  196 |   expect(normalizeText(selectedText).toLowerCase()).toContain(normalizeText(expectedValue).toLowerCase());
  197 | }
  198 | 
  199 | export async function chooseFirstAvailableOption(page: Page, labels: string[]) {
  200 |   const candidates = labels.flatMap((label) => [
  201 |     page.getByLabel(new RegExp(label, 'i')),
  202 |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  203 |   ]);
  204 |   const target = await firstVisible(candidates);
  205 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  206 |   const optionValue = await target.locator('option').evaluateAll((options) => {
  207 |     const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
  208 |     return option ? option.value : '';
  209 |   });
  210 |   if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
  211 |   await target.selectOption(optionValue);
  212 | }
  213 | 
  214 | export async function submitForm(page: Page) {
  215 |   const primarySubmit = await firstVisible([
  216 |     page.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
  217 |     page.locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i })
  218 |   ]);
  219 |   if (primarySubmit) {
  220 |     await primarySubmit.click();
  221 |   } else {
  222 |     await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  223 |   }
  224 |   await page.waitForLoadState('networkidle').catch(() => {});
  225 |   await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
  226 | }
  227 | 
  228 | export async function expectPageReady(page: Page, expectedTexts: string[] = []) {
  229 |   await expect(page.locator('body')).toBeVisible();
  230 |   await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not/i);
  231 |   for (const text of expectedTexts) {
  232 |     await expect(byText(page, text)).toBeVisible();
  233 |   }
  234 | }
  235 | 
  236 | export async function tryCreateSimpleRecord(
  237 |   page: Page,
  238 |   path: string[],
  239 |   recordName: string,
  240 |   fields: FieldSpec[] = [],
  241 |   options: { createButtonNames?: string[]; assertionTimeout?: number; listButtonNames?: string[] } = {}
  242 | ) {
  243 |   await gotoMenu(page, path);
  244 |   if (options.listButtonNames) await clickExactControl(page, options.listButtonNames);
  245 |   await clickAny(page, options.createButtonNames ?? ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  246 |   for (const field of fields) {
  247 |     try {
  248 |       if (field.type === 'select') {
  249 |         await chooseOption(page, field.labels, String(field.value)).catch(async (error) => {
  250 |           if (!field.fallbackToFirstOption) throw error;
  251 |           await chooseFirstAvailableOption(page, field.labels);
  252 |         });
  253 |       } else {
  254 |         await fillField(page, field.labels, field.value);
  255 |       }
  256 |     } catch (error) {
  257 |       if (!field.optional) throw error;
  258 |     }
  259 |   }
  260 |   await submitForm(page);
  261 |   if (options.listButtonNames) await clickExactControl(page, options.listButtonNames);
> 262 |   await expect(byText(page, recordName)).toBeVisible({ timeout: options.assertionTimeout });
      |                                          ^ Error: expect(locator).toBeVisible() failed
  263 | }
  264 | 
  265 | export async function assertPersistedAfterRefresh(page: Page, text: string, timeout?: number) {
  266 |   await page.reload({ waitUntil: 'networkidle' });
  267 |   await expect(byText(page, text)).toBeVisible({ timeout });
  268 | }
  269 | 
  270 | export async function tryEditCurrentRecord(page: Page, fields: FieldSpec[]) {
  271 |   await clickAny(page, ['Editar', 'Alterar']).catch(() => {});
  272 |   for (const field of fields) {
  273 |     if (field.type === 'select') {
  274 |       await chooseOption(page, field.labels, String(field.value)).catch(() => {});
  275 |     } else {
  276 |       await fillField(page, field.labels, field.value).catch(() => {});
  277 |     }
  278 |   }
  279 |   await submitForm(page);
  280 | }
  281 | 
  282 | export async function tryCancelInactivateOrDelete(page: Page) {
  283 |   await clickAny(page, ['Cancelar', 'Inativar', 'Excluir', 'Remover']);
  284 |   await fillField(page, ['justificativa', 'observacao', 'observação'], 'Acao automatizada de teste').catch(() => {});
  285 |   await clickAny(page, ['Confirmar', 'Salvar', 'Sim', 'Enviar']).catch(() => {});
  286 |   await page.waitForLoadState('networkidle').catch(() => {});
  287 | }
  288 | 
```