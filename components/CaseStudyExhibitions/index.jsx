import PropTypes from 'prop-types';
import React from 'react';

import PartialSubtitle from '%components/PartialSubtitle/index';

import ExhibitionSliceType from '%prismic/slice-types/Exhibition/component';

import styles from './styles.module.scss';

const CaseStudyExhibitions = ({ slices = [] }) => {
  if (!slices.length) {
    return null;
  }

  return (
    <>
      <PartialSubtitle>
        <h2>Exhibitions</h2>
      </PartialSubtitle>

      <ol className={styles.CaseStudyExhibitions}>
        { slices.map((slice, i) => (
          <ExhibitionSliceType key={i} slice={slice} />
        )) }
      </ol>
    </>
  );
};

CaseStudyExhibitions.propTypes = {
  slices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CaseStudyExhibitions;
