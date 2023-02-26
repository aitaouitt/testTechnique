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
    static typeBien() {
        return cy.get('.dropdown-button>label')
    }
    static inputLoyer() {
        return cy.get('#price')
    }
    static inputVille() {
        return cy.get('#city')
    }
    static listDeroulante() {
        return cy.get('#pr_id_6_list>li')
    }
    static btRechercher() {
        return cy.xpath('//*[@id="search-bar"]/div/form[1]/div/div[5]/app-foncia-button[2]')
    }
    static listBiens(){
        return cy.get('.foncia-card')
    }
    static numPages(){
        return cy.get('.map-pagination>li>a')
    }
    static headerLocalisation(){
        return cy.get('.search-results-header-location')
    }
    static headerLoyer(){
        return cy.get('.search-results-header-price')
    }
    static paginasion(){
        return '.paginator-container'
    }
    static headerOnglets(){
        return cy.get(".header-content-links")
    }
}
export {homePage}