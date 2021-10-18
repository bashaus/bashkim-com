import { ExhibitionSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { ExhibitionSliceType } from "@bashkim-com/prismic";

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
      <SubtitlePartial>
        <h2>Exhibitions</h2>
      </SubtitlePartial>

      <ol className={styles.CaseStudyExhibitions}>
        {slices.map((slice, i) => (
          <ExhibitionSlice key={i} slice={slice} />
        ))}
      </ol>
    </>
  );
};
