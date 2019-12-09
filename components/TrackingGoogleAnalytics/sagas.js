import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig() || {};

function* changeComplete({ payload }) {
  const { url } = payload;

  if (!url) {
    return;
  }

  if (!publicRuntimeConfig.googleAnalytics.enabled) {
    return;
  }

  if (window.gtag) {
    window.gtag(
      'config',
      publicRuntimeConfig.googleAnalytics.ua,
      { page_path: url },
    );
  }

  yield;
}

export default function* TrackingGoogleAnalyticsSagas() {
  if (process.browser) {
    yield takeEvery(
      RouterActions.CHANGE_COMPLETE,
      changeComplete,
    );
  }
}
