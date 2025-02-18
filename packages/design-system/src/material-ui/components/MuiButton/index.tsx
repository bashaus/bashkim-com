import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    currentColor: true;
  }
}

const MuiButtonTheme = createTheme({
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
  },
});

export default MuiButtonTheme;
