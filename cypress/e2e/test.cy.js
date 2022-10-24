/// <reference types="cypress" />

describe('visit my app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('check my 1st paragraph', () => {
      cy.log('I am here')
      cy.get('.jsx-ed91f0f1513cbcbf.main > :nth-child(1) > .jsx-a5cf438eb37df449').should('have.text','My first blog post')
      cy.log('git request')
      cy.log('git request in e2etestfix')
    })
  })
  