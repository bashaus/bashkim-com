import AccoladeSlice from "@bashkim-com/design-system/AccoladeSlice";
import SubtitlePartial from "@bashkim-com/design-system/SubtitlePartial";
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
      <SubtitlePartial title="Accolades" />
      <div>
        {slices.map((slice) => (
          <AccoladeSlice slice={slice} key={JSON.stringify(slice)} />
        ))}
      </div>
    </>
  );
}
