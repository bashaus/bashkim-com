import { createTheme } from "@mui/material/styles";

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
