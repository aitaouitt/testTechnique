import { Given, When, Then, Before, After, And } from "@badeball/cypress-cucumber-preprocessor";
import { BO } from "../PageObjectModel/ObjectsHomePage";
    Given('Je me connecte à ProCee',() => {
        cy.visit(Cypress.env("BO").baseUrl)
        BO.btLogin().click()
    })