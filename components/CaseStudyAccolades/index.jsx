import PropTypes from 'prop-types';
import React from 'react';

import PartialSubtitle from '%components/PartialSubtitle';

import AccoladeSliceType from '%prismic/slice-types/Accolade/component';
import AccoladeSlicePropType from '%prismic/slice-types/Accolade/prop-type';

const CaseStudyAccolades = ({ slices = [] }) => {
  if (!slices.length) {
    return null;
  }

  return (
    <>
      <PartialSubtitle>
        <h2>Accolades</h2>
      </PartialSubtitle>

      <div>
        { slices.map((slice, i) => (
          <AccoladeSliceType slice={slice} key={i} />
        )) }
      </div>
    </>
  );
};

CaseStudyAccolades.propTypes = {
  slices: PropTypes.arrayOf(AccoladeSlicePropType).isRequired,
};

export default CaseStudyAccolades;
