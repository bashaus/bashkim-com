export type GitHubPinnedItem = {
  name: string;
  description?: string;
  url: string;
};

export type GetGitHubSocialsResponse = {
  repositoryCount: number;
  pinnedItems: Array<GitHubPinnedItem>;
};
