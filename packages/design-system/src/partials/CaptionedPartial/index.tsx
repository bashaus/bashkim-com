import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { PropsWithChildren, ReactNode } from "react";

export type CaptionedPartialProps = Readonly<
  PropsWithChildren<{
    /**
     * An image, canvas, etc. which represents the figure
     */
    figure: ReactNode;
  }>
>;

export default function CaptionedPartial({
  children,
  figure,
}: CaptionedPartialProps) {
  return (
    <Container>
      <Grid container component="figure" spacing={2}>
        <Grid
          component="figcaption"
          size={{ xs: 12, sm: 12, md: 8, lg: 3, xl: 3 }}
        >
          {children}
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 9, xl: 9 }}>{figure}</Grid>
      </Grid>
    </Container>
  );
}
