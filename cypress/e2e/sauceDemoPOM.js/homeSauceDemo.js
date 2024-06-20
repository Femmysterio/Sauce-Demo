import homePage from '../../support/pageObject/sauceDemo/homePage'
import productPage from '../../support/pageObject/sauceDemo/productPage'

describe('Validate POM ', ()=> {

    beforeEach(()=> {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Verify Login is successful', ()=> {
        homePage.typeUserName('standard_user');
        homePage.typePassword('secret_sauce');
        homePage.clickLogin()

        productPage.elements.title().should('have.text', 'Products')
    })

    it('Verify User cannot Login with Invalid data', ()=> {
        homePage.typeUserName('standard_user1');
        homePage.typePassword('secret_sauce');
        homePage.clickLogin()

        homePage.elements.errorMessage().should('include.text', 'Username and password do not match')
    })
})