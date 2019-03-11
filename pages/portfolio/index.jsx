import PropTypes from 'prop-types';
import React from 'react';

import FeaturedCaseStudyPropType from 'propTypes/FeaturedCaseStudy';

import LayoutDefault from 'components/LayoutDefault';
import MetaDescription from 'components/MetaDescription';
import MetaKeywords from 'components/MetaKeywords';
import MetaTitle from 'components/MetaTitle';
import MenuBackButtonHomeImpl from 'components/MenuBackButtonHomeImpl';
import PartialHeaderText from 'components/PartialHeaderText';
import PartialSubtitle from 'components/PartialSubtitle';
import PortfolioFeaturedCaseStudies from 'components/PortfolioFeaturedCaseStudies';
import ViewPortfolio from 'components/ViewPortfolio';

export default function PortfolioPage({ featuredCaseStudies }) {
  return (
    <LayoutDefault backButton={MenuBackButtonHomeImpl} theme="portfolio">
      <MetaTitle content="Portfolio" />
      <MetaDescription content="I've been privileged to contribute to a variety of projects, here are some case studies" />
      <MetaKeywords content="bashkim isai, portfolio, creative technologist, tangible media,
        technical consultant, case studies" />

      <PartialHeaderText>
        <h1>Portfolio</h1>
        <p>
          I've had the privilege of working with some great clients,
          here are some case studes.
        </p>
      </PartialHeaderText>

      <section className="group-alternate">
        <PortfolioFeaturedCaseStudies featuredCaseStudies={featuredCaseStudies} />
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
  featuredCaseStudies: PropTypes.arrayOf(FeaturedCaseStudyPropType).isRequired,
};

PortfolioPage.getInitialProps = async ({ req, res }) => {
  const featuredCaseStudies = await import('data/portfolio/featuredCaseStudies.json');

  return {
    featuredCaseStudies: featuredCaseStudies.default
  };
};
