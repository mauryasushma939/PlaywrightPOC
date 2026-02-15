// User Login Test Suite

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login.page';
import { GLOBAL_TIME_OUT, SHORT_TIME_OUT } from '../constants/constants';
import ENV from '../utils/env';

test.describe('User Login Tests', () => {
    
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage(ENV.BaseUrl);
    });

    test('Successful Login with Valid Credentials', async ({ page }) => {
        try {
            await loginPage.login(ENV.ValidUsername, ENV.ValidPassword);
            await page.waitForLoadState('networkidle');
            const pageTitle = await loginPage.getPageTitle();
            expect(pageTitle).toBe('Swag Labs'); // Adjust based on actual title after login
        } catch (error) {
            console.error('Login failed:', error);
            throw error; // Rethrow the error after logging
        }
    });


});
