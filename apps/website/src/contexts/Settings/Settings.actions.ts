import { Appearance } from "./Settings.types";

export enum SettingsAction {
  SET_APPEARANCE = "SettingsAction.SET_APPEARANCE",
  TOGGLE_APPEARANCE = "SettingsAction.TOGGLE_APPEARANCE",
  TOGGLE_GRID_LINES = "SettingsAction.TOGGLE_GRID_LINES",
}

/* SettingsActionSetAppearance */

export type SettingsActionSetAppearancePayloadType = {
  appearance: Appearance;
};

export type SettingsActionSetAppearanceType = {
  type: SettingsAction.SET_APPEARANCE;
  payload: SettingsActionSetAppearancePayloadType;
};

export const SettingsActionSetAppearance = (
  payload: SettingsActionSetAppearancePayloadType
): SettingsActionSetAppearanceType => ({
  type: SettingsAction.SET_APPEARANCE,
  payload,
});

/* SettingsActionToggleAppearance */

export type SettingsActionToggleAppearancePayloadType = Record<string, never>;

export type SettingsActionToggleAppearanceType = {
  type: SettingsAction.TOGGLE_APPEARANCE;
  payload: SettingsActionToggleAppearancePayloadType;
};

export const SettingsActionToggleAppearance = (
  payload: SettingsActionToggleAppearancePayloadType = {}
): SettingsActionToggleAppearanceType => ({
  type: SettingsAction.TOGGLE_APPEARANCE,
  payload,
});

/* SettingsActionToggleGridLines */

export type SettingsActionToggleGridLinesPayloadType = Record<string, never>;

export type SettingsActionToggleGridLinesType = {
  type: SettingsAction.TOGGLE_GRID_LINES;
  payload: SettingsActionToggleGridLinesPayloadType;
};

export const SettingsActionToggleGridLines = (
  payload: SettingsActionToggleGridLinesPayloadType = {}
): SettingsActionToggleGridLinesType => ({
  type: SettingsAction.TOGGLE_GRID_LINES,
  payload,
});

/* */

export type SettingsActionType =
  | SettingsActionSetAppearanceType
  | SettingsActionToggleAppearanceType
  | SettingsActionToggleGridLinesType;
