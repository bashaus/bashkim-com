import type { SubtitleSliceTypePrimaryFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import prismicHeadingFactory from "../../prismic/prismicHeadingFactory";
import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const subtitleSlicePrimaryFactory =
  Factory.define<SubtitleSliceTypePrimaryFragment>(() => {
    return {
      subtitle_slice_type_heading: prismicHeadingFactory.buildList(1, {
        type: "heading2",
      }),
      subtitle_slice_type_description: prismicParagraphFactory.buildList(1),
    };
  });

export default subtitleSlicePrimaryFactory;
