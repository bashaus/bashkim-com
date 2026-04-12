import { HttpResponse } from "msw";

import { GetHomePageQuery } from "../../gql/graphql";
import { prismicLink } from "../../mock/link";
import { homePageModelFactory } from "../../models/home-page/factory";

export const getHomePageHandler = prismicLink.query<GetHomePageQuery>(
  "GetHomePage",
  () =>
    HttpResponse.json({
      data: {
        homePage: {
          edges: [
            {
              node: homePageModelFactory.build(),
            },
          ],
        },
      },
    }),
);
