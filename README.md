# foncia
## Tests Cypress Alexandra
- ## 💻 Pre-requisites
    1- Télécharger et installer Node.js
        https://nodejs.org/es/download/
        
    2- Télécharger et installer JSON fomatter en fonction de votre système d'exploitation
        https://github.com/cucumber/json-formatter 

## 🚀 Install the project
    1- Commande install Cypress: 
        npm install cypress --save-dev
        
    2- Commande install Cucumber: 

        npm install -D @badeball/cypress-cucumber-preprocessor 
        
        npm install -D @bahmutov/cypress-esbuild-preprocessor
        
    3- Commande install multiple-cucumber-html-reporter:

        npm install multiple-cucumber-html-reporter
        
    4- Ajout des variables d'envirennments:

        CY_MDP  => Le mot de passe d'accés au BO
        CY_MDP1 => Le mot de passe d'accés au nouveau ProCee
        CY_USER => L'adresse mail


## 🚀 Run Tests
    Méthode 1: 

        En ligne de commande:
            Sur la PREPROD
                npm run testPreProd:MonExpert
                npm run testPreProd:ProCee
                npm run testPreProd:Simulateur
                npm run testPreProd:Roles
                npm run testPreProd:Emmy
                npm run testCyPreProd:MonExpert => avec envoi de notification sur slack canal "recette-test-auto"
                npm run testCyPreProd:ProCee => avec envoi de notification sur slack canal "recette-test-auto"
                npm run testCyPreProd:Simulateur => avec envoi de notification sur slack canal "recette-test-auto"

            Sur QATEST
                npm run testQatest:MonExpert
                npm run testQatest:ProCee
                npm run testQatest:Roles
                npm run testQatest:Emmy
                npm run testQatest:Simulateur
                npm run testCyQatest:MonExpert => avec envoi de notification sur slack canal "recette-test-auto"
                npm run testCyQatest:ProCee => avec envoi de notification sur slack canal "recette-test-auto"
                npm run testCyQatest:Simulateur => avec envoi de notification sur slack canal "recette-test-auto"

            En PROD
                npm run testProd:Simulateur
                npm run testProd
                npm run testCyProd => avec envoi de notification sur slack canal "recette-test-auto"

            npm run testSalesForce
            npm run testProCeeFront


            à la fin de chaque éxecution des tests, un rapport HTML sera géneré. 

            Les rapports sont stockés dans: https://github.com/teksial/test_cypress/tree/main/cypress/reports

    Méthode 2: 

        Lancer un seul test à la fois via l'interface Cypress:

            Etapes:
                1- Ouvrir l'interface avec la commande "npm run cypress:open"
                
                2- Lancer le tests en cliquant dessus
