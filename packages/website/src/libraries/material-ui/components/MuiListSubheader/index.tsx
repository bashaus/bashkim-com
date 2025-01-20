import { createTheme } from "@mui/material/styles";

const MuiListSubheaderTheme = createTheme({
  components: {
    MuiListSubheader: {
      styleOverrides: {
        root: ({ theme }) => ({
          zIndex: theme.zIndex.drawer,
        }),
      },
    },
  },
});

export default MuiListSubheaderTheme;
