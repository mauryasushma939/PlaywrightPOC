import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test('has title @smock', async ({ page }) => {
  await page.goto('https://playwright.dev/');

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