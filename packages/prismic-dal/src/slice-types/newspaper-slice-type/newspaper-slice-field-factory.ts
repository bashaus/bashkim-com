import { Factory } from "fishery";

import { NewspaperSliceTypeFieldFragment } from "../../gql/graphql";
import { prismicParagraphFactory } from "../../prismic/prismic-paragraph-factory";

export const newspaperSliceFieldFactory =
  Factory.define<NewspaperSliceTypeFieldFragment>(() => {
    return {
      newspaper_slice_type_group: prismicParagraphFactory.buildList(1),
    };
  });
