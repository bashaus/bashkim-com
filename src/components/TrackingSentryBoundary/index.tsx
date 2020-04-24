import * as Sentry from '@sentry/browser';
import React from 'react';

interface TrackingSentryBoundaryProps {
  children: React.ReactNode;
}

interface TrackingSentryBoundaryState {
  error?: Error;
}

export default class TrackingSentryBoundary
  extends React.PureComponent<TrackingSentryBoundaryProps, TrackingSentryBoundaryState> {
  constructor(props: TrackingSentryBoundaryProps) {
    super(props);

    this.state = {
      error: undefined,
    } as TrackingSentryBoundaryState;
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error });
    Sentry.captureException(error);
  }

  handleShowReportDialogClick = (): void => {
    Sentry.showReportDialog();
  };

  render(): React.ReactNode {
    const { children } = this.props;
    const { error } = this.state;

    /* Without error: show children */
    if (!error) {
      return children;
    }

    /* With error: show message */
    return (
      <button type="button" onClick={this.handleShowReportDialogClick}>
        Report feedback
      </button>
    );
  }
}
