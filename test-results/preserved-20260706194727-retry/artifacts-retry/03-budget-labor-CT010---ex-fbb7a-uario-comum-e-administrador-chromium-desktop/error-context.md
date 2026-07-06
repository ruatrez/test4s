# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03-budget-labor.spec.ts >> CT010 - exclusao de item orcado por usuario comum e administrador
- Location: tests/03-budget-labor.spec.ts:58:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByLabel(/e-?mail|email|usuario|usuário/i).or(getByPlaceholder(/e-?mail|email|usuario|usuário/i)).or(locator('input[type="email"]')).first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - complementary [ref=e4]:
    - generic [ref=e5]:
      - img "4S Engenharia" [ref=e7] [cursor=pointer]
      - generic [ref=e8]: Núcleo Financeiro
    - navigation [ref=e9]:
      - button "◑ Orçamento ▶" [ref=e11] [cursor=pointer]:
        - generic [ref=e12]: ◑
        - generic [ref=e13]: Orçamento
        - generic [ref=e14]: ▶
      - button "◫ Workflow ▶" [ref=e16] [cursor=pointer]:
        - generic [ref=e17]: ◫
        - generic [ref=e18]: Workflow
        - generic [ref=e19]: ▶
    - generic [ref=e20]:
      - generic [ref=e22]: A
      - generic [ref=e23]:
        - paragraph [ref=e24]: AUTO-4S-20260706194727 Usuario Engenharia
        - paragraph [ref=e25]: ENGENHARIA
      - button "⏻" [ref=e26] [cursor=pointer]
  - main [ref=e27]:
    - generic [ref=e29]: ENGENHARIA
    - generic [ref=e31]:
      - generic [ref=e32]:
        - generic [ref=e33]:
          - heading "Orçamento Base" [level=1] [ref=e34]
          - paragraph [ref=e35]: Itens orçados por obra e categoria
        - button "+ Item Orçado" [ref=e36] [cursor=pointer]
      - generic [ref=e37]:
        - combobox [ref=e38]:
          - option "Todas as obras" [selected]
          - option "AUTO-4S-20260706165333 Obra"
          - option "AUTO-4S-20260706161854 Obra"
          - option "AUTO-4S-20260706154931 Obra"
          - option "AUTO-4S-20260706132953 Obra"
          - option "AUTO-4S-20260706123151 Obra"
          - option "AUTO-4S-20260706122306 Obra"
          - option "AUTO-4S-20260706114042 Obra"
          - option "VIA MOBILIDADE - TROCA DE PISOS"
          - option "4S-OBR-053-CAP-VMO"
        - combobox [ref=e39]:
          - option "Todas as categorias" [selected]
          - option "AUTO-4S-20260706194727 Subempreiteiros"
          - option "AUTO-4S-20260706194727 Mao de obra"
          - option "AUTO-4S-20260706194727 Materiais"
          - option "AUTO-4S-20260706194727 Equipamentos"
          - option "AUTO-4S-20260706194727 Custos indiretos"
          - option "AUTO-4S-20260706191900 Subempreiteiros"
          - option "AUTO-4S-20260706191900 Equipamentos"
          - option "AUTO-4S-20260706191900 Custos indiretos"
          - option "AUTO-4S-20260706191900 Materiais"
          - option "AUTO-4S-20260706191900 Mao de obra"
          - option "AUTO-4S-20260706165333 Mao de obra"
          - option "AUTO-4S-20260706165333 Equipamentos"
          - option "AUTO-4S-20260706165333 Subempreiteiros"
          - option "AUTO-4S-20260706165333 Materiais"
          - option "AUTO-4S-20260706165333 Custos indiretos"
          - option "AUTO-4S-20260706161854 Subempreiteiros"
          - option "AUTO-4S-20260706161854 Equipamentos"
          - option "AUTO-4S-20260706161854 Custos indiretos"
          - option "AUTO-4S-20260706161854 Materiais"
          - option "AUTO-4S-20260706161854 Mao de obra"
          - option "AUTO-4S-20260706154931 Materiais"
          - option "AUTO-4S-20260706154931 Custos indiretos"
          - option "AUTO-4S-20260706154931 Mao de obra"
          - option "AUTO-4S-20260706154931 Equipamentos"
          - option "AUTO-4S-20260706154931 Subempreiteiros"
          - option "AUTO-4S-20260706153815 Subempreiteiros"
          - option "AUTO-4S-20260706153815 Mao de obra"
          - option "AUTO-4S-20260706153815 Custos indiretos"
          - option "AUTO-4S-20260706153815 Equipamentos"
          - option "AUTO-4S-20260706153815 Materiais"
          - option "AUTO-4S-20260706153520 Materiais"
          - option "AUTO-4S-20260706153520 Mao de obra"
          - option "AUTO-4S-20260706153520 Subempreiteiros"
          - option "AUTO-4S-20260706153520 Equipamentos"
          - option "AUTO-4S-20260706132953 Mao de obra"
          - option "AUTO-4S-20260706132953 Materiais"
          - option "AUTO-4S-20260706132953 Mao de obra"
          - option "AUTO-4S-20260706123151 Mao de obra"
          - option "AUTO-4S-20260706123151 Materiais"
          - option "AUTO-4S-20260706123151 Equipamentos"
          - option "AUTO-4S-20260706123151 Materiais"
          - option "AUTO-4S-20260706123151 Mao de obra"
          - option "AUTO-4S-20260706123151 Mao de obra"
          - option "AUTO-4S-20260706122306 Equipamentos"
          - option "AUTO-4S-20260706122306 Materiais"
          - option "AUTO-4S-20260706122306 Custos indiretos"
          - option "AUTO-4S-20260706122306 Subempreiteiros"
          - option "AUTO-4S-20260706122306 Mao de obra"
          - option "AUTO-4S-20260706114042 Equipamentos"
          - option "AUTO-4S-20260706114042 Custos indiretos"
          - option "AUTO-4S-20260706114042 Subempreiteiros"
          - option "AUTO-4S-20260706114042 Materiais"
          - option "AUTO-4S-20260706114042 Mao de obra"
          - option "Teste"
        - textbox "Buscar item..." [ref=e40]
      - generic [ref=e41]:
        - generic [ref=e42]:
          - paragraph [ref=e43]: Orçado
          - paragraph [ref=e44]: R$ 48.300,00
        - generic [ref=e45]:
          - paragraph [ref=e46]: Comprometido
          - paragraph [ref=e47]: R$ 0,00
        - generic [ref=e48]:
          - paragraph [ref=e49]: Pago
          - paragraph [ref=e50]: R$ 0,00
        - generic [ref=e51]:
          - paragraph [ref=e52]: Saldo
          - paragraph [ref=e53]: R$ 48.300,00
      - generic [ref=e54]:
        - generic [ref=e55]:
          - generic [ref=e56]: 1-5 de 5
          - generic [ref=e57]:
            - generic [ref=e58]: Itens por pagina
            - combobox [ref=e59]:
              - option "10 por pagina" [selected]
              - option "20 por pagina"
              - option "50 por pagina"
              - option "100 por pagina"
            - button "Anterior" [disabled] [ref=e60] [cursor=pointer]
            - generic [ref=e61]: Pagina 1 de 1
            - button "Proxima" [disabled] [ref=e62] [cursor=pointer]
        - table [ref=e63]:
          - rowgroup [ref=e64]:
            - row "Código Item Obra Categoria Qtd V.Unit Total Comprometido Pago Saldo" [ref=e65]:
              - columnheader "Código" [ref=e66]
              - columnheader "Item" [ref=e67]
              - columnheader "Obra" [ref=e68]
              - columnheader "Categoria" [ref=e69]
              - columnheader "Qtd" [ref=e70]
              - columnheader "V.Unit" [ref=e71]
              - columnheader "Total" [ref=e72]
              - columnheader "Comprometido" [ref=e73]
              - columnheader "Pago" [ref=e74]
              - columnheader "Saldo" [ref=e75]
              - columnheader [ref=e76]
          - rowgroup [ref=e77]:
            - row "4S-514802-2026 AUTO-4S-20260706165333 Item orcado material AUTO-4S-20260706165333 Obra AUTO-4S-20260706165333 Materiais 100 un R$ 121,00 R$ 12.100,00 R$ 0,00 R$ 0,00 R$ 12.100,00 Editar Solicitar exclusão" [ref=e78]:
              - cell "4S-514802-2026" [ref=e79]
              - cell "AUTO-4S-20260706165333 Item orcado material" [ref=e80]:
                - generic [ref=e81]: AUTO-4S-20260706165333 Item orcado material
              - cell "AUTO-4S-20260706165333 Obra" [ref=e82]
              - cell "AUTO-4S-20260706165333 Materiais" [ref=e83]
              - cell "100 un" [ref=e84]
              - cell "R$ 121,00" [ref=e85]
              - cell "R$ 12.100,00" [ref=e86]
              - cell "R$ 0,00" [ref=e87]
              - cell "R$ 0,00" [ref=e88]
              - cell "R$ 12.100,00" [ref=e89]
              - cell "Editar Solicitar exclusão" [ref=e90]:
                - generic [ref=e91]:
                  - button "Editar" [ref=e92] [cursor=pointer]
                  - button "Solicitar exclusão" [ref=e93] [cursor=pointer]
            - row "4S-840923-2026 AUTO-4S-20260706161854 Item orcado material AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Materiais 100 un R$ 121,00 R$ 12.100,00 R$ 0,00 R$ 0,00 R$ 12.100,00 Editar Solicitar exclusão" [ref=e94]:
              - cell "4S-840923-2026" [ref=e95]
              - cell "AUTO-4S-20260706161854 Item orcado material" [ref=e96]:
                - generic [ref=e97]: AUTO-4S-20260706161854 Item orcado material
              - cell "AUTO-4S-20260706161854 Obra" [ref=e98]
              - cell "AUTO-4S-20260706161854 Materiais" [ref=e99]
              - cell "100 un" [ref=e100]
              - cell "R$ 121,00" [ref=e101]
              - cell "R$ 12.100,00" [ref=e102]
              - cell "R$ 0,00" [ref=e103]
              - cell "R$ 0,00" [ref=e104]
              - cell "R$ 12.100,00" [ref=e105]
              - cell "Editar Solicitar exclusão" [ref=e106]:
                - generic [ref=e107]:
                  - button "Editar" [ref=e108] [cursor=pointer]
                  - button "Solicitar exclusão" [ref=e109] [cursor=pointer]
            - row "4S-485511-2026 AUTO-4S-20260706154931 Item orcado material AUTO-4S-20260706154931 Obra AUTO-4S-20260706154931 Materiais 100 un R$ 120,00 R$ 12.000,00 R$ 0,00 R$ 0,00 R$ 12.000,00 Editar Solicitar exclusão" [ref=e110]:
              - cell "4S-485511-2026" [ref=e111]
              - cell "AUTO-4S-20260706154931 Item orcado material" [ref=e112]:
                - generic [ref=e113]: AUTO-4S-20260706154931 Item orcado material
              - cell "AUTO-4S-20260706154931 Obra" [ref=e114]
              - cell "AUTO-4S-20260706154931 Materiais" [ref=e115]
              - cell "100 un" [ref=e116]
              - cell "R$ 120,00" [ref=e117]
              - cell "R$ 12.000,00" [ref=e118]
              - cell "R$ 0,00" [ref=e119]
              - cell "R$ 0,00" [ref=e120]
              - cell "R$ 12.000,00" [ref=e121]
              - cell "Editar Solicitar exclusão" [ref=e122]:
                - generic [ref=e123]:
                  - button "Editar" [ref=e124] [cursor=pointer]
                  - button "Solicitar exclusão" [ref=e125] [cursor=pointer]
            - row "4S-583377-2026 teste AUTO-4S-20260706114042 Obra AUTO-4S-20260706114042 Equipamentos 0 un R$ 0,00 R$ 0,00 R$ 0,00 R$ 0,00 R$ 0,00 Editar Solicitar exclusão" [ref=e126]:
              - cell "4S-583377-2026" [ref=e127]
              - cell "teste" [ref=e128]:
                - generic [ref=e129]: teste
              - cell "AUTO-4S-20260706114042 Obra" [ref=e130]
              - cell "AUTO-4S-20260706114042 Equipamentos" [ref=e131]
              - cell "0 un" [ref=e132]
              - cell "R$ 0,00" [ref=e133]
              - cell "R$ 0,00" [ref=e134]
              - cell "R$ 0,00" [ref=e135]
              - cell "R$ 0,00" [ref=e136]
              - cell "R$ 0,00" [ref=e137]
              - cell "Editar Solicitar exclusão" [ref=e138]:
                - generic [ref=e139]:
                  - button "Editar" [ref=e140] [cursor=pointer]
                  - button "Solicitar exclusão" [ref=e141] [cursor=pointer]
            - row "4S-735699-2026 AUTO-4S-20260706114042 Item orcado material VIA MOBILIDADE - TROCA DE PISOS AUTO-4S-20260706114042 Materiais 100 un R$ 121,00 R$ 12.100,00 R$ 0,00 R$ 0,00 R$ 12.100,00 Editar Solicitar exclusão" [ref=e142]:
              - cell "4S-735699-2026" [ref=e143]
              - cell "AUTO-4S-20260706114042 Item orcado material" [ref=e144]:
                - generic [ref=e145]: AUTO-4S-20260706114042 Item orcado material
              - cell "VIA MOBILIDADE - TROCA DE PISOS" [ref=e146]
              - cell "AUTO-4S-20260706114042 Materiais" [ref=e147]
              - cell "100 un" [ref=e148]
              - cell "R$ 121,00" [ref=e149]
              - cell "R$ 12.100,00" [ref=e150]
              - cell "R$ 0,00" [ref=e151]
              - cell "R$ 0,00" [ref=e152]
              - cell "R$ 12.100,00" [ref=e153]
              - cell "Editar Solicitar exclusão" [ref=e154]:
                - generic [ref=e155]:
                  - button "Editar" [ref=e156] [cursor=pointer]
                  - button "Solicitar exclusão" [ref=e157] [cursor=pointer]
        - generic [ref=e158]:
          - generic [ref=e159]: 1-5 de 5
          - generic [ref=e160]:
            - generic [ref=e161]: Itens por pagina
            - combobox [ref=e162]:
              - option "10 por pagina" [selected]
              - option "20 por pagina"
              - option "50 por pagina"
              - option "100 por pagina"
            - button "Anterior" [disabled] [ref=e163] [cursor=pointer]
            - generic [ref=e164]: Pagina 1 de 1
            - button "Proxima" [disabled] [ref=e165] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect, type Page } from '@playwright/test';
  2  | import { config } from './config';
  3  | import { clickAny } from './ui';
  4  | 
  5  | export async function login(page: Page, email = config.adminEmail, password = config.adminPassword) {
  6  |   await page.goto('/', { waitUntil: 'load' });
  7  | 
  8  |   const emailField = page.getByLabel(/e-?mail|email|usuario|usuário/i)
  9  |     .or(page.getByPlaceholder(/e-?mail|email|usuario|usuário/i))
  10 |     .or(page.locator('input[type="email"]'))
  11 |     .first();
> 12 |   await emailField.waitFor({ state: 'visible', timeout: 15_000 });
     |                    ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  13 |   await emailField.fill(email);
  14 | 
  15 |   const passwordField = page.getByLabel(/senha|password/i)
  16 |     .or(page.getByPlaceholder(/senha|password/i))
  17 |     .or(page.locator('input[type="password"]'))
  18 |     .first();
  19 |   await passwordField.fill(password);
  20 | 
  21 |   const loginButton = page.getByRole('button', { name: /entrar|login|acessar/i }).first();
  22 |   await expect(loginButton).toBeEnabled({ timeout: 15_000 });
  23 |   await loginButton.click();
  24 |   if (await page.getByRole('heading', { name: /entrar/i }).isVisible({ timeout: 1_000 }).catch(() => false)) {
  25 |     await passwordField.press('Enter');
  26 |   }
  27 |   await page.waitForLoadState('networkidle').catch(() => {});
  28 |   const dashboard = page.getByRole('heading', { name: /dashboard/i })
  29 |     .or(page.getByRole('button', { name: /dashboard/i }))
  30 |     .first();
  31 |   await Promise.race([
  32 |     dashboard.waitFor({ state: 'visible', timeout: 15_000 }),
  33 |     page.getByText(/e-mail ou senha incorretos|credenciais invalidas|credenciais inválidas|senha invalida|senha inválida|login invalido|login inválido/i)
  34 |       .waitFor({ state: 'visible', timeout: 15_000 })
  35 |   ]).catch(() => {});
  36 |   await expect(page.locator('body')).not.toHaveText(/e-mail ou senha incorretos|credenciais invalidas|credenciais inválidas|senha invalida|senha inválida|login invalido|login inválido/i);
  37 |   await expect(dashboard).toBeVisible({ timeout: 15_000 });
  38 | }
  39 | 
  40 | export async function logout(page: Page) {
  41 |   await clickAny(page, ['Sair', 'Logout', 'Encerrar sessao', 'Encerrar sessão', '⏻']);
  42 |   await page.waitForLoadState('networkidle').catch(() => {});
  43 | }
  44 | 
```