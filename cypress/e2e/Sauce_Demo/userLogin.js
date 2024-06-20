import homePage from '../../support/pageObject/sauceDemo/homePage'
import productPage from '../../support/pageObject/sauceDemo/productPage'
/// <reference types="Cypress" />

describe('User Login', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Validate user can login with valid data using POM', () => {
        homePage.typeUserName('standard_user');
        homePage.typePassword('secret_sauce');
        homePage.clickLogin()

        productPage.elements.title().should('have.text', 'Products')
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') //Verify URL

        productPage.elements.logOut()
        productPage.elements.redirect().should('include.text', 'Accepted usernames')
    })

    it('Verify User cannot Login with Invalid data', ()=> {
        homePage.typeUserName('standard_user1');
        homePage.typePassword('secret_sauce');
        homePage.clickLogin()

        homePage.elements.errorMessage().should('include.text', 'Username and password do not match')
    })
})