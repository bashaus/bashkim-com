import { SiteSettingsAction, SiteSettingsActionType } from "./actions";
import { SiteSettingsState } from "./state";

export default function SiteSettingsReducer(
  state: SiteSettingsState,
  action: SiteSettingsActionType,
): SiteSettingsState {
  switch (action.type) {
    case SiteSettingsAction.SetGridLines: {
      return {
        ...state,
        isGridLinesVisible: action.payload.visible,
      };
    }

    case SiteSettingsAction.ToggleGridLines: {
      return {
        ...state,
        isGridLinesVisible: !state.isGridLinesVisible,
      };
    }
  }

  return state;
}
