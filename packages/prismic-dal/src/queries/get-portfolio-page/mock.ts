import { GetPortfolioPageQuery } from "@bashkim-com/prismic-dal";
import { HttpResponse } from "msw";

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
