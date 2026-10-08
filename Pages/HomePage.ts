import {Page, Locator} from "@playwright/test"
import {HomePageLocators} from "../Locators/HomepageLocators"

export class HomePageClass{
    readonly page: Page

    constructor(page:Page)
    {
        this.page = page
    }

    async ValidateHomePageItems()
    {
        let SourcelabsItems =  await this.page.locator(HomePageLocators.SauceLabsBackpack)
        const itemCount = await SourcelabsItems.count()
        for (let i = 0; i < itemCount; i++) {
            let item = SourcelabsItems.nth(i)
            console.log(item.innerText)
        }
        
    }
}