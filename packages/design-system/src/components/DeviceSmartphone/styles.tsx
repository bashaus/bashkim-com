import { styled } from "@mui/material/styles";

import DeviceVector from "../../assets/vectors/devices/smartphone.svg";

export const Container = styled("figure")(() => ({
  display: "block",
  width: 400,
  margin: "0 auto",
  padding: 0,
}));

export const Wrapper = styled("div")(() => ({
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",

  width: "100%",
  aspectRatio: "641.2499999955 / 315",
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
  top: "15.9%",
  left: "10.3%",
  width: "79.8%",
  height: "69.5%",

  "> *": {
    display: "block",
  },
}));

export const Caption = styled("figcaption")(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
}));
