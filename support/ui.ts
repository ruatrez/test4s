import { expect, type Locator, type Page } from '@playwright/test';

type SearchRoot = Page | Locator;

export type FieldSpec = {
  labels: string[];
  value: string | number;
  type?: 'select' | 'text';
  optional?: boolean;
  fallbackToFirstOption?: boolean;
};

export function byText(page: Page, text: string | RegExp) {
  const pattern = typeof text === 'string' ? new RegExp(escapeRegex(text), 'i') : text;
  return page.getByText(pattern).first();
}

export function escapeRegex(text: string) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeText(text: string) {
  return String(text).replace(/\s+/g, ' ').trim();
}

function optionMatches(option: { value: string; text: string }, expected: string) {
  const expectedText = normalizeText(expected).toLowerCase();
  const optionText = normalizeText(option.text).toLowerCase();
  const optionValue = normalizeText(option.value).toLowerCase();
  return optionText === expectedText
    || optionValue === expectedText
    || (expectedText.length > 2 && (optionText.includes(expectedText) || optionValue.includes(expectedText)));
}

function xpathLiteral(text: string) {
  const value = String(text);
  if (!value.includes("'")) return `'${value}'`;
  if (!value.includes('"')) return `"${value}"`;
  return `concat('${value.replace(/'/g, "',\"'\",'")}')`;
}

function xpathStartsWithText(text: string) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÀÂÃÉÊÍÓÔÕÚÇ';
  const lower = 'abcdefghijklmnopqrstuvwxyzáàâãéêíóôõúç';
  return `starts-with(translate(normalize-space(.), ${xpathLiteral(upper)}, ${xpathLiteral(lower)}), ${xpathLiteral(String(text).toLowerCase())})`;
}

export async function firstVisible(locators: Locator[]) {
  for (const locator of locators) {
    const count = await locator.count();
    for (let index = 0; index < count; index += 1) {
      const candidate = locator.nth(index);
      if (await candidate.isVisible().catch(() => false)) return candidate;
    }
  }
  return null;
}

async function waitForVisible(locator: Locator, timeout = 2_000) {
  return locator.waitFor({ state: 'visible', timeout }).then(() => true).catch(() => false);
}

async function isUsableModalContainer(locator: Locator) {
  if (!await locator.isVisible().catch(() => false)) return false;
  return await locator.locator('input, textarea, select, button, [role="button"]').count().then((count) => count > 0);
}

export async function visibleModal(page: Page) {
  const candidates = page.locator([
    '[role="dialog"]',
    '.modal-overlay > .modal-panel',
    '.modal-panel',
    '.modal-overlay',
    '.modal',
    '[data-testid*="modal"]'
  ].join(', '));
  const count = await candidates.count();
  for (let index = count - 1; index >= 0; index -= 1) {
    const candidate = candidates.nth(index);
    if (await isUsableModalContainer(candidate)) return candidate;
  }
  return null;
}

export async function clickAny(page: Page, names: string[], options: Parameters<Locator['click']>[0] = {}) {
  const locators: Locator[] = [];
  for (const name of names) {
    const pattern = new RegExp(escapeRegex(name), 'i');
    locators.push(page.getByRole('button', { name: pattern }));
    locators.push(page.getByRole('link', { name: pattern }));
    locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
    locators.push(page.getByText(pattern));
  }
  if (names.some((name) => /novo|nova|adicionar|cadastrar|criar/i.test(name))) {
    locators.push(page.locator('button, a, [role="button"]').filter({ hasText: /^\s*\+/ }));
  }
  const target = await firstVisible(locators);
  if (!target) throw new Error(`Could not find clickable control: ${names.join(' | ')}`);
  await target.click(options);
}

export async function clickExactControl(page: Page, names: string[], options: Parameters<Locator['click']>[0] = {}) {
  const locators: Locator[] = [];
  for (const name of names) {
    const pattern = new RegExp(`^\\s*${escapeRegex(name)}\\s*$`, 'i');
    locators.push(page.getByRole('button', { name: pattern }));
    locators.push(page.getByRole('link', { name: pattern }));
    locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
  }
  const target = await firstVisible(locators);
  if (!target) throw new Error(`Could not find exact clickable control: ${names.join(' | ')}`);
  await target.click(options);
  await page.waitForLoadState('networkidle').catch(() => {});
}

