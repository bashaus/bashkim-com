import { graphql } from "../../gql";

export const SubtitleSliceTypePrimary = graphql(`
  fragment SubtitleSliceTypePrimary on Case_studyBodySubtitleslicetypePrimary {
    __typename
    subtitle_slice_type_heading
    subtitle_slice_type_description
  }
`);

export const SubtitleSliceType = graphql(`
  fragment SubtitleSliceType on Case_studyBodySubtitleslicetype {
    __typename
    type
    primary {
      ...SubtitleSliceTypePrimary
    }
  }
`);
