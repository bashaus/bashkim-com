import { graphql } from "../../gql";

export const FullTextSliceTypePrimary = graphql(`
  fragment FullTextSliceTypePrimary on Case_studyBodyFulltextslicetypePrimary {
    __typename
    full_text_slice_type_body
  }
`);

export const FullTextSliceType = graphql(`
  fragment FullTextSliceType on Case_studyBodyFulltextslicetype {
    __typename
    type
    primary {
      ...FullTextSliceTypePrimary
    }
  }
`);
