import { expect, type Page } from '@playwright/test';
import { config } from '../config';
import { login, logout } from '../auth';
import { clickAny } from '../ui';

export class AuthPage {
  constructor(private readonly page: Page) {}

  async loginAsAdmin() {
    await login(this.page);
  }

  async login(email = config.adminEmail, password = config.adminPassword) {
    await login(this.page, email, password);
  }

  async logout() {
    await logout(this.page);
  }

  async invalidLogin() {
    await this.page.goto(config.baseURL, { waitUntil: 'networkidle' });
    await this.page.locator('input[type="email"], input[name*="email" i]').first().fill('invalid@example.test');
    await this.page.locator('input[type="password"]').first().fill('wrong-password');
    await clickAny(this.page, ['Entrar', 'Login', 'Acessar']);
    await expect(this.page.locator('body')).toHaveText(/invalid|inval|erro|senha|credencial/i);
  }

  async expectLoginForm() {
    await expect(this.page.locator('input[type="password"]')).toBeVisible();
  }

  async expectAuthenticated() {
    await expect(this.page.locator('body')).toBeVisible();
    await expect(this.page.locator('body')).toHaveText(/dashboard/i);
  }
}
