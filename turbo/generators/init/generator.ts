import { PlopTypes } from "@turbo/gen";

import { prismicDalAction } from "./actions/prismic-dal-action";
import { socialsAction } from "./actions/socials-action";
import { websiteAction } from "./actions/website-action";
import { websiteE2EAction } from "./actions/website-e2e-action";
import { baseHrefPrompt } from "./prompts/base-href";
import { githubTokenPrompt } from "./prompts/github-token";
import { mswEnabledPrompt } from "./prompts/msw-enabled";
import { prismicioAccessTokenPrompt } from "./prompts/prismicio-access-token";

export default function initGenerator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("init", {
    description: "Configure environment variables via .env",

    prompts: async () => ({
      ...(await baseHrefPrompt()),
      ...(await githubTokenPrompt()),
      ...(await prismicioAccessTokenPrompt()),
      ...(await mswEnabledPrompt()),
    }),

    actions: [
      ...prismicDalAction(),
      ...socialsAction(),
      ...websiteAction(),
      ...websiteE2EAction(),
    ],
  });
}
