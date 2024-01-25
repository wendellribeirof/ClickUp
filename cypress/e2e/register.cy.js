import registerPage from "../support/registerPage";
import loginPage from "../support/loginPage";
import {user_valido, user_invalido} from "../fixtures/login.json";


beforeEach(() => {
    loginPage.visit();
    loginPage.fillForm(user_valido, user_invalido);
    loginPage.submit();
})
describe('Dasboard de tarefas', () => {
    context('Dado que acesso a tela de cadastrar', () => {
        it('Deve ser cadastrado uma tarefa', () => {
            registerPage.addTask();
        })
    })
    

})