class HomePage
{

    getAddtoCart()
    {
        return cy.get('button.btn.btn-info')
    }

    getCheckoutButton()
    {
        return cy.contains('Checkout')
    }
    getquantity()
    {
        return cy.get('input#exampleInputEmail1')
    }
    getIndividualUnitprice()
    {
        return cy.get('tr td:nth-child(3) strong')
    }
    gettotalUnitPrice()
    {
        return cy.get('tr td:nth-child(4) strong')
    }
    getTotalPrice()
    {
        return cy.get('h3 strong')
    }
    getCountryTextBox()
    {
        return cy.get('#country')
    }
    getdropdown()
    {
        return cy.get('div.suggestions li a')
    }
    getTermsandCOnditionsText()
    {
        return cy.get('label[for="checkbox2"]')
    }
    getTermsandCOnditionsCheckBox()
    {
        return cy.get('#checkbox2')
    }
    getPurchaseButton()
    {
        return cy.get('input[type="submit"]')
    }
    getAlertText()
    {
        return cy.get('div.alert')
    }
}
export default HomePage;