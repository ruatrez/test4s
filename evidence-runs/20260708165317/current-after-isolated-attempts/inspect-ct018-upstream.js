const { chromium } = require('playwright');

const baseURL = process.env.BASE_URL || 'https://4s.ruatrez.com';
const executablePath = process.env.BROWSER_EXECUTABLE || '/usr/bin/brave-browser';
const adminEmail = process.env.ADMIN_EMAIL || 'hello@ruatrez.com';
const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
const runId = process.env.RUN_ID || '20260708145148';
const prefix = `AUTO-4S-${runId}`;

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

async function snapshot(page, label) {
  await page.waitForTimeout(700);
  const bodyText = await page.locator('body').innerText().catch(() => '');
  const rows = await page.getByRole('row').evaluateAll((items) => items.map((row) => (row.textContent || '').replace(/\s+/g, ' ').trim()).filter(Boolean));
  await page.screenshot({ path: `test-results/CT018-${label}-${runId}.png`, fullPage: true });
  return {
    url: page.url(),
    bodyHasPrefix: bodyText.includes(prefix),
    bodyExcerpt: bodyText.slice(0, 3000),
    rows
  };
}

async function main() {
  const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox'] });
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

  await clickAny(page, ['Suprimentos']);
  await clickAny(page, ['Ordens de Compra']);
  const purchaseOrders = await snapshot(page, 'purchase-orders');

  await clickAny(page, ['Suprimentos']);
  await clickAny(page, ['Cotações']);
  const quotations = await snapshot(page, 'quotations');

  await browser.close();
  console.log(JSON.stringify({ runId, prefix, purchaseOrders, quotations, errors }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
