import { GetStaticProps } from "next";
import React from "react";
import PrismicClient, {
  CaseStudyContentType,
  PortfolioPageContentType,
} from "@bashkim-com/prismic";

import LayoutDefault from "%components/LayoutDefault";
import MenuBackButtonHomeImpl from "%components/MenuBackButtonHomeImpl";
import MetaDescription from "%components/MetaDescription";
import MetaKeywords from "%components/MetaKeywords";
import MetaTitle from "%components/MetaTitle";
import PartialHeaderText from "%partials/HeaderText";
import PartialSubtitle from "%partials/Subtitle";
import PortfolioFeaturedCaseStudies from "%components/PortfolioFeaturedCaseStudies";
import PortfolioList from "%components/PortfolioList";

import { PortfolioPageQuery } from "%prismic/queries/PortfolioPageQuery";

type PortfolioPageProps = {
  caseStudies: Array<CaseStudyContentType>;
  portfolioPage: PortfolioPageContentType;
};

const PortfolioPage = ({
  caseStudies,
  portfolioPage,
}: PortfolioPageProps): JSX.Element => {
  const {
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: metaKeywords,
    featured,
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

      <section className="group-alternate">
        <PartialSubtitle>
          <h2>Featured case studies</h2>
        </PartialSubtitle>
        <PortfolioFeaturedCaseStudies featured={featured} />
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>All case studies</h2>
        </PartialSubtitle>

        <PortfolioList caseStudies={caseStudies} />
      </section>
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
      caseStudies: result.data.caseStudies.edges.map((x: any) => x.node),
    } as PortfolioPageProps,
  };
};

export default PortfolioPage;
