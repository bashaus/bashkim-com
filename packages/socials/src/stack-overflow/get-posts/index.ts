import { trackQuota } from "../track-quota";
import { getStackOverflowPostsResponseSchema } from "./schema";

async function getStackOverflowPostsData() {
  const userId = 600240;

  const url = new URL("https://api.stackexchange.com/");
  url.pathname = `/2.3/users/${userId}/posts`;
  url.searchParams.append("site", "stackoverflow");
  url.searchParams.append("order", "desc");
  url.searchParams.append("sort", "votes");
  url.searchParams.append("page", "1");
  url.searchParams.append("pageSize", "10");
  url.searchParams.append("filter", "!nNPvSNOTRz");

  const response = await fetch(url.toString(), {
    next: {
      revalidate: 3600,
    },
  });

  const rawData = await response.json();
  const data = await getStackOverflowPostsResponseSchema.parseAsync(rawData);
  await trackQuota(data);

  return data;
}

export async function getStackOverflowPosts() {
  const data = await getStackOverflowPostsData();
  return data.items.map((post) => ({
    score: post.score,
    id: post.post_id,
    title: post.title,
    link: post.link,
    type: post.post_type,
  }));
}
