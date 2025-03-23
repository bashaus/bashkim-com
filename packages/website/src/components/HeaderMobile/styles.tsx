import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Container = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const PrimaryToolbar = styled(Toolbar)(() => ({
  gap: 2,
}));

export const PrimaryAction = styled(Box)(() => ({
  width: 60,
  height: 60,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const SiteTitle = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 60,
}));

export const SiteName = styled(Typography)(() => ({
  fontWeight: "bold",
  textAlign: "center",
  textTransform: "uppercase",
}));

export const SiteDescription = styled(Typography)(() => ({
  fontSize: "small",
  textAlign: "center",
  textTransform: "uppercase",
}));

export const SecondaryToolbarBox = styled(Box)(() => ({
  /*
  position: "relative",

  "&::after": {
    background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0, #FFFFFF 85%)`,
    content: '""',
    display: "block",
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 50,
  },
  */
}));

export const SecondaryToolbar = styled(Toolbar)(() => ({
  /*
  overflow: "scroll",
  scrollbarWidth: "thin",
  */
}));
