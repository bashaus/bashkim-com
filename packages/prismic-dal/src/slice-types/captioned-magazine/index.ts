import { graphql } from "../../gql";

export const CaptionedMagazineSliceTypeField = graphql(`
  fragment CaptionedMagazineSliceTypeField on Case_studyBodyCaptionedmagazineslicetypeFields {
    __typename
    captioned_magazine_slice_type_images
  }
`);

export const CaptionedMagazineSliceTypePrimary = graphql(`
  fragment CaptionedMagazineSliceTypePrimary on Case_studyBodyCaptionedmagazineslicetypePrimary {
    __typename
    captioned_magazine_slice_type_caption
  }
`);

export const CaptionedMagazineSliceType = graphql(`
  fragment CaptionedMagazineSliceType on Case_studyBodyCaptionedmagazineslicetype {
    __typename
    type
    primary {
      ...CaptionedMagazineSliceTypePrimary
    }
    fields {
      ...CaptionedMagazineSliceTypeField
    }
  }
`);
