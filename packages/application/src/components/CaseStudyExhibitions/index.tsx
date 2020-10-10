import React from "react";

import PartialSubtitle from "%partials/Subtitle/index";

import ExhibitionSlice from "%slices/Exhibition";

import styles from "./styles.module.scss";

type CaseStudyExhibitionsProps = {
  slices: Array<any>;
};

const CaseStudyExhibitions = ({
  slices = [],
}: CaseStudyExhibitionsProps): JSX.Element | null => {
  if (!slices.length) {
    return null;
  }

  return (
    <>
      <PartialSubtitle>
        <h2>Exhibitions</h2>
      </PartialSubtitle>

      <ol className={styles.CaseStudyExhibitions}>
        {slices.map((slice, i) => (
          <ExhibitionSlice key={i} slice={slice} />
        ))}
      </ol>
    </>
  );
};

export default CaseStudyExhibitions;
