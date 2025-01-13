import { SettingsAction, SettingsActionType } from "./actions";
import { SettingsState } from "./state";
import { Appearance } from "./types";

export default function SettingsReducer(
  state: SettingsState,
  action: SettingsActionType,
): SettingsState {
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
}
