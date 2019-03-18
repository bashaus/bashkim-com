import PropTypes from 'prop-types';
import React from 'react';

import CaseStudyPropType from '%prop-types/CaseStudy';

import Tile from '%components/Tile';

import styles from './styles.scss';

export default function IndexFeaturedCaseStudies(props) {
  const { caseStudies } = props;

  return (
    <ul className={styles.caseStudies}>
      { caseStudies.map(caseStudy => (
        <li className="template-home--caseStudy" key={caseStudy.slug}>
          <Tile
            title={caseStudy.meta.title}
            description={caseStudy.meta.description}
            href={caseStudy.href}
            icon={caseStudy.images.icon}
            poster={caseStudy.images.poster}
          />
        </li>
      )) }
    </ul>
  );
}

IndexFeaturedCaseStudies.propTypes = {
  caseStudies: PropTypes.arrayOf(CaseStudyPropType).isRequired,
};
