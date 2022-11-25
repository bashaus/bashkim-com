import { ExhibitionSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { Case_StudyExhibitionsExhibitionslicetype } from "@bashkim-com/prismic-dal";

import * as S from "./CaseStudyExhibitions.styles";

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

      <S.CaseStudyExhibitions>
        {slices.map((slice, i) => (
          <S.CaseStudyExhibition key={i}>
            <ExhibitionSlice slice={slice} />
          </S.CaseStudyExhibition>
        ))}
      </S.CaseStudyExhibitions>
    </>
  );
};
