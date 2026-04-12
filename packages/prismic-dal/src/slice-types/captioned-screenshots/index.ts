import { graphql } from "../../gql";

export const CaptionedScreenshotsSliceTypeField = graphql(`
  fragment CaptionedScreenshotsSliceTypeField on Case_studyBodyCaptionedscreenshotsslicetypeFields {
    __typename
    captioned_screenshots_slice_type_images
  }
`);

export const CaptionedScreenshotsSliceTypePrimary = graphql(`
  fragment CaptionedScreenshotsSliceTypePrimary on Case_studyBodyCaptionedscreenshotsslicetypePrimary {
    __typename
    captioned_screenshots_slice_type_caption
  }
`);

export const CaptionedScreenshotsSliceType = graphql(`
  fragment CaptionedScreenshotsSliceType on Case_studyBodyCaptionedscreenshotsslicetype {
    __typename
    type
    primary {
      ...CaptionedScreenshotsSliceTypePrimary
    }
    fields {
      ...CaptionedScreenshotsSliceTypeField
    }
  }
`);
