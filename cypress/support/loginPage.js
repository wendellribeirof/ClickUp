import {el} from "./elements";
import {user_valido, user_invalido} from "../fixtures/login.json";
/*export const LoginPage = {

    go: () => {
        cy.visit ('/');
    },

    fillForm: (user) => {
        cy.get(el.fld.login).type(user.login);
        cy.get(el.fld.password).type(user.password);
    },

    submit: () => {
        cy.get(el.btn.toEnter).click();
    },

    message: () => {
        cy.contains(el.message.passwordInvalid)
            .should('be.visible', 'have.text');
    },

    link: () => {
        cy.get(el.btn.forgotPassword).click();
    },

    fild: (user) => {
        cy.get(el.fld.forgotPassword).type(user.login);
    },

    send: () => {
        cy.get(el.btn.sendMeLink).click();
    }
}*/

export default {
    visit() {
        cy.visit('/');
    },
  
    fillForm() {
      cy.get(el.fld.login).type(user_valido.login);
      cy.get(el.fld.password).type(user_invalido.password);
   
    },
  
    submit() {
      cy.get(el.btn.toEnter).click();
 
    },
  
    message() {
      cy.contains(el.message.passwordInvalid)
        .should('be.visible');
    
    },
  
    link() {
      cy.get(el.btn.forgotPassword).click();
    
    },
  
    fild() {
      cy.get(el.fld.forgotPassword).type(user_valido.login);
  
    },
  
    send() {
      cy.get(el.btn.sendMeLink).click();
      
    },

    loginSession () {
        cy.session([], () => {
            cy.visit('/');
            cy.get(el.fld.login).type(user_valido.login);
            cy.get(el.fld.password).type(user_invalido.password);
            cy.get(el.btn.toEnter).click();
        })
    },
  }
  
  

