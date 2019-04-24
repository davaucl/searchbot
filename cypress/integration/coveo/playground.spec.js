/// <reference types="Cypress" />

function searchasyoutype(searchvalue, item){
  for(letter = 0; letter <= searchvalue.lenght; letter++)
  wordbuilder = wordbuilder + searchvalue[letter] 
  cy.get('.magic-box-input input').type(wordbuilder, {delay: 500})
  if(cy.get('.CoveoResultLink').contains(item)){
    cy.get('.CoveoResultLink').contains(item).click()
    break
  }
}