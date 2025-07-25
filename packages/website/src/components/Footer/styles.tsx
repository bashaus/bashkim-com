import { styled } from "@mui/material/styles";

export const Footer = styled("footer")(({ theme }) => [
  {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.action.hover,
    clipPath: `polygon(0 40px, 100% 0, 100% 100%, 0% 100%)`,
  },
  theme.applyStyles("light", {
    borderTopColor: theme.palette.grey[300],
    color: theme.palette.grey[800],
  }),
  theme.applyStyles("dark", {
    borderTopColor: theme.palette.grey[800],
    color: theme.palette.grey[300],
  }),
]);
