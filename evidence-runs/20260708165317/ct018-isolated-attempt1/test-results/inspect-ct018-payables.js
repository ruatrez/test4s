const { chromium } = require('playwright');

const baseURL = process.env.BASE_URL || 'https://4s.ruatrez.com';
const executablePath = process.env.BROWSER_EXECUTABLE || '/usr/bin/brave-browser';
const adminEmail = process.env.ADMIN_EMAIL || 'hello@ruatrez.com';
const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
const runId = process.env.RUN_ID || '20260708145148';
const prefix = `AUTO-4S-${runId}`;
const purchaseOrder = `${prefix} OC`;

function rx(text) {
  return new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
}

async function firstVisible(locators) {
  for (const locator of locators) {
    const count = await locator.count();
    for (let i = 0; i < count; i += 1) {
      const item = locator.nth(i);
      if (await item.isVisible().catch(() => false)) return item;
    }
  }
  return null;
}

async function clickAny(page, names) {
  const locators = [];
  for (const name of names) {
    const pattern = rx(name);
    locators.push(page.getByRole('button', { name: pattern }));
    locators.push(page.getByRole('link', { name: pattern }));
    locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
    locators.push(page.getByText(pattern));
  }
  const target = await firstVisible(locators);
  if (!target) throw new Error(`No visible target for ${names.join(' | ')}`);
  await target.click();
  await page.waitForLoadState('networkidle').catch(() => {});
}

async function selectOptionContaining(page, expectedText) {
  const selects = page.locator('select');
  const count = await selects.count();
  for (let i = 0; i < count; i += 1) {
    const select = selects.nth(i);
    if (!await select.isVisible().catch(() => false)) continue;
    const option = await select.locator('option').evaluateAll((options, expected) => {
      const found = options.find((item) => (item.textContent || '').includes(expected));
      return found ? found.value : '';
    }, expectedText);
    if (option) {
      await select.selectOption(option);
      await page.waitForLoadState('networkidle').catch(() => {});
      await page.waitForTimeout(500);
      return true;
    }
  }
  return false;
}

async function pageSnapshot(page, label) {
  const bodyText = await page.locator('body').innerText().catch(() => '');
  const rows = await page.getByRole('row').evaluateAll((items) => items.map((row) => (row.textContent || '').replace(/\s+/g, ' ').trim()).filter(Boolean));
  const selectData = await page.locator('select').evaluateAll((selects) => selects.map((select, index) => ({
    index,
    selectedText: select.selectedOptions[0] ? (select.selectedOptions[0].textContent || '').replace(/\s+/g, ' ').trim() : '',
    options: Array.from(select.options).map((option) => ({
      value: option.value,
      text: (option.textContent || '').replace(/\s+/g, ' ').trim()
    }))
  })));
  await page.screenshot({ path: `test-results/CT018-${label}-${runId}.png`, fullPage: true });
  return {
    url: page.url(),
    bodyHasPrefix: bodyText.includes(prefix),
    bodyHasPurchaseOrder: bodyText.includes(purchaseOrder),
    bodyExcerpt: bodyText.slice(0, 3000),
    rows,
    selectData
  };
}

async function main() {
  const browser = await chromium.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage({ ignoreHTTPSErrors: true, viewport: { width: 1280, height: 720 } });
  const errors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`);
  });
  page.on('response', (response) => {
    if (response.status() >= 400) errors.push(`http: ${response.status()} ${response.url()}`);
  });

  await page.goto(baseURL, { waitUntil: 'load' });
  await page.locator('input[type="email"], input[name*="email" i], input[placeholder*="email" i]').first().fill(adminEmail);
  await page.locator('input[type="password"]').first().fill(adminPassword);
  await page.getByRole('button', { name: /entrar|login|acessar/i }).first().click();
  await page.waitForLoadState('networkidle').catch(() => {});
  await page.getByText(/dashboard|financeiro/i).first().waitFor({ state: 'visible', timeout: 15000 });

  await clickAny(page, ['Financeiro']);
  await clickAny(page, ['Contas a Pagar']);
  const beforeFilter = await pageSnapshot(page, 'payables-before-filter');
  const selectedCurrentWork = await selectOptionContaining(page, `${prefix} Obra`);
  const afterFilter = await pageSnapshot(page, 'payables-after-filter');

  await clickAny(page, ['Financeiro']);
  await clickAny(page, ['Pagamentos']);
  await clickAny(page, ['Novo', 'Registrar', 'Adicionar']);
  const paymentModal = await pageSnapshot(page, 'payment-modal');

  await browser.close();
  console.log(JSON.stringify({
    runId,
    prefix,
    purchaseOrder,
    selectedCurrentWork,
    beforeFilter,
    afterFilter,
    paymentModal,
    errors
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
