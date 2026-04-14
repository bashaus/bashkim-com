import { Before } from "@cucumber/cucumber";
import { request } from "@playwright/test";

import { E2EWorld } from "../world";

Before(async function (this: E2EWorld) {
  const { baseURL } = this.parameters.playwright;
  const { secret } = this.parameters.vercel;

  if (!secret) {
    this.log("Vercel bypass secret not set, skipping.");
    return;
  }

  this.log("Setting Vercel bypass cookie...");

  const apiContext = await request.newContext({ baseURL });
  await apiContext.get("/", {
    headers: {
      "x-vercel-set-bypass-cookie": "true",
      "x-vercel-protection-bypass": secret,
    },
  });

  const cookies = await apiContext.storageState();
  await this.context.addCookies(cookies.cookies);
});
