describe('test_2.cy.js ', () => {
    it('By', () => {
        cy.visit('https://www.amazon.com/');
        cy.viewport(1920, 1080);
        cy.get("input[type='text']").type("iphone 12");
        cy.get("input[type='submit']").click();
        cy.contains("Apple iPhone 12, 64GB, Green - Fully Unlocked (Renewed)").click();
        cy.contains("sign in").click();
        cy.contains("Mobile phone number or email");

    })
})