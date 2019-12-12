import * as actions from './actions';

export default function NavigationReducer(state, action) {
  switch (action.type) {
    case actions.HIDE:
      return { ...state, isVisible: false };

    case actions.SET_AT_TOP:
      return { ...state, atTop: action.payload };

    case actions.TOGGLE:
      return { ...state, isVisible: !state.isVisible };

    default:
      return state;
  }
};
