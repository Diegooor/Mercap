// Autor : Diego Ordoñez
// Fecha : 23/07/2025
// Descripción : Casos de prueba de regresión para el login de Abbaco by Mercap.

/*-----------------------------------------------------------------------------------------*/


//importo librería para generar datos aleatorios
import { faker } from '@faker-js/faker';
let contador = 1; // Inicializo contador para nro de test

describe('Casos de prueba de regresión para el login de Abbaco by Mercap', () => {
    beforeEach(() => {
        cy.Precondiciones(); // llamo al comando Precondiciones para ingresar & validar elementos del login
    })
    
    
    const email = faker.internet.email(); // Genero mail aleatorio
    
    it(`TC ${contador++} - Camino feliz, Validar login con usuario y contraseña validos`, () => {
        

        
        cy.fixture("DOM/selectores").then((selectores) => {
            cy.get(selectores.login.email).type(email); // Ingreso el email ramdom
            cy.get(selectores.login.password).type('12345678'); // Ingreso la contraseña
            cy.get(selectores.login.btnContinue).click(); // Hago click en el botón Continue
        });
            

    });

    it(`TC ${contador++} - Validar warning nativo cuando no se ingresa password`, () => {
    cy.fixture("DOM/selectores").then((selectores) => {
        cy.get(selectores.login.email).type(email); // Ingreso el email ramdom
        
        // Valido que el campo contraseña tiene el atributo required, lo cual indica que es obligatorio
        cy.get(selectores.login.password).should('have.attr', 'required');

        cy.get(selectores.login.btnContinue).click(); // Hago click en el botón Continue y validar que no se ingresa password
        
        cy.get(selectores.login.password).should('not.have.value');
        cy.get(selectores.login.password).then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
            });
        });
    });
    
    
    it(`TC ${contador++}  - Validar warning nativo cuando no se ingresa mail`, () => {
    cy.fixture("DOM/selectores").then((selectores) => {
        cy.get(selectores.login.password).type('12345678'); // Ingreso la contraseña

        // Valido que el campo contraseña tiene el atributo required, lo cual indica que es obligatorio
        cy.get(selectores.login.email).should('have.attr', 'required');

        cy.get(selectores.login.btnContinue).click(); // Hago click en el botón Continue y validar que no se ingresa mail
        
    
        cy.get(selectores.login.email).should('not.have.value');
        cy.get(selectores.login.email).then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
            });
        });
    });     


    it(`TC ${contador++} - Validar hipervínculo Forgot password`, () => {
        
        // Se validara que la clase contiene un enlace de redireccion y que la url contiene  /password-reset-start
        
        cy.fixture("DOM/selectores").then((selectores) => {
            cy.get(selectores.login.forgotPassword).click(); // Hago click en el hipervínculo Forgot Password
            cy.url().should('include', '/password-reset-start'); // Valido que la URL incluye /password-reset-start
        });
        
    });

    it(`TC ${contador++} - Validar hipervínculo Sign up`, () => {
        
        // Se validara que la clase contiene un enlace de redireccion y que la url contiene  /singup
        
        cy.fixture("DOM/selectores").then((selectores) => {
            cy.get(selectores.login.singUp).click(); // Hago click en el hipervínculo Sign Up
            cy.url().should('include', '/signup'); // Valido que la URL incluye /signup
        });
        
    });

    it(`TC ${contador++} - Validar que el botón continue esta deshabilitado cuando no se ingresa mail ni password`, () => {
        
        //NOTA : Validar con negocio esta funcionalidad, dado que no cuando no se ingresa mail ni password, el botón Continue debería estar deshabilitado.
        

        cy.fixture("DOM/selectores").then((selectores) => {
            cy.get(selectores.login.btnContinue).should('be.disabled'); // Valido que el botón Continue está deshabilitado
        });

    });

    it(`TC ${contador++} - Validar que el botón continue esta deshabilitado cuando se ingresa mail pero no password`, () => {
        
        //NOTA : Validar con negocio esta funcionalidad, dado que no cuando  se ingresa mail pero no password, el botón Continue debería estar deshabilitado.


        cy.fixture("DOM/selectores").then((selectores) => {
            cy.get(selectores.login.email).type(email); // Ingreso el email ramdom
            cy.get(selectores.login.btnContinue).should('be.disabled'); // Valido que el botón Continue está deshabilitado
        });

    });

    it(`TC ${contador++} - Validar que el botón continue esta deshabilitado cuando se ingresa password pero no mail`, () => {
        
        //NOTA : Validar con negocio esta funcionalidad, dado que no cuando  se ingresa password pero no mail, el botón Continue debería estar deshabilitado.


        cy.fixture("DOM/selectores").then((selectores) => {
            cy.get(selectores.login.password).type('12345678'); 
            cy.get(selectores.login.btnContinue).should('be.disabled'); // Valido que el botón Continue está deshabilitado
        });

    });

    it(`TC ${contador++} - Validar que el boton Hide Show password/Hide password muestra y oculta la contraseña`, () => {
        
        cy.fixture("DOM/selectores").then((selectores) => {
            cy.get(selectores.login.password).type('12345678'); 
            cy.get(selectores.login.showPassword).click(); 
            cy.get(selectores.login.password).should('have.attr', 'type', 'text'); // Valido que el tipo de input es text
            
        });

    });

    it.only(`TC ${contador++} - Validar warning cuando se ingresa un mail invalido`, () => {
        
        // Uso expresión regular común para validar emails.
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        cy.fixture("DOM/selectores").then((selectores) => {
            cy.get(selectores.login.email).type('123500');
            cy.get(selectores.login.password).type('200000');
            
            // Valido que el email ingresado tiene un formato válido
            cy.get(selectores.login.email)
            .invoke('val')
            .should('match', emailRegex)
            cy.get(selectores.login.btnContinue).click(); 
            
            /*NOTA: Aca el dev debería implementar la validación de email en el backend, 
            para que no permita continuar con un email inválido o que no este en la base de datos.
            Una vez implementada la funcionalidad validaria en mensaje de error con algo como esto 
            👇👇
            
            cy.get('SelectorcssParaElMensajeDeError') 
            .should('be.visible')
            .and('contain', 'Por favor, introduce un email válido');*/
            

        });
    

    /* it(`TC ${contador++} - Validar contraseña contra en backend`, () => {

        NOTA: Aca el dev debería implementar la validación de contraseña en el backend,
        para que no permita continuar con una contraseña inválida, 
        una vez implementada la funcionalidad validaría en mensaje de error.


        })*/

    });

});
