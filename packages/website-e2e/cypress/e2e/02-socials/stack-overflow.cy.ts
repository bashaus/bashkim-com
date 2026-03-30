describe("socials/stack-overflow", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });

  it("should display social panel", () => {
    cy.get('.MuiToolbar-root:visible [href="/socials/stack-overflow"]').click();

    cy.get(".MuiDrawer-paper").within(() => {
      cy.contains("Top posts").should("be.visible");

      cy.contains("Connection error").should("not.exist");
      cy.contains("Go to Stack Overflow").should("not.exist");
    });
  });

  it("should handle server action failures", () => {
    cy.intercept("POST", "**/socials/stack-overflow", {
      statusCode: 500,
    }).as("failedAction");

    cy.get('.MuiToolbar-root:visible [href="/socials/stack-overflow"]').click();

    cy.get(".MuiDrawer-paper").within(() => {
      cy.contains("Connection error").should("be.visible");
      cy.contains("Go to Stack Overflow").should("be.visible");
    });
  });
});
