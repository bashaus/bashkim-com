import { ExhibitionSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { ExhibitionSliceTypeFragment } from "@bashkim-com/prismic-dal";

import styles from "./CaseStudyExhibitions.module.scss";

export type CaseStudyExhibitionsProps = {
  slices: Array<ExhibitionSliceTypeFragment>;
};

export const CaseStudyExhibitions = ({
  slices = [],
}: CaseStudyExhibitionsProps) => {
  if (!slices.length) {
    return null;
  }

  return (
    <>
      <SubtitlePartial>
        <h2>Exhibitions</h2>
      </SubtitlePartial>

      <ol className={styles["CaseStudyExhibitions"]}>
        {slices.map((slice) => (
          <li
            className={styles["CaseStudyExhibition"]}
            key={JSON.stringify(slice)}
          >
            <ExhibitionSlice slice={slice} />
          </li>
        ))}
      </ol>
    </>
  );
};
