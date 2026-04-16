import apolloClient from "../dal/client";
import { GitHubProfileQuery } from "../dal/queries/github-profile";

export async function getGitHubProfile() {
  const gitHubProfileResult = await apolloClient.query({
    query: GitHubProfileQuery,
    context: {
      next: { revalidate: 3600 },
    },
  });

  const nodes = gitHubProfileResult.data?.user?.pinnedItems.nodes ?? [];

  const pinnedItems = nodes.filter(
    <TValue>(value: TValue | null | undefined): value is TValue => {
      return value !== null && value !== undefined;
    },
  );

  const repositoryCount =
    gitHubProfileResult.data?.user?.repositories.totalCount ?? 0;

  return { pinnedItems, repositoryCount };
}
