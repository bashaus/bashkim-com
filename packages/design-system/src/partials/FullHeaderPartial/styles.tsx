import { styled } from "@mui/material";
import Container from "@mui/material/Container";

export const Wrapper = styled("header")(({ theme }) => ({
  position: "relative",
  display: "flex",

  backgroundColor: theme.palette.common.black,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  color: theme.palette.common.white,

  zIndex: 0,

  height: `calc(100vh - 64px)`,
  [theme.breakpoints.up("xs")]: {
    height: `calc(100vh - 116px)`,
  },
  [theme.breakpoints.up("md")]: {
    height: `calc(100vh - 64px)`,
  },
}));

export const Background = styled("div")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
}));

export const Content = styled(Container)(() => ({
  zIndex: 2,
  alignSelf: "center",
  paddingBottom: 4,
}));
