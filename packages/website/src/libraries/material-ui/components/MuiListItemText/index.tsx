import { createTheme } from "@mui/material";

const MuiListItemTextTheme = createTheme({
  components: {
    MuiListItemText: {
      styleOverrides: {
        root: {
          whiteSpace: "normal",
        },
      },
    },
  },
});

export default MuiListItemTextTheme;
