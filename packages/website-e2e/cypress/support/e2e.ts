// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

beforeEach(() => {
  const secret = Cypress.env("VERCEL_AUTOMATION_BYPASS_SECRET");
  if (!secret) {
    Cypress.log({ name: "vercel-bypass", message: "Secret not set, skipping" });
    return;
  }

  Cypress.log({ name: "vercel-bypass", message: "Setting bypass cookie" });

  cy.request({
    url: "/",
    headers: {
      "x-vercel-set-bypass-cookie": "true",
      "x-vercel-protection-bypass": secret,
    },
  });
});
