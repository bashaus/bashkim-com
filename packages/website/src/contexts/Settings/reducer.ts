import { SettingsAction, SettingsActionType } from "./actions";
import { SettingsState } from "./state";

export default function SettingsReducer(
  state: SettingsState,
  action: SettingsActionType,
): SettingsState {
  switch (action.type) {
    case SettingsAction.SetGridLines: {
      return {
        ...state,
        isGridLinesVisible: action.payload.visible,
      };
    }

    case SettingsAction.ToggleGridLines: {
      return {
        ...state,
        isGridLinesVisible: !state.isGridLinesVisible,
      };
    }
  }

  return state;
}
