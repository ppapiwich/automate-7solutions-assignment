export class PaymentPage{
    readonly expandDescriptionBtn = 'button[data-testid="payment-summary-info-view-more"]'
    readonly nokCashAmount = 'span[data-testid="nokcash-amount"]'
    readonly priceAmount = 'span[data-testid="sub-total"]'
    readonly totalPrice = 'span[data-testid="total-price"]'
    readonly remainingPrice = 'div[data-testid="remaining-amount"] span'
}