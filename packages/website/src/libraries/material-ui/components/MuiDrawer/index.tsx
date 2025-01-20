import { createTheme } from "@mui/material";

const MuiDrawerTheme = createTheme({
  components: {
    MuiDrawer: {
      defaultProps: {
        anchor: "right",
      },
    },
  },
});

export default MuiDrawerTheme;
