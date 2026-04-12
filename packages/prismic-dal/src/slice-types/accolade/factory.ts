import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { prismicExternalLinkFactory } from "../../factories";
import {
  AccoladeSliceTypeFieldFragment,
  AccoladeSliceTypeFragment,
  AccoladeSliceTypePrimaryFragment,
} from "../../gql/graphql";
import { prismicDateFactory } from "../../prismic/date/factory";
import { prismicHeading3Factory } from "../../prismic/heading/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

const places = ["gold", "silver", "bronze", "honour", "shortlist"];

export const accoladeSliceFieldFactory =
  Factory.define<AccoladeSliceTypeFieldFragment>(({ params }) => {
    const {
      accolade_slice_type_award_place = faker.helpers.arrayElement(places),
    } = params;

    return {
      __typename: "Case_studyAccoladesAccoladeslicetypeFields",
      accolade_slice_type_award_place,
      accolade_slice_type_award_link: prismicExternalLinkFactory.build(),
      accolade_slice_type_award_category: prismicParagraphFactory.buildList(1, {
        text: `Award - ${accolade_slice_type_award_place}`,
      }),
    };
  });

export const accoladeSlicePrimaryFactory =
  Factory.define<AccoladeSliceTypePrimaryFragment>(() => {
    return {
      __typename: "Case_studyAccoladesAccoladeslicetypePrimary",
      accolade_slice_type_description: prismicParagraphFactory.buildList(1),
      accolade_slice_type_date: prismicDateFactory.build(),
      accolade_slice_type_issuer: prismicHeading3Factory.buildList(1, {
        text: faker.company.name(),
      }),
    };
  });

export const accoladeSliceFactory = Factory.define<AccoladeSliceTypeFragment>(
  ({ associations }) => {
    return {
      __typename: "Case_studyAccoladesAccoladeslicetype",
      type: "AccoladeSliceType",
      primary: associations.primary ?? accoladeSlicePrimaryFactory.build(),
      fields:
        associations.fields ??
        places.map((place) =>
          accoladeSliceFieldFactory.build({
            accolade_slice_type_award_place: place,
          }),
        ),
    };
  },
);

export default accoladeSliceFactory;
