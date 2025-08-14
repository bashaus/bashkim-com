import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

export const CarouselButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
