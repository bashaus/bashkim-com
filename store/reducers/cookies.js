import * as CookiesActions from 'store/actions/cookies';

const INIT_STATE = {
  isDismissed: false,
};

export default function cookiesReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CookiesActions.DISMISS:
      return {
        ...state,
        isDismissed: true,
      };

    default:
      return state;
  }
}
