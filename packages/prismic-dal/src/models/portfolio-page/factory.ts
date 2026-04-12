import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { PortfolioPageModelFragment } from "../../gql/graphql";
import { portfolioCategorySliceFactory } from "../../slice-types/portfolio-category/factory";
import { portfolioPageFeaturedModelFactory } from "../portfolio-page-featured/factory";

export const portfolioPageModelFactory =
  Factory.define<PortfolioPageModelFragment>(() => {
    return {
      __typename: "Portfolio_page",
      meta_title: faker.lorem.words(2),
      meta_description: faker.lorem.sentence(7),
      featured: portfolioPageFeaturedModelFactory.buildList(4),
      portfolio_categories: portfolioCategorySliceFactory.buildList(2),
    };
  });
