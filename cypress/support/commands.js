
Cypress.Commands.add('abrirChatbot', () => {
    cy.viewport('iphone-xr')
    cy.visit('/')

    cy.get('.rcb-toggle-button')
        .should('be.visible')
        .click()
    cy.get('.rcb-chat-header span')
        .should('be.visible')
        .and('have.text', 'Sensei')
})
Cypress.Commands.add('verfificarMsg', (msg, timeout = 40000) => {
    cy.contains('.rcb-bot-message', msg, { timeout: timeout })
        .should('be.visible')
})
Cypress.Commands.add('selecionarOpcao', (opcao) => {
    cy.contains('.rcb-options', opcao).click()
})
Cypress.Commands.add('informarCode', (code) => {
    cy.get('.rcb-chat-input > textarea').type(code)
    cy.get('.rcb-send-button').click()
})
