import * as cheerio from "cheerio";
import { XMLParser } from "fast-xml-parser";

import { matchMultipartTitle } from "./helpers";
import { RootElement } from "./rss";
import { GetMediumSocialsResponse } from "./types";

export async function getMediumSocials(): Promise<GetMediumSocialsResponse> {
  const parser = new XMLParser({ ignoreAttributes: false });

  const rawFeed = await fetch("https://medium.com/feed/@bashaus", {
    next: {
      revalidate: 3600,
    },
  });

  const txtFeed = await rawFeed.text();
  const feed: RootElement = parser.parse(txtFeed);
  const items = feed.rss.channel.item ?? [];

  return {
    articles: items.map((item) => {
      const { "content:encoded": html } = item;
      const $ = cheerio.load(html);

      const image = $("img").first().attr("src") ?? "";
      const title = matchMultipartTitle(item.title);
      const pubDate = new Date(item.pubDate);

      return {
        ...title,
        subtitle: "",
        pubDate,
        url: item.link,
        image,
      };
    }),
  };
}
