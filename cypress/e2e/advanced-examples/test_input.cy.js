describe('Test Input', function () {
    it('Test Input', function () {
        cy.visit('https://grinfer.com/');
        cy.viewport(1920, 1080);
        cy.get('input[type="text"]').should('be.visible').type('Sport').should('have.value', 'Sport');
        cy.get('button[class="sc-tghwm-0 sc-1q9s0sp-5 eJKhbS hsfeJX"]').should('be.visible').click();
        cy.get('h1[class="sc-1g9p14a-1 hllFHN"]').should('be.visible').contains('Search Results');
        cy.contains('Sports injury rehabilitation').click();
        cy.get('p[class="sc-9sfb8d-3 eUOmPm"]').should('contain', 'My name is Robyn').click();
        cy.get('button[class="sc-p4qn9p-0 sc-8vl1f7-2 guvpYR dpfFRL"]').should('contain', 'Start a dialogue').click();
        cy.get('div[class="sc-qoy952-3 ZkFct"]').should('contain', 'Email is required');
        cy.get('input[class="sc-qoy952-1 dybXHK"]').type('testing_email@test.com')
        cy.get('button[class="sc-p4qn9p-0 sc-8vl1f7-2 guvpYR dpfFRL"]').should('contain', 'Start a dialogue').click();
        cy.contains('Welcome back').should('be.visible');
        cy.contains('Not a member yet? Create an account.').should('be.visible');
        cy.get('#email').type('testing_email@test.com')
        cy.get('#password').type('testing_email')
        cy.get('button[data-e2e="google-button"]').should('contain', 'Join with Google')
        cy.get('button[data-e2e="facebook-button"]').should('contain', 'Join with facebook')
        cy.get('a[title="Grinfer - Forgot password?"]').should("be.visible").should('contain', 'Forgot password?')
        cy.get('button[type="submit"]').should('contain', 'Log In').click();
        cy.contains('Login failed. Wrong email or password.').should('be.visible');

    })
})