import { test, expect, type Page } from '@playwright/test'
import { LoginPage } from '../pages/login-page';

//const loginPageURL = 'https://www.saucedemo.com/';
let loginPage: LoginPage; 

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);

})

test ('Succesful login', async () => {
    await loginPage.openLoginPage();
    await loginPage.successfullLogin();
    await loginPage.assertInventoryPageUrl(/.*inventory.html/)
});

test ('Unsuccesful login', async () => {
    await loginPage.openLoginPage();
    await loginPage.unsuccessfulLogin('standard_user', 'wrong_password');
    await loginPage.unsuccessfulLoginMessageisDisplayed();
});
