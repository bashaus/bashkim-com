describe("/portfolio/", () => {
  const PATHNAME_PORTFOLIO = "/portfolio/";

  describe("#page", () => {
    beforeEach(() => cy.visit(PATHNAME_PORTFOLIO));

    it("should render page", () => {
      cy.get("h1").should("contain", "Portfolio");
    });
  });
});
