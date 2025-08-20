import { styled } from "@mui/material/styles";

import FlipCardFace from "../FlipCardFace";

const FlipCardFaceBack = styled(FlipCardFace)(() => ({
  transform: "rotateY(180deg)",
}));

export default FlipCardFaceBack;
