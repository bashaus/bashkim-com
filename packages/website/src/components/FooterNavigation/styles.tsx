import MuiContainer from "@mui/material/Container";
import Grid, { Grid2Props } from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

export const Container = styled(MuiContainer)();

export const Slogan = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  textTransform: "uppercase",
  letterSpacing: -0.5,
}));

export function FooterGrid(props: Grid2Props) {
  return <Grid container {...props} />;
}

export function FooterColumn(props: Grid2Props) {
  return (
    <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 2 }} {...props} py={2} />
  );
}

export function FooterHeader(props: TypographyProps) {
  return <Typography variant="footer-header" component="h3" {...props} />;
}
