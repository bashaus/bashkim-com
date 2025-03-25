import type { CarouselImagesSliceTypeFieldFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

import prismicHeadingFactory from "../../prismic/prismicHeadingFactory";
import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const carouselImagesSliceFieldFactory =
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

export default carouselImagesSliceFieldFactory;
