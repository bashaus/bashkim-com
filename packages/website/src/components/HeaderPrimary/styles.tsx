import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const PortfolioButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    ":hover": {
      color: "#29e5d0",
    },
  },
}));

export const AboutButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    ":hover": {
      color: "#f2911c",
    },
  },
}));
