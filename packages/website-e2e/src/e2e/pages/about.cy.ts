describe("/about/", () => {
  const PATHNAME_ABOUT = "/about/";

  describe("#page", () => {
    beforeEach(() => cy.visit(PATHNAME_ABOUT));

    it("should render page", () => {
      cy.get("h1").should("contain", "Bash");
    });
  });
});
