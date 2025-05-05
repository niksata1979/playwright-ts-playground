import { expect, type Locator , type Page } from "@playwright/test";

export class InventoryPage{
    //vars
    readonly page: Page;
    readonly addToCartBagpackButton: Locator;
    readonly shoppingCartLink: Locator;

    //constructor
    constructor (page: Page) {
        this.page = page;
        this.addToCartBagpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shoppingCartLink = page.locator('#shopping_cart_container > a');

    }

    //methods
    async addToBagBackpack() {
        await this.addToCartBagpackButton.click();
    };

    async clickCartIcon() {
        await this.shoppingCartLink.click();
    }

}
    

export default InventoryPage;
