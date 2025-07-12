import { styled } from "@mui/material/styles";

export const Embla = styled("section")(() => ({
  "--slide-spacing": "2rem",
}));

export const Viewport = styled("div")(() => ({
  overflow: "hidden",
}));

export const Container = styled("div")(() => ({
  display: "flex",
  touchAction: "pan-y pinch-zoom",
  marginLeft: "calc(var(--slide-spacing) * -1)",
}));

export const Slide = styled("div")(() => ({
  transform: "translate3d(0, 0, 0)",
  flex: "0 0 var(--slide-size)",
  minWidth: 0,
  paddingLeft: "var(--slide-spacing)",
}));
