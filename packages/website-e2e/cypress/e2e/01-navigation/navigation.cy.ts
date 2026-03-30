describe("navigation", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });

  it("should go to about page", () => {
    cy.get(".MuiToolbar-root:visible").contains(/About/i).click();
    cy.contains("Core principles").should("be.visible");
  });

  it("should go to source page", () => {
    cy.get(".MuiToolbar-root:visible")
      .contains(/Source/i)
      .click();

    cy.contains("This website is open source").should("be.visible");
  });

  it("should go to portfolio page", () => {
    cy.get(".MuiToolbar-root:visible")
      .contains(/Portfolio/i)
      .click();

    cy.contains("Featured case studies").should("be.visible");
  });
});
