import { Before } from "@cucumber/cucumber";

import { E2EWorld } from "../world";

Before(async function (this: E2EWorld) {
  await this.page.route(
    (url) => url.hostname === "player.vimeo.com",
    (route, request) => {
      this.log(`Blocking ${request.url()}`);
      return route.abort();
    },
  );
});
