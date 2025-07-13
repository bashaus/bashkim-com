import { styled } from "@mui/material";
import Stack from "@mui/material/Stack";

export const Container = styled(Stack)(() => ({
  width: "100%",

  '&[data-index="odd"]': {
    flexDirection: "row-reverse",
  },
}));
