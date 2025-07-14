import AccoladeSlice from "@bashkim-com/design-system/AccoladeSlice";
import SubtitlePartial from "@bashkim-com/design-system/SubtitlePartial";
import type { AccoladeSliceTypeFragment } from "@bashkim-com/prismic-dal";
import Typography from "@mui/material/Typography";

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
        <Typography variant="h4" component="h2">
          Accolades
        </Typography>
      </SubtitlePartial>

      <div>
        {slices.map((slice) => (
          <AccoladeSlice slice={slice} key={JSON.stringify(slice)} />
        ))}
      </div>
    </>
  );
}
