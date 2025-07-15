import { styled } from "@mui/material/styles";

import DeviceVector from "./device.svg";

export const Container = styled("figure")(() => ({
  display: "block",
  width: 255,
  margin: "0 auto",
  padding: 0,
}));

export const Wrapper = styled("div")(() => ({
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",

  width: "100%",
  aspectRatio: "255 / 467.773",
}));

export const Device = styled(DeviceVector)(() => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  fill: "currentColor",
}));

export const Figure = styled("div")(() => ({
  display: "block",
  position: "absolute",
  overflowY: "scroll",
  top: "18.6%",
  left: "8.4%",
  right: "9%",
  height: "35.4%",

  "& > *": {
    display: "block",
  },
}));

export const Caption = styled("figcaption")(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));
