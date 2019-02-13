import * as GuiActions from 'store/actions/gui';

const INIT_STATE = {
  headerIsIntersecting: true,
  menuIsVisible: false,
};

export default function guiReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case GuiActions.TOGGLE_MENU:
      return {
        ...state,
        menuIsVisible: !state.menuIsVisible,
      };

    case GuiActions.UPDATE_HEADER_INTERSECTION:
      return {
        ...state,
        headerIsIntersecting: action.payload,
      };

    default:
      return state;
  }
}
