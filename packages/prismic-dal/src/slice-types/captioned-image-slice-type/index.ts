import { graphql } from "../../gql";

export const CaptionedImageSliceType = graphql(`
  fragment CaptionedImageSliceType on Case_studyBodyCaptionedimageslicetype {
    type
    primary {
      ...CaptionedImageSliceTypePrimary
    }
  }
`);

export const CaptionedImageSliceTypePrimary = graphql(`
  fragment CaptionedImageSliceTypePrimary on Case_studyBodyCaptionedimageslicetypePrimary {
    captioned_image_slice_type_caption
    captioned_image_slice_type_image
    captioned_image_slice_type_image_blurhash
  }
`);
