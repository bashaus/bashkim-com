import { NavigationActions, NavigationActionsTypes } from "./actions";
import { NavigationState } from "./state";
import { ScrollDirection } from "./types";

export const NavigationReducer = (
  state: NavigationState,
  action: NavigationActions
): NavigationState => {
  switch (action.type) {
    case NavigationActionsTypes.MENU_HIDE: {
      return {
        ...state,
        menuIsVisible: false,
        scrollDirection: ScrollDirection.DOWN,
      };
    }

    case NavigationActionsTypes.MENU_TOGGLE: {
      return {
        ...state,
        menuIsVisible: !state.menuIsVisible,
        scrollDirection: ScrollDirection.DOWN,
      };
    }

    case NavigationActionsTypes.SET_SCROLL_AT_TOP: {
      return { ...state, scrollAtTop: action.payload };
    }

    case NavigationActionsTypes.SET_SCROLL_DIRECTION: {
      /* If there is no change, do not create a new object */
      if (state.scrollDirection === action.payload) {
        return state;
      }

      return { ...state, scrollDirection: action.payload };
    }

    default: {
      return state;
    }
  }
};
