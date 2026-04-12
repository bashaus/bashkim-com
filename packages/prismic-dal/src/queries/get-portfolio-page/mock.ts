import { HttpResponse } from "msw";

import { GetPortfolioPageQuery } from "../../gql/graphql";
import { prismicLink } from "../../mock/link";
import { portfolioPageModelFactory } from "../../models/portfolio-page/factory";

export const getPortfolioPageHandler = prismicLink.query<GetPortfolioPageQuery>(
  "GetPortfolioPage",
  () =>
    HttpResponse.json({
      data: {
        portfolioPage: {
          edges: [
            {
              node: portfolioPageModelFactory.build(),
            },
          ],
        },
      },
    }),
);
