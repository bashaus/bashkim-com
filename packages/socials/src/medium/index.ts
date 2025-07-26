import * as cheerio from "cheerio";
import { XMLParser } from "fast-xml-parser";
import groupBy from "lodash.groupby";

import { matchMultipartTitle } from "./helpers";
import { RootElement } from "./rss";
import { GetMediumSocialsResponse, MediumArticle } from "./types";

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

  const articles = items.map((item): MediumArticle => {
    const { "content:encoded": html } = item;
    const $ = cheerio.load(html);

    const image = $("img").first();
    const imageSrc = image.attr("src") ?? "";
    const imageAlt = image.attr("alt") ?? "";
    const title = matchMultipartTitle(item.title);
    const pubDate = new Date(item.pubDate);

    return {
      ...title,
      subtitle: "",
      pubDate,
      url: item.link,
      imageSrc,
      imageAlt,
    };
  });

  return {
    series: groupBy(articles, (article) =>
      article.pubDate.toISOString().substring(0, 10),
    ),
  };
}