export async function gotoMenu(page: Page, path: string[]) {
  for (let index = 0; index < path.length; index += 1) {
    const segment = path[index];
    const nextSegment = path[index + 1];
    if (segment === 'Dashboard' && await page.getByRole('heading', { name: /dashboard/i }).count()) {
      continue;
    }
    if (/^(orçamento|orcamento)$/i.test(segment)
      && /itens orçados|itens orcados/i.test(nextSegment || '')
      && await page.getByRole('heading', { name: /orçamento base|orcamento base/i }).count()) {
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
    const labelText = xpathStartsWithText(label);
    candidates.push(page.locator(`xpath=//*[${labelText} and (./input or ./textarea)]//*[self::input or self::textarea]`));
    candidates.push(page.locator(`xpath=//*[${labelText}]/ancestor::*[.//input or .//textarea][1]//*[self::input or self::textarea][not(@type="hidden")]`));
  }
  const target = await firstVisible(candidates);
  if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
  await target.fill(String(value));
}

export async function chooseOption(page: Page, labels: string[], value: string) {
  const candidates = labels.flatMap((label) => {
    const labelText = xpathStartsWithText(label);
    return [
      page.locator(`select[name*="${label}" i]`),
      page.locator(`xpath=//*[${labelText} and ./select]//select`),
      page.locator(`xpath=//*[${labelText} and not(.//select)]/following::select[1]`),
      page.getByLabel(new RegExp(label, 'i')),
      page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
      page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
    ];
  });
  const target = await firstVisible(candidates);
  if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);

  const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  const select = tagName === 'select'
    ? target
    : await firstVisible([target.locator('select')]);
  if (select) {
    const options = await select.locator('option').evaluateAll((items) => items.map((item) => ({
      value: item.value,
      text: (item.textContent || '').replace(/\s+/g, ' ').trim()
    })));
    const option = options.find((item) => optionMatches(item, value));
    if (option) {
      await select.selectOption(option.value);
      const selectedText = await select.evaluate((element) => {
        const selectElement = element as HTMLSelectElement;
        return (selectElement.selectedOptions[0]?.textContent || '').replace(/\s+/g, ' ').trim();
      });
      const selectedValue = await select.evaluate((element) => (element as HTMLSelectElement).value);
      if (!optionMatches({ text: selectedText, value: selectedValue }, value)) {
        throw new Error(`Selected option mismatch for ${labels.join(' | ')}: expected "${value}", got "${selectedText}"`);
      }
      return;
    }
  }

  await target.click();
  const optionPattern = new RegExp(`^\\s*${escapeRegex(value)}\\s*$`, 'i');
  const optionTarget = await firstVisible([
    page.getByRole('option', { name: optionPattern }),
    page.locator('[role="option"], li, [data-radix-select-item], [data-value]').filter({ hasText: optionPattern }),
    page.getByText(optionPattern)
  ]);
  if (!optionTarget) {
    throw new Error(`Could not find option "${value}" for: ${labels.join(' | ')}`);
  }
  await optionTarget.click();
}

export async function expectSelectedOption(page: Page, labels: string[], expectedValue: string) {
  const candidates = labels.flatMap((label) => {
    const labelText = xpathStartsWithText(label);
    return [
      page.locator(`select[name*="${label}" i]`),
      page.locator(`xpath=//*[${labelText} and ./select]//select`),
      page.locator(`xpath=//*[${labelText} and not(.//select)]/following::select[1]`),
      page.getByLabel(new RegExp(label, 'i')),
      page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
      page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
    ];
  });
  const target = await firstVisible(candidates);
  if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);

  const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  const select = tagName === 'select'
    ? target
    : await firstVisible([target.locator('select')]);
  const selectedText = select
    ? await select.evaluate((element) => {
      const selectElement = element as HTMLSelectElement;
      return (selectElement.selectedOptions[0]?.textContent || '').replace(/\s+/g, ' ').trim();
    })
    : await target.innerText().catch(() => '');
  expect(normalizeText(selectedText).toLowerCase()).toContain(normalizeText(expectedValue).toLowerCase());
}

export async function chooseFirstAvailableOption(page: Page, labels: string[]) {
  const candidates = labels.flatMap((label) => {
    const labelText = xpathStartsWithText(label);
    return [
      page.locator(`select[name*="${label}" i]`),
      page.locator(`xpath=//*[${labelText} and ./select]//select`),
      page.locator(`xpath=//*[${labelText} and not(.//select)]/following::select[1]`),
      page.getByLabel(new RegExp(label, 'i')),
      page.locator(`xpath=//*[${labelText}]/ancestor::*[.//select][1]//select`),
      page.locator(`xpath=//*[${labelText}]/ancestor::*[.//*[@role="combobox"]][1]//*[@role="combobox"]`)
    ];
  });
  const target = await firstVisible(candidates);
  if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  const select = tagName === 'select'
    ? target
    : await firstVisible([target.locator('select')]);
  if (!select) throw new Error(`Could not find native select for: ${labels.join(' | ')}`);
  const optionValue = await select.locator('option').evaluateAll((options) => {
    const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
    return option ? option.value : '';
  });
  if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
  await select.selectOption(optionValue);
}

function submitCandidates(root: SearchRoot) {
  return [
    root.locator('button[type="submit"], input[type="submit"]'),
    root.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
    root.locator('button, [role="button"]')
      .filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i })
      .filter({ hasNotText: /cadastrar mais/i })
  ];
}

async function findSubmitControl(root: SearchRoot) {
  return firstVisible(submitCandidates(root));
}

async function scrollToModalEnd(modal: Locator) {
  await modal.evaluate((element) => {
    element.scrollTo({ top: element.scrollHeight, behavior: 'instant' });
  }).catch(() => {});
}

