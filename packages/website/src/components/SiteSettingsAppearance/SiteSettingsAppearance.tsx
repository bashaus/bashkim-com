import { Switch } from "@bashkim-com/design-system";
import { MoonIcon, SunIcon } from "@primer/octicons-react";
import { useCallback } from "react";

import { SettingsActionToggleAppearance } from "../../contexts/Settings/Settings.actions";
import { useSettings } from "../../contexts/Settings/Settings.context";
import { Appearance } from "../../contexts/Settings/Settings.types";
import styles from "./SiteSettingsAppearance.module.scss";

export const SiteSettingsAppearance = () => {
  const { settingsState, settingsDispatch } = useSettings();
  const { appearance } = settingsState;

  const handleChange = useCallback(() => {
    settingsDispatch(SettingsActionToggleAppearance());
  }, [settingsDispatch]);

  return (
    <Switch
      onChange={handleChange}
      iconOff={<MoonIcon className={styles["IconOff"]} />}
      iconOn={<SunIcon className={styles["IconOn"]} />}
      checked={appearance === Appearance.LIGHT}
    />
  );
};
