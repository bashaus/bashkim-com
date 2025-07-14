import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const SplitItemPartial = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",

  backgroundSize: "cover",
  backgroundPosition: "center center",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    order: 2,
  },

  [theme.breakpoints.up("md")]: {
    width: "50%",
    minHeight: "calc(9 / 16 * 50vw)",
  },

  img: {
    display: "block",
    margin: "0 auto",
  },

  '&[data-background-image="true"]': {
    backgroundColor: "#ececec",

    [theme.breakpoints.down("md")]: {
      minHeight: "60vw",
      order: 1,
    },

    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },

  '&[data-background-image="false"]': {
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
    },
  },
}));
