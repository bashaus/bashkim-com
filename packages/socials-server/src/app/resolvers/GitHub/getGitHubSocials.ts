import {
  GetGitHubPinnedItemsDocument,
  GetGitHubPinnedItemsQuery,
} from "../../../types/github";
import { GetGitHubSocialsResponse } from "../../../types/socials-server";
import { cacheStorePromise } from "../../services/cache";
import { apolloGitHubClient } from "../../services/github/client";

const CACHE_KEY = "getGitHubData";

const getGitHubCachedData = async () => {
  const diskCache = await cacheStorePromise;
  const value = await diskCache.get(CACHE_KEY);
  return value ? (value as GetGitHubPinnedItemsQuery) : undefined;
};

const setGitHubCachedData = async (value: GetGitHubPinnedItemsQuery) => {
  const diskCache = await cacheStorePromise;
  return diskCache.set(CACHE_KEY, value);
};

const getGitHubApiData = async (): Promise<GetGitHubPinnedItemsQuery> => {
  console.log("getGitHubApiData");

  try {
    const result = await apolloGitHubClient.query<GetGitHubPinnedItemsQuery>({
      query: GetGitHubPinnedItemsDocument,
      variables: {},
    });

    console.log("getGitHubApiData.success", result.data);
    return result.data;
  } catch (err) {
    console.error("getGitHubApiData.failed", err);
    throw err;
  }
};

const getGitHubData = async () => {
  const cachedData = await getGitHubCachedData();
  if (cachedData) {
    console.log("getGitHubSocials.getGitHubData", "cache hit");
    return cachedData;
  }

  console.log("getGitHubSocials.getGitHubData", "cache miss");
  const apiData = await getGitHubApiData();
  if (!apiData) {
    throw new Error("Could not get pinned items from GitHub");
  }

  setGitHubCachedData(apiData);
  return apiData;
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
