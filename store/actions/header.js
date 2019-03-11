export const SET_INTERSECTION = 'Header.SET_INTERSECTION';

export const setIntersection = isIntersecting => dispatch => dispatch({
  type: SET_INTERSECTION,
  payload: isIntersecting,
});
