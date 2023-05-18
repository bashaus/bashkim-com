describe("options", () => {
  const COOKIE_NAME_APPEARANCE = "appearance";

  describe("appearance", () => {
    const PROP_HTML_APPEARANCE = "data-appearance";
    const CSS_SETTINGS_BUTTON = "[data-test-id='MenuButtonSettings']";
    const CSS_APPEARANCE_BUTTON =
      "[data-test-id='SiteSettings.Appearance'] input";

    it("switches on press", () => {
      cy.clearCookie(COOKIE_NAME_APPEARANCE);
      cy.visit("/");

      cy.get(CSS_SETTINGS_BUTTON).click();

      cy.get(CSS_APPEARANCE_BUTTON).click();
      cy.get("html").should("have.attr", PROP_HTML_APPEARANCE, "dark");

      cy.get(CSS_APPEARANCE_BUTTON).click();
      cy.get("html").should("have.attr", PROP_HTML_APPEARANCE, "light");
    });

    it("saves a cookie", () => {
      cy.clearCookie(COOKIE_NAME_APPEARANCE);
      cy.visit("/");

      cy.get(CSS_SETTINGS_BUTTON).click();
      cy.get(CSS_APPEARANCE_BUTTON).click();

      cy.get("html").should("have.attr", PROP_HTML_APPEARANCE, "dark");
      cy.getCookie(COOKIE_NAME_APPEARANCE).should(
        "have.property",
        "value",
        "dark"
      );
    });

    it("reads the cookie", () => {
      cy.setCookie(COOKIE_NAME_APPEARANCE, "dark");
      cy.visit("/");

      cy.get("html").should("have.attr", "data-appearance", "dark");
    });

    afterEach(() => {
      cy.clearCookie(COOKIE_NAME_APPEARANCE);
    });
  });
});
