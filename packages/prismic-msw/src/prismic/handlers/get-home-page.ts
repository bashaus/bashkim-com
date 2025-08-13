import { GetHomePageQuery } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { HttpResponse } from "msw";

import { prismicLink } from "../link";

export const getHomePageHandler = prismicLink.query<GetHomePageQuery>(
  "GetHomePage",
  () =>
    HttpResponse.json({
      data: {
        homePage: {
          edges: [
            {
              node: {
                __typename: "Home_page",
                meta_title: "Digital Technologist",
                meta_description: faker.lorem.sentence(),
              },
            },
          ],
        },
      },
    }),
);
