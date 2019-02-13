export const UPDATE_HEADER_INTERSECTION = 'Gui.UPDATE_HEADER_INTERSECTION';
export const TOGGLE_MENU = 'Gui.TOGGLE_MENU';

export const toggleMenu = () => dispatch => dispatch({
  type: TOGGLE_MENU,
});

export const doUpdateHeaderIntersection = isIntersecting => dispatch => dispatch({
  type: UPDATE_HEADER_INTERSECTION,
  payload: isIntersecting,
});
