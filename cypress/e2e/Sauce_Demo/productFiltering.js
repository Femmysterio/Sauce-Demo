/// <reference types="Cypress" />

describe('Validate product Filtering & Sorting', () => {


    it('Verify the Order of product prices', () => {
        cy.visit('/');
        cy.login('standard_user', 'secret_sauce')

        cy.get('.product_sort_container').select('Price (low to high)')

        cy.get('.inventory_item_price').then(prices => {
            //Extract the prices into numerical values
            const numericPrices = prices.toArray().map(priceElement => {
                return parseFloat(priceElement.innerText.replace('$', ''))
            })


            // Check if prices are displyed in ascending order
            for (let i = 0; i < numericPrices.length - 1; i++) {
                expect(numericPrices[i]).to.be.at.most(numericPrices[i + 1])
            }

            // Log the prices in an ascending order
            const sortedPrices = [...numericPrices].sort((a, b) => a - b)
            sortedPrices.forEach((price, index) => {
                cy.log(`Price ${index + 1}: $${price.toFixed(2)}`)
            })

            // Verify order of price
            cy.wrap(numericPrices).should('deep.equal', sortedPrices)
        })
    });
})