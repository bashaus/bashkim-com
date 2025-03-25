import type { GridEmbedSliceTypeFieldFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

const gridEmbedSliceFieldFactory =
  Factory.define<GridEmbedSliceTypeFieldFragment>(() => {
    return {
      grid_embed_slice_type_embed: {
        url: "https://twitter.com/TropicanaJuices/status/421604896379400192",
        author_name: "Tropicana",
        author_url: "https://twitter.com/TropicanaJuices",
        html: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Tweet whatever&#39;s tempting you to break a resolution to <a href="https://twitter.com/hashtag/ResolutionRescue?src=hash&amp;ref_src=twsrc%5Etfw">#ResolutionRescue</a> and you could win resolution-saving prizes <a href="http://t.co/i8No20kBeg">pic.twitter.com/i8No20kBeg</a></p>&mdash; Tropicana (@TropicanaJuices) <a href="https://twitter.com/TropicanaJuices/status/421604896379400192?ref_src=twsrc%5Etfw">January 10, 2014</a></blockquote>\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n',
        width: 550,
        height: null,
        type: "rich",
        cache_age: "3153600000",
        provider_name: "Twitter",
        provider_url: "https://twitter.com",
        version: "1.0",
        embed_url:
          "https://twitter.com/TropicanaJuices/status/421604896379400192",
        title:
          'Tropicana on Twitter: "Tweet whatever\'s tempting you to break a resolution to #ResolutionRescue and you could win resolution-saving prizes http://t.co/i8No20kBeg"',
      },
    };
  });

export default gridEmbedSliceFieldFactory;
