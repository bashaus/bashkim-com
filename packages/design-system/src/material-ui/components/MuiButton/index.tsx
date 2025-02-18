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
        {
          props: { variant: "outlined" },
          style: {
            fontWeight: "bold",
            borderWidth: 2.5,
            marginTop: "0.2rem",
            marginBottom: "0.2rem",
          },
        },
      ],
    },
  },
});

export default MuiButtonTheme;
