import { graphql } from "../../gql";

export const GridEmbedSliceTypeField = graphql(`
  fragment GridEmbedSliceTypeField on Case_studyBodyGridembedslicetypeFields {
    __typename
    grid_embed_slice_type_embed
  }
`);

export const GridEmbedSliceType = graphql(`
  fragment GridEmbedSliceType on Case_studyBodyGridembedslicetype {
    __typename
    type
    fields {
      ...GridEmbedSliceTypeField
    }
  }
`);
