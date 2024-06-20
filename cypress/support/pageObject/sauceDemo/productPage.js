class productPage{

    elements = {
        title: () => cy.get('.title'),
        logOut: ()=> cy.get('#logout_sidebar_link').click({force:true}),
        redirect: ()=> cy.get('#login_credentials'), 
        inventoryName: ()=> cy.get('.inventory_item_name'),
        inventorPrice: ()=> cy.get('.inventory_item_price'),
        inventoryBtn: ()=> cy.get('.btn_inventory')
    }

    inventory(){
        this.elements
    }

}
module.exports = new productPage;