import { graphql } from "../../gql";

export const GridEmbedSliceType = graphql(`
  fragment GridEmbedSliceType on Case_studyBodyGridembedslicetype {
    type
    fields {
      ...GridEmbedSliceTypeField
    }
  }
`);

export const GridEmbedSliceTypeField = graphql(`
  fragment GridEmbedSliceTypeField on Case_studyBodyGridembedslicetypeFields {
    grid_embed_slice_type_embed
  }
`);
