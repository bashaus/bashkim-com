import { NavigationActions, NavigationActionsTypes } from "./actions";
import { NavigationState } from "./state";

export const NavigationReducer = (
  state: NavigationState,
  action: NavigationActions
): NavigationState => {
  switch (action.type) {
    case NavigationActionsTypes.SET_SCROLL_AT_TOP: {
      return { ...state, scrollAtTop: action.payload };
    }

    default: {
      return state;
    }
  }
};
