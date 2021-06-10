/// <reference types="Cypress" />

describe('My click and drop Test', () => {
    const time = 1000
    it('Access main screen', () => {
        cy.visit('https://www.google.com/?&hl=en-GB');
        cy.get('button').contains('I agree').click()
        cy.visit('https://www.google.com/maps/place/Gardens+by+the+Bay/@1.2815683,103.8614245,17z/data=!3m1!4b1!4m5!3m4!1s0x31da1904937e1633:0x62099677b59fca76!8m2!3d1.2815683!4d103.8636132')
        cy.get('body')
            .trigger('dragstart', 770, 261, 'right',{ button: 0 },{ force: true }).wait(3000)
            .click({ force: true })
            .trigger('mousemove', 932, 351 ,'right',{ button: 0 },{ force: true })
            .wait(3000)
            .trigger('mousedown', 700, 544 ,'bottom',{ button: 0 },{ force: true })
            .wait(3000)
            .trigger('mouseup', 444, 371,'left',{ button: 0 },{ force: true })
            .wait(3000)
        cy.get('body').click({ force: true })
            .trigger('dragleave',{ force: true })
            .wait(3000)
          

    
        

    })
        
        
})