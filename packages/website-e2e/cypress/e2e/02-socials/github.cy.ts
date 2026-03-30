describe("socials/github", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });

  it("should display social panel", () => {
    cy.get('.MuiToolbar-root:visible [href="/socials/github"]').click();

    cy.get(".MuiDrawer-paper").within(() => {
      cy.contains("Site source").should("be.visible");

      cy.contains("Connection error").should("not.exist");
      cy.contains("Go to GitHub").should("not.exist");
    });
  });

  it("should handle server action failures", () => {
    cy.intercept("POST", "**/socials/github", {
      statusCode: 500,
    }).as("failedAction");

    cy.get('.MuiToolbar-root:visible [href="/socials/github"]').click();

    cy.get(".MuiDrawer-paper").within(() => {
      cy.contains("Connection error").should("be.visible");
      cy.contains("Go to GitHub").should("be.visible");
    });
  });
});
