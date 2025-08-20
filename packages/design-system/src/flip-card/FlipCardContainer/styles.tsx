import { styled } from "@mui/material/styles";

export const Container = styled("div")(() => ({
  position: "relative",
  height: "400vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const StickyWrapper = styled("div")(() => ({
  position: "sticky",
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  perspective: 1500,
  height: "100vh",
}));
