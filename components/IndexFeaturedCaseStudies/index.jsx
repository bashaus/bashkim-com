import PropTypes from 'prop-types';
import React from 'react';

import CaseStudyPropType from 'propTypes/CaseStudy';

import PartialSubtitle from 'components/PartialSubtitle';
import PartialTile from 'components/PartialTile';

import styles from './styles.scss';

export default function IndexFeaturedCaseStudies(props) {
  const { caseStudies } = props;

  return (
    <section className="group">
      <PartialSubtitle>
        <h2>Some of my favourite work</h2>
      </PartialSubtitle>

      <ul className={styles.caseStudies}>
        { caseStudies.map(caseStudy => (
          <li className="template-home--caseStudy" key={caseStudy.slug}>
            <PartialTile
              title={caseStudy.meta.title}
              description={caseStudy.meta.description}
              href={caseStudy.href}
              icon={caseStudy.images.icon}
              poster={caseStudy.images.poster}
            />
          </li>
        )) }
      </ul>
    </section>
  );
}

IndexFeaturedCaseStudies.propTypes = {
  caseStudies: PropTypes.arrayOf(CaseStudyPropType).isRequired,
};
