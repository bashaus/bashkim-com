import { styled } from "@mui/material";

export const CarouselDot = styled("button")(({ theme }) => ({
  appearance: "none",
  touchAction: "manipulation",
  textDecoration: "none",
  cursor: "pointer",
  border: 0,
  padding: 0,
  margin: 0,
  width: theme.spacing(2),
  height: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.grey[300],
  textIndent: -9999,
  transition: "all .3s",

  '&[aria-selected="true"]': {
    backgroundColor: theme.palette.primary.main,
  },
}));
