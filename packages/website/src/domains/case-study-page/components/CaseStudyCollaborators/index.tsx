import { CollaboratorSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { CollaboratorSliceTypeFragment } from "@bashkim-com/prismic-dal";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import ListItemText from "@mui/material/ListItemText";

export type CaseStudyCollaboratorsProps = Readonly<{
  myRole?: string;
  slices: Array<CollaboratorSliceTypeFragment>;
}>;

export default function CaseStudyCollaborators({
  slices,
  myRole,
}: CaseStudyCollaboratorsProps) {
  if (!slices.length) {
    return null;
  }

  return (
    <>
      <SubtitlePartial>
        <h2>Collaborators</h2>
      </SubtitlePartial>

      <Container>
        <Grid container rowSpacing={1} columnSpacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
            <ListItemText
              primary={<Link href="/">Bashkim Isai</Link>}
              secondary={myRole}
            />
          </Grid>

          {slices.map((slice) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
              key={JSON.stringify(slice)}
            >
              <CollaboratorSlice slice={slice} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
