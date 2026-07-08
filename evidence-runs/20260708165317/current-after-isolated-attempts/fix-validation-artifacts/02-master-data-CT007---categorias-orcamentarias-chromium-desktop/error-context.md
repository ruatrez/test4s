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

Locator: getByText(/AUTO-4S-20260706122306 Custos indiretos/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/AUTO-4S-20260706122306 Custos indiretos/i).first()

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
  - paragraph: 11 categorias cadastradas
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
      - row "4S-994972-2026 AUTO-4S-20260706114042 Subempreiteiros MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-994972-2026"
        - cell "AUTO-4S-20260706114042 Subempreiteiros"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-707543-2026 AUTO-4S-20260706114042 Materiais MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-707543-2026"
        - cell "AUTO-4S-20260706114042 Materiais"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-988446-2026 AUTO-4S-20260706114042 Mao de obra MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-988446-2026"
        - cell "AUTO-4S-20260706114042 Mao de obra"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "Sim"
        - cell "Não"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-347781-2026 Teste MATERIAL CUSTO Sim Não ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-347781-2026"
        - cell "Teste"
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
  - text: 1-10 de 11 Itens por pagina
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
  160 |     page.getByRole('option', { name: optionPattern }),
  161 |     page.locator('[role="option"], li, [data-radix-select-item], [data-value]').filter({ hasText: optionPattern }),
  162 |     page.getByText(optionPattern)
  163 |   ]);
  164 |   if (!optionTarget) {
  165 |     throw new Error(`Could not find option "${value}" for: ${labels.join(' | ')}`);
  166 |   }
  167 |   await optionTarget.click();
  168 | }
  169 | 
  170 | export async function expectSelectedOption(page: Page, labels: string[], expectedValue: string) {
  171 |   const candidates = labels.flatMap((label) => {
  172 |     const labelText = xpathStartsWithText(label);
  173 |     return [
  174 |       page.getByLabel(new RegExp(label, 'i')),
  175 |       page.locator(`select[name*="${label}" i]`),
  176 |       page.locator(`xpath=//*[${labelText} and ./select]//select`),
  177 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
  178 |       page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
  179 |     ];
  180 |   });
  181 |   const target = await firstVisible(candidates);
  182 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  183 | 
  184 |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  185 |   const select = tagName === 'select'
  186 |     ? target
  187 |     : await firstVisible([target.locator('select')]);
  188 |   const selectedText = select
  189 |     ? await select.evaluate((element) => {
  190 |       const selectElement = element as HTMLSelectElement;
  191 |       return (selectElement.selectedOptions[0]?.textContent || '').replace(/\s+/g, ' ').trim();
  192 |     })
  193 |     : await target.innerText().catch(() => '');
  194 |   expect(normalizeText(selectedText).toLowerCase()).toContain(normalizeText(expectedValue).toLowerCase());
  195 | }
  196 | 
  197 | export async function chooseFirstAvailableOption(page: Page, labels: string[]) {
  198 |   const candidates = labels.flatMap((label) => [
  199 |     page.getByLabel(new RegExp(label, 'i')),
  200 |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  201 |   ]);
  202 |   const target = await firstVisible(candidates);
  203 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  204 |   const optionValue = await target.locator('option').evaluateAll((options) => {
  205 |     const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
  206 |     return option ? option.value : '';
  207 |   });
  208 |   if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
  209 |   await target.selectOption(optionValue);
  210 | }
  211 | 
  212 | export async function submitForm(page: Page) {
  213 |   const primarySubmit = await firstVisible([
  214 |     page.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
  215 |     page.locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i })
  216 |   ]);
  217 |   if (primarySubmit) {
  218 |     await primarySubmit.click();
  219 |   } else {
  220 |     await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  221 |   }
  222 |   await page.waitForLoadState('networkidle').catch(() => {});
  223 |   await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
  224 | }
  225 | 
  226 | export async function expectPageReady(page: Page, expectedTexts: string[] = []) {
  227 |   await expect(page.locator('body')).toBeVisible();
  228 |   await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not/i);
  229 |   for (const text of expectedTexts) {
  230 |     await expect(byText(page, text)).toBeVisible();
  231 |   }
  232 | }
  233 | 
  234 | export async function tryCreateSimpleRecord(
  235 |   page: Page,
  236 |   path: string[],
  237 |   recordName: string,
  238 |   fields: FieldSpec[] = [],
  239 |   options: { createButtonNames?: string[]; assertionTimeout?: number; listButtonNames?: string[] } = {}
  240 | ) {
  241 |   await gotoMenu(page, path);
  242 |   if (options.listButtonNames) await clickExactControl(page, options.listButtonNames);
  243 |   await clickAny(page, options.createButtonNames ?? ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  244 |   for (const field of fields) {
  245 |     try {
  246 |       if (field.type === 'select') {
  247 |         await chooseOption(page, field.labels, String(field.value)).catch(async (error) => {
  248 |           if (!field.fallbackToFirstOption) throw error;
  249 |           await chooseFirstAvailableOption(page, field.labels);
  250 |         });
  251 |       } else {
  252 |         await fillField(page, field.labels, field.value);
  253 |       }
  254 |     } catch (error) {
  255 |       if (!field.optional) throw error;
  256 |     }
  257 |   }
  258 |   await submitForm(page);
  259 |   if (options.listButtonNames) await clickExactControl(page, options.listButtonNames);
> 260 |   await expect(byText(page, recordName)).toBeVisible({ timeout: options.assertionTimeout });
      |                                          ^ Error: expect(locator).toBeVisible() failed
  261 | }
  262 | 
  263 | export async function assertPersistedAfterRefresh(page: Page, text: string, timeout?: number) {
  264 |   await page.reload({ waitUntil: 'networkidle' });
  265 |   await expect(byText(page, text)).toBeVisible({ timeout });
  266 | }
  267 | 
  268 | export async function tryEditCurrentRecord(page: Page, fields: FieldSpec[]) {
  269 |   await clickAny(page, ['Editar', 'Alterar']).catch(() => {});
  270 |   for (const field of fields) {
  271 |     if (field.type === 'select') {
  272 |       await chooseOption(page, field.labels, String(field.value)).catch(() => {});
  273 |     } else {
  274 |       await fillField(page, field.labels, field.value).catch(() => {});
  275 |     }
  276 |   }
  277 |   await submitForm(page);
  278 | }
  279 | 
  280 | export async function tryCancelInactivateOrDelete(page: Page) {
  281 |   await clickAny(page, ['Cancelar', 'Inativar', 'Excluir', 'Remover']);
  282 |   await fillField(page, ['justificativa', 'observacao', 'observação'], 'Acao automatizada de teste').catch(() => {});
  283 |   await clickAny(page, ['Confirmar', 'Salvar', 'Sim', 'Enviar']).catch(() => {});
  284 |   await page.waitForLoadState('networkidle').catch(() => {});
  285 | }
  286 | 
```