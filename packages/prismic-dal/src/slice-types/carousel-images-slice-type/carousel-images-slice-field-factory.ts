import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

import { CarouselImagesSliceTypeFieldFragment } from "../../gql/graphql";
import { prismicHeadingFactory } from "../../prismic/prismic-heading-factory";
import { prismicParagraphFactory } from "../../prismic/prismic-paragraph-factory";

export const carouselImagesSliceFieldFactory =
  Factory.define<CarouselImagesSliceTypeFieldFragment>((opts) => {
    const { width = 600, height = 400 } =
      opts.params.carousel_images_slice_type_image?.dimensions ?? {};

    return {
      carousel_images_slice_type_caption: [
        prismicHeadingFactory.build(),
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
          text: `Image ${opts.sequence}`,
        }),
      },
    };
  });
