Feature: Recherche Appartement


    @focus
  Scenario Outline: Vérifications de la page d'accueil et recherche d'un bien
    Given Ouverture de l'application
    When Vérification du contenu de la page d'accueil
    Then Recherche du bien
    And Vérification du résultat de la recherche