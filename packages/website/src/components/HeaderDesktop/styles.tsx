import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const GlassHeader = styled(Box)(({ theme }) => [
  {
    transitionDuration: "0.3s",
    transitionProperty: "background-color, box-shadow",
    transitionTimingFunction: "ease-in-out",
    zIndex: theme.zIndex.appBar,

    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 61,
    textShadow: "0 0 0 rgba(48, 48, 48, 0)",

    "&::before": {
      content: '""',
      position: "absolute",
      pointerEvents: "none",
      top: -5,
      left: -5,
      bottom: -5,
      right: -5,
      filter: `blur(5px)`,
      transition: "backgroundColor 0.3s",
      backgroundColor: `rgba(100, 100, 100, 0)`,
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  theme.applyStyles("light", {
    backgroundColor: "#ffffff",
    borderBottom: "solid 1px #dadada",
    boxShadow: "rgba(30, 30, 30, 0.75) 0px 10px 20px -15px",
    color: "#444444",

    '&[data-scroll-at-top="true"]': {
      backgroundColor: "transparent",
      borderBottomColor: "transparent",
      color: "#FFFFFF",
    },

    '&[data-scroll-at-top="true"]::before': {
      backgroundColor: "rgba(100, 100, 100, 0.2)",
    },
  }),

  theme.applyStyles("dark", {
    backgroundColor: "#000000",
    borderBottom: "solid 1px #222222",
    boxShadow: "rgba(80, 80, 80, 0.75) 0px 10px 20px -15px",
    color: "#bbbbbb",

    '&[data-scroll-at-top="true"]': {
      backgroundColor: "transparent",
      borderBottomColor: "transparent",
      color: "#FFFFFF",
    },

    '&[data-scroll-at-top="true"]::before': {
      backgroundColor: "rgba(100, 100, 100, 0.2)",
    },
  }),
]);

export const BaseHeader = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  backgroundColor: theme.palette.background.default,
  zIndex: theme.zIndex.appBar,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
