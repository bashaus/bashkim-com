import { ExhibitionSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { ExhibitionSliceType } from "@bashkim-com/prismic";

import * as S from "./styles";

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
