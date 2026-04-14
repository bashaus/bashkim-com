Feature: Stack Overflow Social Integration

  Background:
    Given I am on the Homepage

  Scenario: Display Stack Overflow social panel
    When I click the menu icon labelled "Stack Overflow"
    Then I should see the text "Synchronising" in the drawer
    And I should see the text "Top posts" in the drawer
    And I should not see a connection error in the drawer

  Scenario: Handle server action failures for Stack Overflow
    Given Fetching socials returns a server error
    When I click the menu icon labelled "Stack Overflow"
    Then I should see the text "Synchronising" in the drawer
    And I should see a connection error in the drawer
    And I should see the text "Connection error" in the drawer
    And I should see the text "Go to Stack Overflow" in the drawer
    And I should see the text "View on Stack Overflow" in the drawer
