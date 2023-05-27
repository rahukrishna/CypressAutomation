import HomePage from "../ProductsPage"
const homePage = new HomePage();
/// <reference types="Cypress" />
describe('First test suite',function(){
    beforeEach(() => {
        cy.log('I run before every test in every spec file!!!!!!')
        cy.fixture('example').then(function(data)
        {
            this.data=data
        }) 
      })
      
      
        it('sample', function(){
        cy.visit('https://tutorialsninja.com/demo/')
        //cy.get('div.button-group button').eq(0).click
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
       
        cy.get('.product-thumb.transition').as('productLocator')
        cy.get('@productLocator').find('.caption').each(($el, index, $list) => {
            cy.log('inside if')
        	const textVeg=$el.find('h4').text() 
            if(textVeg.includes(this.data.name))
            {
                cy.log('inside second if' + this.data.name)
                cy.wrap($el).find('.button-group button:nth-child(1)').eq(1).click()
                cy.log('clicked')
                
            }
        
        })
    })
    it.only('sample2', function(){
       

        cy.visit(Cypress.env('url'))
        this.data.productList.forEach(element=>
            {
                cy.addProductToCart(element)  
            }
            )
            homePage.getCheckoutButton().click();              
        var sum= 0;
        var totalPrice = 0
        var qty = 0
        var totalUnitPriceInt = 0
        var calculatedWholePrice = 0;
        homePage.gettotalUnitPrice().each(($el, index, $list) => {
            const totalPrice = $el.text();
            var individualUnitPrice =0;
            const totalPriceInteger = parseInt(totalPrice.substring(3,totalPrice.length))
            sum = sum+totalPriceInteger;
            homePage.getIndividualUnitprice().eq(index).then(function(element)
            {
                var getIndividualUnitprice =element.text().split(" ")
                getIndividualUnitprice = getIndividualUnitprice[1].trim()
                individualUnitPrice= Number(getIndividualUnitprice)
            
            })
            homePage.getquantity().eq(index).invoke('val').then(value =>
             {
                 qty = value;
            })
            homePage.gettotalUnitPrice().eq(index).then(function(element)
            {
                var totalUnitPrice = element.text().split(" ")
                totalUnitPrice= totalUnitPrice[1].trim()
                totalUnitPriceInt= Number(totalUnitPrice)
               /* cy.log("Inside total unit Price -->"+totalUnitPriceInt)
                cy.log("Quantity -->"+qty)
                cy.log("individual price ==>"+individualUnitPrice)*/
                var calculatedTotalUnitPrice = individualUnitPrice*qty
                expect(calculatedTotalUnitPrice).to.equal(totalUnitPriceInt)
                calculatedWholePrice= calculatedWholePrice+calculatedTotalUnitPrice

            }).then(function()
            {
             cy.log("Calculated whole Price individually -->"+calculatedWholePrice)   
            })                      
        })
        homePage.getTotalPrice().then(function(element)
                {
                     totalPrice = element.text().split(" ")
                    totalPrice = Number(totalPrice[1].trim())
                    cy.log("total price Printed->"+totalPrice)
                    expect(sum).to.equal(totalPrice)
                    expect(calculatedWholePrice).to.equal(totalPrice)
                    expect(calculatedWholePrice).to.equal(sum)
                })
        homePage.getCheckoutButton().click();
        homePage.getCountryTextBox().type('India')
        homePage.getdropdown().click()
        homePage.getTermsandCOnditionsText().click()
        homePage.getPurchaseButton().click()
        homePage.getAlertText().then(function(element)
        {
            const textActual =element.text()
            expect(textActual.includes('Thank you! Your order will be delivered in next few weeks')).to.be.true
        
        })
        
        

    })
})
