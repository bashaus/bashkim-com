import { GetPortfolioPageQuery } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { HttpResponse } from "msw";

import { prismicLink } from "../link";

export const getPortfolioPageHandler = prismicLink.query<GetPortfolioPageQuery>(
  "GetPortfolioPage",
  () =>
    HttpResponse.json({
      data: {
        portfolioPage: {
          edges: [
            {
              node: {
                __typename: "Portfolio_page",
                meta_title: "Portfolio",
                meta_description: faker.lorem.sentence(7),
                featured: [],
                portfolio_categories: [],
              },
            },
          ],
        },
      },
    }),
);
