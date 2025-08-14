import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

export const CarouselDot = styled(ButtonBase)(({ theme }) => ({
  touchAction: "manipulation",
  border: 0,
  padding: 0,
  margin: 0,
  width: theme.spacing(2),
  height: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.grey[300],
  textIndent: -9999,
  overflow: "hidden",
  transition: "all .3s",

  '&[aria-current="true"]': {
    backgroundColor: theme.palette.primary.main,
  },
}));
