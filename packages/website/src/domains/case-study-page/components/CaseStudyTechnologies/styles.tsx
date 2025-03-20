import Grid, { Grid2Props } from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Image from "next/image";

export function Technologies(props: Grid2Props) {
  return <Grid container rowSpacing={4} columnSpacing={2} {...props} />;
}

export function Technology(props: Grid2Props) {
  return <Grid size={{ xs: 6, sm: 4, md: 3, lg: 3, xl: 3 }} {...props} />;
}

export const TechnologyIcon = styled(Image)(({ theme }) => ({
  verticalAlign: "middle",
  maxWidth: 80,
  height: "auto",
  marginBottom: theme.spacing(2),
}));

export function TechnologyName(props: TypographyProps) {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
      {...props}
    />
  );
}
