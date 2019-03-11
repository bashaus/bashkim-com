export const HIDE = 'Menu.HIDE';
export const TOGGLE = 'Menu.TOGGLE';

export const hide = () => dispatch => dispatch({
  type: HIDE,
});

export const toggle = () => dispatch => dispatch({
  type: TOGGLE,
});
