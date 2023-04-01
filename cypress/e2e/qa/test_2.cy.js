describe('test_2.cy.js ', () => {
    it('By', () => {
        cy.visit('https://www.amazon.com/');
        cy.viewport(1920, 1080);
        cy.get("input[type='text']").type("iphone 12");
        cy.get("input[type='submit']").click();
        cy.contains("Apple iPhone 12 (256GB, White) [Locked] + Carrier Subscription").click();
        cy.contains("Sign in to check eligibility").click();
        cy.contains("Sign in");

    })
})