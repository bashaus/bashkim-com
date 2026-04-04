import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { AccoladeSliceTypePrimaryFragment } from "../../gql/graphql";
import { prismicDateFactory } from "../../prismic/prismic-date-factory";
import { prismicHeadingFactory } from "../../prismic/prismic-heading-factory";
import { prismicParagraphFactory } from "../../prismic/prismic-paragraph-factory";

export const accoladeSlicePrimaryFactory =
  Factory.define<AccoladeSliceTypePrimaryFragment>(() => {
    return {
      accolade_slice_type_description: prismicParagraphFactory.buildList(1),
      accolade_slice_type_date: prismicDateFactory.build(),
      accolade_slice_type_issuer: prismicHeadingFactory.buildList(1, {
        text: faker.company.name(),
      }),
    };
  });
