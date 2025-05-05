import { expect, type Locator , type Page } from "@playwright/test";

export class InventoryPage{
    //vars
    readonly page: Page;
    readonly addToCartBagpackButton: Locator;
    readonly shoppingCartLink: Locator;
    readonly removeFromCartButton: Locator;
    readonly shoppingCartBadge: Locator;

    //constructor
    constructor (page: Page) {
        this.page = page;
        this.addToCartBagpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shoppingCartLink = page.locator('#shopping_cart_container > a');
        this.removeFromCartButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]')

    }

    //methods
    async addToBagBackpack() {
        await this.addToCartBagpackButton.click();
    };

    async checkShoppingCartBadge(qty) {
        await expect(this.shoppingCartBadge).toHaveText(qty);
    }

    async removeFromCart() {
        await this.removeFromCartButton.click();
    }

    async clickCartIcon() {
        await this.shoppingCartLink.click();
    }



}
    

export default InventoryPage;
