import {
  CallToAction,
  Group,
  SplitItemPartial,
  SplitPartial,
} from "@bashkim-com/design-system";
import type { HomePageContentType } from "@bashkim-com/prismic";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { HomeFeatured } from "%components/HomeFeatured";
import { HomeHello } from "%components/HomeHello";
import { MetaDescription } from "%components/MetaDescription";
import { MetaKeywords } from "%components/MetaKeywords";
import { MetaTitle } from "%components/MetaTitle";
import { Page } from "%components/Page";
import { PrismicClient } from "%libraries/prismic/client";
import { HomePageQuery } from "%libraries/prismic/queries/HomePageQuery";

type HomePageProps = {
  homePage: HomePageContentType;
};

const HomePage = ({ homePage }: HomePageProps): JSX.Element => {
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

      <Group>
        <SplitPartial>
          <SplitItemPartial>
            <div>
              <p>Looking for more case&nbsp;studies?</p>
              <CallToAction>
                <Link href="/portfolio">
                  <a>
                    <span>Browse portfolio</span>
                  </a>
                </Link>
              </CallToAction>
            </div>
          </SplitItemPartial>

          <SplitItemPartial>
            <div>
              <p>Want more details about my practice?</p>
              <CallToAction>
                <Link href="/about">
                  <a>
                    <span>About me</span>
                  </a>
                </Link>
              </CallToAction>
            </div>
          </SplitItemPartial>
        </SplitPartial>
      </Group>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await PrismicClient.query({
    query: HomePageQuery,
  });

  return {
    props: {
      homePage: result.data.homePage.edges[0].node,
    } as HomePageProps,
  };
};

export default HomePage;
