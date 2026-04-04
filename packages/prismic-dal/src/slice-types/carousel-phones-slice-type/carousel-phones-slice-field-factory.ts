import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

import { CarouselPhonesSliceTypeFieldFragment } from "../../gql/graphql";
import { prismicHeadingFactory } from "../../prismic/prismic-heading-factory";
import { prismicParagraphFactory } from "../../prismic/prismic-paragraph-factory";

export const carouselPhonesSliceFieldFactory =
  Factory.define<CarouselPhonesSliceTypeFieldFragment>((opts) => {
    const { width = 600, height = 1200 } =
      opts.params.carousel_phones_slice_type_image?.dimensions ?? {};

    return {
      carousel_phones_slice_type_device_type: faker.helpers.arrayElement([
        "SMARTPHONE",
        "FEATURE_PHONE",
      ]),

      carousel_phones_slice_type_caption: [
        prismicHeadingFactory.build(),
        prismicParagraphFactory.build(),
      ],

      carousel_phones_slice_type_image: {
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
