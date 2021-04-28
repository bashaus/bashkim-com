import type { ExhibitionSliceType } from "@bashkim-com/prismic";
import { PartialSubtitle } from "@bashkim-com/design-system";

import { ExhibitionSlice } from "%slices/Exhibition";

import styles from "./styles.module.scss";

export type CaseStudyExhibitionsProps = {
  slices: Array<ExhibitionSliceType>;
};

export const CaseStudyExhibitions = ({
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
