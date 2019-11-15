import PropTypes from 'prop-types';
import React from 'react';

import availableTechnologies from 'data/portfolio/technologies.json';
import PartialSubtitle from '%components/PartialSubtitle';


import styles from './styles.scss';

export default function CaseStudyTechnologies(props) {
  const { technologies } = props;

  return (
    <>
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
    </>
  );
}

CaseStudyTechnologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
