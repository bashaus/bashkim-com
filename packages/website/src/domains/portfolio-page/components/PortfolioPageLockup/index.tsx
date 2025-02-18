"use client";

import {
  Group,
  GroupDesign,
  PageHeaderPartial,
  SubtitlePartial,
} from "@bashkim-com/design-system";
import { PortfolioPageModelFragment } from "@bashkim-com/prismic-dal";
import Typography from "@mui/material/Typography";

import MenuButtonHome from "../../../../components/MenuButtonHome";
import Page from "../../../../components/Page";
import backgroundImage from "../../assets/background-image.jpg";
import PortfolioCategory from "../PortfolioCategory";
import PortfolioFeaturedCaseStudies from "../PortfolioFeaturedCaseStudies";

type PortfolioPageProps = Readonly<{
  portfolioPage: PortfolioPageModelFragment;
}>;

export default function PortfolioPageLockup({
  portfolioPage,
}: PortfolioPageProps) {
  const {
    meta_title: metaTitle,
    meta_description: metaDescription,
    featured,
    portfolio_categories: portfolioCategories,
  } = portfolioPage;

  return (
    <Page backButton={<MenuButtonHome />}>
      <PageHeaderPartial
        id="PortfolioPage-Header"
        imageDesktop={backgroundImage.src}
        imageMobile={backgroundImage.src}
      >
        <Typography variant="h1" gutterBottom>
          {metaTitle}
        </Typography>

        <Typography variant="subtitle1">{metaDescription}</Typography>
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
}
