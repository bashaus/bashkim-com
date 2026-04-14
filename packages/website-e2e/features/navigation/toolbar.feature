Feature: Toolbar Navigation

  Background:
    Given I am on the Homepage

  Scenario Outline: User can navigate to different sections via the toolbar
    When I click the menu item labelled "<menuItemText>"
    Then I should see the heading "<expectedHeading>"

    Examples:
      | menuItemText | expectedHeading             |
      | Portfolio    | Featured case studies       |
      | About        | Core principles             |
      | Source       | This website is open source |
