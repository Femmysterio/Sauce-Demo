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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Custom command for login Saucedemo.com
Cypress.Commands.add('login', (username, password) => {
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})


Cypress.Commands.add('addToCart', () => {
    //Add " Bolt T-Shirt" to Cart
    cy.get('.btn_inventory').eq(1).click()
    cy.get('.btn_inventory').eq(2).click()

    //cartPage
    cy.get('.shopping_cart_link').click()
})


Cypress.Commands.add('extractPrice', () => {

    let totalPrice = 0;

    // get all product price and extract their values
    cy.get('.inventory_item_price')
        .each(($el) => {

            //Extract price and remove the dollar sign
            const priceText = parseFloat($el.text().replace('$', ''))
            const price = priceText

            totalPrice += price
        })
        .then(() => {
            cy.log(`Total Price of Products in Cart: $${totalPrice.toFixed(2)}`);
        })
});


Cypress.Commands.add('fillForm', (firstname, lastname, postalcode) => {
    cy.get('#first-name').type(firstname)
    cy.get('#last-name').type(lastname)
    cy.get('#postal-code').type(postalcode)
})


Cypress.Commands.add('expectedPrice', () => {
    cy.get('.summary_total_label').invoke('text').then((text) => {
        const totalPriceText = text.replace(/[^\d.-]/g, '');

        const totalPrice = parseFloat(totalPriceText)

        const price = 28.06

        const expectedTotalPrice = price

        expect(totalPrice).to.equal(expectedTotalPrice)
    })
})