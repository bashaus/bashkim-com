import { graphql } from "../../gql";

export const FullTextSliceType = graphql(`
  fragment FullTextSliceType on Case_studyBodyFulltextslicetype {
    type
    primary {
      ...FullTextSliceTypePrimary
    }
  }
`);

export const FullTextSliceTypePrimary = graphql(`
  fragment FullTextSliceTypePrimary on Case_studyBodyFulltextslicetypePrimary {
    full_text_slice_type_body
  }
`);
