import { ExhibitionSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { ExhibitionSliceTypeFragment } from "@bashkim-com/prismic-dal";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

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
        <Grid container>
          {slices.map((slice) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
              key={JSON.stringify(slice)}
            >
              <ExhibitionSlice slice={slice} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
