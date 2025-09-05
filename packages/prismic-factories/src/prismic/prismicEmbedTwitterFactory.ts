import { Factory } from "fishery";

type PrismicEmbedTwitter = {
  provider_name: string;
  provider_url: string;
  url: string;
  author_name: string;
  author_url: string;
  html: string;
  width: number | null;
  height: number | null;
  type: string;
  cache_age: string;
  version: string;
  embed_url: string;
  title: string | null;
};

const prismicEmbedTwitterFactory = Factory.define<PrismicEmbedTwitter>(() => {
  return {
    provider_name: "Twitter",
    provider_url: "https://twitter.com",
    url: "https://twitter.com/TropicanaJuices/status/421604896379400192",
    author_name: "Tropicana",
    author_url: "https://twitter.com/TropicanaJuices",
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Tweet whatever&#39;s tempting you to break a resolution to <a href="https://twitter.com/hashtag/ResolutionRescue?src=hash&amp;ref_src=twsrc%5Etfw">#ResolutionRescue</a> and you could win resolution-saving prizes <a href="http://t.co/i8No20kBeg">pic.twitter.com/i8No20kBeg</a></p>&mdash; Tropicana (@TropicanaJuices) <a href="https://twitter.com/TropicanaJuices/status/421604896379400192?ref_src=twsrc%5Etfw">January 10, 2014</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
    width: 550,
    height: 400,
    type: "rich",
    cache_age: "3153600000",
    version: "1.0",
    embed_url: "https://twitter.com/TropicanaJuices/status/421604896379400192",
    title: null,
  };
});

export default prismicEmbedTwitterFactory;
