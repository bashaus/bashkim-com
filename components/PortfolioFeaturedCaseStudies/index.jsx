import PropTypes from 'prop-types';
import React from 'react';

import FeaturedCaseStudyPropType from '%prop-types/FeaturedCaseStudy';

import Tile from '%components/Tile';

import * as caseStudies from 'data/caseStudies';

import styles from './styles.scss';

const CASE_STUDIES = Object.values(caseStudies);

export default function PortfolioFeaturedCaseStudies(props) {
  const { featuredCaseStudies } = props;

  return (
    <ul className={styles.PortfolioFeaturedCaseStudies}>
      { featuredCaseStudies.map((featuredCaseStudy) => {
        const caseStudy = CASE_STUDIES
          .find(x => x.slug === featuredCaseStudy.caseStudy);

        return (
          <li className={styles.item} key={featuredCaseStudy.title}>
            <div className={styles.details}>
              <h3>{ featuredCaseStudy.title }</h3>
              <p>{ featuredCaseStudy.description }</p>
              <ul>
                { featuredCaseStudy.kernels.map(kernel => (
                  <li key={kernel}>{kernel}</li>
                )) }
              </ul>
            </div>

            <div className={styles.tile}>
              <Tile
                title={caseStudy.meta.title}
                description={caseStudy.meta.description}
                href={caseStudy.href}
                icon={caseStudy.images.icon}
                poster={caseStudy.images.poster}
              />
            </div>
          </li>
        );
      }) }
    </ul>
  );
}

PortfolioFeaturedCaseStudies.propTypes = {
  featuredCaseStudies: PropTypes.arrayOf(FeaturedCaseStudyPropType).isRequired,
};
