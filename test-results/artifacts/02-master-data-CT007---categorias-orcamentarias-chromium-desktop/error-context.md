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

Locator: getByText(/AUTO-4S-20260703120000 Materiais/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/AUTO-4S-20260703120000 Materiais/i).first()

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
  - button "⚠ 35 aprovações pendentes"
  - text: ADMINISTRADOR
  - heading "Categorias OrÃ§amentÃ¡rias" [level=1]
  - paragraph: 108 categorias cadastradas
  - button "+ Nova Categoria"
  - textbox "Buscar categoria..."
  - table:
    - rowgroup:
      - row "CÃ³digo Nome Grupo Natureza Req. Rateio Status AÃ§Ãµes":
        - columnheader:
          - checkbox
        - columnheader "CÃ³digo"
        - columnheader "Nome"
        - columnheader "Grupo"
        - columnheader "Natureza"
        - columnheader "Req."
        - columnheader "Rateio"
        - columnheader "Status"
        - columnheader "AÃ§Ãµes"
    - rowgroup:
      - row "4S-713186-2026 AUTO-4S-20260703120000 Mao de obra MATERIAL CUSTO âœ“ â€“ ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-713186-2026"
        - cell "AUTO-4S-20260703120000 Mao de obra"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "âœ“"
        - cell "â€“"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-789660-2026 AUTO-4S-20260703145420 Subempreiteiros MATERIAL CUSTO âœ“ â€“ ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-789660-2026"
        - cell "AUTO-4S-20260703145420 Subempreiteiros"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "âœ“"
        - cell "â€“"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-269021-2026 AUTO-4S-20260703145420 Custos indiretos MATERIAL CUSTO âœ“ â€“ ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-269021-2026"
        - cell "AUTO-4S-20260703145420 Custos indiretos"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "âœ“"
        - cell "â€“"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-793454-2026 AUTO-4S-20260703145420 Equipamentos MATERIAL CUSTO âœ“ â€“ ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-793454-2026"
        - cell "AUTO-4S-20260703145420 Equipamentos"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "âœ“"
        - cell "â€“"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-981942-2026 AUTO-4S-20260703145420 Mao de obra MATERIAL CUSTO âœ“ â€“ ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-981942-2026"
        - cell "AUTO-4S-20260703145420 Mao de obra"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "âœ“"
        - cell "â€“"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-897772-2026 AUTO-4S-20260703145420 Materiais MATERIAL CUSTO âœ“ â€“ ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-897772-2026"
        - cell "AUTO-4S-20260703145420 Materiais"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "âœ“"
        - cell "â€“"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-245690-2026 AUTO-4S-20260703T000000 Mao de obra MATERIAL CUSTO âœ“ â€“ ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-245690-2026"
        - cell "AUTO-4S-20260703T000000 Mao de obra"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "âœ“"
        - cell "â€“"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-957267-2026 AUTO-4S-20260703T000000 Materiais MATERIAL CUSTO âœ“ â€“ ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-957267-2026"
        - cell "AUTO-4S-20260703T000000 Materiais"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "âœ“"
        - cell "â€“"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-330188-2026 AUTO-4S-20260703T000000 Equipamentos MATERIAL CUSTO âœ“ â€“ ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-330188-2026"
        - cell "AUTO-4S-20260703T000000 Equipamentos"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "âœ“"
        - cell "â€“"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
      - row "4S-856063-2026 AUTO-4S-20260703T000000 Custos indiretos MATERIAL CUSTO âœ“ â€“ ATIVA Editar Excluir":
        - cell:
          - checkbox
        - cell "4S-856063-2026"
        - cell "AUTO-4S-20260703T000000 Custos indiretos"
        - cell "MATERIAL"
        - cell "CUSTO"
        - cell "âœ“"
        - cell "â€“"
        - cell "ATIVA"
        - cell "Editar Excluir":
          - button "Editar"
          - button "Excluir"
  - text: 1-10 de 108 Itens por pagina
  - combobox:
    - option "10 por pagina" [selected]
    - option "20 por pagina"
    - option "50 por pagina"
    - option "100 por pagina"
  - button "Anterior" [disabled]
  - text: Pagina 1 de 11
  - button "Proxima"
```

# Test source

```ts
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
  211 |       }
  212 |     } catch (error) {
  213 |       if (!field.optional) throw error;
  214 |     }
  215 |   }
  216 |   await submitForm(page);
  217 |   if (options.listButtonNames) await clickExactControl(page, options.listButtonNames);
> 218 |   await expect(byText(page, recordName)).toBeVisible({ timeout: options.assertionTimeout });
      |                                          ^ Error: expect(locator).toBeVisible() failed
  219 | }
  220 | 
  221 | export async function assertPersistedAfterRefresh(page: Page, text: string, timeout?: number) {
  222 |   await page.reload({ waitUntil: 'networkidle' });
  223 |   await expect(byText(page, text)).toBeVisible({ timeout });
  224 | }
  225 | 
  226 | export async function tryEditCurrentRecord(page: Page, fields: FieldSpec[]) {
  227 |   await clickAny(page, ['Editar', 'Alterar']).catch(() => {});
  228 |   for (const field of fields) {
  229 |     if (field.type === 'select') {
  230 |       await chooseOption(page, field.labels, String(field.value)).catch(() => {});
  231 |     } else {
  232 |       await fillField(page, field.labels, field.value).catch(() => {});
  233 |     }
  234 |   }
  235 |   await submitForm(page);
  236 | }
  237 | 
  238 | export async function tryCancelInactivateOrDelete(page: Page) {
  239 |   await clickAny(page, ['Cancelar', 'Inativar', 'Excluir', 'Remover']);
  240 |   await fillField(page, ['justificativa', 'observacao', 'observação'], 'Acao automatizada de teste').catch(() => {});
  241 |   await clickAny(page, ['Confirmar', 'Salvar', 'Sim', 'Enviar']).catch(() => {});
  242 |   await page.waitForLoadState('networkidle').catch(() => {});
  243 | }
  244 | 
```