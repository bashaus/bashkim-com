import * as MenuActions from 'store/actions/menu';

const INIT_STATE = {
  isVisible: false,
};

export default function menuReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case MenuActions.HIDE:
      return {
        ...state,
        isVisible: false,
      };

    case MenuActions.TOGGLE:
      return {
        ...state,
        isVisible: !state.isVisible,
      };


    default:
      return state;
  }
}
