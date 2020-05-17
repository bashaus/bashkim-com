import React from "react";

import { AccoladeSliceType } from "@bashkim-com/prismic";

import PartialSubtitle from "%partials/Subtitle";
import AccoladeSlice from "%slices/Accolade";

interface CaseStudyAccoladesProps {
  slices: Array<AccoladeSliceType>;
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
          <AccoladeSlice slice={slice} key={i} />
        ))}
      </div>
    </>
  );
};

export default CaseStudyAccolades;
