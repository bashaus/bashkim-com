import apolloGitHubClient from "./client";
import { GetPinnedItemsDocument, GetPinnedItemsQuery } from "./graphql-types";
import type { GetGitHubSocialsResponse } from "./types";

const getGitHubData = async () => {
  const result = await apolloGitHubClient.query<GetPinnedItemsQuery>({
    query: GetPinnedItemsDocument,
    variables: {},
    context: {
      next: {
        revalidate: 3600,
      },
    },
  });

  return result.data;
};

export async function getGitHubSocials(): Promise<GetGitHubSocialsResponse> {
  const result = await getGitHubData();
  const nodes = result.user?.pinnedItems.nodes ?? [];

  const pinnedItems = nodes.filter(
    <TValue>(value: TValue | null | undefined): value is TValue => {
      return value !== null && value !== undefined;
    },
  );

  const repositoryCount = result.user?.repositories.totalCount ?? 0;

  return { pinnedItems, repositoryCount };
}
