import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { prismicImageFactory } from "../../factories";
import {
  CarouselPhonesSliceTypeFieldFragment,
  CarouselPhonesSliceTypeFragment,
} from "../../gql/graphql";
import { prismicHeading3Factory } from "../../prismic/heading/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const carouselPhonesSliceFieldFactory =
  Factory.define<CarouselPhonesSliceTypeFieldFragment>(
    ({ params, sequence }) => {
      const { width = 600, height = 1200 } =
        params.carousel_phones_slice_type_image?.dimensions ?? {};

      return {
        __typename: "Case_studyBodyCarouselphonesslicetypeFields",
        carousel_phones_slice_type_device_type: faker.helpers.arrayElement([
          "SMARTPHONE",
          "FEATURE_PHONE",
        ]),

        carousel_phones_slice_type_caption: [
          prismicHeading3Factory.build(),
          prismicParagraphFactory.build(),
        ],

        carousel_phones_slice_type_image: prismicImageFactory.build({
          alt: `#${sequence}`,
          dimensions: { width, height },
        }),
      };
    },
  );

export const carouselPhonesSliceFactory =
  Factory.define<CarouselPhonesSliceTypeFragment>(() => {
    return {
      __typename: "Case_studyBodyCarouselphonesslicetype",
      type: "CarouselPhonesSliceType",
      fields: carouselPhonesSliceFieldFactory.buildList(4),
    };
  });
