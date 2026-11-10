describe('GameZone homepage', () => {
  it('successfully opens the homepage', () => {
    cy.visit('http://localhost:5173');

    cy.contains('Welcome to GameZone!').should('be.visible');

    cy.contains('GameZone').should('be.visible');

    cy.contains('Головна').should('be.visible');
  });
});
