import type { AccoladeSliceType } from "@bashkim-com/prismic";

import { PartialSubtitle } from "%partials/Subtitle";
import { AccoladeSlice } from "%slices/Accolade";

export type CaseStudyAccoladesProps = {
  slices: Array<AccoladeSliceType>;
};

export const CaseStudyAccolades = ({
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
