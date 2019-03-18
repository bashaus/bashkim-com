import PropTypes from 'prop-types';
import React from 'react';

import PartialSubtitle from '%components/PartialSubtitle';

import availableTechnologies from 'data/portfolio/technologies.json';

import styles from './styles.scss';

export default function CaseStudyTechnologies(props) {
  const { technologies } = props;

  return (
    <React.Fragment>
      <PartialSubtitle>
        <h2>Key Technologies</h2>
      </PartialSubtitle>

      <ul className={styles.CaseStudyTechnologies}>
        {technologies.map((technology) => {
          const currentTechnology = availableTechnologies[technology];

          return (
            <li key={technology}>
              <img src={currentTechnology.icon} alt="" />
              {currentTechnology.name}
            </li>
          );
        }) }
      </ul>
    </React.Fragment>
  );
}

CaseStudyTechnologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
