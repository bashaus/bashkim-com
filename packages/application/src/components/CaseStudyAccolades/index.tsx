import { AccoladeSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { AccoladeSliceType } from "@bashkim-com/prismic";

export type CaseStudyAccoladesProps = {
  slices: Array<AccoladeSliceType>;
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
