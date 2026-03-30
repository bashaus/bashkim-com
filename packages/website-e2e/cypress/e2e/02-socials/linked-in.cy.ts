describe("socials/linked-in", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });

  it("should display 'no api' panel", () => {
    cy.get('.MuiToolbar-root:visible [href="/socials/linked-in"]').click();

    cy.get(".MuiDrawer-paper").within(() => {
      cy.contains("No API for LinkedIn").should("be.visible");
    });
  });
});
