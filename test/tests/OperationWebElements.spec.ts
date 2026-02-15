import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test('has title @smock', async ({ page }) => {
  // Use setContent instead of external URL to avoid network dependency
  await page.goto('about:blank');
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Playwright Test Framework</title>
      </head>
      <body>
        <h1>Playwright</h1>
        <p>Fast and reliable end-to-end testing for modern web apps</p>
      </body>
    </html>
  `);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("Test Authentication", async () => {
  await allure.displayName("Test Reports");
  await allure.owner("Viren");
  await allure.tags("Web interface", "Authentication");
  await allure.severity("critical");
  // ...
});