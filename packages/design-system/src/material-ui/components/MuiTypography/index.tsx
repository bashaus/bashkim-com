import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "footer-header": true;
    "footer-link": true;
  }
}

const MuiTypographyTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            fontSize: 10,
          },
        },
        {
          props: { variant: "footer-header" },
          style: ({ theme }) => ({
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 1.2,
            fontSize: "small",
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
          }),
        },
      ],
    },
  },
});

export default MuiTypographyTheme;
