import { createTheme } from "@mui/material/styles";

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
