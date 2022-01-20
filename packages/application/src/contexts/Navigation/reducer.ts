import { NavigationActions, NavigationActionsTypes } from "./actions";
import { NavigationState } from "./state";

export const NavigationReducer = (
  state: NavigationState,
  action: NavigationActions
): NavigationState => {
  if (action.type === NavigationActionsTypes.SET_SCROLL_AT_TOP) {
    return { ...state, scrollAtTop: action.payload };
  }

  return state;
};
