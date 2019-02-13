import React from 'react';
import PropTypes from 'prop-types';

import LayoutDefault from 'components/LayoutDefault';
import MetaDescription from 'components/MetaDescription';
import MetaKeywords from 'components/MetaKeywords';
import MetaTitle from 'components/MetaTitle';
import MenuBackButtonHomeImpl from 'components/MenuBackButtonHomeImpl';
import PartialHeaderText from 'components/PartialHeaderText';
import PartialSubtitle from 'components/PartialSubtitle';
import PartialTile from 'components/PartialTile';
import ViewPortfolio from 'components/ViewPortfolio';

import * as caseStudies from 'data/caseStudies';

import FeaturedCaseStudyPropType from 'propTypes/FeaturedCaseStudy';

import styles from './styles.scss';

const CASE_STUDIES = Object.values(caseStudies);

export default function PortfolioPage({ featured }) {
  return (
    <LayoutDefault backButton={MenuBackButtonHomeImpl} theme="portfolio">
      <MetaTitle content="Portfolio" />
      <MetaDescription content="I've been privileged to contribute to a variety of projects, here are some case studies" />
      <MetaKeywords content="bashkim isai, portfolio, creative technologist, tangible media,
        technical consultant, case studies" />

      <PartialHeaderText>
        <h1>Portfolio</h1>
        <small>Case studies of great work</small>
      </PartialHeaderText>

      <section className="group-alternate">
        <PartialSubtitle>
          <h2>These will knock your socks off</h2>
          <p>
            If you&apos;re looking for examples of a particular technology or skill,
            check out these case studies
          </p>
        </PartialSubtitle>

        <ul className={styles.featuredCaseStudies}>
          { featured.map(feature => {
            const caseStudy = CASE_STUDIES
                .find(caseStudy => caseStudy.slug === feature.caseStudy);

            return (
              <li key={feature.title}>
                <h3>{ feature.title }</h3>
                <p>{ feature.description }</p>
                <ul>
                  { feature.kernels.map(kernel => (
                    <li key={kernel}>{kernel}</li>
                  )) }
                </ul>

                <PartialTile
                  title={caseStudy.meta.title}
                  description={caseStudy.meta.description}
                  href={caseStudy.href}
                  icon={caseStudy.images.icon}
                  poster={caseStudy.images.poster}
                />
              </li>
            );
          }) }
        </ul>
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>All case studies</h2>
        </PartialSubtitle>

        <ViewPortfolio />
      </section>
    </LayoutDefault>
  );
}

PortfolioPage.propTypes = {
  featured: PropTypes.arrayOf(FeaturedCaseStudyPropType).isRequired,
}

PortfolioPage.getInitialProps = async ({ req, res }) => {
  // const posts = await getPosts();
  // const json = await posts.json();
  // return { posts: json };

  const featured = await import('data/portfolio/featured.json');

  return {
    featured: featured.default
  };
};
