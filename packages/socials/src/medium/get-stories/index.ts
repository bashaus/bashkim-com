import { parseRssFeed } from "../../rss-feed-parser";
import {
  GetMediumStoriesResponse,
  getMediumStoriesResponseSchema,
} from "./schema";

export async function getMediumStories(): Promise<GetMediumStoriesResponse> {
  const rawFeed = await fetch("https://medium.com/feed/@bashaus", {
    next: {
      revalidate: 3600,
    },
  });

  const txtFeed = await rawFeed.text();
  const feed = await parseRssFeed(txtFeed);

  return await getMediumStoriesResponseSchema.parseAsync(feed);
}
