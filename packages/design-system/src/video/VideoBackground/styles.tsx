import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(() => ({
  backgroundColor: "var(--mui-palette-common-black)",
  color: "var(--mui-palette-common-white)",

  width: "100%",
  height: "100%",
  overflow: "hidden",

  userSelect: "none",
  pointerEvents: "none",
}));
