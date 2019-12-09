import getCookies from 'next-cookies';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import React from 'react';
import PropTypes from 'prop-types';

import HomeBrands from '%components/HomeBrands';
import HomeHello from '%components/HomeHello';
import LayoutDefault from '%components/LayoutDefault';
import MetaDescription from '%components/MetaDescription';
import MetaKeywords from '%components/MetaKeywords';
import MetaTitle from '%components/MetaTitle';
import CallToAction from '%components/CallToAction';
import PartialInlineBanner from '%components/PartialInlineBanner';
import PartialSplit from '%components/PartialSplit';
import PartialSubtitle from '%components/PartialSubtitle';

import { getHomePage } from '%prismic/content-types/home_page/api';
import LinkResolver from '%prismic/helpers/LinkResolver';

export default function HomePage(props) {
  const { page } = props;
  const {
    featured_case_studies: featuredCaseStudies,
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: metaKeywords,
  } = page.data;

  return (
    <>
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
          { featuredCaseStudies.map((featuredCaseStudy, i) => {
            const caseStudy = featuredCaseStudy.featured_case_study;

            const backgroundDesktop = caseStudy.data.image_header_desktop;
            const backgroundMobile = caseStudy.data.image_header_mobile;

            return (
              <li key={caseStudy.id}>
                <PartialInlineBanner
                  backgroundDesktop={backgroundDesktop && backgroundDesktop.url}
                  backgroundMobile={backgroundMobile && backgroundMobile.url}
                  id={`HomePage-PartialInlineBanner-${caseStudy.id}`}
                >
                  <h3>{caseStudy.data.meta_title}</h3>
                  <p>{caseStudy.data.meta_description}</p>
                  <CallToAction>
                    <Link href={LinkResolver(caseStudy)}>
                      <a>Read case study</a>
                    </Link>
                  </CallToAction>
                </PartialInlineBanner>
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
              <p>Interested in my portfolio of case studies?</p>
              <CallToAction>
                <Link href="/portfolio">
                  <a>Browse portfolio</a>
                </Link>
              </CallToAction>
            </div>
          </PartialSplit.Item>

          <PartialSplit.Item>
            <div>
              <p>Want more details about my practice?</p>
              <CallToAction>
                <Link href="/about">
                  <a>About me</a>
                </Link>
              </CallToAction>
            </div>
          </PartialSplit.Item>
        </PartialSplit>
      </section>
    </>
  );
}

HomePage.propTypes = {
  page: PropTypes.object.isRequired,
};

HomePage.getInitialProps = async (context) => {
  const cookies = getCookies(context);
  const ref = cookies[Prismic.previewCookie];
  const page = await getHomePage({ ref });

  return { page };
};

HomePage.getLayout = function HomeLayout(page) {
  return (
    <LayoutDefault>
      { page }
    </LayoutDefault>
  );
};
