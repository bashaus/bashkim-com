import {
  Group,
  GroupDesign,
  PageHeaderPartial,
  SubtitlePartial,
} from "@bashkim-com/design-system";
import type { Case_Study, Portfolio_Page } from "@bashkim-com/prismic-types";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadDocuments } from "@graphql-tools/load";
import { GetStaticProps } from "next";

import backgroundImage from "%assets/images/portfolio/background-image.jpg";
import { MenuButtonHome } from "%components/MenuButtonHome";
import { MetaDescription } from "%components/MetaDescription";
import { MetaKeywords } from "%components/MetaKeywords";
import { MetaTitle } from "%components/MetaTitle";
import { Page } from "%components/Page";
import { PortfolioCategory } from "%components/PortfolioCategory";
import { PortfolioFeaturedCaseStudies } from "%components/PortfolioFeaturedCaseStudies";
import { prismicClient } from "%libraries/prismic/client";

type PortfolioPageProps = {
  caseStudies: Array<Case_Study>;
  portfolioPage: Portfolio_Page;
};

const PortfolioPage = ({ portfolioPage }: PortfolioPageProps) => {
  const {
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: metaKeywords,
    featured,
    portfolio_categories: portfolioCategories,
  } = portfolioPage;

  return (
    <Page backButton={MenuButtonHome}>
      <MetaTitle content={metaTitle} />
      <MetaDescription content={metaDescription} />
      <MetaKeywords content={metaKeywords} />

      <PageHeaderPartial
        id="PortfolioPage-Header"
        imageDesktop={backgroundImage.src}
        imageMobile={backgroundImage.src}
      >
        <h1>{metaTitle}</h1>
        <p>{metaDescription}</p>
      </PageHeaderPartial>

      <Group design={GroupDesign.ALTERNATE}>
        <SubtitlePartial>
          <h2>Featured case studies</h2>
        </SubtitlePartial>
        <PortfolioFeaturedCaseStudies featured={featured} />
      </Group>

      {portfolioCategories.map((portfolioCategory, i) => (
        <Group key={i}>
          <PortfolioCategory portfolioCategory={portfolioCategory} />
        </Group>
      ))}
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const promiseDocuments = loadDocuments(
    ["src/data/queries/PortfolioPageQuery.gql"],
    {
      loaders: [new GraphQLFileLoader()],
    }
  );

  const [PortfolioPageQuery] = await promiseDocuments;
  const result = await prismicClient.query({
    query: PortfolioPageQuery.document,
  });

  return {
    props: {
      portfolioPage: result.data.portfolioPage.edges[0].node,
    } as PortfolioPageProps,
  };
};

export default PortfolioPage;
