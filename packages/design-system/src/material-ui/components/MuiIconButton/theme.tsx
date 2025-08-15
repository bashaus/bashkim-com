import { createTheme } from "@mui/material/styles";

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    inherit: true;
  }
}

const MuiIconButtonTheme = createTheme({
  components: {
    MuiIconButton: {
      defaultProps: {
        color: "inherit",
      },
    },
  },
});

export default MuiIconButtonTheme;
