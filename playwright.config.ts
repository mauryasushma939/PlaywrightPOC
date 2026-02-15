import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './test/tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    ['allure-playwright'], // Enable Allure reporter
    ],

  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    trace: 'on-first-retry',
    headless: true, // Changed to true for CI/headless environments
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 0,
    navigationTimeout: 30000,
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 720 },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],

  /* Web server for mock pages - run local server to avoid external network dependencies */
  webServer: {
    command: 'npx http-server test/mock-pages -p 8080 -c-1',
    port: 8080,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

});
