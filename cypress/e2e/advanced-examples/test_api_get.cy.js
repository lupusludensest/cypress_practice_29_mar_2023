describe('Test API GET', () => {
  it('GET - Read all users', () => {
    cy.request('GET', 'https://swapi.dev/api/people/1/').then((response) => {
      expect(response).to.have.property('status', 200)
      expect(response.body).to.not.be.null
      expect(response.body.films).to.have.length(4)
      expect(response.body.starships).to.have.length(2)
      expect(response.body).to.have.property('name', 'Luke Skywalker')
      expect(response.body).to.have.property('skin_color', 'fair')
      expect(response.body).to.have.property('height', '172')
    })
  })
})