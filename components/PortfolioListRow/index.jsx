import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import CaseStudyContentPropType from '%prismic/content-types/case_study/prop-type';
import TechnologyContentPropType from '%prismic/content-types/technology/prop-type';

import styles from './styles.scss';

export default function PortfolioListRow(props) {
  const { caseStudy } = props;

  return (
    <article itemScope itemType="http://schema.org/CreativeWork" className={styles.PortfolioListRow}>
      <Link href={`/portfolio/${caseStudy.uid}`}>
        <a itemProp="url">
          <div className={styles.name}>
            <h3 itemProp="headline" className={styles.title}>
              {caseStudy.data.meta_title}
            </h3>
            {caseStudy.data.meta_description}
          </div>

          <div className={styles.image}>
            <img
              alt=""
              itemProp="image"
              src={caseStudy.data.image_icon.url}
            />
          </div>

          <ul className={styles.technologies}>
            { caseStudy.data.info_technologies.slice(0, 2).map(
              (technology) => {
                const {
                  technology_name: technologyName,
                  technology_icon: technologyIcon,
                } = technology.info_technology.data;

                return (
                  <li key={technology.info_technology.slug}>
                    <img
                      key={technologyName}
                      src={technologyIcon.url}
                      alt={technologyName}
                      width={technologyIcon.width}
                      height={technologyIcon.height}
                      title={technologyName}
                    />

                    {technologyName}
                  </li>
                );
              }
            ) }
          </ul>
        </a>
      </Link>
    </article>
  );
}

PortfolioListRow.propTypes = {
  caseStudy: CaseStudyContentPropType.isRequired,
  technologies: PropTypes.arrayOf(TechnologyContentPropType).isRequired,
};
