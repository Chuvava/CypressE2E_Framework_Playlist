import { homePage } from "../../pages/homePage";
const homePageObj = new homePage();
import testData from '../../fixtures/testData.json'


describe('test automation', () => {
    before(() => {
        cy.login(testData.login.email, testData.login.password)
    })

    
    it('Add To Cart flow', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName)
    })
})