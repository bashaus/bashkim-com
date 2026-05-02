import { styled } from "@mui/material/styles";
import { motion } from "motion/react";

export const Viewport = styled(motion.div)(() => ({
  display: "block",
  position: "absolute",
  overflow: "hidden",
  containerType: "inline-size",
}));

export const Figure = styled(motion.div)(() => ({
  width: "100%",
  position: "relative",

  "> *": {
    display: "block",
  },
}));
