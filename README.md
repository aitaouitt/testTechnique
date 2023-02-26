# Tests Cypress
- ## 💻 Pre-requisites
    1- Télécharger et installer Node.js
        https://nodejs.org/es/download/
        
    2- Télécharger et installer JSON fomatter en fonction de votre système d'exploitation
        https://github.com/cucumber/json-formatter 

## 🚀 Install the project
    1- Commande install Cypress: 
        npm install cypress --save-dev
        
    2- Commandes install Cucumber: 

        npm install -D @badeball/cypress-cucumber-preprocessor 
        
        npm install -D @bahmutov/cypress-esbuild-preprocessor
        
    3- Commandes install multiple-cucumber-html-reporter:

        npm install multiple-cucumber-html-reporter

        Save to dependencies:

        npm install multiple-cucumber-html-reporter --save
        

## 🚀 Run Tests
    Méthode 1: 

        En ligne de commande:

            1- lancer la commande <npm run testProd> pour executer le test en Prod

            2- lancer la commande <npm run testPreProd> pour executer le test en Pre-Prod

            à la fin de chaque éxecution des tests, un rapport HTML sera géneré. 

            Les rapports sont stockés dans: cypress/reports

    Méthode 2: 

        Lancer le test via l'interface Cypress:

            Etapes:
                1- Ouvrir l'interface avec la commande <npm run cypress:open>
                
                2- Clicker sur le test pour le lancer.
