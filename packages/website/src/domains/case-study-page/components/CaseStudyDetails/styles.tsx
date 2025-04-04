import Grid, { GridProps } from "@mui/material/Grid";
import Typography, { TypographyProps } from "@mui/material/Typography";

export function Details(props: GridProps) {
  return <Grid container rowSpacing={4} columnSpacing={2} {...props} />;
}

export function Detail(props: GridProps) {
  return <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} {...props} />;
}

export function DetailTitle(props: TypographyProps) {
  return <Typography variant="h5" component="h3" gutterBottom {...props} />;
}

export function DetailText(props: TypographyProps) {
  return <Typography {...props} />;
}
