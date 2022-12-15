import { AccoladeSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { Case_StudyAccoladesAccoladeslicetype } from "@bashkim-com/prismic-dal";

export type CaseStudyAccoladesProps = {
  slices: Array<Case_StudyAccoladesAccoladeslicetype>;
};

export const CaseStudyAccolades = ({
  slices = [],
}: CaseStudyAccoladesProps) => {
  if (!slices.length) {
    return null;
  }

  return (
    <>
      <SubtitlePartial>
        <h2>Accolades</h2>
      </SubtitlePartial>

      <div>
        {slices.map((slice, i) => (
          <AccoladeSlice slice={slice} key={i} />
        ))}
      </div>
    </>
  );
};
