import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Icon = styled(Box)(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: "50%",
  backgroundColor: theme.palette.background.default,
  overflow: "hidden",
}));
