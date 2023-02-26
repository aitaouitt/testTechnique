import { Given, When, Then, Before, After, And } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../PageObjectModel/ObjectsHomePage";

    Given ("Ouverture de l'application",() => {
        cy.visit('/')
        cy.wait(2000)
        homePage.btFermePop().click()
    })
    When ("Vérification du contenu de la home page",() => {
        homePage.logo().should('have.attr', 'src').then((srcImg) => {
            expect(srcImg).equal("assets/images/logo_foncia.svg")
        })
        homePage.imgDesktop().should('have.attr', 'src').then((imgDesktop) => {
            expect(imgDesktop).equal("https://foncia-fnc-strapi-api-prd-s3-mkg.s3.eu-west-3.amazonaws.com/Banniere-desktop-foncia-com.png")
        })
        // homePage.homeSearchTitle().invoke('text').then((text) => {
        //     expect(text).to.include("À vos côtés, en ligne et dans votre quartier")
        // })
        // homePage.homeSearchSubtitle().invoke('text').then((text) => {
        //     expect(text).to.include("Avec 500 agences immobilières dans notre réseau, vous pouvez toujours compter sur des professionnels Foncia près de chez vous pour acheter, vendre, louer, gérer votre bien ou votre copropriété.")
        // })
        // homePage.btFermePop().click()
        // cy.contains('Tout accepter').click() // Accepter les coockies
    })
    Then ("Rechercher un bien {string}",(Projet) => {
        homePage.tabLabel().each(($el,index) =>{
            if (index == 0){ // recherche du label "Rechercher un bien"
                cy.wrap($el).click()
            }
        })
        homePage.selectProjet().click({force:true})
        homePage.typeProjet().contains("Louer").click()
        homePage.selectTypeBien().click({force:true})
        
    })


    