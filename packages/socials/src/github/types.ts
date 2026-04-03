import { GitHubGistFragment, GitHubRepositoryFragment } from "./gql/graphql";

export type GetGitHubProfileResponse = {
  pinnedItems: Array<GitHubGistFragment | GitHubRepositoryFragment>;
  repositoryCount: number;
};
