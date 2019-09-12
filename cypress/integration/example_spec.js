describe('My First Test', () => {
  it('Visits the Home page', () => {
    cy.visit('localhost:8080');
  });

  it('Check if you have an h2 tag', () => {
    cy.visit('localhost:8080');
    cy.get('h2').should('contain', 'Hello World');
  });

  it('Change the title of a button', () => {
    cy.visit('localhost:8080');
    cy.get('button').click();
    cy.get('button').should('contain', 'Changed');
  });
});