import { Factory } from "fishery";

import {
  GridEmbedSliceTypeFieldFragment,
  GridEmbedSliceTypeFragment,
} from "../../gql/graphql";
import { prismicEmbedTwitterFactory } from "../../prismic/embed-rich/factory";

export const gridEmbedSliceFieldFactory =
  Factory.define<GridEmbedSliceTypeFieldFragment>(() => {
    return {
      __typename: "Case_studyBodyGridembedslicetypeFields",
      grid_embed_slice_type_embed: prismicEmbedTwitterFactory.build(),
    };
  });

export const gridEmbedSliceFactory = Factory.define<GridEmbedSliceTypeFragment>(
  ({ associations }) => {
    return {
      __typename: "Case_studyBodyGridembedslicetype",
      type: "GridEmbedSliceType",
      fields: associations.fields ?? gridEmbedSliceFieldFactory.buildList(3),
    };
  },
);
