describe('Teste do site exemplo', () => {
  it('Deve verificar o título da página', () => {
    cy.visit('https://example.com');
    cy.title().should('eq', 'Example Domain');
  });

  it('Deve verificar se contém o texto "More information"', () => {
    cy.visit('https://example.com');
    cy.contains('More information');
  });
});
