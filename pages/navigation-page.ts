import { Page } from '@playwright/test';
import { expectPageReady, gotoMenu } from '../support/ui';

export class NavigationPage {
  constructor(private readonly page: Page) {}

  async go(path: string[]) {
    await gotoMenu(this.page, path);
    await expectPageReady(this.page);
  }

  async validateRoute(path: string[]) {
    await this.go(path);
  }
}
