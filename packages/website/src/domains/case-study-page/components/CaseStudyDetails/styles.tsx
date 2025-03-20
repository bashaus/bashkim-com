import Grid, { Grid2Props } from "@mui/material/Grid2";
import Typography, { TypographyProps } from "@mui/material/Typography";

export function Details(props: Grid2Props) {
  return <Grid container rowSpacing={4} columnSpacing={2} {...props} />;
}

export function Detail(props: Grid2Props) {
  return <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} {...props} />;
}

export function DetailTitle(props: TypographyProps) {
  return <Typography variant="h5" component="h3" gutterBottom {...props} />;
}

export function DetailText(props: TypographyProps) {
  return <Typography {...props} />;
}
