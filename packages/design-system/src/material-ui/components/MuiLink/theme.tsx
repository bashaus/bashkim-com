import { createTheme } from "@mui/material/styles";

const MuiLinkTheme = createTheme({
  components: {
    MuiLink: {
      variants: [
        {
          props: { variant: "footer-link" },
          style: ({ theme }) => ({
            display: "block",

            color: "var(--mui-palette-grey-600)",
            lineHeight: "150%",
            textDecoration: "none",

            marginTop: theme.spacing(0.5),
            marginBottom: theme.spacing(0.5),

            transition: "color .3s",

            "&:hover": {
              color: "var(--mui-palette-text-primary)",
            },
          }),
        },
      ],
    },
  },
});

export default MuiLinkTheme;
