import { Factory } from "fishery";

import { SubtitleSliceTypePrimaryFragment } from "../../gql/graphql";
import { prismicHeadingFactory } from "../../prismic/prismic-heading-factory";
import { prismicParagraphFactory } from "../../prismic/prismic-paragraph-factory";

export const subtitleSlicePrimaryFactory =
  Factory.define<SubtitleSliceTypePrimaryFragment>(() => {
    return {
      subtitle_slice_type_heading: prismicHeadingFactory.buildList(1, {
        type: "heading2",
      }),
      subtitle_slice_type_description: prismicParagraphFactory.buildList(1),
    };
  });
