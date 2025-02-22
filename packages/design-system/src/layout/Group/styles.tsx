import { StyledComponent } from "@emotion/styled";
import Box, { BoxProps } from "@mui/material/Box";
import { darken, lighten, styled } from "@mui/material/styles";

import { GroupDesign } from "./types";

export const GroupDefault = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export const GroupAlternate = styled(Box)(({ theme }) => [
  {
    backgroundColor: darken(theme.palette.background.default, 0.03),
    color: theme.palette.text.primary,
  },
  theme.applyStyles("dark", {
    backgroundColor: lighten(theme.palette.background.default, 0.02),
  }),
]);

export const groupDesignComponentMap: Record<
  GroupDesign,
  StyledComponent<BoxProps>
> = {
  [GroupDesign.Default]: GroupDefault,
  [GroupDesign.Alternate]: GroupAlternate,
};
