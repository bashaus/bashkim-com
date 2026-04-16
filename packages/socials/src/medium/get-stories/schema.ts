import groupBy from "lodash.groupby";
import { z } from "zod";

import {
  itemElementSchema,
  rootElementSchema,
} from "../../rss-feed-parser/schema";
import { extractRssImage } from "../../rss-image-extractor";
import { parseRssTitle } from "../../rss-title-parser";

export const mediumStorySchema = itemElementSchema.transform((item) => {
  const image = extractRssImage(item["content:encoded"]);
  const title = parseRssTitle(item.title);

  return {
    title: title.title,
    multipart: title.multipart,
    publishedAt: item.pubDate,
    url: item.link,
    image,
  };
});

export const getMediumStoriesSchema = rootElementSchema.transform((root) => {
  const stories = root.rss.channel.item.map((item) =>
    mediumStorySchema.parse(item),
  );

  return {
    series: groupBy(stories, (story) =>
      story.publishedAt.toISOString().substring(0, 10),
    ),
  };
});

export type GetMediumStories = z.infer<typeof getMediumStoriesSchema>;
