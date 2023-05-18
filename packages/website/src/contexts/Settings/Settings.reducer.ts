import { SettingsAction, SettingsActionType } from "./Settings.actions";
import { SettingsState } from "./Settings.state";
import { Appearance } from "./Settings.types";

export const SettingsReducer = (
  state: SettingsState,
  action: SettingsActionType
): SettingsState => {
  switch (action.type) {
    case SettingsAction.SET_APPEARANCE: {
      return {
        ...state,
        appearance: action.payload.appearance,
      };
    }

    case SettingsAction.TOGGLE_APPEARANCE: {
      return {
        ...state,
        appearance:
          state.appearance === Appearance.DARK
            ? Appearance.LIGHT
            : Appearance.DARK,
      };
    }

    case SettingsAction.TOGGLE_GRID_LINES: {
      return {
        ...state,
        isGridLinesVisible: !state.isGridLinesVisible,
      };
    }
  }
};
