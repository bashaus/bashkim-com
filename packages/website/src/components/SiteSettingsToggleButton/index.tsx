import Stack from "@mui/material/Stack";
import { PropsWithChildren, ReactNode } from "react";

export type SiteSettingsToggleButtonProps = Readonly<
  PropsWithChildren<{
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  }>
>;

export default function SiteSettingsToggleButton({
  startIcon,
  endIcon,
  children,
}: SiteSettingsToggleButtonProps) {
  return (
    <Stack spacing={0.5} alignItems="center" width={100}>
      {startIcon}
      {children}
      {endIcon}
    </Stack>
  );
}
