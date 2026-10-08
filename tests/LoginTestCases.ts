import { test, Page, Locator, expect } from "@playwright/test";
import { LoginPageClass } from "../Pages/LoginPage";
import { HomePageClass } from "../Pages/HomePage";
import TestData from "../TestData/TestDataFile.json";

TestData.forEach((data, index) => {
  test(`This is first test ${index + 1} - ${data.userName}`, async ({ page }) => {
    const loginPageObj = new LoginPageClass(page);
    const homePageobj = new HomePageClass(page);
    const loginURL = await loginPageObj.launchBrowserAndNavigateToSwaglabs();
    expect(loginURL).toBe("https://www.saucedemo.com/");

    const loginSuccessURL = await loginPageObj.LoginToSwaglabs(data.userName, data.password);
    expect(loginSuccessURL).toBe("https://www.saucedemo.com/inventory.html");
    await homePageobj.ValidateHomePageItems();
    console.log(`this is the end of the test $loginURL`)
  });
});
