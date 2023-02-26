Feature: Recherche Appartement


    @focus
  Scenario Outline: Vérifications sur la page d'accueil
    Given Ouverture de l'application
    When Vérification du contenu de la home page
    Then Rechercher un bien "<Projet>"
    Examples:
        | Projet |
        | Louer  |