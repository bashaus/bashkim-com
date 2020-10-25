import * as actions from "./actions";
import { CookiesContextState } from "./state";

const CookiesReducer = (
  state: CookiesContextState,
  action: any
): CookiesContextState => {
  switch (action.type) {
    case actions.DISMISS: {
      return { ...state, isDismissed: true };
    }

    default: {
      return state;
    }
  }
};

export default CookiesReducer;
