import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export const GridLines = styled(Container)(({ theme }) => ({
  pointerEvents: "none",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: theme.zIndex.appBar,
}));

export const GridContainer = styled(Grid)(() => ({
  width: "100%",
  height: "100%",
}));

export const GridCell = styled(Grid)(() => ({
  backgroundColor: "rgba(200, 0, 0, 0.2)",
  height: "100%",
}));
