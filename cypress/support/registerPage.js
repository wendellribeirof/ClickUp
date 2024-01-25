import {el} from "./elements";

export default {
    addTask() {
        cy.get(el.btn.addTask).click();
    }
    
}