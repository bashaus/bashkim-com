import { StyledComponent } from "@emotion/styled";
import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";

import { GroupDesign } from "./types";

export const GroupDefault = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export const GroupAlternate = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}EE`,
  color: theme.palette.text.primary,
}));

export const groupDesignComponentMap: Record<
  GroupDesign,
  StyledComponent<BoxProps>
> = {
  [GroupDesign.Default]: GroupDefault,
  [GroupDesign.Alternate]: GroupAlternate,
};
