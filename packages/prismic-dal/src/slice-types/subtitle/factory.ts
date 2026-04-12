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
      subtitle_slice_type_heading: [prismicHeading2Factory.build()],
      subtitle_slice_type_description: [prismicParagraphFactory.build()],
    };
  });

export const subtitleSliceFactory = Factory.define<SubtitleSliceTypeFragment>(
  ({ associations }) => {
    return {
      __typename: "Case_studyBodySubtitleslicetype",
      type: "SubtitleSliceType",
      primary: associations.primary ?? subtitleSlicePrimaryFactory.build(),
    };
  },
);
