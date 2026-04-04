import { graphql } from "../../gql";

export const SubtitleSliceType = graphql(`
  fragment SubtitleSliceType on Case_studyBodySubtitleslicetype {
    type
    primary {
      ...SubtitleSliceTypePrimary
    }
  }
`);

export const SubtitleSliceTypePrimary = graphql(`
  fragment SubtitleSliceTypePrimary on Case_studyBodySubtitleslicetypePrimary {
    subtitle_slice_type_heading
    subtitle_slice_type_description
  }
`);
