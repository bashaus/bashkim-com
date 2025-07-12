import { styled } from "@mui/material";
import Image from "next/image";

export const AboutPageHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));

export const HeaderImage = styled(Image)(() => ({
  borderRadius: "50%",
  marginRight: 30,
  width: 100,
}));
