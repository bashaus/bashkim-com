import { Switch } from "@bashkim-com/design-system";
import { useCallback } from "react";

import { SettingsActionToggleGridLines } from "../../contexts/Settings/Settings.actions";
import { useSettings } from "../../contexts/Settings/Settings.context";

import * as S from "./SiteSettingsGridLines.styles";

export const SiteSettingsGridLines = () => {
  const { settingsState, settingsDispatch } = useSettings();
  const { isGridLinesVisible } = settingsState;

  const handleChange = useCallback(() => {
    settingsDispatch(SettingsActionToggleGridLines());
  }, [settingsDispatch]);

  return (
    <Switch
      iconOff={<S.IconOff />}
      iconOn={<S.IconOn />}
      onChange={handleChange}
      checked={isGridLinesVisible}
    />
  );
};
