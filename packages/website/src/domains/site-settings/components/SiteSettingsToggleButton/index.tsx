import Stack from "@mui/material/Stack";
import { ToggleButtonProps } from "@mui/material/ToggleButton";
import { ReactNode } from "react";

import * as S from "./styles";

export type SiteSettingsToggleButtonProps = Readonly<
  ToggleButtonProps & {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  }
>;

export default function SiteSettingsToggleButton({
  startIcon,
  endIcon,
  children,
  ...restProps
}: SiteSettingsToggleButtonProps) {
  return (
    <S.Button {...restProps}>
      <Stack spacing={0.5} alignItems="center">
        {startIcon}
        {children}
        {endIcon}
      </Stack>
    </S.Button>
  );
}
