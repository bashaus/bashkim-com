Feature: GitHub Social Integration

  Background:
    Given I am on the Homepage

  Scenario: Display GitHub social panel
    When I click the menu icon labelled "GitHub"
    Then I should see the text "Synchronising" in the drawer
    And I should see the text "Pinned items" in the drawer
    And I should not see a connection error in the drawer
    And I should see the text "View profile on GitHub" in the drawer

  Scenario: Handle server action failures for GitHub
    Given Fetching socials returns a server error
    When I click the menu icon labelled "GitHub"
    Then I should see the text "Synchronising" in the drawer
    And I should see a connection error in the drawer
    And I should see the text "Connection error" in the drawer
    And I should see the text "Go to GitHub" in the drawer
    And I should see the text "View profile on GitHub" in the drawer
