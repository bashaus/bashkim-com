import Grid, { Grid2Props } from "@mui/material/Grid2";

export function Outcomes(props: Grid2Props) {
  return <Grid container rowSpacing={4} columnSpacing={2} {...props} />;
}

export function Outcome(props: Grid2Props) {
  return <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} {...props} />;
}
