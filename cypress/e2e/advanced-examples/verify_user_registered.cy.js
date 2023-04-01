describe('Registration test', () => {

    const email = 'test_email@gmail.com';
    const firstName = 'first_name';
    const lastName = 'last_name';
    const password = 'Password1!';

    it('should register a new user', () => {
        cy.visit('https://grinfer.com/')

        cy.get('.sc-2aalce-3')
        .should('be.visible')
        .click();

        cy.get('#email')
        .type(email)
        .should('have.value', email);

        cy.get('#firstName')
        .type(firstName)
        .should('have.value', firstName);

        cy.get('#lastName')
        .type(lastName)
        .should('have.value', lastName);

        cy.get('#password')
        .type(password)
        .should('have.value', password);

        cy.get('.sc-p4qn9p-0')
        .should('have.text', 'Start learning')
        .click();

        cy.contains('An account with this email already exists');
        cy.contains('Forgot your password');

    })
})