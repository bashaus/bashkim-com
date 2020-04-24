import * as actions from './actions';

const CookiesReducer = (state, action) => {
  switch (action.type) {
    case actions.DISMISS:
      return { ...state, isDismissed: true };

    default:
      return state;
  }
};

export default CookiesReducer;
