import { expect, type Locator , type Page } from "@playwright/test";

export class CartPage{
    //vars
    readonly page: Page;
    readonly quantity: Locator;
    readonly price: Locator;
    readonly checkout: Locator;

    //constructor
    constructor (page: Page) {
        this.page = page;
        this.quantity = page.locator('[data-test="item-quantity"]');
        this.price = page.locator('[data-test="inventory-item-price"]');
        this.checkout = page.locator('[data-test="checkout"]');

    }

    //methods
    async assertCartPageUrl(pageUrl: RegExp) {
        await expect(this.page).toHaveURL(pageUrl);
    }

    async assertItemQuantity(qty) {
        await expect(this.quantity).toHaveText(qty)
    };

    async assertItemPrice(amount) {
        await expect(this.price).toHaveText(amount)
    };

    async clickCheckoutButton() {
        await this.checkout.click();
    }

}
    

export default CartPage;