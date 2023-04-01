describe('Registration test', () => {

    const email = (`${Date.now()}@aharotest.com`)
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

        cy.contains('User account successfully created');
        cy.contains('Start your free 3 days');
        cy.contains('No commitments. Cancel anytime.');

        cy.get('body').should('contain', '$34.99/month');
        cy.get('.sc-9sfb8d-2').should('have.text', 'Grinfer support team');
        cy.get('.sc-kzh17a-1 > :nth-child(2)').click()
        cy.contains('Grinfer support team').should('not.be.visible');

    })
})