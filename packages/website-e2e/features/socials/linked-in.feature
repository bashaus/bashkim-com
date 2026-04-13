Feature: LinkedIn Social Integration

  Background:
    Given I am on the Homepage

  Scenario: Display LinkedIn "no api" panel
    When I click the menu icon labelled "LinkedIn"
    Then I should see the text "No API for LinkedIn" in the drawer
