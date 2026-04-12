import { Factory } from "fishery";

import { prismicImageFactory } from "../../factories";
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
        carousel_images_slice_type_image: prismicImageFactory.build({
          alt: `#${sequence}`,
          dimensions: { width, height },
        }),
      };
    },
  );

export const carouselImagesSliceFactory =
  Factory.define<CarouselImagesSliceTypeFragment>(({ associations }) => {
    return {
      __typename: "Case_studyBodyCarouselimagesslicetype",
      type: "CarouselImagesSliceType",
      fields:
        associations.fields ?? carouselImagesSliceFieldFactory.buildList(3),
    };
  });
