import * as Sentry from "@sentry/browser";
import React, { PureComponent } from "react";

import styles from "./styles.module.scss";

type SentryBoundaryProps = {
  children: React.ReactNode;
};

type SentryBoundaryState = {
  error?: Error;
};

export default class SentryBoundary extends PureComponent<
  SentryBoundaryProps,
  SentryBoundaryState
> {
  constructor(props: SentryBoundaryProps) {
    super(props);

    this.state = {
      error: undefined,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    this.setState({ error });
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { error } = this.state;

    /* No error: show children */
    if (!error) {
      return children;
    }

    /* Has error: show message */
    return (
      <div className={styles.SentryBoundary}>
        <h3>An error occurred</h3>
        <p>
          Sorry, but an unexpected error occurred while trying to render this
          page. An automated error report has been sent with technical
          information.
        </p>
        <p>Please refresh this page to continue using this website.</p>
      </div>
    );
  }
}
