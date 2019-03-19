import * as PrismicActions from '%prismic/store/actions';

const INIT_STATE = {
  isPreview: false,
};

export default function prismicReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case PrismicActions.PREVIEW_CONNECT:
      return {
        ...state,
        isPreview: true,
      };

    case PrismicActions.PREVIEW_DISCONNECT:
      return {
        ...state,
        isPreview: false,
      };

    default:
      return state;
  }
}
