import { GetServerSideProps } from "next";
import Prismic from "prismic-javascript";
import React from "react";
import PrismicClient from "@bashkim-com/prismic";
import {
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

type PortfolioPageProps = {
  caseStudies: Array<CaseStudyContentType>;
  page: PortfolioPageContentType;
};

const PortfolioPage = ({
  caseStudies,
  page,
}: PortfolioPageProps): JSX.Element => {
  const {
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: metaKeywords,
    featured,
  } = page.data;

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const prismicClient = PrismicClient(req);

  const caseStudies = await prismicClient.query(
    Prismic.Predicates.at("document.type", "case_study"),
    {
      fetchLinks: ["technology.technology_name", "technology.technology_icon"],
      orderings: "[my.case_study.info_launch_date desc]",
      pageSize: 100,
    }
  );

  const page = await prismicClient.getSingle("portfolio_page", {
    fetchLinks: [
      "case_study.meta_title",
      "case_study.meta_description",
      "case_study.image_icon",
      "case_study.image_poster",
    ],
  });

  return {
    props: {
      caseStudies: caseStudies.results,
      page,
    } as PortfolioPageProps,
  };
};

export default PortfolioPage;
