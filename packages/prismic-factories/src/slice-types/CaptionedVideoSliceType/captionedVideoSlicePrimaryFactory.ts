import type { CaptionedVideoSliceTypePrimaryFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import prismicHeadingFactory from "../../prismic/prismicHeadingFactory";
import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const captionedVideoSlicePrimaryFactory =
  Factory.define<CaptionedVideoSliceTypePrimaryFragment>(() => {
    return {
      captioned_video_slice_type_caption: [
        prismicHeadingFactory.build(),
        prismicParagraphFactory.build(),
      ],
      captioned_video_slice_type_video: {
        author_url: "https://www.youtube.com/channel/UCSMOQeBJ2RAnuFungnQOxLg",
        provider_name: "YouTube",
        version: "1.0",
        type: "video",
        provider_url: "https://www.youtube.com/",
        author_name: "Blender",
        thumbnail_url: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title:
          "Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film",
        width: 480,
        height: 270,
        thumbnail_height: 360,
        html: '<iframe width="480" height="270" src="https://www.youtube.com/embed/aqz-KE-bpKQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        thumbnail_width: 480,
        embed_url: "https://youtube.com/watch?v=aqz-KE-bpKQ",
      },
    };
  });

export default captionedVideoSlicePrimaryFactory;
