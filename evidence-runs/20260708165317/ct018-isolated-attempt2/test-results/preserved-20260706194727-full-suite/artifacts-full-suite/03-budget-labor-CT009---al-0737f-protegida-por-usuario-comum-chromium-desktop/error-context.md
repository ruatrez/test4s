# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03-budget-labor.spec.ts >> CT009 - alteracao de orcamento protegida por usuario comum
- Location: tests/03-budget-labor.spec.ts:41:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: /dashboard/i }).or(getByRole('button', { name: /dashboard/i })).first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('heading', { name: /dashboard/i }).or(getByRole('button', { name: /dashboard/i })).first()

```

```yaml
- complementary:
  - img "4S Engenharia"
  - text: Núcleo Financeiro
  - navigation:
    - button "◑ Orçamento ▶"
    - button "◫ Workflow ▶"
  - text: A
  - paragraph: AUTO-4S-20260706194727 Usuario Engenharia
  - paragraph: ENGENHARIA
  - button "⏻"
- main:
  - text: ENGENHARIA
  - heading "Orçamento Base" [level=1]
  - paragraph: Itens orçados por obra e categoria
  - button "+ Item Orçado"
  - combobox:
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
  - combobox:
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
  - textbox "Buscar item..."
  - paragraph: Orçado
  - paragraph: R$ 48.300,00
  - paragraph: Comprometido
  - paragraph: R$ 0,00
  - paragraph: Pago
  - paragraph: R$ 0,00
  - paragraph: Saldo
  - paragraph: R$ 48.300,00
  - text: 1-5 de 5 Itens por pagina
  - combobox:
    - option "10 por pagina" [selected]
    - option "20 por pagina"
    - option "50 por pagina"
    - option "100 por pagina"
  - button "Anterior" [disabled]
  - text: Pagina 1 de 1
  - button "Proxima" [disabled]
  - table:
    - rowgroup:
      - row "Código Item Obra Categoria Qtd V.Unit Total Comprometido Pago Saldo":
        - columnheader "Código"
        - columnheader "Item"
        - columnheader "Obra"
        - columnheader "Categoria"
        - columnheader "Qtd"
        - columnheader "V.Unit"
        - columnheader "Total"
        - columnheader "Comprometido"
        - columnheader "Pago"
        - columnheader "Saldo"
        - columnheader
    - rowgroup:
      - row "4S-514802-2026 AUTO-4S-20260706165333 Item orcado material AUTO-4S-20260706165333 Obra AUTO-4S-20260706165333 Materiais 100 un R$ 121,00 R$ 12.100,00 R$ 0,00 R$ 0,00 R$ 12.100,00 Editar Solicitar exclusão":
        - cell "4S-514802-2026"
        - cell "AUTO-4S-20260706165333 Item orcado material"
        - cell "AUTO-4S-20260706165333 Obra"
        - cell "AUTO-4S-20260706165333 Materiais"
        - cell "100 un"
        - cell "R$ 121,00"
        - cell "R$ 12.100,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.100,00"
        - cell "Editar Solicitar exclusão":
          - button "Editar"
          - button "Solicitar exclusão"
      - row "4S-840923-2026 AUTO-4S-20260706161854 Item orcado material AUTO-4S-20260706161854 Obra AUTO-4S-20260706161854 Materiais 100 un R$ 121,00 R$ 12.100,00 R$ 0,00 R$ 0,00 R$ 12.100,00 Editar Solicitar exclusão":
        - cell "4S-840923-2026"
        - cell "AUTO-4S-20260706161854 Item orcado material"
        - cell "AUTO-4S-20260706161854 Obra"
        - cell "AUTO-4S-20260706161854 Materiais"
        - cell "100 un"
        - cell "R$ 121,00"
        - cell "R$ 12.100,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.100,00"
        - cell "Editar Solicitar exclusão":
          - button "Editar"
          - button "Solicitar exclusão"
      - row "4S-485511-2026 AUTO-4S-20260706154931 Item orcado material AUTO-4S-20260706154931 Obra AUTO-4S-20260706154931 Materiais 100 un R$ 120,00 R$ 12.000,00 R$ 0,00 R$ 0,00 R$ 12.000,00 Editar Solicitar exclusão":
        - cell "4S-485511-2026"
        - cell "AUTO-4S-20260706154931 Item orcado material"
        - cell "AUTO-4S-20260706154931 Obra"
        - cell "AUTO-4S-20260706154931 Materiais"
        - cell "100 un"
        - cell "R$ 120,00"
        - cell "R$ 12.000,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.000,00"
        - cell "Editar Solicitar exclusão":
          - button "Editar"
          - button "Solicitar exclusão"
      - row "4S-583377-2026 teste AUTO-4S-20260706114042 Obra AUTO-4S-20260706114042 Equipamentos 0 un R$ 0,00 R$ 0,00 R$ 0,00 R$ 0,00 R$ 0,00 Editar Solicitar exclusão":
        - cell "4S-583377-2026"
        - cell "teste"
        - cell "AUTO-4S-20260706114042 Obra"
        - cell "AUTO-4S-20260706114042 Equipamentos"
        - cell "0 un"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "Editar Solicitar exclusão":
          - button "Editar"
          - button "Solicitar exclusão"
      - row "4S-735699-2026 AUTO-4S-20260706114042 Item orcado material VIA MOBILIDADE - TROCA DE PISOS AUTO-4S-20260706114042 Materiais 100 un R$ 121,00 R$ 12.100,00 R$ 0,00 R$ 0,00 R$ 12.100,00 Editar Solicitar exclusão":
        - cell "4S-735699-2026"
        - cell "AUTO-4S-20260706114042 Item orcado material"
        - cell "VIA MOBILIDADE - TROCA DE PISOS"
        - cell "AUTO-4S-20260706114042 Materiais"
        - cell "100 un"
        - cell "R$ 121,00"
        - cell "R$ 12.100,00"
        - cell "R$ 0,00"
        - cell "R$ 0,00"
        - cell "R$ 12.100,00"
        - cell "Editar Solicitar exclusão":
          - button "Editar"
          - button "Solicitar exclusão"
  - text: 1-5 de 5 Itens por pagina
  - combobox:
    - option "10 por pagina" [selected]
    - option "20 por pagina"
    - option "50 por pagina"
    - option "100 por pagina"
  - button "Anterior" [disabled]
  - text: Pagina 1 de 1
  - button "Proxima" [disabled]
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
  12 |   await emailField.waitFor({ state: 'visible', timeout: 15_000 });
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
> 37 |   await expect(dashboard).toBeVisible({ timeout: 15_000 });
     |                           ^ Error: expect(locator).toBeVisible() failed
  38 | }
  39 | 
  40 | export async function logout(page: Page) {
  41 |   await clickAny(page, ['Sair', 'Logout', 'Encerrar sessao', 'Encerrar sessão', '⏻']);
  42 |   await page.waitForLoadState('networkidle').catch(() => {});
  43 | }
  44 | 
```