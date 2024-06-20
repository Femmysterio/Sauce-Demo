import productPage from '../../support/pageObject/sauceDemo/productPage'
/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('/');      
    cy.login('standard_user', 'secret_sauce')
})

describe('Verify product Listing', () => {

    it("List all home page products", () => {

        cy.get('.inventory_list').should('exist')

        cy.get(".inventory_item").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        });

    });

    it.only("Verify each product has a name, price, and an 'Add to Cart' button", ()=> {

        cy.get('.inventory_item').each(($el, index, $list) => {
            cy.wrap($el).within(() => {
                productPage.elements.inventoryName().should('exist')
                productPage.elements.inventorPrice().should('exist')
                productPage.elements.inventoryBtn().should('exist')
            })
        })
    });

    it('Verify that products are sorted by default', () => {

        cy.get('.inventory_item_name ').then(($elements) => {
            const sortedElements = [...$elements].map(el => el.innerText)
            expect(sortedElements).to.be.sorted()
        })
    })
})