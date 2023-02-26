import { Given, When, Then, Before, After, And } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../PageObjectModel/ObjectsHomePage";

    Given ("Ouverture de l'application",() => {
        cy.visit('/')
        cy.wait(2000)
        homePage.btFermePop().click()
    })
    When ("Vérification du contenu de la page d'accueil",() => {
        homePage.logo().should('have.attr', 'src').then((srcImg) => {
            expect(srcImg).equal("assets/images/logo_foncia.svg")
        })
        homePage.imgDesktop().should('have.attr', 'src').then((imgDesktop) => {
            expect(imgDesktop).equal("https://foncia-fnc-strapi-api-prd-s3-mkg.s3.eu-west-3.amazonaws.com/Banniere-desktop-foncia-com.png")
        })
        homePage.headerOnglets().each(($el,index) => {
            expect($el.text()).contains("Acheter")
            expect($el.text()).contains("Louer")
            expect($el.text()).contains("Vendre")
            expect($el.text()).contains("Gestion locative")
            expect($el.text()).contains("Syndic")
            expect($el.text()).contains("Vacances")
            expect($el.text()).contains("Découvrir Foncia")
            expect($el.text()).contains("Carrières")
        })
        homePage.homeSearchTitle().contains("À vos côtés, en ligne et dans votre quartier")
        homePage.homeSearchSubtitle().contains("Avec 500 agences immobilières dans notre réseau, vous pouvez toujours compter sur des professionnels Foncia près de chez vous pour acheter, vendre, louer, gérer votre bien ou votre copropriété.")
    })



    