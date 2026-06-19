import { type Page } from '@playwright/test';
import { clickAny, expectPageReady, gotoMenu } from '../ui';

export type MenuPath = string[];

export class NavigationPage {
  constructor(private readonly page: Page) {}

  async goto(path: MenuPath) {
    await gotoMenu(this.page, path);
    await expectPageReady(this.page);
  }

  async openRegistrationsShortcut(name: string) {
    await this.goto(['Cadastros']);
    await clickAny(this.page, [name]);
    await expectPageReady(this.page);
  }

  async validateMainRoutes(routes: MenuPath[]) {
    for (const route of routes) {
      await this.goto(route);
    }
  }
}
