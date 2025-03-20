import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,

  width: "100%",
  height: "100%",
  overflow: "hidden",
}));
