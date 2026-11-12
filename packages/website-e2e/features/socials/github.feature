Feature: GitHub Social Integration

  Background:
    Given the user is browsing in the en locale

  Scenario: Display GitHub social panel
    When the user clicks the menu icon labelled "GitHub"
    Then the user should see the text "Synchronising" in the drawer
    And the user should not see the text "Connection error" in the drawer
    And the user should see the text "Pinned items" in the drawer
    And the user should see the text "View profile on GitHub" in the drawer

  Scenario: Handle server action failures for GitHub
    Given Fetching socials returns a server error
    When the user clicks the menu icon labelled "GitHub"
    Then the user should see the text "Synchronising" in the drawer
    And the user should see the text "Connection error" in the drawer
    And the user should see the text "Go to GitHub" in the drawer
    And the user should see the text "View profile on GitHub" in the drawer
