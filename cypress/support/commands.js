
Cypress.Commands.add("Precondiciones", () => {
    cy.visit('/index.html'); // Visito la url del login de Abbaco by Mercap por medio del index.html

    cy.fixture("DOM/selectores").then((selectores) => {
        cy.get(selectores.elementosYtextos.logoMercap).should('be.visible'); // Valido que el logo de Abbaco by Mercap sea visible
       cy.get(selectores.elementosYtextos.welcome).should('have.text', 'Welcome'); // Valido que el cartel de bienvenida tenga el texto Welcome 
        cy.get(selectores.elementosYtextos.texEmail).invoke('text').should('include','Email address*') // Valido label de Username
        cy.get(selectores.elementosYtextos.texPassword).invoke('text').should('include','Password*'); // Valido label de Password
        cy.get(selectores.login.forgotPassword).invoke('text').should('include','Forgot password?'); // Valido label de Forgot Password
        cy.get(selectores.elementosYtextos.singUpText).invoke('text').should('include',"Don't have an account?"); // Valido label de Sign Up
        cy.get(selectores.login.btnContinue).should('have.text', 'Continue'); // Valido label de btn Continue
        cy.get(selectores.login.continueWithGoogle).invoke('text').should('include', 'Continue with Google'); // Valido label de btn Continue with Google
    });

});
        

        





// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })