import fetch from "cross-fetch";

import { StackOverflowUser } from "../../../types/socials-server";
import { cacheStorePromise } from "../../services/cache";

const CACHE_KEY = "getStackOverflowUserData";

const getStackOverflowUserCachedData = async () => {
  const diskCache = await cacheStorePromise;
  const value = await diskCache.get(CACHE_KEY);
  return value ? (value as any) : undefined;
};

const setStackOverflowCachedData = async (value: any) => {
  const diskCache = await cacheStorePromise;
  return diskCache.set(CACHE_KEY, value);
};

const getStackOverflowUserApiData = async (): Promise<any> => {
  const userId = process.env["APP_SOCIALS_SERVER_STACK_OVERFLOW_USER_ID"];
  const url = new URL("https://api.stackexchange.com/");
  url.pathname = `/2.3/users/${userId}`;
  url.searchParams.append("site", "stackoverflow");

  console.log(url.toString());

  const response = await fetch(url.toString());
  return response.json();
};

const getStackOverflowUserData = async () => {
  const cachedData = await getStackOverflowUserCachedData();
  if (cachedData) {
    console.log("StackOverflowUser.getStackOverflowUserData", "cache hit");
    return cachedData;
  }

  console.log("StackOverflowUser.getStackOverflowUserData", "cache miss");
  const apiData = await getStackOverflowUserApiData();
  if (!apiData) {
    throw new Error("Could not get data from StackOverflow");
  }

  setStackOverflowCachedData(apiData);
  return apiData;
};

export const getStackOverflowUser = async (): Promise<StackOverflowUser> => {
  const result = await getStackOverflowUserData();

  const [user] = result.items;
  if (!user) {
    throw new Error("User information was not found");
  }

  return {
    badgeCounts: {
      gold: user.badge_counts.gold,
      silver: user.badge_counts.silver,
      bronze: user.badge_counts.bronze,
    },
    reputation: user.reputation,
  };
};
