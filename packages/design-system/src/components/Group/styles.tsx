import Stack, { StackProps } from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { ComponentType } from "react";

import { GroupDesign } from "./types";

export const GroupDefault = styled(Stack)(() => ({
  backgroundColor: "var(--mui-palette-background-default)",
  color: "var(--mui-palette-text-primary)",
  alignItems: "center",
}));

export const GroupAlternate = styled(Stack)(({ theme }) => [
  {
    backgroundColor: "var(--mui-palette-action-hover)",
    color: "var(--mui-palette-text-primary)",
  },
  theme.applyStyles("dark", {
    backgroundColor: "var(--mui-palette-action-hover)",
  }),
]);

export const groupDesignComponentMap: Record<
  keyof GroupDesign,
  ComponentType<StackProps>
> = {
  default: GroupDefault,
  alternate: GroupAlternate,
};
