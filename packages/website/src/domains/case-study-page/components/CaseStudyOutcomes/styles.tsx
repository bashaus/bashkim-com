import Grid, { GridProps } from "@mui/material/Grid";

export function Outcomes(props: GridProps) {
  return <Grid container rowSpacing={4} columnSpacing={2} {...props} />;
}

export function Outcome(props: GridProps) {
  return <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} {...props} />;
}
