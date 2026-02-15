import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/Products.page';
import { LoginPage } from '../pages/Login.page';
import ENV from '../utils/env';



test.describe('Order First Products Tests', () => {
    
    let productsPage: ProductsPage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
           loginPage = new LoginPage(page);
           await loginPage.navigateToLoginPage(ENV.BaseUrl);
       });

    test('Verify  product Price of Sauce Labs Backpack', async ({ page }) => {
        try {

            //login to the App
            await loginPage.login(ENV.ValidUsername, ENV.ValidPassword);
         
            //Verify Products Page Title
            await page.waitForLoadState()
            productsPage = new ProductsPage(page);
            const title = await productsPage.getProductsPageTitle();
            expect(title).toBe('Products'); // Adjust based on actual title
            
            //Search for product and verify price
            await productsPage.clickOnProduct('Sauce Labs Backpack');
             const price = await productsPage.findProductPrice('Sauce Labs Backpack');
             console.log('Price of Sauce Labs Backpack:', price);
             expect(price).toBe('$29.99'); 
             await page.waitForTimeout(1000);
            
        } catch (error) {
            console.error('Failed to verify products page title:', error);
            throw error; // Rethrow the error after logging
        }});






});