import InlineLogo from "@bashkim-com/design-system/InlineLogo";
import { styled } from "@mui/material/styles";

export const Logo = styled(InlineLogo)(({ theme }) => ({
  minWidth: 120,
  maxWidth: 300,
  width: "50vw",
  height: "auto",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));
