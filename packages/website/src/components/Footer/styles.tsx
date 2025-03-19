import { styled } from "@mui/material/styles";

export const Footer = styled("footer")(({ theme }) => [
  {
    borderTopStyle: "solid",
    borderTopWidth: 1,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
