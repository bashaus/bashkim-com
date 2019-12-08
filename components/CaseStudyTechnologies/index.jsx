import React from 'react';

import CaseStudyContentPropType from '%prismic/content-types/case_study/prop-type';

import styles from './styles.scss';

export default function CaseStudyTechnologies(props) {
  const { caseStudy } = props;

  return (
    <div className={styles.CaseStudyTechnologies}>
      <div className={styles.header}>
        <h3>Key technologies</h3>
      </div>

      <ul>
        {caseStudy.data.info_technologies.map((technology) => {
          if (!technology.info_technology.data) {
            return null;
          }

          const {
            technology_name: name,
            technology_icon: icon,
          } = technology.info_technology.data;

          return (
            <li key={name}>
              <img src={icon.url} alt="" className={styles.icon} />
              <span className={styles.name}>{name}</span>
            </li>
          );
        }) }
      </ul>
    </div>
  );
}

CaseStudyTechnologies.propTypes = {
  caseStudy: CaseStudyContentPropType.isRequired,
};
