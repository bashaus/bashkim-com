import { Switch } from "@bashkim-com/design-system";
import { CpuIcon, EyeClosedIcon } from "@primer/octicons-react";
import { useCallback } from "react";

import { SettingsActionToggleGridLines } from "../../contexts/Settings/actions";
import { useSettings } from "../../contexts/Settings/context";
import styles from "./styles.module.scss";

export const SiteSettingsGridLines = () => {
  const { settingsState, settingsDispatch } = useSettings();
  const { isGridLinesVisible } = settingsState;

  const handleChange = useCallback(() => {
    settingsDispatch(SettingsActionToggleGridLines());
  }, [settingsDispatch]);

  return (
    <Switch
      iconOff={<EyeClosedIcon className={styles["IconOff"]} />}
      iconOn={<CpuIcon className={styles["IconOn"]} />}
      onChange={handleChange}
      checked={isGridLinesVisible}
    />
  );
};
