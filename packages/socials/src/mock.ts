import { setupServer } from "msw/node";

import { getGitHubProfileHandler } from "./github/get-profile/mock";
import { getMediumStoriesHandler } from "./medium/get-stories/mock";
import { getStackOverflowPostsHandler } from "./stack-overflow/get-posts/mock";
import { getStackOverflowUserHandler } from "./stack-overflow/get-user/mock";

export const server = setupServer(
  getGitHubProfileHandler,
  getMediumStoriesHandler,
  getStackOverflowUserHandler,
  getStackOverflowPostsHandler,
);
