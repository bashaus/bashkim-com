Feature: Medium Social Integration

  Background:
    Given I am on the Homepage

  Scenario: Display Medium social panel
    When I click the menu icon labelled "Medium"
    Then I should see the text "Synchronising" in the drawer
    And I should see the text "View profile on Medium" in the drawer
    And I should not see a connection error

  Scenario: Handle server action failures for Medium
    Given Fetching socials returns a server error
    When I click the menu icon labelled "Medium"
    Then I should see the text "Synchronising" in the drawer
    And I should see the text "Connection error" in the drawer
    And I should see the text "Go to Medium" in the drawer
    And I should see the text "View profile on Medium" in the drawer
