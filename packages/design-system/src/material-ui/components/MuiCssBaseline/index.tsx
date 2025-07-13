import "@fontsource/space-grotesk/700.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme } from "@mui/material/styles";

const MuiCssBaselineTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        a: {
          color: "inherit",
          textDecoration: "none",
        },

        figure: {
          margin: 0,
        },

        img: {
          maxWidth: "100%",
          height: "auto",
        },
      }),
    },
  },
});

export default MuiCssBaselineTheme;
