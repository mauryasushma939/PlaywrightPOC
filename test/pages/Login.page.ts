import { Locator, Page } from '@playwright/test';
import { ActionUtils } from '../base/action-utils';
import ENV from '../utils/env';

export class LoginPage extends ActionUtils{
    // Locators
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
         this.page = page;  
         this.usernameInput = page.locator('#user-name');
         this.passwordInput = page.locator('#password');
         this.loginButton = page.locator('#login-button');
         this.errorMessage = page.locator('#error-message');
    }

    //Negivate to url

    async navigateToLoginPage(url: string = ENV.BaseUrl) {
        await this.navigateToUrl(url);
    }

    // Method to perform login
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }



    // Method to get error message text
    async getErrorMessage(): Promise<string> {
        return await this.getElementText(this.errorMessage);
    }

  //Method to clear input fields
    async clearInputs() {
        await this.usernameInput.fill('');
        await this.passwordInput.fill('');
    }
    async isLoginButtonVisible(): Promise<boolean> {
        return await this.isElementVisible(this.loginButton);
   
    }
    async isErrorMessageVisible(): Promise<boolean> {
        return await this.isElementVisible(this.errorMessage);
    }
    

// Method to wait for error message to be visible
    async waitForErrorMessageToBeVisible(timeout: number = 5000): Promise<void> {
        await this.page.waitForSelector('#error-message', { state: 'visible', timeout });

    }
}