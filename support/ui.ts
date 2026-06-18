import { expect, Locator, Page } from '@playwright/test';

export type FieldInput =
  | { type?: 'text'; labels: string[]; value: string | number }
  | { type: 'select'; labels: string[]; value: string };

export function escapeRegex(text: string | number) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function byText(page: Page, text: string | number) {
  return page.getByText(new RegExp(escapeRegex(text), 'i')).first();
}

function xpathLiteral(text: string) {
  const value = String(text);
  if (!value.includes("'")) return `'${value}'`;
  if (!value.includes('"')) return `"${value}"`;
  return `concat('${value.replace(/'/g, "',\"'\",'")}')`;
}

async function firstVisible(locators: Locator[]) {
  for (const locator of locators) {
    if (await locator.count()) {
      const first = locator.first();
      if (await first.isVisible().catch(() => false)) return first;
    }
  }
  return null;
}

export async function clickAny(page: Page, names: Array<string | number>, options = {}) {
  const locators: Locator[] = [];
  for (const name of names) {
    const pattern = new RegExp(escapeRegex(name), 'i');
    locators.push(page.getByRole('button', { name: pattern }));
    locators.push(page.getByRole('link', { name: pattern }));
    locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
    locators.push(page.getByText(pattern));
  }
  if (names.some((name) => /novo|nova|adicionar|cadastrar|criar/i.test(String(name)))) {
    locators.push(page.locator('button, a, [role="button"]').filter({ hasText: /^\s*\+/ }));
  }
  const target = await firstVisible(locators);
  if (!target) throw new Error(`Could not find clickable control: ${names.join(' | ')}`);
  await target.click(options);
}

export async function gotoMenu(page: Page, menuPath: string[]) {
  for (let index = 0; index < menuPath.length; index += 1) {
    const segment = menuPath[index];
    const nextSegment = menuPath[index + 1];
    if (segment === 'Dashboard' && await page.getByRole('heading', { name: /dashboard/i }).count()) {
      continue;
    }
    if (nextSegment) {
      const childVisible = await page.locator('button, a, [role="button"]')
        .filter({ hasText: new RegExp(escapeRegex(nextSegment), 'i') })
        .first()
        .isVisible()
        .catch(() => false);
      if (childVisible) continue;
    }
    await clickAny(page, [segment]);
    await page.waitForLoadState('networkidle').catch(() => {});
  }
}

export async function fillField(page: Page, labels: string[], value: string | number) {
  const candidates: Locator[] = [];
  for (const label of labels) {
    const patterns = [new RegExp(label, 'i')];
    if (/^email$/i.test(label)) patterns.push(/e-?mail/i);
    for (const pattern of patterns) {
      candidates.push(page.getByLabel(pattern));
      candidates.push(page.getByPlaceholder(pattern));
    }
    candidates.push(page.locator(`input[name*="${label}" i]`));
    candidates.push(page.locator(`textarea[name*="${label}" i]`));
    candidates.push(page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and (./input or ./textarea)]//*[self::input or self::textarea]`));
  }
  const target = await firstVisible(candidates);
  if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
  await target.fill(String(value));
}

export async function chooseOption(page: Page, labels: string[], value: string) {
  const candidates = labels.flatMap((label) => [
    page.getByLabel(new RegExp(label, 'i')),
    page.locator(`select[name*="${label}" i]`),
    page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  ]);
  const target = await firstVisible(candidates);
  if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);

  const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  if (tagName === 'select') {
    const option = await target.locator('option').filter({ hasText: new RegExp(escapeRegex(value), 'i') }).first();
    if (await option.count()) {
      await target.selectOption({ label: await option.innerText() });
      return;
    }
  }

  await target.click();
  await clickAny(page, [value]);
}

export async function chooseFirstAvailableOption(page: Page, labels: string[]) {
  const candidates = labels.flatMap((label) => [
    page.getByLabel(new RegExp(label, 'i')),
    page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  ]);
  const target = await firstVisible(candidates);
  if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  const optionValue = await target.locator('option').evaluateAll((options) => {
    const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
    return option ? option.value : '';
  });
  if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
  await target.selectOption(optionValue);
}

export async function submitForm(page: Page) {
  const primarySubmit = await firstVisible([
    page.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
    page.locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i })
  ]);
  if (primarySubmit) {
    await primarySubmit.click();
  } else {
    await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  }
  await page.waitForLoadState('networkidle').catch(() => {});
  await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
}

export async function expectPageReady(page: Page, expectedTexts: string[] = []) {
  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not|cannot read/i);
  for (const text of expectedTexts) {
    await expect(byText(page, text)).toBeVisible();
  }
}

export async function tryCreateSimpleRecord(page: Page, menuPath: string[], recordName: string, fields: FieldInput[] = []) {
  await gotoMenu(page, menuPath);
  await clickAny(page, ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  for (const field of fields) {
    if (field.type === 'select') {
      await chooseOption(page, field.labels, field.value);
    } else {
      await fillField(page, field.labels, field.value);
    }
  }
  await submitForm(page);
  await expect(byText(page, recordName)).toBeVisible();
}

export async function assertPersistedAfterRefresh(page: Page, text: string) {
  await page.reload({ waitUntil: 'networkidle' });
  await expect(byText(page, text)).toBeVisible();
}
