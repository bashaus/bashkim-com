export const PREVIEW_DETECT = 'Prismic.PREVIEW_DETECT';
export const PREVIEW_CONNECT = 'Prismic.PREVIEW_CONNECT';
export const PREVIEW_DISCONNECT = 'Prismic.PREVIEW_DISCONNECT';

export const previewDetect = () => dispatch => dispatch({
  type: PREVIEW_DETECT,
});

export const previewConnect = () => dispatch => dispatch({
  type: PREVIEW_CONNECT,
});

export const previewDisconnect = () => dispatch => dispatch({
  type: PREVIEW_DISCONNECT,
});