export async function submitForm(page: Page) {
  const modal = await visibleModal(page);
  const searchRoot: SearchRoot = modal ?? page;
  let primarySubmit = await findSubmitControl(searchRoot);
  if (!primarySubmit && modal) {
    await scrollToModalEnd(modal);
    primarySubmit = await findSubmitControl(modal);
  }
  if (primarySubmit) {
    await primarySubmit.scrollIntoViewIfNeeded().catch(() => {});
    await primarySubmit.click();
  } else if (modal) {
    throw new Error('Could not find submit control inside the active modal');
  } else {
    await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  }
  await page.waitForLoadState('networkidle').catch(() => {});
  await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
}

export async function expectPageReady(page: Page, expectedTexts: string[] = []) {
  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not/i);
  for (const text of expectedTexts) {
    await expect(byText(page, text)).toBeVisible();
  }
}

async function findSearchInput(page: Page) {
  return firstVisible([
    page.getByPlaceholder(/buscar|pesquisar|filtro/i),
    page.getByRole('textbox', { name: /buscar|pesquisar|filtro/i }),
    page.locator('input[type="search"]'),
    page.locator('input[placeholder*="buscar" i], input[placeholder*="pesquisar" i], input[placeholder*="filtro" i]')
  ]);
}

async function findEnabledNextButton(page: Page) {
  const candidates = [
    page.getByRole('button', { name: /^(proxima|próxima|next)$/i }),
    page.locator('button, [role="button"]').filter({ hasText: /^(proxima|próxima|next)$/i })
  ];

  for (const candidate of candidates) {
    const count = await candidate.count();
    for (let index = 0; index < count; index += 1) {
      const item = candidate.nth(index);
      if (!await item.isVisible().catch(() => false)) continue;
      if (await item.isDisabled().catch(() => false)) continue;
      const ariaDisabled = await item.getAttribute('aria-disabled').catch(() => null);
      if (ariaDisabled === 'true') continue;
      return item;
    }
  }

  return null;
}

async function expectRecordVisibleInSearchOrPagination(page: Page, recordName: string, timeout?: number) {
  const record = byText(page, recordName);
  const finalTimeout = timeout ?? 10_000;
  if (await waitForVisible(record)) return;

  const search = await findSearchInput(page);
  if (search) {
    await search.fill(recordName);
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(500);
    if (await waitForVisible(record, Math.min(finalTimeout, 5_000))) return;
    await search.clear().catch(() => {});
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(500);
  }

  for (let pageIndex = 0; pageIndex < 20; pageIndex += 1) {
    if (await waitForVisible(record, 1_000)) return;
    const next = await findEnabledNextButton(page);
    if (!next) break;
    await next.click();
    await page.waitForLoadState('networkidle').catch(() => {});
  }

  await expect(record).toBeVisible({ timeout: finalTimeout });
}

export async function tryCreateSimpleRecord(
  page: Page,
  path: string[],
  recordName: string,
  fields: FieldSpec[] = [],
  options: {
    createButtonNames?: string[];
    assertionTimeout?: number;
    listButtonNames?: string[];
    verifyWithSearchAndPagination?: boolean;
  } = {}
) {
  await gotoMenu(page, path);
  if (options.listButtonNames) await clickExactControl(page, options.listButtonNames);
  await clickAny(page, options.createButtonNames ?? ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  for (const field of fields) {
    try {
      if (field.type === 'select') {
        await chooseOption(page, field.labels, String(field.value)).catch(async (error) => {
          if (!field.fallbackToFirstOption) throw error;
          await chooseFirstAvailableOption(page, field.labels);
        });
      } else {
        await fillField(page, field.labels, field.value);
      }
    } catch (error) {
      if (!field.optional) throw error;
    }
  }
  await submitForm(page);
  if (options.listButtonNames) await clickExactControl(page, options.listButtonNames);
  if (options.verifyWithSearchAndPagination) {
    await expectRecordVisibleInSearchOrPagination(page, recordName, options.assertionTimeout);
  } else {
    await expect(byText(page, recordName)).toBeVisible({ timeout: options.assertionTimeout });
  }
}

export async function assertPersistedAfterRefresh(page: Page, text: string, timeout?: number) {
  await page.reload({ waitUntil: 'networkidle' });
  await expect(byText(page, text)).toBeVisible({ timeout });
}

export async function tryEditCurrentRecord(page: Page, fields: FieldSpec[]) {
  await clickAny(page, ['Editar', 'Alterar']).catch(() => {});
  for (const field of fields) {
    if (field.type === 'select') {
      await chooseOption(page, field.labels, String(field.value)).catch(() => {});
    } else {
      await fillField(page, field.labels, field.value).catch(() => {});
    }
  }
  await submitForm(page);
}

export async function tryCancelInactivateOrDelete(page: Page) {
  await clickAny(page, ['Cancelar', 'Inativar', 'Excluir', 'Remover']);
  await fillField(page, ['justificativa', 'observacao', 'observação'], 'Acao automatizada de teste').catch(() => {});
  await clickAny(page, ['Confirmar', 'Salvar', 'Sim', 'Enviar']).catch(() => {});
  await page.waitForLoadState('networkidle').catch(() => {});
}
