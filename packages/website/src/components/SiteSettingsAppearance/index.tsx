import { Switch } from "@bashkim-com/design-system";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useCallback } from "react";

import { SettingsActionToggleAppearance } from "../../contexts/Settings/actions";
import { useSettings } from "../../contexts/Settings/context";
import { Appearance } from "../../contexts/Settings/types";
import styles from "./styles.module.scss";

export default function SiteSettingsAppearance() {
  const { settingsState, settingsDispatch } = useSettings();
  const { appearance } = settingsState;

  const handleChange = useCallback(() => {
    settingsDispatch(SettingsActionToggleAppearance());
  }, [settingsDispatch]);

  return (
    <Switch
      onChange={handleChange}
      iconOff={<DarkModeIcon className={styles["IconOff"]} />}
      iconOn={<LightModeIcon className={styles["IconOn"]} />}
      checked={appearance === Appearance.LIGHT}
    />
  );
}
