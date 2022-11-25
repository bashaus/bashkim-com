import {
  Home_Page,
  HomePageDocument,
  HomePageQuery,
} from "@bashkim-com/prismic-dal";
import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";

import { HomeFeatured } from "../components/HomeFeatured/HomeFeatured";
import { HomeFooter } from "../components/HomeFooter/HomeFooter";
import { HomeHello } from "../components/HomeHello/HomeHello";
import { MetaDescription } from "../components/MetaDescription/MetaDescription";
import { MetaKeywords } from "../components/MetaKeywords/MetaKeywords";
import { MetaTitle } from "../components/MetaTitle/MetaTitle";
import { Page } from "../components/Page/Page";
import { prismicClient } from "../libraries/prismic/PrismicClient";

type HomePageProps = {
  homePage: Home_Page;
};

const HomePage = ({ homePage }: HomePageProps) => {
  const {
    featured_case_studies: featuredCaseStudies,
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: metaKeywords,
  } = homePage;

  return (
    <Page>
      <MetaTitle standalone content={metaTitle} />
      <MetaDescription content={metaDescription} />
      <MetaKeywords content={metaKeywords} />

      <Head>
        <meta
          key="HomePage.facebook"
          property="fb:admins"
          content="616526947"
        />

        <meta
          key="HomePage.pinterest"
          name="p:domain_verify"
          content="55b9bc4550de466a2f711ccbbbbb515d"
        />

        <meta
          key="HomePage.alexa"
          name="alexaVerifyID"
          content="P8-zPQkBVRuCWaLWzxhZFksyels"
        />

        <meta
          key="HomePage.bing"
          name="msvalidate.01"
          content="BA82D2247A9878A3E512E11F6E9E16C9"
        />
      </Head>

      <HomeHello />
      <HomeFeatured caseStudies={featuredCaseStudies} />
      <HomeFooter />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomePageProps>
> => {
  const result = await prismicClient.query<HomePageQuery>({
    query: HomePageDocument,
  });

  return {
    props: {
      homePage: result.data.homePage.edges[0].node as Home_Page,
    },
  };
};

export default HomePage;
