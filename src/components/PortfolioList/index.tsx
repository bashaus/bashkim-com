import React from 'react';

import PortfolioListBrick from '%components/PortfolioListBrick';

import CaseStudyContentType from '%prismic/content-types/case_study/type';

import styles from './styles.module.scss';

interface PortfolioListProps {
  caseStudies: Array<CaseStudyContentType>;
}

const PortfolioList = ({ caseStudies }: PortfolioListProps): JSX.Element => (
  <ul className={styles.PortfolioList}>
    {caseStudies.map((caseStudy: CaseStudyContentType) => (
      <li key={caseStudy.uid}>
        <PortfolioListBrick caseStudy={caseStudy} />
      </li>
    ))}
  </ul>
);

export default PortfolioList;
