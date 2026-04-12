import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import {
  AccoladeSliceTypeFieldFragment,
  AccoladeSliceTypeFragment,
  AccoladeSliceTypePrimaryFragment,
} from "../../gql/graphql";
import { prismicDateFactory } from "../../prismic/date/factory";
import { prismicHeading3Factory } from "../../prismic/heading/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const accoladeSliceFieldFactory =
  Factory.define<AccoladeSliceTypeFieldFragment>(({ params }) => {
    const place =
      params.accolade_slice_type_award_place ??
      faker.helpers.arrayElement([
        "gold",
        "silver",
        "bronze",
        "honour",
        "shortlist",
      ]);

    return {
      __typename: "Case_studyAccoladesAccoladeslicetypeFields",
      accolade_slice_type_award_place: place,
      accolade_slice_type_award_link: {
        url: faker.internet.url(),
        target: null,
      },
      accolade_slice_type_award_category: prismicParagraphFactory.buildList(1, {
        text: `Award - ${place}`,
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
  ({ params }) => {
    const { primary, fields } = params;

    return {
      __typename: "Case_studyAccoladesAccoladeslicetype",
      type: "AccoladeSliceType",
      primary: accoladeSlicePrimaryFactory.build(primary ?? undefined),
      fields: fields ?? [
        accoladeSliceFieldFactory.build({
          accolade_slice_type_award_place: "gold",
        }),
        accoladeSliceFieldFactory.build({
          accolade_slice_type_award_place: "silver",
        }),
        accoladeSliceFieldFactory.build({
          accolade_slice_type_award_place: "bronze",
        }),
        accoladeSliceFieldFactory.build({
          accolade_slice_type_award_place: "honour",
        }),
        accoladeSliceFieldFactory.build({
          accolade_slice_type_award_place: "shortlist",
        }),
      ],
    };
  },
);

export default accoladeSliceFactory;
