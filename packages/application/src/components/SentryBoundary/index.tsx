import * as Sentry from "@sentry/browser";
import React from "react";

interface SentryBoundaryProps {
  children: React.ReactNode;
}

interface SentryBoundaryState {
  error?: Error;
}

export default class SentryBoundary extends React.PureComponent<
  SentryBoundaryProps,
  SentryBoundaryState
> {
  constructor(props: SentryBoundaryProps) {
    super(props);

    this.state = {
      error: undefined,
    } as SentryBoundaryState;
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
