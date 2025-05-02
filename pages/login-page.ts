import { expect, type Locator , type Page } from "@playwright/test";

export class LoginPage{
    //vars
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly paswordInput: Locator;
    readonly loginButton: Locator;
    readonly loginErrorMessage: Locator;

    //constructor
    constructor (page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole("textbox", { name: "Username" });
        this.paswordInput = page.getByRole("textbox", { name: "Password" });
        this.loginButton = page.getByRole("button", { name: "Login" });
        this.loginErrorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service', { exact: true });
    }

    //methods
    async openLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    };

    async assertInventoryPageUrl(pageUrl: RegExp) {
        await expect(this.page).toHaveURL(pageUrl);
    }

    async successfullLogin() {
        await this.usernameInput.fill('standard_user');
        await this.paswordInput.fill('secret_sauce');
        await this.loginButton.click();
    };

    async unsuccessfulLogin(username, password) {
        await this.usernameInput.fill(username);
        await this.paswordInput.fill(password);
        await this.loginButton.click();
        
    }
    async unsuccessfulLoginMessageisDisplayed() {
        await expect(this.loginErrorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }

}

export default LoginPage;
