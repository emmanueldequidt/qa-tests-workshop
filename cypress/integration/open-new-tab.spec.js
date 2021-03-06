/// <reference types="Cypress" />

describe('Paging', () => {
    it('Click on a news title open it in a new tab', () => {
        cy.visit("https://mds-qa-tests.angry-unicorn.space/")


        // click on the first news title of the list to see if it opens on a new tab and scan to see if it has an
        // attribut who opened the link on a new tab
        cy.get(':nth-child(1) > .title > a')
            .click()
        cy.get(':nth-child(1) > .title > a').should('have.attr', 'target', '_blank')
    })

})