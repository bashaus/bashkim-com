import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    drawer: true;
  }
}

const MuiPaperTheme = createTheme({
  components: {
    MuiPaper: {
      variants: [
        {
          props: { variant: "drawer" },
          style: {
            width: 350,
            maxWidth: "100vw",
          },
        },
      ],
    },
  },
});

export default MuiPaperTheme;
