import { styled } from "@mui/material/styles";
import { motion } from "motion/react";

export const Card = styled(motion.div)(() => ({
  position: "relative",
  transformStyle: "preserve-3d",
  margin: "auto",
  top: "50%",
}));
