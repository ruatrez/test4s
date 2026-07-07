import { expect, type Page } from '@playwright/test';
import { config } from './config';
import { clickAny } from './ui';

type AuthProfile = 'admin' | 'operacional';

const invalidLoginPattern = /e-mail ou senha incorretos|credenciais invalidas|credenciais inválidas|senha invalida|senha inválida|login invalido|login inválido/i;

function loginForm(page: Page) {
  return page.getByLabel(/e-?mail|email|usuario|usuário/i)
    .or(page.getByPlaceholder(/e-?mail|email|usuario|usuário/i))
    .or(page.locator('input[type="email"]'))
    .first();
}

function authenticatedShell(page: Page) {
  return page.locator('button[title="Sair"]')
    .or(page.getByRole('button', { name: /sair|logout|⏻/i }))
    .first();
}

async function isVisible(locator: ReturnType<Page['locator']>) {
  return locator.isVisible({ timeout: 500 }).catch(() => false);
}

async function isExpectedLanding(page: Page, profile: AuthProfile) {
  const shellVisible = await isVisible(authenticatedShell(page));
  const dashboardVisible = await isVisible(
    page.getByRole('heading', { name: /dashboard/i })
      .or(page.getByRole('button', { name: /dashboard/i }))
      .first()
  );

  if (profile === 'admin') return dashboardVisible;

  const budgetLandingVisible = await isVisible(
    page.getByRole('heading', { name: /orçamento base|orcamento base/i })
      .or(page.getByText(/orçamento base|orcamento base/i))
      .first()
  );
  const operationalProfileVisible = shellVisible && await isVisible(page.getByText(/engenharia/i).first());
  const operationalUrl = /\/orcamento(?:[/?#]|$)/i.test(page.url());
  return dashboardVisible || budgetLandingVisible || operationalProfileVisible || (shellVisible && operationalUrl);
}

async function waitForAuthResult(page: Page, profile: AuthProfile) {
  const deadline = Date.now() + 15_000;
  while (Date.now() < deadline) {
    if (await page.getByText(invalidLoginPattern).first().isVisible({ timeout: 250 }).catch(() => false)) {
      throw new Error('Login rejected by application: invalid credentials message is visible.');
    }
    if (await isExpectedLanding(page, profile)) return;
    await page.waitForTimeout(250);
  }

  const bodyText = await page.locator('body').innerText({ timeout: 1_000 }).catch(() => '');
  throw new Error(`Login did not reach expected ${profile} landing. URL: ${page.url()}. Body: ${bodyText.slice(0, 500)}`);
}

export async function login(
  page: Page,
  email = config.adminEmail,
  password = config.adminPassword,
  profile: AuthProfile = email === config.adminEmail ? 'admin' : 'operacional'
) {
  await page.goto('/', { waitUntil: 'load' });

  if (await isExpectedLanding(page, profile)) return;
  if (await isVisible(authenticatedShell(page)) && !await isVisible(loginForm(page))) {
    await logout(page);
    await page.goto('/', { waitUntil: 'load' });
  }

  const emailField = loginForm(page);
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
  await waitForAuthResult(page, profile);
  await expect(page.locator('body')).not.toHaveText(invalidLoginPattern);
}

export async function logout(page: Page) {
  await clickAny(page, ['Sair', 'Logout', 'Encerrar sessao', 'Encerrar sessão', '⏻']);
  await page.waitForLoadState('networkidle').catch(() => {});
}
