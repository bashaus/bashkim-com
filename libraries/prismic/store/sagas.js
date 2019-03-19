import Cookie from 'js-cookie';
import Prismic from 'prismic-javascript';
import { takeEvery, put } from 'redux-saga/effects';

import * as PrismicActions from '%prismic/store/actions';

function* previewDetect() {
  // If the cookie is set, we're in preview mode
  if (Cookie.get(Prismic.previewCookie)) {
    yield put({ type: PrismicActions.PREVIEW_CONNECT });
  }
}

function* previewDisconnect() {
  // Remove the cookie and we're out of preview mode
  Cookie.remove(Prismic.previewCookie);
  window.location.reload();
  yield;
}

export default function* PrismicSagas() {
  if (process.browser) {
    yield takeEvery(
      PrismicActions.PREVIEW_DETECT,
      previewDetect,
    );

    yield takeEvery(
      PrismicActions.PREVIEW_DISCONNECT,
      previewDisconnect,
    );
  }
}
