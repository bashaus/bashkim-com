import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { PrismicClient } from "@bashkim-com/prismic";
import type { HomePageContentType } from "@bashkim-com/prismic";
import {
  CallToAction,
  Group,
  GroupDesign,
  PartialFullBanner,
  PartialSplit,
  PartialSubtitle,
} from "@bashkim-com/design-system";

import { HomeBrands } from "%components/HomeBrands";
import { HomeHello } from "%components/HomeHello";
import { LayoutDefault } from "%components/LayoutDefault";
import { MetaDescription } from "%components/MetaDescription";
import { MetaKeywords } from "%components/MetaKeywords";
import { MetaTitle } from "%components/MetaTitle";

import { PrismicLinkResolver } from "%libraries/prismic/helpers/Link";
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
    <LayoutDefault>
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

      <Group>
        <PartialSubtitle>
          <h2>Featured case studies</h2>
        </PartialSubtitle>

        <ul>
          {featuredCaseStudies.map((featuredCaseStudy) => {
            const caseStudy = featuredCaseStudy.featured_case_study;

            const {
              image_header_desktop: backgroundDesktop,
              image_header_mobile: backgroundMobile,
            } = caseStudy;

            return (
              <li key={caseStudy._meta.id}>
                <PartialFullBanner
                  backgroundDesktop={backgroundDesktop && backgroundDesktop.url}
                  backgroundMobile={backgroundMobile && backgroundMobile.url}
                  id={`HomePage-PartialFullBanner-${caseStudy._meta.id}`}
                >
                  <h3>{caseStudy.meta_title}</h3>
                  <p>{caseStudy.meta_description}</p>
                  <CallToAction>
                    <Link
                      href="/portfolio/[caseStudySlug]/"
                      as={PrismicLinkResolver({
                        type: "case_study",
                        uid: caseStudy._meta.uid,
                      })}
                    >
                      <a>
                        <span>Read case study</span>
                      </a>
                    </Link>
                  </CallToAction>
                </PartialFullBanner>
              </li>
            );
          })}
        </ul>
      </Group>

      <Group>
        <PartialSubtitle>
          <h2>And some great brands I&apos;ve worked with</h2>
        </PartialSubtitle>
        <HomeBrands />
      </Group>

      <Group design={GroupDesign.ALTERNATE}>
        <PartialSplit>
          <PartialSplit.Item>
            <div>
              <p>Interested in seeing case&nbsp;studies?</p>
              <CallToAction>
                <Link href="/portfolio">
                  <a>
                    <span>Browse portfolio</span>
                  </a>
                </Link>
              </CallToAction>
            </div>
          </PartialSplit.Item>

          <PartialSplit.Item>
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
          </PartialSplit.Item>
        </PartialSplit>
      </Group>
    </LayoutDefault>
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
