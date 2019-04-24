/// <reference types="Cypress" />

it('runs a query and a click on normal behavior site ', () => {
  cy.visit('https://search.cloud.coveo.com/pages/searchasyoutype0j90vzc7/searchasyoutype?csrf_token=b3cd0f70-bfb3-40e4-a366-d6942192dd8f#sort=relevancy')
  cy.get('#loginWithGoogle').click()
  cy.searchasyoutype('beans', 'Heinz Five Beans 415g')
  cy.searchasyoutype('milk', 'Carnation Evaporated Milk 410g')
})
