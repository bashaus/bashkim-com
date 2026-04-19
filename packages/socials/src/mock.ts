import { getGitHubProfileHandler } from "./github/queries/get-profile/mock";
import { getMediumStoriesHandler } from "./medium/get-stories/mock";
import { getStackOverflowPostsHandler } from "./stack-overflow/queries/get-posts/mock";
import { getStackOverflowUserHandler } from "./stack-overflow/queries/get-user/mock";

export const handlers = [
  getGitHubProfileHandler,
  getMediumStoriesHandler,
  getStackOverflowUserHandler,
  getStackOverflowPostsHandler,
];
