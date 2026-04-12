import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

import {
  CarouselImagesSliceTypeFieldFragment,
  CarouselImagesSliceTypeFragment,
} from "../../gql/graphql";
import { prismicHeading3Factory } from "../../prismic/heading/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const carouselImagesSliceFieldFactory =
  Factory.define<CarouselImagesSliceTypeFieldFragment>(
    ({ params, sequence }) => {
      const { width = 600, height = 400 } =
        params.carousel_images_slice_type_image?.dimensions ?? {};

      return {
        __typename: "Case_studyBodyCarouselimagesslicetypeFields",
        carousel_images_slice_type_caption: [
          prismicHeading3Factory.build(),
          prismicParagraphFactory.build(),
        ],
        carousel_images_slice_type_image: {
          dimensions: {
            width,
            height,
          },
          alt: null,
          copyright: null,
          url: placeholderImage({
            width,
            height,
            text: `Image ${sequence}`,
          }),
        },
      };
    },
  );

export const carouselImagesSliceFactory =
  Factory.define<CarouselImagesSliceTypeFragment>(() => {
    return {
      __typename: "Case_studyBodyCarouselimagesslicetype",
      type: "CarouselImagesSliceType",
      fields: carouselImagesSliceFieldFactory.buildList(3),
    };
  });
