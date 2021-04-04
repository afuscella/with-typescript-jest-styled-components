/// <reference types="cypress" />

beforeEach(() => {
  cy.log('Setup test before execution.');
});

describe('/pages', () => {
  describe('when initial page is requested', () => {
    it('should navigate to index page', () => {
      cy.visit('/');

      // @Assert
      cy.url().should('include', '/');
    });
  });
});
