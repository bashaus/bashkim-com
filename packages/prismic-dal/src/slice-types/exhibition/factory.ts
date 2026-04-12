import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { prismicExternalLinkFactory } from "../../factories";
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
      exhibition_slice_type_name: [prismicHeading3Factory.build()],
      exhibition_slice_type_link: prismicExternalLinkFactory.build(),
      exhibition_slice_type_opening_date: prismicDateTimeFactory.build(
        undefined,
        { transient: { days: 5 } },
      ),
      exhibition_slice_type_closing_date: prismicDateTimeFactory.build(
        undefined,
        { transient: { days: 10 } },
      ),
      exhibition_slice_type_location: [
        prismicParagraphFactory.build({
          text: `${faker.location.city()}, ${faker.location.country()}`,
        }),
      ],
    };
  });

export const exhibitionSliceFactory =
  Factory.define<ExhibitionSliceTypeFragment>(({ associations }) => {
    return {
      __typename: "Case_studyExhibitionsExhibitionslicetype",
      type: "ExhibitionSliceType",
      primary: associations.primary ?? exhibitionSlicePrimaryFactory.build(),
    };
  });
