import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(() => ({
  width: "100%",
  aspectRatio: "16 / 9",
  cursor: "pointer",
  position: "relative",
}));

export const Icon = styled(PlayArrowIcon)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 64,
  height: 64,
  transform: "translate(-50%, -50%)",
  padding: 2,
  color: "var(--mui-palette-primary-main)",
  backgroundColor: "var(--mui-palette-common-white)",
  borderRadius: "50%",
  transition: "opacity .3s ease-in-out",
}));
