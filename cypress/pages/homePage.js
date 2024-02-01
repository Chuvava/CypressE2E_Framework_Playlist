export class homePage {

    weblocators = {
        
        searchInput: '[name="search"]',
        clickSearch: '.btn-default22',
        product: '.product-thumb img[title="MacBook"]',
        addToCart: 'Add to Cart',
        successMessage: 'div.alert.alert-success.alert-dismissible'
    }

    searchProduct(productName) {
        cy.get(this.weblocators.searchInput).type(productName)
        cy.get(this.weblocators.clickSearch).click()
    }

    addToCart() {
        cy.contains(this.weblocators.addToCart).first().click()
    }

    verifySuccessMessage() {
        return cy.get(this.weblocators.successMessage)
    }
}