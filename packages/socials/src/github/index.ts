import {
  GetPinnedItemsDocument,
  GetPinnedItemsQuery,
} from "../../graphql/github/types";
import { apolloGitHubClient } from "./client";
import { GetGitHubSocialsResponse } from "./types";

const getGitHubData = async () => {
  console.log("getGitHubApiData");

  try {
    const result = await apolloGitHubClient.query<GetPinnedItemsQuery>({
      query: GetPinnedItemsDocument,
      variables: {},
    });

    console.log("getGitHubApiData.success", result.data);
    return result.data;
  } catch (err) {
    console.error("getGitHubApiData.failed", err);
    throw err;
  }
};

export const getGitHubSocials = async (): Promise<GetGitHubSocialsResponse> => {
  const result = await getGitHubData();
  const nodes = result.user?.pinnedItems.nodes || [];

  const pinnedItems = nodes
    .filter(<TValue>(value: TValue | null | undefined): value is TValue => {
      return value !== null && value !== undefined;
    })
    .map((node) => ({
      name: node.name,
      description: node.description,
      url: node.url,
    }));

  return {
    pinnedItems,
  };
};
