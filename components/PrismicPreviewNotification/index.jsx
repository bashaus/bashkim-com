import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as PrismicActions from '%prismic/store/actions';

import styles from './styles.scss';

export function PrismicPreviewNotificationDisconnected(props) {
  const { prismicIsPreview, doPrismicPreviewDisconnect } = props;

  if (!prismicIsPreview) {
    return null;
  }

  return (
    <div className={styles.PrismicPreviewNotification}>
      <div className={styles.wrapper}>
        <p className={styles.message}>
          This website is currently being presented in
          Prismic&apos;s preview mode.
        </p>

        <div className={styles.leaveAction}>
          <button type="button" onClick={doPrismicPreviewDisconnect}>
            Leave preview mode
          </button>
        </div>
      </div>
    </div>
  );
}

PrismicPreviewNotificationDisconnected.propTypes = {
  /* mapStateToProps */
  prismicIsPreview: PropTypes.bool.isRequired,

  /* mapDispatchToProps */
  doPrismicPreviewDisconnect: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    prismicIsPreview: state.prismic.isPreview,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    doPrismicPreviewDisconnect: PrismicActions.previewDisconnect,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PrismicPreviewNotificationDisconnected);
