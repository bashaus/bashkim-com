import type { GridEmbedSliceTypeFragment } from "@bashkim-com/prismic-dal";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

import styles from "./styles.module.scss";

export type GridEmbedSliceProps = Readonly<{
  slice: GridEmbedSliceTypeFragment;
}>;

export default function GridEmbedSlice({ slice }: GridEmbedSliceProps) {
  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={2}>
        {slice.fields?.map((field) => {
          const { grid_embed_slice_type_embed: embed } = field;
          return (
            <Grid
              size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}
              key={JSON.stringify(field)}
            >
              <div className={styles["Embed"]} key={JSON.stringify(field)}>
                <div dangerouslySetInnerHTML={{ __html: embed?.html ?? "" }} />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
