import { parseRssFeed } from "../../rss-feed-parser";
import { getMediumStoriesSchema } from "./schema";

export async function getMediumStories() {
  const rawFeed = await fetch("https://medium.com/feed/@bashaus", {
    next: {
      revalidate: 3600,
    },
  });

  const txtFeed = await rawFeed.text();
  const xml = await parseRssFeed(txtFeed);
  return await getMediumStoriesSchema.parseAsync(xml);
}
