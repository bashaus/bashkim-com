import { Factory } from "fishery";

import { FullTextSliceTypePrimaryFragment } from "../../gql/graphql";
import { prismicHeadingFactory } from "../../prismic/prismic-heading-factory";
import { prismicParagraphFactory } from "../../prismic/prismic-paragraph-factory";

export const fullTextSlicePrimaryFactory =
  Factory.define<FullTextSliceTypePrimaryFragment>(() => {
    return {
      full_text_slice_type_body: [
        ...prismicHeadingFactory.buildList(1),
        ...prismicParagraphFactory.buildList(5),
      ],
    };
  });
