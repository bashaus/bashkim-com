import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  aspectRatio: "16 / 9",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
}));
