import 'cypress-file-upload';

class BO {
    static inputUser() {
        return cy.get('#inputEmail')
    }
    static inputPSW() {
        return cy.get('#inputPassword')
    }
    static btLogin() {
        return cy.get('#login')
    }
}
export {BO}