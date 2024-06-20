/// <reference types="Cypress" />

describe('Check Out', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.login('standard_user', 'secret_sauce')
  })

  it('Validate CheckOut', () => {

    cy.addToCart()

    cy.get('#checkout').click()

    cy.fillForm('Oluwafemi', 'Orungbeja', '+23401')

    cy.get('#continue').click()

    //verify user is taken to the overview page
    cy.get('.title').should('have.text', 'Checkout: Overview')
  });


  it('Verify product Total in Overview Page', () => {

    cy.addToCart()

    cy.get('#checkout').click()

    cy.fillForm('Oluwafemi', 'Orungbeja', '+23401')

    cy.get('#continue').click()

    cy.expectedPrice()

    //complete the checkout process
    cy.get('#finish').click()

    //Verify that a confirmation message is displayed
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')

    //Back Home
    cy.get('#back-to-products').should('have.attr', 'id')
    cy.get('#back-to-products').click()
  })
})