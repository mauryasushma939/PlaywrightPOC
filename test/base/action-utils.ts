
import { Locator, Page } from "@playwright/test";
import ENV from "../utils/env";


export class ActionUtils {
    // Constructor to initialize the page
    page: Page;
    constructor(page: Page) {
    this.page = page;
    }

//Function to input text into locator
    async enterText(element: Locator, text: string) {
        await element.fill(text);
    }


    async clickElement(element: Locator) {
        await element.click();
    }

//Function to get text from locator
    async getElementText(element: Locator): Promise<string> {
        return await element.textContent() || '';
    }

    async isElementVisible(element: Locator): Promise<boolean> {
        return await element.isVisible();
    }
//Function to navigate to URL
    async navigateToUrl(url: string) {
        await this.page.goto(url);
    }

    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }   
//Function to wait for element
    async waitForElement(element: Locator, timeout: number = 30000): Promise<void> {
        await element.waitFor({ timeout });
    } 

    async waitForTimeout(timeout: number): Promise<void> {
        await this.page.waitForTimeout(timeout);
    }

    async waitForElementAndTimeout(element: Locator, timeout: number): Promise<void> {
        await this.waitForElement(element, timeout);
        await this.waitForTimeout(timeout);
    }

    //Fuction to upload file
    async uploadFile(element: Locator, filePath: string, Page =this.page) {
       try{
        await element.waitFor({ state: 'visible', timeout: 30000 });
        await element.setInputFiles(filePath);
       }catch(error){
        console.error(`Error uploading file: ${error}`);
       }
    }         




}