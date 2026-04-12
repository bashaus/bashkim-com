import { graphql } from "../../gql";

export const CarouselPhonesSliceTypeField = graphql(`
  fragment CarouselPhonesSliceTypeField on Case_studyBodyCarouselphonesslicetypeFields {
    __typename
    carousel_phones_slice_type_device_type
    carousel_phones_slice_type_image
    carousel_phones_slice_type_caption
  }
`);

export const CarouselPhonesSliceType = graphql(`
  fragment CarouselPhonesSliceType on Case_studyBodyCarouselphonesslicetype {
    __typename
    type
    fields {
      ...CarouselPhonesSliceTypeField
    }
  }
`);
