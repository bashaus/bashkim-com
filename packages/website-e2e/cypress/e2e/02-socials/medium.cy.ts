describe("socials/medium", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });

  it("should display social panel", () => {
    cy.get('.MuiToolbar-root:visible [href="/socials/medium"]').click();

    cy.get(".MuiDrawer-paper").within(() => {
      cy.contains("View profile on Medium").should("be.visible");

      cy.contains("Connection error").should("not.exist");
      cy.contains("Go to Medium").should("not.exist");
    });
  });

  it("should handle server action failures", () => {
    cy.intercept("POST", "**/socials/medium", {
      statusCode: 500,
    }).as("failedAction");

    cy.get('.MuiToolbar-root:visible [href="/socials/medium"]').click();

    cy.get(".MuiDrawer-paper").within(() => {
      cy.contains("Connection error").should("be.visible");
      cy.contains("Go to Medium").should("be.visible");
    });
  });
});
