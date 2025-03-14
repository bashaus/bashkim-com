export enum SiteSettingsAction {
  SetGridLines = "SiteSettingsAction.SET_GRID_LINES",
  ToggleGridLines = "SiteSettingsAction.TOGGLE_GRID_LINES",
}

/* SiteSettingsActionSetGridLines */

export type SiteSettingsActionSetGridLinesPayloadType = {
  visible: boolean;
};

export type SiteSettingsActionSetGridLinesType = {
  type: SiteSettingsAction.SetGridLines;
  payload: SiteSettingsActionSetGridLinesPayloadType;
};

export const SiteSettingsActionSetGridLines = (
  payload: SiteSettingsActionSetGridLinesPayloadType,
): SiteSettingsActionSetGridLinesType => ({
  type: SiteSettingsAction.SetGridLines,
  payload,
});

/* SiteSettingsActionToggleGridLines */

export type SiteSettingsActionToggleGridLinesPayloadType = Record<
  string,
  never
>;

export type SiteSettingsActionToggleGridLinesType = {
  type: SiteSettingsAction.ToggleGridLines;
  payload: SiteSettingsActionToggleGridLinesPayloadType;
};

export const SiteSettingsActionToggleGridLines = (
  payload: SiteSettingsActionToggleGridLinesPayloadType = {},
): SiteSettingsActionToggleGridLinesType => ({
  type: SiteSettingsAction.ToggleGridLines,
  payload,
});

/* */

export type SiteSettingsActionType =
  | SiteSettingsActionSetGridLinesType
  | SiteSettingsActionToggleGridLinesType;
