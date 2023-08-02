import fetch from "node-fetch";

import {
  StackOverflowPost,
  StackOverflowPostType,
} from "../../../types/socials-server";
import { cacheStorePromise } from "../../services/cache";

const CACHE_KEY = "getStackOverflowPostsData";

const getStackOverflowPostsCachedData = async () => {
  const cache = await cacheStorePromise;
  const value = await cache.get(CACHE_KEY);
  return value ? (value as any) : undefined;
};

const setStackOverflowCachedData = async (value: any) => {
  const cache = await cacheStorePromise;
  return cache.set(CACHE_KEY, value);
};

const getStackOverflowPostsApiData = async (): Promise<any> => {
  const userId = process.env["APP_SOCIALS_SERVER_STACK_OVERFLOW_USER_ID"];
  const url = new URL("https://api.stackexchange.com/");
  url.pathname = `/2.3/users/${userId}/posts`;
  url.searchParams.append("site", "stackoverflow");
  url.searchParams.append("order", "desc");
  url.searchParams.append("sort", "votes");
  url.searchParams.append("page", "1");
  url.searchParams.append("pageSize", "10");
  url.searchParams.append("filter", "!nNPvSNOTRz");

  console.log(url.toString());

  const response = await fetch(url.toString());
  return response.json();
};

const getStackOverflowPostsData = async () => {
  const cachedData = await getStackOverflowPostsCachedData();
  if (cachedData) {
    console.log("StackOverflowPost.getStackOverflowPostsData", "cache hit");
    return cachedData;
  }

  console.log("StackOverflowPost.getStackOverflowPostsData", "cache miss");
  const apiData = await getStackOverflowPostsApiData();
  if (!apiData) {
    throw new Error("Could not get data from StackOverflow");
  }

  setStackOverflowCachedData(apiData);
  return apiData;
};

export const getStackOverflowPosts = async (): Promise<
  Array<StackOverflowPost>
> => {
  const result = await getStackOverflowPostsData();
  return result.items.map(
    (post: any) =>
      ({
        score: post.score,
        id: post.post_id,
        link: post.link,
        title: post.title,
        type:
          post.post_type === "question"
            ? StackOverflowPostType.Question
            : StackOverflowPostType.Answer,
      }) as StackOverflowPost,
  );
};
