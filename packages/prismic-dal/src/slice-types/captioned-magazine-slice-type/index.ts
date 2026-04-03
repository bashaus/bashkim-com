import { graphql } from "../../gql";

export const CaptionedMagazineSliceType = graphql(`
  fragment CaptionedMagazineSliceType on Case_studyBodyCaptionedmagazineslicetype {
    type
    primary {
      ...CaptionedMagazineSliceTypePrimary
    }
    fields {
      ...CaptionedMagazineSliceTypeField
    }
  }
`);

export const CaptionedMagazineSliceTypePrimary = graphql(`
  fragment CaptionedMagazineSliceTypePrimary on Case_studyBodyCaptionedmagazineslicetypePrimary {
    captioned_magazine_slice_type_caption
  }
`);

export const CaptionedMagazineSliceTypeField = graphql(`
  fragment CaptionedMagazineSliceTypeField on Case_studyBodyCaptionedmagazineslicetypeFields {
    captioned_magazine_slice_type_images
  }
`);
