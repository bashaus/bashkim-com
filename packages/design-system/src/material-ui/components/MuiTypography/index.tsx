import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "footer-header": true;
    "footer-link": true;
  }
}

const headingStyle = {
  fontFamily: ['"Space Grotesk"', "Helvetica", "Arial", "sans-serif"].join(
    ", ",
  ),
};

const MuiTypographyTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            ...headingStyle,
          },
        },
        {
          props: { variant: "h2" },
          style: {
            ...headingStyle,
            letterSpacing: -3.5,
          },
        },
        {
          props: { variant: "h3" },
          style: {
            ...headingStyle,
          },
        },
        {
          props: { variant: "h4" },
          style: {
            ...headingStyle,
            letterSpacing: -1,
          },
        },
        {
          props: { variant: "h5" },
          style: {
            ...headingStyle,
            letterSpacing: -1.5,
          },
        },
        {
          props: { variant: "h6" },
          style: {
            ...headingStyle,
            letterSpacing: -1,
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
