import loginPage from "../support/loginPage";
import {el} from "../support/elementsLogin";
describe("Acesso ao login", () => {

    beforeEach(() => {
        loginPage.visit();
    });

    context('Dado que acesso a tela de login', () => {
        it('Então devo realizar login válido', () => {
            loginPage.form();
            loginPage.enter();
        });
    });
});


