import { expect, type Page } from '@playwright/test';
import { config } from './config';
import { clickAny } from './ui';

export async function login(page: Page, email = config.adminEmail, password = config.adminPassword) {
  await page.goto('/', { waitUntil: 'load' });

  const emailField = page.getByLabel(/e-?mail|email|usuario|usuário/i)
    .or(page.getByPlaceholder(/e-?mail|email|usuario|usuário/i))
    .or(page.locator('input[type="email"]'))
    .first();
  await emailField.waitFor({ state: 'visible', timeout: 15_000 });
  await emailField.fill(email);

  const passwordField = page.getByLabel(/senha|password/i)
    .or(page.getByPlaceholder(/senha|password/i))
    .or(page.locator('input[type="password"]'))
    .first();
  await passwordField.fill(password);

  const loginButton = page.getByRole('button', { name: /entrar|login|acessar/i }).first();
  await expect(loginButton).toBeEnabled({ timeout: 15_000 });
  await loginButton.click();
  if (await page.getByRole('heading', { name: /entrar/i }).isVisible({ timeout: 1_000 }).catch(() => false)) {
    await passwordField.press('Enter');
  }
  await page.waitForLoadState('networkidle').catch(() => {});
  const dashboard = page.getByRole('heading', { name: /dashboard/i })
    .or(page.getByRole('button', { name: /dashboard/i }))
    .first();
  await Promise.race([
    dashboard.waitFor({ state: 'visible', timeout: 15_000 }),
    page.getByText(/e-mail ou senha incorretos|credenciais invalidas|credenciais inválidas|senha invalida|senha inválida|login invalido|login inválido/i)
      .waitFor({ state: 'visible', timeout: 15_000 })
  ]).catch(() => {});
  await expect(page.locator('body')).not.toHaveText(/e-mail ou senha incorretos|credenciais invalidas|credenciais inválidas|senha invalida|senha inválida|login invalido|login inválido/i);
  await expect(dashboard).toBeVisible({ timeout: 15_000 });
}

export async function logout(page: Page) {
  await clickAny(page, ['Sair', 'Logout', 'Encerrar sessao', 'Encerrar sessão', '⏻']);
  await page.waitForLoadState('networkidle').catch(() => {});
}
