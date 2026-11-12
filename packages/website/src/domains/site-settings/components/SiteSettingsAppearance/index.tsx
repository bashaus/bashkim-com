import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { SupportedColorScheme, useColorScheme } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTranslations } from "next-intl";
import { MouseEvent, useCallback } from "react";

import SiteSettingsToggleButton from "@/domains/site-settings/components/SiteSettingsToggleButton";

export default function SiteSettingsAppearance() {
  const { mode, setMode } = useColorScheme();
  const t = useTranslations("SiteSettingsAppearance");

  const handleClick = useCallback(
    (_event: MouseEvent<HTMLElement>, value: SupportedColorScheme) => {
      setMode(value);
    },
    [setMode],
  );

  return (
    <ToggleButtonGroup exclusive onChange={handleClick} value={mode}>
      <SiteSettingsToggleButton
        startIcon={<SettingsBrightnessIcon />}
        value="system"
      >
        {t("systemButtonLabel")}
      </SiteSettingsToggleButton>

      <SiteSettingsToggleButton startIcon={<LightModeIcon />} value="light">
        {t("lightButtonLabel")}
      </SiteSettingsToggleButton>

      <SiteSettingsToggleButton startIcon={<DarkModeIcon />} value="dark">
        {t("darkButtonLabel")}
      </SiteSettingsToggleButton>
    </ToggleButtonGroup>
  );
}
