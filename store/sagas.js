import { all, fork } from 'redux-saga/effects';

import MenuSagas from 'components/Menu/sagas';
import TrackingGoogleAnalyticsSagas from 'components/TrackingGoogleAnalytics/sagas';

export default function* Sagas() {
  yield all([
    fork(MenuSagas),
    fork(TrackingGoogleAnalyticsSagas),
  ]);
}
