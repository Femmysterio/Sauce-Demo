/// <reference types="Cypress" />

describe('Verify Add to cart', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.login('standard_user', 'secret_sauce')
    })

    it("Validate adding a product to the cart", () => {

        //Add " Bolt T-Shirt" to Cart
        cy.get('.btn_inventory').eq(2).click()

        // verify that the cart count is updated
        cy.get('.shopping_cart_link').should('have.text', 1)
        cy.get('.shopping_cart_link').invoke('prop', 'class').should('contain', 'shopping_cart_link');

        // Verify the button changes from "Add to cart" to "Remove"
        cy.get('#remove-sauce-labs-bolt-t-shirt')
            .should('contain', 'Remove')
            .and('be.visible')
    });

    it("Navigate to Cart Page", () => {

        cy.addToCart()

        //log items in Cart
        cy.get('.inventory_item_name').each(($el, index, $list) => {
            const items = $el.text()
            cy.log(items)
        })

        //Verify correct products are listed in the cart
        cy.get('.inventory_item_name')
            .eq(0)
            .should('contain.text', 'Sauce Labs Bike Light')

        cy.get('.inventory_item_name')
            .eq(1)
            .should('contain.text', 'Sauce Labs Bolt T-Shirt')
    });

    it('Calculates the total price of products in the cart', () => {

        cy.addToCart()
        cy.extractPrice()
    });

    it('Remove a product from the Cart', () => {

        cy.addToCart()
        
        cy.get('.shopping_cart_link').should('have.text', 2)

        cy.get('#remove-sauce-labs-bolt-t-shirt').click()

        cy.get('.shopping_cart_link').should('have.text', 1)
    });
})