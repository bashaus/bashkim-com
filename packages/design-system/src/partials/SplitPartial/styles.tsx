import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export const Container = styled(Stack)(() => ({
  width: "100%",

  '&[data-index="odd"]': {
    flexDirection: "row-reverse",
  },
}));
