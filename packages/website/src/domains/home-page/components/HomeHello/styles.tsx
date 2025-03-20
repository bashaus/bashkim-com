import { SiteLogo } from "@bashkim-com/design-system";
import { styled } from "@mui/material/styles";

export const Logo = styled(SiteLogo)(({ theme }) => ({
  minWidth: 120,
  maxWidth: 300,
  width: "50vw",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));
