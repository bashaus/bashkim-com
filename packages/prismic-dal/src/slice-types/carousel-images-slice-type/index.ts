import { graphql } from "../../gql";

export const CarouselImagesSliceType = graphql(`
  fragment CarouselImagesSliceType on Case_studyBodyCarouselimagesslicetype {
    type
    fields {
      ...CarouselImagesSliceTypeField
    }
  }
`);

export const CarouselImagesSliceTypeField = graphql(`
  fragment CarouselImagesSliceTypeField on Case_studyBodyCarouselimagesslicetypeFields {
    carousel_images_slice_type_image
    carousel_images_slice_type_caption
  }
`);
