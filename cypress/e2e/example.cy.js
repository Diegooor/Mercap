describe('Mi primera prueba en Cypress', () => {
    it('Visita Google y busca "Cypress"', () => {
    cy.visit('https://www.google.com');
    cy.get('input[name="q"]').type('Cypress{enter}');
    });
});
