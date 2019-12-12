import * as actions from './actions';

export default function CookiesReducer(state, action) {
  switch (action.type) {
    case actions.DISMISS:
      return { ...state, isDismissed: true };

    default:
      return state;
  }
}
