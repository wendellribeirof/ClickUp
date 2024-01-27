import {user_valido, user_invalido} from "../fixtures/login.json";
import {el} from "./elementsLogin";

export default {
    visit () {
        cy.visit('/login');
    },

    form () {
        cy.get(el.fld.login)
            .type(user_valido.login);
        cy.get(el.fld.password)
            .type(user_valido.password);
    },

    enter () {
        cy.get(el.btn.login)
            .click();
    }
    
}
