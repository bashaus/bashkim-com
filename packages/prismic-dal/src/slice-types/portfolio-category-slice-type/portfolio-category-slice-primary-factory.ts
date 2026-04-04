import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { PortfolioCategorySliceTypePrimaryFragment } from "../../gql/graphql";
import { prismicHeadingFactory } from "../../prismic/prismic-heading-factory";
import { prismicParagraphFactory } from "../../prismic/prismic-paragraph-factory";

export const portfolioCategorySlicePrimaryFactory =
  Factory.define<PortfolioCategorySliceTypePrimaryFragment>(() => {
    return {
      portfolio_category_slug: faker.lorem.slug(3),
      portfolio_category_title: prismicHeadingFactory.buildList(1, {
        type: "heading2",
      }),

      portfolio_category_description: prismicParagraphFactory.buildList(1),
    };
  });
