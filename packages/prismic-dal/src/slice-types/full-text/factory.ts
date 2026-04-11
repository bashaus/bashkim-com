import { Factory } from "fishery";

import {
  FullTextSliceTypeFragment,
  FullTextSliceTypePrimaryFragment,
} from "../../gql/graphql";
import { prismicHeading3Factory } from "../../prismic/heading/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const fullTextSlicePrimaryFactory =
  Factory.define<FullTextSliceTypePrimaryFragment>(() => {
    return {
      __typename: "Case_studyBodyFulltextslicetypePrimary",
      full_text_slice_type_body: [
        ...prismicHeading3Factory.buildList(1),
        ...prismicParagraphFactory.buildList(5),
      ],
    };
  });

export const fullTextSliceFactory = Factory.define<FullTextSliceTypeFragment>(
  () => {
    return {
      __typename: "Case_studyBodyFulltextslicetype",
      type: "FullTextSliceType",
      primary: fullTextSlicePrimaryFactory.build(),
    };
  },
);
