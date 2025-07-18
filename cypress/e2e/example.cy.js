describe('Mi primera prueba en Cypress', () => {
    it('Visitar toolsqa y buscar Cypress', () => {
        cy.visit('https://toolsqa.com/')
        cy.get('[placeholder="Search"]:eq(1)')
        .type('Cypress{enter}');
        cy.url().should('include', 'Cypress');

    });
});
