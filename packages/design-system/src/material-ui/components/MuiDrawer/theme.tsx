import { createTheme } from "@mui/material/styles";

const MuiDrawerTheme = createTheme({
  components: {
    MuiDrawer: {
      defaultProps: {
        slotProps: { paper: { variant: "drawer" } },
        anchor: "right",
      },
    },
  },
});

export default MuiDrawerTheme;
