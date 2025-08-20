import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

const FlipCardFace = styled(Card)(() => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backfaceVisibility: "hidden",
}));

export default FlipCardFace;
