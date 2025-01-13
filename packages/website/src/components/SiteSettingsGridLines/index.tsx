import { Switch } from "@bashkim-com/design-system";
import GridOffIcon from "@mui/icons-material/GridOff";
import GridOnIcon from "@mui/icons-material/GridOn";
import { useCallback } from "react";

import { SettingsActionToggleGridLines } from "../../contexts/Settings/actions";
import { useSettings } from "../../contexts/Settings/context";
import styles from "./styles.module.scss";

export default function SiteSettingsGridLines() {
  const { settingsState, settingsDispatch } = useSettings();
  const { isGridLinesVisible } = settingsState;

  const handleChange = useCallback(() => {
    settingsDispatch(SettingsActionToggleGridLines());
  }, [settingsDispatch]);

  return (
    <Switch
      iconOff={<GridOffIcon className={styles["IconOff"]} />}
      iconOn={<GridOnIcon className={styles["IconOn"]} />}
      onChange={handleChange}
      checked={isGridLinesVisible}
    />
  );
}
