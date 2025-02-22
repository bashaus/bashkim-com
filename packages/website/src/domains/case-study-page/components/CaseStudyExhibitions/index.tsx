import { ExhibitionSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { ExhibitionSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Grid2 } from "@mui/material";
import Container from "@mui/material/Container";

export type CaseStudyExhibitionsProps = Readonly<{
  slices: Array<ExhibitionSliceTypeFragment>;
}>;

export default function CaseStudyExhibitions({
  slices = [],
}: CaseStudyExhibitionsProps) {
  if (!slices.length) {
    return null;
  }

  return (
    <>
      <SubtitlePartial>
        <h2>Exhibitions</h2>
      </SubtitlePartial>

      <Container>
        <Grid2 container>
          {slices.map((slice) => (
            <Grid2
              size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
              key={JSON.stringify(slice)}
            >
              <ExhibitionSlice slice={slice} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </>
  );
}
