import type { PortfolioCategorySliceTypeFragment } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

const portfolioCategorySliceFactory =
  Factory.define<PortfolioCategorySliceTypeFragment>(() => {
    return {
      type: "PortfolioCategorySliceType",
      label: null,
      primary: {
        portfolio_category_slug: faker.lorem.slug(3),
        portfolio_category_title: [
          {
            type: "heading2",
            text: faker.lorem.words(3),
            spans: [],
          },
        ],
        portfolio_category_description: [
          {
            type: "paragraph",
            text: faker.lorem.words(10),
            spans: [],
          },
        ],
      },
      fields: [
        {
          portfolio_category_case_study: {},
        },
      ],
    };
  });

export default portfolioCategorySliceFactory;
