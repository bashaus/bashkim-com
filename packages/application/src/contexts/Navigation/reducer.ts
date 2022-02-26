import { NavigationAction, NavigationActionType } from "./actions";
import { NavigationState } from "./state";

export const NavigationReducer = (
  state: NavigationState,
  action: NavigationActionType
): NavigationState => {
  switch (action.type) {
    case NavigationAction.SET_SCROLL_AT_TOP: {
      return {
        ...state,
        scrollAtTop: action.payload.scrollAtTop,
      };
    }

    default: {
      return state;
    }
  }
};
