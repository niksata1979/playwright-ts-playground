import { expect, type Locator , type Page } from "@playwright/test";

export class CheckoutPage{
    //vars
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zipCode: Locator;
    readonly continueToCheckoutButton: Locator;
    readonly finishCheckoutButton: Locator;

    //constructor
    constructor (page: Page) {
        this.page = page;
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.zipCode = page.locator('[data-test="postalCode"]');
        this.continueToCheckoutButton = page.locator('[data-test="continue"]');
        this.finishCheckoutButton = page.locator('[data-test="finish"]')

    }

    //methods
    async assertCheckoutPageStep1Url(pageUrl: RegExp) {
        await expect(this.page).toHaveURL(pageUrl);
    }

    async submitDeliveryDetails() {
        await this.firstName.fill('John');
        await this.lastName.fill('Doe');
        await this.zipCode.fill('Doe');
        await this.zipCode.fill('1234');
        await this.continueToCheckoutButton.click(); 
    };

    async clickFinishCheckout() {
        await this.finishCheckoutButton.click();
    }

}
    
export default CheckoutPage;