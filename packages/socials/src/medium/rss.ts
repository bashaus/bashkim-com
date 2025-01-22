export type RootElement = {
  rss: RssElement;
};

export type RssElement = {
  channel: ChannelElement;
};

export type ChannelElement = {
  title: string;
  description: string;
  link: string;
  image: {
    url: string;
    title: string;
    link: string;
  };
  generator: string;
  lastBuildDate: string;
  "atom:link": Array<{
    "@href": string;
    "@rel": string;
    "@type"?: string;
  }>;
  webMaster: string;
  item: Array<ItemElement>;
};

export type ItemElement = {
  title: string;
  link: string;
  guid: {
    "#text": string;
    "@_isPermalink": boolean;
  };
  category: string | Array<string>;
  "dc:creator": string;
  pubDate: string;
  "atom:updated": string;
  "content:encoded": string;
};
