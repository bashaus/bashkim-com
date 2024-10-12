export type GitHubPinnedItem = {
  name: string;
  description?: string;
  url: string;
};

export type GetGitHubSocialsResponse = {
  pinnedItems: Array<GitHubPinnedItem>;
};
