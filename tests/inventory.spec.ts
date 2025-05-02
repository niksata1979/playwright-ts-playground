import { test, expect, type Page } from '@playwright/test'
import { LoginPage } from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page'

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

})

test ('Add backpack to basket', async () => {
    await loginPage.openLoginPage();
    await loginPage.successfullLogin();
    await loginPage.assertInventoryPageUrl(/.*inventory.html/)
    await inventoryPage.addToBagBackpack();
    await inventoryPage.clickCartIcon();
});