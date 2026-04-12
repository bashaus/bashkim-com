import { graphql } from "../../gql";

export const CarouselImagesSliceTypeField = graphql(`
  fragment CarouselImagesSliceTypeField on Case_studyBodyCarouselimagesslicetypeFields {
    __typename
    carousel_images_slice_type_image
    carousel_images_slice_type_caption
  }
`);

export const CarouselImagesSliceType = graphql(`
  fragment CarouselImagesSliceType on Case_studyBodyCarouselimagesslicetype {
    __typename
    type
    fields {
      ...CarouselImagesSliceTypeField
    }
  }
`);
