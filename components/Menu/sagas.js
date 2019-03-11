import { takeEvery, put } from 'redux-saga/effects';
import * as MenuActions from 'store/actions/menu';
import * as RouterActions from 'store/actions/router';

function* changeComplete() {
  yield put(MenuActions.hide());
}

export default function* TrackingGoogleAnalyticsSagas() {
  if (process.browser) {
    yield takeEvery(
      RouterActions.CHANGE_COMPLETE,
      changeComplete,
    );
  }
}
