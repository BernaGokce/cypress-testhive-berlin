describe('Device Tests', () => {
    it('720p', () => {
        cy.viewport(1280, 720)
        cy.visit('https://twitter.com/')
        cy.wait(3000)
    })

    it('1080p', () => {
        cy.viewport(1980, 1080)
        cy.visit('https://twitter.com/')
        cy.wait(3000)
    })

    it('iphone X', () => {
        cy.viewport('iphone-x')
        cy.visit('https://twitter.com/')
        cy.wait(3000)
    })

    it('ipan mini', () => {
        cy.viewport('ipad-mini')
        cy.visit('https://twitter.com/')
        cy.wait(3000)
    })

    it('macbook 15', () => {
        cy.viewport('macbook-15')
        cy.visit('https://twitter.com/')
        cy.wait(3000)
    })
})