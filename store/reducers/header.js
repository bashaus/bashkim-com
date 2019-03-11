import * as HeaderActions from 'store/actions/header';

const INIT_STATE = {
  isIntersecting: true,
};

export default function headerReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case HeaderActions.SET_INTERSECTION:
      return {
        ...state,
        isIntersecting: action.payload,
      };

    default:
      return state;
  }
}
