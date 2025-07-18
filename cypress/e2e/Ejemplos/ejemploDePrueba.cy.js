describe('Mi primera prueba en Cypress', () => {
    it('Realizar login exitoso en la pagina de OrangeHRM', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get("[name='username']").type('Admin');
    cy.get("[name='password']").type('admin123');
    cy.get("[type='submit']").click();
    }); 
});