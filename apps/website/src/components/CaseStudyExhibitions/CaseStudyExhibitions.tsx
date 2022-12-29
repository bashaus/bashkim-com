import { ExhibitionSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { Case_StudyExhibitionsExhibitionslicetype } from "@bashkim-com/prismic-dal";

import styles from "./CaseStudyExhibitions.module.scss";

export type CaseStudyExhibitionsProps = {
  slices: Array<Case_StudyExhibitionsExhibitionslicetype>;
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
        {slices.map((slice, i) => (
          <li className={styles["CaseStudyExhibition"]} key={i}>
            <ExhibitionSlice slice={slice} />
          </li>
        ))}
      </ol>
    </>
  );
};
