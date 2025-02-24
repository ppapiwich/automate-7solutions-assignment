import { BrowserContext, Page } from '@playwright/test';
import { test } from '../resource/fixture'
import testAccount from '../data/test-account.json'
import testdata from '../data/test-data/test-data.json'


test.describe('E2E Flow for Adding Top Up to NokCash', ()=> {
  let page: Page, context:BrowserContext
    test('Test_Case_6.1: User add amount top up NokCash then confirm to payment', async({ browser,navigation, homePage, nokCashPage, paymentPage, validationFeature })=>{
      //Create context and page 
      context = await browser.newContext()  
      page = await context.newPage()
      
      //Locator - Home Page
      const nokCashMenu = page.locator(homePage.nokCashMenu)
      
      //Locator - Nok Cash page
      const nokCashHeader= page.locator(nokCashPage.nokCashHeader)
      const amountInput = page.locator(nokCashPage.amountInput)
      const add410Btn = page.locator(nokCashPage.add410Btn)
      
      //Login to Nok Plus Account
      await navigation.loginNokPlus(page,testAccount)
      await page.waitForLoadState('domcontentloaded')
      
      //Remove Cookies modal
      await navigation.removeCookiesModal(page)
      
      //Go to Nok Cash Page
      await nokCashMenu.click()
      await nokCashHeader.waitFor({ state : 'visible'})
      await amountInput.pressSequentially(testdata.amount, { delay: 10})
      await add410Btn.click()
      
      //Verify Amount Top Up
      await validationFeature.verifyAmountTopUp(page, testdata.totalAmount)
      
      //Go to Payment Page
      await page.locator(nokCashPage.paymentBtn).click()
      await page.waitForLoadState('domcontentloaded')
      await page.locator(paymentPage.expandDescriptionBtn).waitFor({ state : 'visible', timeout: 3_000})
      await page.locator(paymentPage.expandDescriptionBtn).click()
      
      //Verify Order Summary
      await validationFeature.verifyOrderSummary(page, testdata.totalAmount)

      await page.close()
    })
})