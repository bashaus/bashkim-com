import React from 'react';

import PartialSubtitle from '%components/PartialSubtitle';

import AccoladeSliceType from '%prismic/slice-types/Accolade/component';
import AccoladeSlicePropType from '%prismic/slice-types/Accolade/type';

interface CaseStudyAccoladesProps {
  slices: Array<AccoladeSlicePropType>;
}

const CaseStudyAccolades = ({
  slices = [],
}: CaseStudyAccoladesProps): JSX.Element | null => {
  if (!slices.length) {
    return null;
  }

  return (
    <>
      <PartialSubtitle>
        <h2>Accolades</h2>
      </PartialSubtitle>

      <div>
        {slices.map((slice, i) => (
          <AccoladeSliceType slice={slice} key={i} />
        ))}
      </div>
    </>
  );
};

export default CaseStudyAccolades;
