import { graphql } from "../../gql";

export const CarouselPhonesSliceType = graphql(`
  fragment CarouselPhonesSliceType on Case_studyBodyCarouselphonesslicetype {
    type
    fields {
      ...CarouselPhonesSliceTypeField
    }
  }
`);

export const CarouselPhonesSliceTypeField = graphql(`
  fragment CarouselPhonesSliceTypeField on Case_studyBodyCarouselphonesslicetypeFields {
    carousel_phones_slice_type_device_type
    carousel_phones_slice_type_image
    carousel_phones_slice_type_caption
  }
`);
