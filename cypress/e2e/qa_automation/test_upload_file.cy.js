describe('Test Grinfer', function () {
    it('Test upload btn', function () {
        cy.visit('https://grinfer.com/');
        cy.viewport(1920, 1080);
        cy.get('div[class="sc-286flp-0 hmSZTd"]').should('be.visible').click();
        cy.get(':nth-child(1) > .sc-8lxa00-9 > span').should('be.visible').contains('Design').click();

    })
})