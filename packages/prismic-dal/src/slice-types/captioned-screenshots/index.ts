import { graphql } from "../../gql";

export const CaptionedScreenshotsSliceTypeField = graphql(`
  fragment CaptionedScreenshotsSliceTypeField on Case_studyBodyCaptionedscreenshotsslicetypeFields {
    captioned_screenshots_slice_type_images
  }
`);

export const CaptionedScreenshotsSliceTypePrimary = graphql(`
  fragment CaptionedScreenshotsSliceTypePrimary on Case_studyBodyCaptionedscreenshotsslicetypePrimary {
    captioned_screenshots_slice_type_caption
  }
`);

export const CaptionedScreenshotsSliceType = graphql(`
  fragment CaptionedScreenshotsSliceType on Case_studyBodyCaptionedscreenshotsslicetype {
    type
    primary {
      ...CaptionedScreenshotsSliceTypePrimary
    }
    fields {
      ...CaptionedScreenshotsSliceTypeField
    }
  }
`);
