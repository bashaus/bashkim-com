import { AccoladeSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { AccoladeSliceTypeFragment } from "@bashkim-com/prismic-dal";

export type CaseStudyAccoladesProps = Readonly<{
  slices: Array<AccoladeSliceTypeFragment>;
}>;

export default function CaseStudyAccolades({
  slices = [],
}: CaseStudyAccoladesProps) {
  if (!slices.length) {
    return null;
  }

  return (
    <>
      <SubtitlePartial>
        <h2>Accolades</h2>
      </SubtitlePartial>

      <div>
        {slices.map((slice) => (
          <AccoladeSlice slice={slice} key={JSON.stringify(slice)} />
        ))}
      </div>
    </>
  );
}
