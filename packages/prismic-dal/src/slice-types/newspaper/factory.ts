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
      newspaper_slice_type_group: [prismicParagraphFactory.build()],
    };
  });

export const newspaperSliceFactory = Factory.define<NewspaperSliceTypeFragment>(
  ({ associations }) => {
    return {
      __typename: "Case_studyBodyNewspaperslicetype",
      type: "NewspaperSliceType",
      fields: associations.fields ?? newspaperSliceFieldFactory.buildList(10),
    };
  },
);
