import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import AboutProfile from 'components/AboutProfile';
import IndexBrands from 'components/IndexBrands';
import IndexFeaturedCaseStudies from 'components/IndexFeaturedCaseStudies';
import IndexHello from 'components/IndexHello';
import LayoutDefault from 'components/LayoutDefault';
import MetaDescription from 'components/MetaDescription';
import MetaKeywords from 'components/MetaKeywords';
import MetaTitle from 'components/MetaTitle';
import PartialSubtitle from 'components/PartialSubtitle';

import * as caseStudies from 'data/caseStudies';

const featuredCaseStudies = [
  caseStudies.btSportBusiness,
  caseStudies.trop50ResolutionRescue,
  caseStudies.vodafoneFreeSim,
  caseStudies.commodore,
];

export default function HomePage() {
  return (
    <LayoutDefault>
      <MetaTitle standalone content="Bashkim Isai - Creative Technologist" />
      <MetaDescription content="London-based Creative Technologist specialising in tangible media and web development." />
      <MetaKeywords content="creative technologist, london, bashkim isai, tangible media,
        php developer, technical lead, technical consultant"
      />

      <Head>
        <meta key="HomePage.facebook" property="fb:admins" content="616526947" />
        <meta key="HomePage.pinterest" name="p:domain_verify" content="55b9bc4550de466a2f711ccbbbbb515d" />
        <meta key="HomePage.alexa" name="alexaVerifyID" content="P8-zPQkBVRuCWaLWzxhZFksyels" />
        <meta key="HomePage.bing" name="msvalidate.01" content="BA82D2247A9878A3E512E11F6E9E16C9" />
      </Head>

      <IndexHello />
      <AboutProfile />
      <IndexFeaturedCaseStudies caseStudies={featuredCaseStudies} />

      <PartialSubtitle>
        <h2>And some great brands I&apos;ve worked with</h2>
      </PartialSubtitle>
      <IndexBrands />

      <section className="group">
        <div className="layout-cta">
          <p>
            Interested in seeing more case studies of my previous work?
          </p>
          <Link href="/portfolio">
            <a>View portfolio</a>
          </Link>
        </div>
      </section>
    </LayoutDefault>
  );
}
