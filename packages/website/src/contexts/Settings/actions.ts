export enum SettingsAction {
  SetGridLines = "SettingsAction.SET_GRID_LINES",
  ToggleGridLines = "SettingsAction.TOGGLE_GRID_LINES",
}

/* SettingsActionSetGridLines */

export type SettingsActionSetGridLinesPayloadType = {
  visible: boolean;
};

export type SettingsActionSetGridLinesType = {
  type: SettingsAction.SetGridLines;
  payload: SettingsActionSetGridLinesPayloadType;
};

export const SettingsActionSetGridLines = (
  payload: SettingsActionSetGridLinesPayloadType,
): SettingsActionSetGridLinesType => ({
  type: SettingsAction.SetGridLines,
  payload,
});

/* SettingsActionToggleGridLines */

export type SettingsActionToggleGridLinesPayloadType = Record<string, never>;

export type SettingsActionToggleGridLinesType = {
  type: SettingsAction.ToggleGridLines;
  payload: SettingsActionToggleGridLinesPayloadType;
};

export const SettingsActionToggleGridLines = (
  payload: SettingsActionToggleGridLinesPayloadType = {},
): SettingsActionToggleGridLinesType => ({
  type: SettingsAction.ToggleGridLines,
  payload,
});

/* */

export type SettingsActionType =
  | SettingsActionSetGridLinesType
  | SettingsActionToggleGridLinesType;
