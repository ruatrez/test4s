import { expect, Page } from '@playwright/test';
import { config } from './config';
import { clickAny } from './ui';

export async function login(page: Page, email = config.adminEmail, password = config.adminPassword) {
  await page.goto('/', { waitUntil: 'networkidle' });

  const emailField = page.getByLabel(/e-?mail|email|usuario|usuário/i)
    .or(page.getByPlaceholder(/e-?mail|email|usuario|usuário/i))
    .or(page.locator('input[type="email"]'))
    .first();
  await emailField.fill(email);

  const passwordField = page.getByLabel(/senha|password/i)
    .or(page.getByPlaceholder(/senha|password/i))
    .or(page.locator('input[type="password"]'))
    .first();
  await passwordField.fill(password);

  await clickAny(page, ['Entrar', 'Login', 'Acessar']);
  await page.waitForLoadState('networkidle').catch(() => {});
  await Promise.race([
    page.getByRole('heading', { name: /dashboard/i }).waitFor({ state: 'visible', timeout: 15_000 }),
    page.getByRole('button', { name: /dashboard/i }).waitFor({ state: 'visible', timeout: 15_000 }),
    page.getByText(/e-mail ou senha incorretos|credenciais invalidas|credenciais inválidas|senha invalida|senha inválida|login invalido|login inválido/i)
      .waitFor({ state: 'visible', timeout: 15_000 })
  ]).catch(() => {});
  await expect(page.locator('body')).not.toHaveText(/credenciais invalidas|credenciais inválidas|senha invalida|senha inválida|login invalido|login inválido/i);
}

export async function logout(page: Page) {
  await clickAny(page, ['Sair', 'Logout', 'Encerrar sessao', 'Encerrar sessão', '⏻']);
  await page.waitForLoadState('networkidle').catch(() => {});
}
