import { Page, expect } from "@playwright/test";
import { PaymentPage } from "../pages/payment-page";
import { NokCashPage } from "../pages/nok-cash-page";

export class ValidationFeature{
    private nokCashPage = new NokCashPage()
    private paymentPage = new PaymentPage()


async verifyAmountTopUp(page:Page, testdata:string) {
    const amountInputValue = await page.locator(this.nokCashPage.amountInput).inputValue()
    const totalAmountValue = await page.locator(this.nokCashPage.totalAmount).textContent()       
    
    expect.soft(amountInputValue).toMatch(testdata)
    expect.soft(totalAmountValue).toMatch(testdata)
}

async verifyOrderSummary(page:Page, testdata: string){
    // Locator
    const nokCashAmount = await page.locator(this.paymentPage.nokCashAmount).textContent()
    const priceAmount = await page.locator(this.paymentPage.priceAmount).textContent()
    const totalPrice = await page.locator(this.paymentPage.totalPrice).textContent()
    const remainingPrice = await page.locator(this.paymentPage.remainingPrice).nth(1).textContent()

    expect.soft(nokCashAmount).toMatch(testdata)
    expect.soft(priceAmount).toMatch(testdata)
    expect.soft(totalPrice).toMatch(testdata)
    expect.soft(remainingPrice).toMatch(`${testdata} บาท`)

}
}