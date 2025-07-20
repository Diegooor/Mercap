describe('Mi primera prueba en Cypress', () => {
    it('Realizar login exitoso en la pagina de OrangeHRM', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
    cy.get("[name='password']").type('admin123');
    cy.get("[type='submit']").click();
    }); 
});