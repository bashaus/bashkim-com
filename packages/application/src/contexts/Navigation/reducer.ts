import * as actions from "./actions";
import { NavigationContextState } from "./state";

const NavigationReducer = (
  state: NavigationContextState,
  action: any
): NavigationContextState => {
  switch (action.type) {
    case actions.MENU_HIDE: {
      return { ...state, menuIsVisible: false };
    }

    case actions.MENU_TOGGLE: {
      return { ...state, menuIsVisible: !state.menuIsVisible };
    }

    case actions.SET_SCROLL_AT_TOP: {
      return { ...state, scrollAtTop: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default NavigationReducer;
