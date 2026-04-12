import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import {
  PortfolioCategorySliceTypeFieldFragment,
  PortfolioCategorySliceTypeFragment,
  PortfolioCategorySliceTypePrimaryFragment,
} from "../../gql/graphql";
import { prismicHeading2Factory } from "../../prismic/heading/factory";
import { prismicImageIconFactory } from "../../prismic/image/factory";
import { prismicMetaFactory } from "../../prismic/meta/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const portfolioCategorySliceFieldFactory =
  Factory.define<PortfolioCategorySliceTypeFieldFragment>(({ sequence }) => {
    return {
      __typename:
        "Portfolio_pagePortfolio_categoriesPortfoliocategoryslicetypeFields",
      portfolio_category_case_study: {
        __typename: "Case_study",
        _meta: prismicMetaFactory.build({
          type: "case_study",
          uid: `case-study-${sequence}`,
        }),

        meta_title: faker.lorem.words(3),
        meta_description: faker.lorem.sentence(),
        image_icon: prismicImageIconFactory.build(),
      },
    };
  });

export const portfolioCategorySlicePrimaryFactory =
  Factory.define<PortfolioCategorySliceTypePrimaryFragment>(() => {
    return {
      __typename:
        "Portfolio_pagePortfolio_categoriesPortfoliocategoryslicetypePrimary",
      portfolio_category_slug: faker.lorem.slug(3),
      portfolio_category_title: prismicHeading2Factory.buildList(1),
      portfolio_category_description: prismicParagraphFactory.buildList(1),
    };
  });

export const portfolioCategorySliceFactory =
  Factory.define<PortfolioCategorySliceTypeFragment>(() => {
    return {
      __typename:
        "Portfolio_pagePortfolio_categoriesPortfoliocategoryslicetype",
      type: "PortfolioCategorySliceType",
      primary: portfolioCategorySlicePrimaryFactory.build(),
      fields: portfolioCategorySliceFieldFactory.buildList(1),
    };
  });
