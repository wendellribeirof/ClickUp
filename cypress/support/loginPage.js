import index, { el } from "./index";
import {user_valido, user_invalido} from "../fixtures/login.json";

export default {
    visit () {
        cy.visit('/');
    },

    fillform () {
        cy.get(el.fld.login)
            .type(user_valido.login);
        cy.get(el.fld.password) 
            .type(user_valido.password);
    },

    enter () {
        cy.get(el.btn.enter)
            .click();
    }
}