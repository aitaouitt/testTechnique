import 'cypress-file-upload';

class homePage {
    static logo() {
        return cy.get('.logo')
    }
    static imgDesktop() {
        return cy.get('.p-d-lg-block')
    }
    // p-d-none p-d-lg-block
    static btFermePop() {
        return cy.get('.p-button-white')
    }
    static homeSearchTitle() {
        return cy.get('.home-search-title')
    }
    static homeSearchSubtitle() {
        return cy.get('.home-search-subtitle')
    }
    static tabLabel() {
        return cy.get('.research-bar-tabs>label')
    }
    static selectProjet() {
        return cy.get('#projectToggle>span[class=\"plus\"]')
    }
    static typeProjet() {
        return cy.get('.dropdown-button>label')
    }
    static selectTypeBien() {
        return cy.get('#propertyToggle>span[class=\"plus\"]')
    }

    

    
}
export {homePage}