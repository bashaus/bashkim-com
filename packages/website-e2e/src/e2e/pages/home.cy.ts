describe("/", () => {
  const PATHNAME_HOME = "/";

  describe("#page", () => {
    beforeEach(() => cy.visit(PATHNAME_HOME));

    it("should render heading", () => {
      cy.get("h1").contains("Hi! Call me Bash");
    });
  });
});
