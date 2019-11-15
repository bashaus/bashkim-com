import Link from 'next/link';
import React from 'react';
import dayjs from 'dayjs';

import technologies from 'data/portfolio/technologies.json';
import CaseStudyPropType from '%prop-types/CaseStudy';


import styles from './styles.scss';

export default function CaseStudyRow(props) {
  const { caseStudy } = props;

  return (
    <article itemScope itemType="http://schema.org/CreativeWork" className={styles.CaseStudyRow}>
      <Link href={`/portfolio/${caseStudy.slug}`}>
        <a itemProp="url">
          <h3 itemProp="headline" className={styles.title}>
            {caseStudy.meta.title}
          </h3>

          <div className={styles.image}>
            <img
              alt=""
              itemProp="image"
              src={`/static/images/caseStudies/${caseStudy.slug}/icon.jpg`}
            />
          </div>

          <div className={styles.date}>
            {
              dayjs(caseStudy.date).format('MMMM YYYY')
            }
          </div>

          <div className={styles.technologies}>
            {
              caseStudy.technologies
                .filter((x, i) => i < 2)
                .map((technology) => (
                  <img
                    key={technologies[technology].id}
                    src={technologies[technology].icon}
                    alt={technologies[technology].name}
                    title={technologies[technology].name}
                  />
                ))
            }
          </div>
        </a>
      </Link>
    </article>
  );
}

CaseStudyRow.propTypes = {
  caseStudy: CaseStudyPropType.isRequired,
};
