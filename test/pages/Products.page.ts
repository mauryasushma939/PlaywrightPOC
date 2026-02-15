import { ActionUtils } from "../base/action-utils";
import { Locator, Page } from "@playwright/test";

export class ProductsPage  extends ActionUtils{
    // Locators
    readonly productsTitle: Locator;

    constructor(page: Page) {
        super(page);
         this.page = page;  
         this.productsTitle = page.locator('.title');
    }

    // Method to get Products page title
    async getProductsPageTitle(): Promise<string> {
        return await this.getElementText(this.productsTitle);
    }


    async navigateToProductsPage(url: string): Promise<void> {
        await this.navigateToUrl(url);
    }
     
    async isProductsTitleVisible(): Promise<boolean> {

        return await this.isElementVisible(this.productsTitle);
    }

    async findProductPrice(productName: string): Promise<string | null> {
        const productPrice = this.page.locator('//*[@class="inventory_details_price"]');
        console.log('Product Price: ',await productPrice.textContent());
        return await this.getElementText(productPrice); 
    }

//    async clickOnProduct(productName: string): Promise<void> {
//         const productLink = this.page.locator(`//*[contains(text(),'Sauce Labs Backpack')]`, { hasText: productName });
//         await productLink.click();
//     }

    async clickOnProduct(productName: string): Promise<void> {
        const productLink = this.page.locator(`//*[contains(text(),'${productName}')]`);
        await productLink.click();
    }
    
}