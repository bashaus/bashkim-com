import { Switch } from "@bashkim-com/design-system";
import { useCallback } from "react";

import { SettingsActionToggleAppearance } from "%contexts/Settings/actions";
import { useSettings } from "%contexts/Settings/context";
import { Appearance } from "%contexts/Settings/types";

import * as S from "./styles";

export const SiteSettingsAppearance = () => {
  const { settingsState, settingsDispatch } = useSettings();
  const { appearance } = settingsState;

  const handleChange = useCallback(() => {
    settingsDispatch(SettingsActionToggleAppearance());
  }, [settingsDispatch]);

  return (
    <Switch
      onChange={handleChange}
      iconOff={<S.IconOff />}
      iconOn={<S.IconOn />}
      checked={appearance === Appearance.LIGHT}
    />
  );
};
