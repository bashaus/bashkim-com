import { styled } from "@mui/material/styles";

export const SvgContainer = styled("svg")(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  pointerEvents: "none",

  transition: "color .3s ease-in",
}));
