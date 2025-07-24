import type {
  GitHubGistFragment,
  GitHubRepositoryFragment,
} from "./graphql-types";

export type GetGitHubSocialsResponse = {
  pinnedItems: Array<GitHubGistFragment | GitHubRepositoryFragment>;
  repositoryCount: number;
};
