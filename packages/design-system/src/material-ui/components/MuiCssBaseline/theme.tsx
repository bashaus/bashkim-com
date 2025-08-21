import { createTheme } from "@mui/material/styles";

import { roboto } from "../../fonts";

const MuiCssBaselineTheme = createTheme({
  typography: {
    fontFamily: `${roboto.style.fontFamily}, sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `${roboto.style.fontFamily}, sans-serif`,
        },

        a: {
          color: "inherit",
          textDecoration: "none",
        },

        figure: {
          margin: 0,
        },

        img: {
          display: "block",
          width: "100%",
          maxWidth: "100%",
          height: "auto",
        },
      },
    },
  },
});

export default MuiCssBaselineTheme;
