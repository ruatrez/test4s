import { Page } from '@playwright/test';
import { login, logout } from '../support/auth';

export class AuthPage {
  constructor(private readonly page: Page) {}

  async loginAsAdmin() {
    await login(this.page);
  }

  async login(email: string, password: string) {
    await login(this.page, email, password);
  }

  async logout() {
    await logout(this.page);
  }
}
