import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import {
  ExhibitionSliceTypeFragment,
  ExhibitionSliceTypePrimaryFragment,
} from "../../gql/graphql";
import { prismicDateTimeFactory } from "../../prismic/date-time/factory";
import { prismicHeading3Factory } from "../../prismic/heading/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const exhibitionSlicePrimaryFactory =
  Factory.define<ExhibitionSliceTypePrimaryFragment>(() => {
    return {
      __typename: "Case_studyExhibitionsExhibitionslicetypePrimary",
      exhibition_slice_type_name: prismicHeading3Factory.buildList(1),
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

export const exhibitionSliceFactory =
  Factory.define<ExhibitionSliceTypeFragment>(() => {
    return {
      __typename: "Case_studyExhibitionsExhibitionslicetype",
      type: "ExhibitionSliceType",
      primary: exhibitionSlicePrimaryFactory.build(),
    };
  });
