# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05-permissions-audit.spec.ts >> CT020 - workflow com perfil correto/incorreto, aprovacao e rejeicao
- Location: tests/05-permissions-audit.spec.ts:39:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: page.goto: Test timeout of 90000ms exceeded.
Call log:
  - navigating to "https://4s.ruatrez.com/", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - img "APP 4S" [ref=e7]
    - generic [ref=e8]: Inovando o Amanha com Ciencia, Tecnologia e Engenharia
  - generic [ref=e9]:
    - heading "Entrar" [level=1] [ref=e10]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13]: E-mail
        - textbox "seu@email.com" [active] [ref=e14]
      - generic [ref=e15]:
        - generic [ref=e16]: Senha
        - textbox "********" [ref=e17]
      - button "Entrar" [ref=e18] [cursor=pointer]
    - paragraph [ref=e20]: Acesso restrito. Solicite suas credenciais ao administrador do sistema.
```

# Test source

```ts
  1  | import { expect, type Page } from '@playwright/test';
  2  | import { config } from './config';
  3  | import { clickAny } from './ui';
  4  | 
  5  | export async function login(page: Page, email = config.adminEmail, password = config.adminPassword) {
> 6  |   await page.goto('/', { waitUntil: 'networkidle' });
     |              ^ Error: page.goto: Test timeout of 90000ms exceeded.
  7  | 
  8  |   const emailField = page.getByLabel(/e-?mail|email|usuario|usuário/i)
  9  |     .or(page.getByPlaceholder(/e-?mail|email|usuario|usuário/i))
  10 |     .or(page.locator('input[type="email"]'))
  11 |     .first();
  12 |   await emailField.fill(email);
  13 | 
  14 |   const passwordField = page.getByLabel(/senha|password/i)
  15 |     .or(page.getByPlaceholder(/senha|password/i))
  16 |     .or(page.locator('input[type="password"]'))
  17 |     .first();
  18 |   await passwordField.fill(password);
  19 | 
  20 |   await clickAny(page, ['Entrar', 'Login', 'Acessar']);
  21 |   await page.waitForLoadState('networkidle').catch(() => {});
  22 |   await Promise.race([
  23 |     page.getByRole('heading', { name: /dashboard/i }).waitFor({ state: 'visible', timeout: 15_000 }),
  24 |     page.getByRole('button', { name: /dashboard/i }).waitFor({ state: 'visible', timeout: 15_000 }),
  25 |     page.getByText(/e-mail ou senha incorretos|credenciais invalidas|credenciais inválidas|senha invalida|senha inválida|login invalido|login inválido/i)
  26 |       .waitFor({ state: 'visible', timeout: 15_000 })
  27 |   ]).catch(() => {});
  28 |   await expect(page.locator('body')).not.toHaveText(/credenciais invalidas|credenciais inválidas|senha invalida|senha inválida|login invalido|login inválido/i);
  29 | }
  30 | 
  31 | export async function logout(page: Page) {
  32 |   await clickAny(page, ['Sair', 'Logout', 'Encerrar sessao', 'Encerrar sessão', '⏻']);
  33 |   await page.waitForLoadState('networkidle').catch(() => {});
  34 | }
  35 | 
```