import { GetStaticProps } from "next";

import { PrismicClient } from "@bashkim-com/prismic";
import type {
  CaseStudyContentType,
  PortfolioPageContentType,
} from "@bashkim-com/prismic";

import {
  Group,
  GroupDesign,
  PartialHeaderText,
  PartialSubtitle,
} from "@bashkim-com/design-system";

import { LayoutDefault } from "%components/LayoutDefault";
import { MenuBackButtonHomeImpl } from "%components/MenuBackButtonHomeImpl";
import { MetaDescription } from "%components/MetaDescription";
import { MetaKeywords } from "%components/MetaKeywords";
import { MetaTitle } from "%components/MetaTitle";
import { PortfolioFeaturedCaseStudies } from "%components/PortfolioFeaturedCaseStudies";
import { PortfolioCategory } from "%components/PortfolioCategory";

import { PortfolioPageQuery } from "%libraries/prismic/queries/PortfolioPageQuery";

type PortfolioPageProps = {
  caseStudies: Array<CaseStudyContentType>;
  portfolioPage: PortfolioPageContentType;
};

const PortfolioPage = ({ portfolioPage }: PortfolioPageProps): JSX.Element => {
  const {
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: metaKeywords,
    featured,
    portfolio_categories: portfolioCategories,
  } = portfolioPage;

  return (
    <LayoutDefault backButton={MenuBackButtonHomeImpl} theme="portfolio">
      <MetaTitle content={metaTitle} />
      <MetaDescription content={metaDescription} />
      <MetaKeywords content={metaKeywords} />

      <PartialHeaderText>
        <h1>{metaTitle}</h1>
        <p>{metaDescription}</p>
      </PartialHeaderText>

      <Group design={GroupDesign.ALTERNATE}>
        <PartialSubtitle>
          <h2>Featured case studies</h2>
        </PartialSubtitle>
        <PortfolioFeaturedCaseStudies featured={featured} />
      </Group>

      {portfolioCategories.map((portfolioCategory, i) => (
        <Group key={i}>
          <PortfolioCategory portfolioCategory={portfolioCategory} />
        </Group>
      ))}
    </LayoutDefault>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await PrismicClient.query({
    query: PortfolioPageQuery,
  });

  return {
    props: {
      portfolioPage: result.data.portfolioPage.edges[0].node,
    } as PortfolioPageProps,
  };
};

export default PortfolioPage;
