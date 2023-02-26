import { Given, When, Then, Before, After, And } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../PageObjectModel/ObjectsHomePage";
let dataTest;

    before(() => {
        cy.fixture("dataTest.json").then((data) => {
            dataTest = data;
        })
    })

    Then ("Recherche du bien",() => {
        homePage.tabLabel().each(($el,index) =>{
            if (index == 0){ // recherche du label "Rechercher un bien"
                cy.wrap($el).click()
            }
        })
        homePage.selectProjet().click({force:true})
        homePage.typeProjet().contains(dataTest.Projet).click()
        homePage.selectTypeBien().click({force:true})
        homePage.typeBien().contains(dataTest.TypeBien).click()
        homePage.inputLoyer().click().clear().type(dataTest.LoyerMax)
        homePage.inputVille().click().clear().type(dataTest.Ville)
        homePage.listDeroulante().each(($el,index) => {
            if (index == 0){
                cy.wrap($el).click()
            }
        })
        cy.wait(1000)
        homePage.btRechercher().click()
    })

    And ("Vérification du résultat de la recherche",() => {
        homePage.headerLocalisation().invoke('text').then((text) => {
            expect(text).to.include(dataTest.Ville) // Vérification si la ville recherchée correspend à celle du header de recherche
        })
        homePage.headerLoyer().invoke('text').then((text) => {
            expect(text).to.include(dataTest.LoyerMax) // Vérification si le loyer max recherché correspend à celui du header de recherche
        })
        cy.get("body").then($body => {
            if ($body.find(homePage.paginasion()).is(':visible')){ // Vérification si la list retounée contient plus d'une page 
                homePage.numPages().each(($numPage,indexPage) => { // Boucle sur la list des pages
                    cy.wrap($numPage).invoke('attr', 'href').then((url) => {
                        cy.visit(url) // Changement de page dans la list de recherche
                    })
                    homePage.listBiens().each(($el,index) => { // Boucle sur la liste des bien trouvés
                        expect($el.text()).contains((dataTest.Projet).toLowerCase()) // Vérification si chaque bien trouvé correspend au projet recherché
                    })
                })
            }else{
                homePage.listBiens().each(($el,index) => { // Boucle sur la liste des bien trouvés
                    expect($el.text()).contains((dataTest.Projet).toLowerCase()) // Vérification si chaque bien trouvé correspend au projet recherché
                })
            }
        })
    })


    