import { graphql } from "../../gql";

export const NewspaperSliceTypeField = graphql(`
  fragment NewspaperSliceTypeField on Case_studyBodyNewspaperslicetypeFields {
    newspaper_slice_type_group
  }
`);

export const NewspaperSliceType = graphql(`
  fragment NewspaperSliceType on Case_studyBodyNewspaperslicetype {
    type
    fields {
      ...NewspaperSliceTypeField
    }
  }
`);
