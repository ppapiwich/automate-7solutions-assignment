import { test as base} from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { HomePage } from '../pages/home-page'
import { Navigation } from '../helper/navigation-feature'
import { NokCashPage } from '../pages/nok-cash-page'
import { PaymentPage } from '../pages/payment-page'
import { ValidationFeature } from '../helper/validation-feature'

type MyFixture = {
    // page
    loginPage: LoginPage
    homePage: HomePage
    nokCashPage: NokCashPage
    paymentPage: PaymentPage
    
    //Feature
    navigation: Navigation
    validationFeature: ValidationFeature
}

export const test = base.extend<MyFixture>({
    loginPage: async({}, use) =>{
        const loginPage = new LoginPage()
        await use(loginPage)
    },
    homePage: async({}, use) =>{
        const homePage = new HomePage()
        await use(homePage)
    },
    nokCashPage: async({}, use) => {
        const nokCashPage = new NokCashPage()
        await use(nokCashPage)
    },
    paymentPage: async({}, use) => {
        const paymentPage = new PaymentPage()
        await use(paymentPage)
    },
    navigation: async({}, use) => {
        const navigation = new Navigation()
        await use(navigation)
    },
    validationFeature: async({}, use) => {
        const validationFeature = new ValidationFeature()
        await use(validationFeature)
    }
     
})