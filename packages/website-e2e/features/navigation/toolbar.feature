Feature: Toolbar Navigation

  Background:
    Given the user is browsing in the en locale

  Scenario Outline: User can navigate to different sections via the toolbar
    When the user clicks the menu item labelled "<menuItemText>"
    Then the user should see the heading "<expectedHeading>"

    Examples:
      | menuItemText | expectedHeading             |
      | Portfolio    | Featured case studies       |
      | About        | Core principles             |
      | Source       | This website is open source |
