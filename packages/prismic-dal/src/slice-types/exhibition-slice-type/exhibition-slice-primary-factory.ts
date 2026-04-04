import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { ExhibitionSliceTypePrimaryFragment } from "../../gql/graphql";
import { prismicDateTimeFactory } from "../../prismic/prismic-date-time-factory";
import { prismicHeadingFactory } from "../../prismic/prismic-heading-factory";
import { prismicParagraphFactory } from "../../prismic/prismic-paragraph-factory";

export const exhibitionSlicePrimaryFactory =
  Factory.define<ExhibitionSliceTypePrimaryFragment>(() => {
    return {
      exhibition_slice_type_name: prismicHeadingFactory.buildList(1),
      exhibition_slice_type_link: {
        url: faker.internet.url(),
        target: null,
      },
      exhibition_slice_type_opening_date: prismicDateTimeFactory.build(
        undefined,
        { transient: { days: 5 } },
      ),
      exhibition_slice_type_closing_date: prismicDateTimeFactory.build(
        undefined,
        { transient: { days: 10 } },
      ),
      exhibition_slice_type_location: prismicParagraphFactory.buildList(1, {
        text: `${faker.location.city()}, ${faker.location.country()}`,
      }),
    };
  });
