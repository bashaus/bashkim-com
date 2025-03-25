import type { PortfolioCategorySliceTypeFragment } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import prismicHeadingFactory from "../../prismic/prismicHeadingFactory";
import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const portfolioCategorySliceFactory =
  Factory.define<PortfolioCategorySliceTypeFragment>(() => {
    return {
      type: "PortfolioCategorySliceType",
      label: null,
      primary: {
        portfolio_category_slug: faker.lorem.slug(3),
        portfolio_category_title: prismicHeadingFactory.buildList(1, {
          type: "heading2",
        }),
        portfolio_category_description: prismicParagraphFactory.buildList(1),
      },
      // fields: [
      //   {
      //     portfolio_category_case_study: {},
      //   },
      // ],
    };
  });

export default portfolioCategorySliceFactory;
