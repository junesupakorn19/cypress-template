import LoginPages from "../pages/LoginPages.js";

const loginPage = new LoginPages();
let txtUsername = '', txtPassword = '', txtPin = ''

describe('Login Scenario Automate Test', () => {
    beforeEach(() => {
        cy.fixture('login-testdata.json').then((td) => {
            for (let i = 0; i < td.length; i++) {
                txtUsername = td[i].username
                txtPassword = td[i].password
                txtPin = td[i].pin
            }
        })
        loginPage.visitOffice()
    })

    it('login_1 login success with username account', () => {
        cy.inputLoginOffice(txtUsername, txtPassword)
        cy.buttonLoginOffice().wait(1000)
        loginPage.inputPin(txtPin)
        loginPage.verifyDashboardPage()
    })

    it('login_2 login fail with pin is invalid', () => {
        cy.inputLoginOffice('testlevel6', 'Aa112233')
        cy.buttonLoginOffice().wait(1000)
        loginPage.inputPin(txtPin)
        loginPage.verifyToastError('รหัส PIN ไม่ถูกต้อง')
        cy.wait(1000)
    })

    it('login_3 input username/password and close pin dialog', () => {
        cy.inputLoginOffice('testlevel6', 'Aa112233')
        cy.buttonLoginOffice().wait(1000)
        loginPage.inputPin(txtPin)
        loginPage.clickClosePinDialog()
        cy.wait(1000)
    })

    it('login_4 login fail with username is invalid', () => {
        cy.inputLoginOffice('testoffice112', txtPassword)
        cy.buttonLoginOffice().wait(1000)
        loginPage.verifyToastError('รหัสผ่านไม่ถูกต้อง')
    })

    it('login_5 login fail with password is invalid', () => {
        cy.inputLoginOffice(txtUsername, 'Aa112233')
        cy.buttonLoginOffice().wait(1000)
        loginPage.verifyToastError('รหัสผ่านไม่ถูกต้อง')
    })

    it('login_6 login fail with username/password is blank', () => {
        cy.buttonLoginOffice().wait(1000)
        loginPage.verifyToastError('รหัสผ่านไม่ถูกต้อง')
    })

    it('login_11 display hide password', () => {
        cy.inputLoginOffice(txtUsername, txtPassword)
        loginPage.clickDisplayPassword()
        cy.wait(1000)
    })

    afterEach(function () {
        const screenshoteTitle = this.currentTest.title.replace(/[^a-zA-Z0-9-_]/g, '-')
        cy.screenshot(screenshoteTitle)
    })

})