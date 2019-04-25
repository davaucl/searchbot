// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

async function findResultWithSearchAsYouType(searchvalue, letterIndex, item) {
  if (letterIndex >= searchvalue.length) {
    return;
  }
  cy.get('.magic-box-input input').type(searchvalue[letterIndex], {delay: 500})
  cy.get('body').then(($body) => {
    if ($body.text().includes(item)) {
      cy.get('body').type('{cmd}', {release: false})
      cy.get('.CoveoResultLink').contains(item).click();
    } else {
      findResultWithSearchAsYouType(searchvalue, letterIndex + 1, item);
    }
  });
}

Cypress.Commands.add('searchasyoutype', (searchvalue, item) => {
    findResultWithSearchAsYouType(searchvalue, 0, item);
    cy.get('.magic-box-input input').clear()
});