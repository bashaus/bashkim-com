import { Before } from "@cucumber/cucumber";
import { request } from "@playwright/test";

import { E2EWorld } from "../world";

Before(async function (this: E2EWorld) {
  const { secret } = this.parameters.vercel;

  if (!secret) {
    this.log("Vercel bypass secret not set, skipping.");
    return;
  }

  this.log("Setting Vercel bypass cookie...");

  // Create a request context to hit the bypass endpoint
  const apiContext = await request.newContext();

  const response = await apiContext.get("/", {
    headers: {
      "x-vercel-set-bypass-cookie": "true",
      "x-vercel-protection-bypass": secret,
    },
  });

  // Playwright's browser context automatically tracks cookies
  // set by the request context if they share the same storage state,
  // but for a simple bypass, we usually apply the cookie to the page:
  const cookies = await response.headersArray();
  const setCookieHeader = cookies.find(
    (h) => h.name.toLowerCase() === "set-cookie",
  );

  if (setCookieHeader) {
    // This ensures the cookie is active before we navigate
    await this.context.addCookies([
      {
        name: "x-vercel-protection-bypass", // Adjust name if Vercel uses a specific one
        value: secret,
        domain: "localhost", // Or your target domain
        path: "/",
      },
    ]);
  }
});
