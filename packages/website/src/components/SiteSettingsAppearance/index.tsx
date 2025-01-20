import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { useColorScheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Mode } from "@mui/system/cssVars/useCurrentColorScheme";
import { MouseEventHandler, useCallback } from "react";

import SiteSettingsToggleButton from "../SiteSettingsToggleButton";

export default function SiteSettingsAppearance() {
  const { mode, setMode } = useColorScheme();

  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      setMode(event.currentTarget.value as Mode);
    },
    [setMode],
  );

  return (
    <ToggleButtonGroup value={mode} size="small" onChange={handleClick}>
      <ToggleButton value="system">
        <SiteSettingsToggleButton startIcon={<SettingsBrightnessIcon />}>
          System
        </SiteSettingsToggleButton>
      </ToggleButton>

      <ToggleButton value="light">
        <SiteSettingsToggleButton startIcon={<LightModeIcon />}>
          Light
        </SiteSettingsToggleButton>
      </ToggleButton>

      <ToggleButton value="dark">
        <SiteSettingsToggleButton startIcon={<DarkModeIcon />}>
          Dark
        </SiteSettingsToggleButton>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
