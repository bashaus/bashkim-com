import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    currentColor: true;
  }

  interface ButtonPropsVariantOverrides {
    navigation: true;
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
        {
          props: { variant: "navigation" },
          style: {
            textTransform: "uppercase",
            fontWeight: "bold",

            "[data-label]": {
              borderBottomWidth: 2,
              borderBottomColor: "transparent",
              borderBottomStyle: "solid",
              paddingTop: 2,
              transition: "all 0.3s ease-in-out",
            },

            "&[aria-current] [data-label]": {
              borderBottomColor: "currentColor",
            },
          },
        },
      ],
    },
  },
});

export default MuiButtonTheme;
