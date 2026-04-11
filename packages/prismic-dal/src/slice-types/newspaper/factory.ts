import { Factory } from "fishery";

import {
  NewspaperSliceTypeFieldFragment,
  NewspaperSliceTypeFragment,
} from "../../gql/graphql";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const newspaperSliceFieldFactory =
  Factory.define<NewspaperSliceTypeFieldFragment>(() => {
    return {
      __typename: "Case_studyBodyNewspaperslicetypeFields",
      newspaper_slice_type_group: prismicParagraphFactory.buildList(1),
    };
  });

export const newspaperSliceFactory = Factory.define<NewspaperSliceTypeFragment>(
  () => {
    return {
      __typename: "Case_studyBodyNewspaperslicetype",
      type: "NewspaperSliceType",
      fields: newspaperSliceFieldFactory.buildList(10),
    };
  },
);
