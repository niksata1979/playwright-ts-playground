import { test, expect, type Page } from '@playwright/test'
import { LoginPage } from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page'
import { CartPage } from '../pages/cart-page';
import { CheckoutPage } from '../pages/checkout-page';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
})

test ('Checkout', async () => {
    await loginPage.openLoginPage();
    await loginPage.successfullLogin();
    await inventoryPage.addToBagBackpack();
    await inventoryPage.clickCartIcon();
    await cartPage.clickCheckoutButton();
    await checkoutPage.assertCheckoutPageStep1Url(/.*checkout-step-one.html/);
    await checkoutPage.submitDeliveryDetails();
    await checkoutPage.assertCheckoutPageStep1Url(/.*checkout-step-two.html/)
    await checkoutPage.clickFinishCheckout();
    await checkoutPage.assertCheckoutPageStep1Url(/.*checkout-complete.html/)

});