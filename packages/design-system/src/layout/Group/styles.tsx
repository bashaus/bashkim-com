import { StyledComponent } from "@emotion/styled";
import Stack, { StackProps } from "@mui/material/Stack";
import { darken, lighten, styled } from "@mui/material/styles";

import { GroupDesign } from "./types";

export const GroupDefault = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  alignItems: "center",
}));

export const GroupAlternate = styled(Stack)(({ theme }) => [
  {
    backgroundColor: darken(theme.palette.background.default, 0.03),
    color: theme.palette.text.primary,
  },
  theme.applyStyles("dark", {
    backgroundColor: lighten(theme.palette.background.default, 0.02),
  }),
]);

export const groupDesignComponentMap: Record<
  keyof GroupDesign,
  StyledComponent<StackProps>
> = {
  default: GroupDefault,
  alternate: GroupAlternate,
};
