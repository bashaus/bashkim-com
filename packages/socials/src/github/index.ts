import apolloGitHubClient from "./client";
import { GetPinnedItemsDocument, GetPinnedItemsQuery } from "./graphql-types";
import { GetGitHubSocialsResponse } from "./types";

const getGitHubData = async () => {
  const result = await apolloGitHubClient.query<GetPinnedItemsQuery>({
    query: GetPinnedItemsDocument,
    variables: {},
  });

  return result.data;
};

export async function getGitHubSocials(): Promise<GetGitHubSocialsResponse> {
  const result = await getGitHubData();
  const nodes = result.user?.pinnedItems.nodes || [];

  const pinnedItems = nodes
    .filter(<TValue>(value: TValue | null | undefined): value is TValue => {
      return value !== null && value !== undefined;
    })
    .map((node) => ({
      name: node.name,
      description: node.description ?? undefined,
      url: node.url,
    }));

  return { pinnedItems };
}
