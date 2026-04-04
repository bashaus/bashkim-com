import { graphql } from "../../gql";

export const CaptionedVideoSliceType = graphql(`
  fragment CaptionedVideoSliceType on Case_studyBodyCaptionedvideoslicetype {
    type
    primary {
      ...CaptionedVideoSliceTypePrimary
    }
  }
`);

export const CaptionedVideoSliceTypePrimary = graphql(`
  fragment CaptionedVideoSliceTypePrimary on Case_studyBodyCaptionedvideoslicetypePrimary {
    captioned_video_slice_type_caption
    captioned_video_slice_type_video
  }
`);
