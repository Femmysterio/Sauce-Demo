/// <reference types="Cypress" />

class homePage{

    elements = {
        username: () => cy.get('#user-name'),
        password: () => cy.get('#password'),
        login: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    typeUserName(username){
        this.elements.username().type(username)
    }

    typePassword(password) {
        this.elements.password().type(password)
    }

    clickLogin() {
        this.elements.login().click()
    }

}
module.exports = new homePage