Cypress.Commands.add('inputLoginOffice', (username, password) => {
    cy.get('div[class="n-input__input"]').find('input[placeholder="กรอก username"]').clear().type(username)
    cy.get('div[class="n-input__input"]').find('input[placeholder="กรอก password"]').clear().type(password)
})

Cypress.Commands.add('buttonLoginOffice', () => {
    cy.get('button[class="btn primary w-full mt-4"]').contains('เข้าสู่ระบบ').click()
})