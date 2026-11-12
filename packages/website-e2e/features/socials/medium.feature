Feature: Medium Social Integration

  Background:
    Given the user is browsing in the en locale

  Scenario: Display Medium social panel
    When the user clicks the menu icon labelled "Medium"
    Then the user should see the text "Synchronising" in the drawer
    And the user should not see the text "Connection error" in the drawer
    And the user should see the text "View profile on Medium" in the drawer

  Scenario: Handle server action failures for Medium
    Given Fetching socials returns a server error
    When the user clicks the menu icon labelled "Medium"
    Then the user should see the text "Synchronising" in the drawer
    And the user should see the text "Connection error" in the drawer
    And the user should see the text "Go to Medium" in the drawer
    And the user should see the text "View profile on Medium" in the drawer
