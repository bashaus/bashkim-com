import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export const NewspaperContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.only("xs")]: {
    columnCount: 1,
  },

  [theme.breakpoints.only("sm")]: {
    columnCount: 2,
  },

  [theme.breakpoints.only("md")]: {
    columnCount: 3,
  },

  [theme.breakpoints.only("lg")]: {
    columnCount: 4,
  },

  "> div": {
    display: "inline-block",
    paddingBottom: theme.spacing(2),
  },
}));
