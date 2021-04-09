import { CookiesActions, CookiesActionsTypes } from "./actions";
import { CookiesState } from "./state";

export const CookiesReducer = (
  state: CookiesState,
  action: CookiesActions
): CookiesState => {
  switch (action.type) {
    case CookiesActionsTypes.DISMISS: {
      return { ...state, isDismissed: true };
    }

    default: {
      return state;
    }
  }
};
