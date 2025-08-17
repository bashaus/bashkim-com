import { styled } from "@mui/material/styles";

export const Footer = styled("footer")(({ theme }) => [
  {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    backgroundColor: "var(--mui-palette-action-hover)",
    clipPath: "polygon(0 40px, 100% 0, 100% 100%, 0% 100%)",
  },
  theme.applyStyles("light", {
    borderTopColor: "var(--mui-palette-grey-300)",
    color: "var(--mui-palette-grey-800)",
  }),
  theme.applyStyles("dark", {
    borderTopColor: "var(--mui-palette-grey-800)",
    color: "var(--mui-palette-grey-300)",
  }),
]);
