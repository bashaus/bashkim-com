import { createTheme } from "@mui/material/styles";

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
      ],
    },
  },
});

export default MuiTypographyTheme;
