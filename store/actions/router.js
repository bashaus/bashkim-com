export const CHANGE_START = 'Router.CHANGE_START';
export const CHANGE_COMPLETE = 'Router.CHANGE_COMPLETE';
export const CHANGE_ERROR = 'Router.CHANGE_ERROR';

export const changeStart = ({ url }) => dispatch => dispatch({
  type: CHANGE_START,
  payload: { url },
});

export const changeComplete = ({ url }) => dispatch => dispatch({
  type: CHANGE_COMPLETE,
  payload: { url },
});

export const changeError = ({ err, url }) => dispatch => dispatch({
  type: CHANGE_ERROR,
  payload: { err, url },
});
