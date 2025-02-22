import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const Icon = styled(Box)(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: "50%",
  backgroundColor: theme.palette.background.default,
  overflow: "hidden",
}));
