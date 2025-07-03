class LoginPages {
    visitOffice() {
        cy.visit('https://demo-uat-office-x.thesonicblue.xyz')
    }

    inputPin(textOTP) {
        let digits = textOTP.toString()
        cy.log(digits)
        for (let i = 0; i < digits.length; i++) {
            cy.get('input[data-test="single-input"]').eq(i).type(digits[i])
        }
    }

    verifyDashboardPage() {
        cy.get('div[class="content-header"]').find('span[class="title"]').should('have.text', 'ข่าวสาร')
    }

    verifyToastError(txtErrorMessage) {
        cy.get('div[class="n-message__content"]').should('have.text', txtErrorMessage)
    }

    clickDisplayPassword() {
        cy.get('i[class="n-base-icon"]').click()
    }

    clickClosePinDialog() {
        cy.get('i[class="n-base-icon"]').find('svg[aria-hidden="true"]').click()
    }

} export default LoginPages;