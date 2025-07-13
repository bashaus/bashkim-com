import Grid, { GridProps } from "@mui/material/Grid";

export function Links(props: GridProps) {
  return <Grid container spacing={2} {...props} />;
}

export function Link(props: GridProps) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ height: "100%" }} {...props} />
  );
}
