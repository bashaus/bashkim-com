import * as actions from './actions';

export const CookiesReducer = (state, action) => {
  switch (action.type) {
    case actions.DISMISS:
      return { ...state, isDismissed: true };

    default:
      return state;
  }
};

export default {
  CookiesReducer,
};
