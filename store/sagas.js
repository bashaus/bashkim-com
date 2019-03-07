import { all, fork } from 'redux-saga/effects';
import TrackingGoogleAnalyticsSagas from 'components/TrackingGoogleAnalytics/sagas';

export default function* Sagas() {
  yield all([
    fork(TrackingGoogleAnalyticsSagas),
  ]);
}
