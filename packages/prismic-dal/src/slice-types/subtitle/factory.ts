import { Factory } from "fishery";

import {
  SubtitleSliceTypeFragment,
  SubtitleSliceTypePrimaryFragment,
} from "../../gql/graphql";
import { prismicHeading2Factory } from "../../prismic/heading/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const subtitleSlicePrimaryFactory =
  Factory.define<SubtitleSliceTypePrimaryFragment>(() => {
    return {
      __typename: "Case_studyBodySubtitleslicetypePrimary",
      subtitle_slice_type_heading: prismicHeading2Factory.buildList(1),
      subtitle_slice_type_description: prismicParagraphFactory.buildList(1),
    };
  });

export const subtitleSliceFactory = Factory.define<SubtitleSliceTypeFragment>(
  () => {
    return {
      __typename: "Case_studyBodySubtitleslicetype",
      type: "SubtitleSliceType",
      primary: subtitleSlicePrimaryFactory.build(),
    };
  },
);
