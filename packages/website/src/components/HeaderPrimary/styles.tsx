import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const PortfolioButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    ":hover": {
      color: "#5dcd72",
    },
  },
}));

export const AboutButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    ":hover": {
      color: "#fec847",
    },
  },
}));

export const SourceButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    ":hover": {
      color: "#F7567C",
    },
  },
}));
