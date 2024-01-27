import loginPage from "../support/loginPage";

describe("Tela de Login", () => {

    beforeEach(() => {
        loginPage.visit();
    });

    context('Dado que tenho usuário válido', () => {
        it('Então devo realizar login no sistema', () => {
            loginPage.fillform();
            loginPage.enter();
        });
    });
});


