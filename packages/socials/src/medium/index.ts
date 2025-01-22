import { XMLParser } from "fast-xml-parser";

import { matchMultipartTitle } from "./helpers";
import { RootElement } from "./rss";
import { GetMediumSocialsResponse } from "./types";

export async function getMediumSocials(): Promise<GetMediumSocialsResponse> {
  const parser = new XMLParser({ ignoreAttributes: false });

  const rawFeed = await fetch("https://medium.com/feed/@bashaus");
  const txtFeed = await rawFeed.text();

  const feed: RootElement = parser.parse(txtFeed);
  const items = feed.rss.channel.item ?? [];

  return {
    articles: items.map((item) => {
      const title = matchMultipartTitle(item.title);
      return {
        ...title,
        subtitle: "",
        url: item.link,
      };
    }),
  };
}
