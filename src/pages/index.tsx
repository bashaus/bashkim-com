import { NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

import HomeBrands from "%components/HomeBrands";
import HomeHello from "%components/HomeHello";
import LayoutDefault from "%components/LayoutDefault";
import MetaDescription from "%components/MetaDescription";
import MetaKeywords from "%components/MetaKeywords";
import MetaTitle from "%components/MetaTitle";
import CallToAction from "%components/CallToAction";
import PartialFullBanner from "%components/PartialFullBanner";
import PartialSplit from "%components/PartialSplit";
import PartialSubtitle from "%components/PartialSubtitle";

import PrismicClient from "%prismic/client";
import LinkResolver from "%prismic/helpers/LinkResolver";
import HomePageContentType from "%prismic/content-types/home_page/type";

interface HomePageProps {
  page: HomePageContentType;
}

const HomePage = ({ page }: HomePageProps): JSX.Element => {
  const {
    featured_case_studies: featuredCaseStudies,
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: metaKeywords,
  } = page.data;

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

      <section className="group">
        <PartialSubtitle>
          <h2>Featured case studies</h2>
        </PartialSubtitle>

        <ul>
          {featuredCaseStudies.map((featuredCaseStudy) => {
            const caseStudy = featuredCaseStudy.featured_case_study;

            const backgroundDesktop = caseStudy.data.image_header_desktop;
            const backgroundMobile = caseStudy.data.image_header_mobile;

            return (
              <li key={caseStudy.id}>
                <PartialFullBanner
                  backgroundDesktop={backgroundDesktop && backgroundDesktop.url}
                  backgroundMobile={backgroundMobile && backgroundMobile.url}
                  id={`HomePage-PartialFullBanner-${caseStudy.id}`}
                >
                  <h3>{caseStudy.data.meta_title}</h3>
                  <p>{caseStudy.data.meta_description}</p>
                  <CallToAction>
                    <Link
                      href="/portfolio/[caseStudySlug]"
                      as={LinkResolver(caseStudy)}
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
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>And some great brands I&apos;ve worked with</h2>
        </PartialSubtitle>
        <HomeBrands />
      </section>

      <section className="group-alternate">
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
      </section>
    </LayoutDefault>
  );
};

HomePage.getInitialProps = async (
  context: NextPageContext
): Promise<HomePageProps> => {
  const { req } = context;
  const page: HomePageContentType = await PrismicClient(req).getSingle(
    "home_page",
    {
      fetchLinks: [
        "case_study.meta_title",
        "case_study.meta_description",
        "case_study.image_header_desktop",
        "case_study.image_header_mobile",
      ],
    }
  );

  return { page };
};

export default HomePage;
