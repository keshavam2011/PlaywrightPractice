import {Locator, Page, expect} from "@playwright/test"
import {LoginPageLocators} from "../Locators/LoginPageLocators"

export class LoginPageClass{

    readonly page: Page
    constructor(page:Page)
    {
        this.page = page
    }

    async launchBrowserAndNavigateToSwaglabs(): Promise<string>
    {
        await this.page.goto("https://www.saucedemo.com/")
        return this.page.url()
    }

    async LoginToSwaglabs(username: string, password: string) : Promise<string>
    {
        await this.page.locator(LoginPageLocators.userNameInput).fill(username)
        await this.page.locator(LoginPageLocators.passwordInput).fill(password)
        await this.page.locator(LoginPageLocators.loginButton).click()
        return this.page.url()
    }

}