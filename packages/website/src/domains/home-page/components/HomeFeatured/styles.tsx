import MuiCard from "@mui/material/Card";
import Grid, { Grid2Props } from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";

export function Links(props: Grid2Props) {
  return <Grid container spacing={2} {...props} />;
}

export function Link(props: Grid2Props) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ height: "100%" }} {...props} />
  );
}

export const Card = styled(MuiCard)(() => ({
  flex: 1,
}));
