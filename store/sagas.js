import { all } from 'redux-saga/effects';
import * as TrackingGoogleAnalytics from 'components/TrackingGoogleAnalytics/sagas';

export default function* Sagas() {
  yield all([
    TrackingGoogleAnalytics,
  ]);
}
