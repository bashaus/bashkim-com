"use client";

import {
  Group,
  GroupDesign,
  PageHeaderPartial,
  SubtitlePartial,
} from "@bashkim-com/design-system";
import { GetPortfolioPageQuery } from "@bashkim-com/prismic-dal";

import { MenuButtonHome } from "../../components/MenuButtonHome/MenuButtonHome";
import { Page } from "../../components/Page/Page";
import backgroundImage from "./assets/background-image.jpg";
import { PortfolioCategory } from "./components/PortfolioCategory/PortfolioCategory";
import { PortfolioFeaturedCaseStudies } from "./components/PortfolioFeaturedCaseStudies/PortfolioFeaturedCaseStudies";

type PortfolioPageProps = {
  portfolioPageResult: GetPortfolioPageQuery["portfolioPage"];
};

export const PortfolioPageLockup = ({
  portfolioPageResult,
}: PortfolioPageProps) => {
  const portfolioPage = portfolioPageResult.edges?.[0]?.node;
  if (!portfolioPage) {
    return null;
  }

  const {
    meta_title: metaTitle,
    meta_description: metaDescription,
    featured,
    portfolio_categories: portfolioCategories,
  } = portfolioPage;

  return (
    <Page backButton={MenuButtonHome}>
      <PageHeaderPartial
        id="PortfolioPage-Header"
        imageDesktop={backgroundImage.src}
        imageMobile={backgroundImage.src}
      >
        <h1>{metaTitle}</h1>
        <p>{metaDescription}</p>
      </PageHeaderPartial>

      {featured && (
        <Group design={GroupDesign.ALTERNATE}>
          <SubtitlePartial>
            <h2>Featured case studies</h2>
          </SubtitlePartial>
          <PortfolioFeaturedCaseStudies featured={featured} />
        </Group>
      )}

      {portfolioCategories?.map((portfolioCategory) => (
        <Group key={JSON.stringify(portfolioCategory)}>
          <PortfolioCategory portfolioCategory={portfolioCategory} />
        </Group>
      ))}
    </Page>
  );
};