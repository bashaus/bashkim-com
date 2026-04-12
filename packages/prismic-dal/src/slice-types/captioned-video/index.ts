import { graphql } from "../../gql";

export const CaptionedVideoSliceTypePrimary = graphql(`
  fragment CaptionedVideoSliceTypePrimary on Case_studyBodyCaptionedvideoslicetypePrimary {
    __typename
    captioned_video_slice_type_caption
    captioned_video_slice_type_video
  }
`);

export const CaptionedVideoSliceType = graphql(`
  fragment CaptionedVideoSliceType on Case_studyBodyCaptionedvideoslicetype {
    __typename
    type
    primary {
      ...CaptionedVideoSliceTypePrimary
    }
  }
`);
