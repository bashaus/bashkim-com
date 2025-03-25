import type { PortfolioCategorySliceTypePrimaryFragment } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import prismicHeadingFactory from "../../prismic/prismicHeadingFactory";
import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const portfolioCategorySlicePrimaryFactory =
  Factory.define<PortfolioCategorySliceTypePrimaryFragment>(() => {
    return {
      portfolio_category_slug: faker.lorem.slug(3),
      portfolio_category_title: prismicHeadingFactory.buildList(1, {
        type: "heading2",
      }),

      portfolio_category_description: prismicParagraphFactory.buildList(1),
    };
  });

export default portfolioCategorySlicePrimaryFactory;
