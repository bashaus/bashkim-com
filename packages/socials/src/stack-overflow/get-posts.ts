import fetch from "node-fetch";

import { StackOverflowPost, StackOverflowPostType } from "./types";

const getStackOverflowPostsData = async () => {
  const userId = 600240;

  const url = new URL("https://api.stackexchange.com/");
  url.pathname = `/2.3/users/${userId}/posts`;
  url.searchParams.append("site", "stackoverflow");
  url.searchParams.append("order", "desc");
  url.searchParams.append("sort", "votes");
  url.searchParams.append("page", "1");
  url.searchParams.append("pageSize", "10");
  url.searchParams.append("filter", "!nNPvSNOTRz");

  const response = await fetch(url.toString(), {});
  return response.json();
};

export async function getStackOverflowPosts(): Promise<
  Array<StackOverflowPost>
> {
  const result = await getStackOverflowPostsData();
  return result.items.map(
    (post) =>
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
}
