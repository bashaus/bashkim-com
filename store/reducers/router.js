import * as RouterActions from 'store/actions/router';

const INIT_STATE = {
};

export default function routerReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case RouterActions.CHANGE_START:
      return { ...state };

    case RouterActions.CHANGE_COMPLETE:
      return { ...state };

    case RouterActions.CHANGE_ERROR:
      return { ...state };

    default:
      return state;
  }
}
