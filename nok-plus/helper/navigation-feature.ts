import { Page } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { TestAccounts } from "../pages/components/test-account";

export class Navigation{

private loginPage = new LoginPage

readonly nokPlus = {
    auth:()=> `https://tinyurl.com/4765k82t`
}


async loginNokPlus(page:Page, testAccount: TestAccounts){
    await page.goto(this.nokPlus.auth())
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(2_000)
    if (!testAccount.email || !testAccount.password) {
      throw new Error("Please input your email and password in the ../data/test-account.json");
    }
    await page.locator(this.loginPage.emailInput).pressSequentially(testAccount.email, { delay: 20})
    await page.locator(this.loginPage.passwordInput).pressSequentially(testAccount.password, { delay: 20})
    await page.locator(this.loginPage.submitBtn).click()
    await page.waitForLoadState('domcontentloaded')
}

async removeCookiesModal(page:Page){
    await page.waitForTimeout(3_000)
    await page.waitForSelector('div.cookies-tab_body__59Go1')
    await page.evaluate(() => {
      const modal = document.querySelector('div.cookies-tab_body__59Go1')
      if (modal) {
        modal.remove();
      }
    })    
}

}