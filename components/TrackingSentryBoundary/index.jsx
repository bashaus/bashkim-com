import * as Sentry from '@sentry/browser';
import PropTypes from 'prop-types';
import React from 'react';

export default class TrackingSentryBoundary extends React.PureComponent {
  constructor(...args) {
    super(...args);

    this.state = {
      error: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach(
        (key) => scope.setExtra(key, errorInfo[key]),
      );

      Sentry.captureException(error);
    });
  }

  handleShowReportDialogClick = () => {
    Sentry.showReportDialog();
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (!error) {
      return children;
    }

    // Render fallback UI
    return (
      <button type="button" onClick={this.handleShowReportDialogClick}>
        Report feedback
      </button>
    );
  }
}

TrackingSentryBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
