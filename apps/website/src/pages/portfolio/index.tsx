import {
  Group,
  GroupDesign,
  PageHeaderPartial,
  SubtitlePartial,
} from "@bashkim-com/design-system";
import {
  Case_Study,
  Portfolio_Page,
  PortfolioPageDocument,
  PortfolioPageQuery,
} from "@bashkim-com/prismic-dal";
import { GetStaticProps } from "next";

import backgroundImage from "../../assets/images/portfolio/background-image.jpg";
import { MenuButtonHome } from "../../components/MenuButtonHome/MenuButtonHome";
import { MetaDescription } from "../../components/MetaDescription/MetaDescription";
import { MetaKeywords } from "../../components/MetaKeywords/MetaKeywords";
import { MetaTitle } from "../../components/MetaTitle/MetaTitle";
import { Page } from "../../components/Page/Page";
import { PortfolioCategory } from "../../components/PortfolioCategory/PortfolioCategory";
import { PortfolioFeaturedCaseStudies } from "../../components/PortfolioFeaturedCaseStudies/PortfolioFeaturedCaseStudies";
import { prismicClient } from "../../libraries/prismic/PrismicClient";

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

      {portfolioCategories.map((portfolioCategory) => (
        <Group key={JSON.stringify(portfolioCategory)}>
          <PortfolioCategory portfolioCategory={portfolioCategory} />
        </Group>
      ))}
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await prismicClient.query<PortfolioPageQuery>({
    query: PortfolioPageDocument,
  });

  return {
    props: {
      portfolioPage: result.data.portfolioPage.edges[0].node,
    } as PortfolioPageProps,
  };
};

export default PortfolioPage;
