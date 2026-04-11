import { faker } from "@faker-js/faker";
import { OEmbedExtra, RichOEmbed } from "@prismicio/client";
import { Factory } from "fishery";

export const prismicEmbedRichFactory = Factory.define<RichOEmbed & OEmbedExtra>(
  () => {
    return {
      type: "rich",
      version: "1.0",
      title: faker.lorem.words(3),
      cache_age: 3153600000,
      embed_url: faker.internet.url(),
      url: faker.internet.url(),
      html: "",
      width: 550,
      height: 400,
    };
  },
);
export const prismicEmbedTwitterFactory = prismicEmbedRichFactory.params({
  provider_name: "Twitter",
  provider_url: "https://twitter.com",
  author_name: "Tropicana",
  author_url: "https://twitter.com/TropicanaJuices",

  html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Tweet whatever&#39;s tempting you to break a resolution to <a href="https://twitter.com/hashtag/ResolutionRescue?src=hash&amp;ref_src=twsrc%5Etfw">#ResolutionRescue</a> and you could win resolution-saving prizes <a href="http://t.co/i8No20kBeg">pic.twitter.com/i8No20kBeg</a></p>&mdash; Tropicana (@TropicanaJuices) <a href="https://twitter.com/TropicanaJuices/status/421604896379400192?ref_src=twsrc%5Etfw">January 10, 2014</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
  width: 550,
  height: 400,
});
