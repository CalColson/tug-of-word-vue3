// https://docs.cypress.io/api/introduction/api.html

describe('Header actions', () => {
  it('has expected base content', () => {
    cy.visit('/')

    // header text
    cy.contains('h3', 'tug of word')
    cy.contains('h6', 'play')
    cy.contains('h6', 'about')
    cy.contains('h6', 'contact')

    // properly rendered font-awesome icons
    cy.get('.fa-sun')
    cy.get('.fa-moon')

    // properly rendered vuefrom toggle
    cy.get('.toggle.toggle-off')
  })

  it('should correctly implement light/dark mode', () => {
    cy.get('.toggle.toggle-off').should('not.have.class', 'toggle-on')
    cy.get('body').should('not.have.class', 'dark')
  
    cy.get('.toggle').trigger('click') // toggle dark-mode on
  
    cy.get('.toggle.toggle-on').should('not.have.class', 'toggle-off')
    cy.get('body').should('have.class', 'dark')
  
    cy.get('.toggle').trigger('click') // toggle dark-mode off
  
    cy.get('.toggle.toggle-off').should('not.have.class', 'toggle-on')
    cy.get('body').should('not.have.class', 'dark')
  })
})
