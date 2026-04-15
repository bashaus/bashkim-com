import groupBy from "lodash.groupby";
import { z } from "zod";

import {
  itemElementSchema,
  rssElementSchema,
} from "../../rss-feed-parser/schema";
import { extractRssImage } from "../../rss-image-extractor";
import { parseRssTitle } from "../../rss-title-parser";

export const mediumStorySchema = itemElementSchema.transform((item) => {
  const { "content:encoded": html } = item;
  const image = extractRssImage(html);
  const title = parseRssTitle(item.title);

  return {
    title: title.title,
    multipart: title.multipart,
    publishedAt: item.pubDate,
    url: item.link,
    image,
  };
});

export const getMediumStoriesResponseSchema = rssElementSchema.transform(
  (rss) => {
    const stories = rss.channel.item.map((item) =>
      mediumStorySchema.parse(item),
    );

    return {
      series: groupBy(stories, (story) =>
        story.publishedAt.toISOString().substring(0, 10),
      ),
    };
  },
);

export type GetMediumStoriesResponse = z.infer<
  typeof getMediumStoriesResponseSchema
>;
