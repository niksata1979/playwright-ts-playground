import { test, expect, type Page } from '@playwright/test'
import { LoginPage } from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page'
import { CartPage } from '../pages/cart-page';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
})

test ('Add backpack to basket', async () => {
    await loginPage.openLoginPage();
    await loginPage.successfullLogin();
    await loginPage.assertInventoryPageUrl(/.*inventory.html/)
    await inventoryPage.addToBagBackpack();
    await inventoryPage.clickCartIcon();
    await cartPage.assertCartPageUrl(/.*cart.html/)
    await cartPage.assertItemQuantity('1');
    await cartPage.assertItemPrice('$29.99');
});