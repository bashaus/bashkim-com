import { Appearance } from "./Settings.types";

export type SettingsState = {
  appearance: Appearance;
  isGridLinesVisible: boolean;
};

export const settingsStateInitial: SettingsState = {
  appearance: Appearance.LIGHT,
  isGridLinesVisible: false,
};
