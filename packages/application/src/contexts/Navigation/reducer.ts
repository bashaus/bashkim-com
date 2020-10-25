import * as NavigationActions from "./actions";
import { NavigationContextState } from "./state";
import { ScrollDirection } from "./types";

const NavigationReducer = (
  state: NavigationContextState,
  action: any
): NavigationContextState => {
  switch (action.type) {
    case NavigationActions.MENU_HIDE: {
      return {
        ...state,
        menuIsVisible: false,
        scrollDirection: ScrollDirection.DOWN,
      };
    }

    case NavigationActions.MENU_TOGGLE: {
      return {
        ...state,
        menuIsVisible: !state.menuIsVisible,
        scrollDirection: ScrollDirection.DOWN,
      };
    }

    case NavigationActions.SET_SCROLL_AT_TOP: {
      return { ...state, scrollAtTop: action.payload };
    }

    case NavigationActions.SET_SCROLL_DIRECTION: {
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

export default NavigationReducer;
