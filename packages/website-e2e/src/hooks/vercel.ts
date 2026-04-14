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

  const apiContext = await request.newContext();
  const response = await apiContext.get("/", {
    headers: {
      "x-vercel-set-bypass-cookie": "true",
      "x-vercel-protection-bypass": secret,
    },
  });

  const cookies = await response.headersArray();
  const setCookieHeader = cookies.find(
    (h) => h.name.toLowerCase() === "set-cookie",
  );

  if (setCookieHeader) {
    await this.context.addCookies([
      { name: "x-vercel-protection-bypass", value: secret, path: "/" },
    ]);
  }
});
