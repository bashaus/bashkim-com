import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { PortfolioPageModelFragment } from "../../gql/graphql";
import { prismicHeading3Factory } from "../../prismic/heading/factory";
import {
  prismicImageIconFactory,
  prismicImagePosterFactory,
} from "../../prismic/image/factory";
import { prismicMetaFactory } from "../../prismic/meta/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";
import { portfolioCategorySliceFactory } from "../../slice-types/portfolio-category/factory";

export const portfolioPageModelFactory =
  Factory.define<PortfolioPageModelFragment>(() => {
    return {
      __typename: "Portfolio_page",
      meta_title: "Portfolio",
      meta_description: faker.lorem.sentence(7),
      featured: [
        {
          __typename: "Portfolio_pageFeatured",
          featured_title: prismicHeading3Factory.build(),
          featured_description: [prismicParagraphFactory.build()],

          featured_case_study: {
            __typename: "Case_study",
            _meta: prismicMetaFactory.build({
              type: "case_study",
              uid: "case-study",
            }),
            meta_title: faker.lorem.words(3),
            meta_description: faker.lorem.sentences(2),
            image_icon: prismicImageIconFactory.build(),
            image_poster: prismicImagePosterFactory.build(),
          },
        },
      ],
      portfolio_categories: portfolioCategorySliceFactory.buildList(2),
    };
  });
