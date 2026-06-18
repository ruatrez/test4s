import fs from 'node:fs';
import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'https://4s.ruatrez.com';
const configuredExecutable = process.env.BROWSER_EXECUTABLE || '/usr/bin/brave-browser';
const executablePath = fs.existsSync(configuredExecutable) ? configuredExecutable : undefined;

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.spec\.ts/,
  globalSetup: './support/global-setup.ts',
  timeout: 90_000,
  expect: {
    timeout: 10_000
  },
  fullyParallel: false,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }]
  ],
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: process.env.PW_VIDEO === '1' ? 'retain-on-failure' : 'off',
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    ignoreHTTPSErrors: true
  },
  projects: [
    {
      name: 'chromium-desktop',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          executablePath,
          args: ['--no-sandbox']
        }
      }
    }
  ],
  outputDir: 'test-results/artifacts'
});
