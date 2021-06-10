/// <reference types="Cypress" />

describe( 'Zoom inout of the map in canvas using mouse wheel', () => {
    const time = 1000
    it('Access main screen', () => {
        cy.visit('https://www.google.com/?&hl=en-GB');
        cy.get('button').contains('I agree').click()
        cy.visit('https://www.google.com/maps/place/Gardens+by+the+Bay/@1.2815683,103.8614245,17z/data=!3m1!4b1!4m5!3m4!1s0x31da1904937e1633:0x62099677b59fca76!8m2!3d1.2815683!4d103.8636132')
        cy.wait(2000)
        cy.get("body")
        .click()
        .trigger("mouseover",{ button: 1 })  //Zoom in
        .trigger("wheel", { deltaY: -66.666666, wheelDelta: 120, wheelDeltaX: 0, wheelDeltaY: 120, bubbles: true})
        .wait(2000)
        .trigger("wheel", { deltaY: -66.666666, wheelDelta: 120, wheelDeltaX: 0, wheelDeltaY: 80, bubbles: true})
        .wait(2000)
        .trigger("wheel", { deltaY: -66.666666, wheelDelta: 120, wheelDeltaX: 0, wheelDeltaY: 40, bubbles: true})
        .blur()
        .then(() => {
        cy.get('body').trigger('mousemove').click()})

        cy.get("body") //Zoom Out
        .click()
        .trigger("mouseover",{ button: 1 }) 
        .wait(2000)
        .trigger("wheel", { deltaY: 5000, wheelDelta: 500, wheelDeltaX: 0, wheelDeltaY: -500, bubbles: true})
        .wait(2000)
        .trigger("wheel", { deltaY: 66.666666, wheelDelta: 120, wheelDeltaX: 0, wheelDeltaY: -600, bubbles: true})
        .wait(2000)
        .trigger("wheel", { deltaY: 66.666666, wheelDelta: 120, wheelDeltaX: 0, wheelDeltaY: -120, bubbles: true})
        .wait(2000)
        .blur()
        .then(() => {
        cy.get('body').trigger('mousemove').click()
        });
     })
        
        
})
    

