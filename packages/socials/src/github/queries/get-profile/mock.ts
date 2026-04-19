import { HttpResponse } from "msw";

import { githubLink } from "../../dal/mock";
import { GitHubProfileQuery } from "../../gql/graphql";
import { githubProfileFactory } from "./factory";

export const getGitHubProfileHandler = githubLink.query<GitHubProfileQuery>(
  "GitHubProfile",
  () =>
    HttpResponse.json({
      data: githubProfileFactory.build(),
    }),
);
