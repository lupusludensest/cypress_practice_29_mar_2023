describe('Scrolling', function () {
    const main_url = 'https://unsplash.com/';
    const search_field = '[data-test="homepage-header-search-form-input"]';
    const searched_element_text = 'h1[class="dvBHu oh0KJ"]';
    const searched_text = 'Car';
    const searched_pi_blue_bmw = ':nth-child(8) > .YdIix > :nth-child(1) > .GIFah > .zmDAx > .rEAWd > .omfF5 > .MorZF > [data-test="photo-grid-masonry-img"]';

    it('Scroll to carousel', function () {
        cy.visit(main_url);
        cy.viewport(1920, 1080);
        cy.get(search_field).type('Car{enter}');
        cy.get(searched_element_text).should('have.text', searched_text);
        cy.scrollTo(0, 3500);
        cy.get(searched_pi_blue_bmw).should('be.visible').click();
    })
})