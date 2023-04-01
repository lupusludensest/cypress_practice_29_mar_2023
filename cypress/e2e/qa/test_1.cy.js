describe('test_1.cy.js https://unsplash.com/', () => {
  it('passes', () => {
    cy.visit('https://unsplash.com/');
    cy.contains("Log in").click();
    cy.get('input[type="email"]').type("testing_email_23_mar_2023@gmail.com");
    cy.get('input[type="password"]').type("testing_password_23_mar_2023");
    cy.get('input[type="submit"]').click();
    cy.contains("Invalid email or password.");
  })
})