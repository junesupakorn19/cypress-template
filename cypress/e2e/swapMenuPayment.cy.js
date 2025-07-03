import SwapMenuPaymentPages from "../../pages/office-demo/SwapMenuPaymentPages.js";

const swapMenuPayment = new SwapMenuPaymentPages();
let numPin = 135236

describe('example cypress tutorial', () => {
    beforeEach(() => {
        cy.session('authenticated-user', () => {
            cy.fixture('office-demo/login-testdata.json').then((td) => {
                for (let i = 0; i < td.length; i++) {
                    swapMenuPayment.visit()
                    cy.get('div[class="n-input__input"]').find('input[placeholder="กรอก username"]').clear().type(td[i].username)
                    cy.get('div[class="n-input__input"]').find('input[placeholder="กรอก password"]').clear().type(td[i].password)
                    cy.get('button[class="btn primary w-full mt-4"]').contains('เข้าสู่ระบบ').click()
                    // cy.wait(3000)
                }
                swapMenuPayment.inputPin(numPin)
                cy.wait(3000)
                // swapMenuPayment.visit()
                swapMenuPayment.verifyDashboardPage()
            })
        });
    })

    it('login success', () => {

    })

})

