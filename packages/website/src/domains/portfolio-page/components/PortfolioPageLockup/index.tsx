"use client";

import Group from "@bashkim-com/design-system/Group";
import PageHeaderPartial from "@bashkim-com/design-system/PageHeaderPartial";
import { PortfolioPageModelFragment } from "@bashkim-com/prismic-dal";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Header from "@/components/Header";
import HeaderActionHome from "@/components/HeaderActionHome";
import Page from "@/components/Page";
import HeaderDesktopImage from "@/domains/portfolio-page/assets/header-desktop.jpg";
import PortfolioCategory from "@/domains/portfolio-page/components/PortfolioCategory";
import PortfolioFeaturedCaseStudies from "@/domains/portfolio-page/components/PortfolioFeaturedCaseStudies";

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
    <Page>
      <Header backButton={<HeaderActionHome />} />
      <PageHeaderPartial
        imageDesktop={HeaderDesktopImage.src}
        imageMobile={HeaderDesktopImage.src}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          {metaTitle}
        </Typography>

        <Typography variant="subtitle1">{metaDescription}</Typography>
      </PageHeaderPartial>

      {featured && (
        <Group design="alternate">
          <Container>
            <Typography variant="h4" component="h2">
              Featured case studies
            </Typography>
          </Container>
          <PortfolioFeaturedCaseStudies featured={featured} />
        </Group>
      )}

      {portfolioCategories?.map((portfolioCategory) => (
        <Group
          id={portfolioCategory.primary?.portfolio_category_slug ?? undefined}
          key={portfolioCategory.primary?.portfolio_category_slug}
        >
          <PortfolioCategory portfolioCategory={portfolioCategory} />
        </Group>
      ))}
    </Page>
  );
}
