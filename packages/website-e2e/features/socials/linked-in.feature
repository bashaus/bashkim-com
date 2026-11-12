Feature: LinkedIn Social Integration

  Background:
    Given the user is browsing in the en locale

  Scenario: Display LinkedIn "no api" panel
    When the user clicks the menu icon labelled "LinkedIn"
    Then the user should see the text "No API for LinkedIn" in the drawer
