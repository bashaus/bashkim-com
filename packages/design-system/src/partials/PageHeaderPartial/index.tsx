import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { PropsWithChildren } from "react";

export type PageHeaderPartialProps = Readonly<
  PropsWithChildren<{
    imageDesktop?: string;
    imageMobile?: string;
  }>
>;

export default function PageHeaderPartial({
  children,
  imageDesktop,
  imageMobile,
}: PageHeaderPartialProps) {
  return (
    <Box
      component="header"
      sx={(theme) => ({
        display: "flex",
        color: theme.palette.common.white,

        backgroundColor: theme.palette.grey[900],
        minHeight: 400,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",

        [theme.breakpoints.down("md")]: {
          backgroundImage: imageMobile ? `url("${imageMobile}")` : undefined,
        },
        [theme.breakpoints.up("md")]: {
          paddingTop: "61px",
          backgroundImage: imageDesktop ? `url("${imageDesktop}")` : undefined,
        },
      })}
    >
      <Container sx={{ alignSelf: "flex-end", paddingBottom: 4 }}>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 9, lg: 6 }}>{children}</Grid>
        </Grid>
      </Container>
    </Box>
  );
}
