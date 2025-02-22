import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { PropsWithChildren } from "react";

export type FullBannerPartialProps = Readonly<
  PropsWithChildren<{
    backgroundDesktop?: string;
    backgroundMobile?: string;
  }>
>;

export default function FullBannerPartial({
  backgroundDesktop,
  backgroundMobile,
  children,
}: FullBannerPartialProps) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.common.white,
        backgroundRepeat: "no-repeat",

        [theme.breakpoints.down("md")]: {
          backgroundSize: "100% auto",
          backgroundPosition: "bottom",
          paddingTop: 10,
          paddingBottom: "75vw",
          backgroundImage: backgroundMobile
            ? `url("${backgroundMobile}")`
            : undefined,
        },

        [theme.breakpoints.up("md")]: {
          backgroundSize: "auto 100%",
          backgroundPosition: "center center",
          height: 400,
          maxHeight: 450,

          backgroundImage: backgroundDesktop
            ? `url("${backgroundDesktop}")`
            : undefined,
        },
      })}
    >
      <Container sx={{ height: "100%", display: "flex" }}>
        <Grid container alignSelf="center">
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>{children}</Grid>
        </Grid>
      </Container>
    </Box>
  );
}
