import { NavigationAction, NavigationActionType } from "./actions";
import { NavigationState } from "./state";

export const NavigationReducer = (
  state: NavigationState,
  action: NavigationActionType,
): NavigationState => {
  if (action.type === NavigationAction.SET_SCROLL_AT_TOP) {
    return {
      ...state,
      scrollAtTop: action.payload.scrollAtTop,
    };
  }

  return state;
};
