import loginPage from "../support/loginPage";
import {user_valido, user_invalido} from "../fixtures/login.json";

beforeEach(() => {
    loginPage.visit();
});
describe("tela de login", () => {

    context('Dado que possuo usuário válido', () => {
        it('Então realizo login com sucesso', () => {
            loginPage.fillForm();
            loginPage.submit();
        });

        context('Dado que possuo usuário invalido', () => {

            it('Então realizo login sem sucesso', () => {
                loginPage.fillForm(user_invalido.login);
                loginPage.submit();
                loginPage.message();
            });

            context('Dado que esqueci minha senha', () => {

                it('Então devo recuperar senha', () => {
                    loginPage.link();
                    loginPage.fild(user_valido.login);
                    loginPage.send();
                });
            });
        });
    });
});

