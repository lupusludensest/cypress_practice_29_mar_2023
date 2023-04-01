import Login from "../page_object_pattern/login.cy.js";

const email = 'test_login@test.com';
const password = 'test_password';

describe('Assertion',() => {

    const login = new Login()

    it('Assert Web Tests', () => {
        cy.visit('https://unsplash.com/');
        cy.viewport(1920, 1080);
        cy.location('protocol').should('eq', 'https:');
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash');

        login.btnlogin().should('be.visible')
        .click();

        login.email()
        .type(email)
        .should('have.value', email);

        login.password()
        .type(password)
        .should('have.value', password);

        login.click_btn_login()
        .should('be.visible')
        .click();

        cy.contains('Invalid email or password')
        .should('be.visible');

    })
})