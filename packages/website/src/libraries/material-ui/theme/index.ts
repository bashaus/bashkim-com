import createTheme from "@mui/material/styles/createTheme";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    currentColor: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    social: true;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: "currentColor", variant: "outlined" },
          style: {
            color: "currentColor",
            borderColor: "currentColor",
          },
        },
      ],
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          whiteSpace: "normal",
        },
      },
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: "social" },
          style: {
            width: 350,
            marginTop: 7,
            position: "relative",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: "50%",
              width: 15,
              height: 15,
              backgroundColor: "#FFF",
              transform: "translateX(-50%) translateY(-50%) rotate(45deg)",
            },
          },
        },
      ],
    },
  },
});

export default theme;
