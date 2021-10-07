import * as Sentry from "@sentry/browser";
import { PureComponent, ErrorInfo, ReactNode } from "react";

import { FormattedRichText } from "@bashkim-com/design-system";

export type SentryBoundaryProps = {
  children: ReactNode;
};

export type SentryBoundaryState = {
  error?: Error;
};

export class SentryBoundary extends PureComponent<
  SentryBoundaryProps,
  SentryBoundaryState
> {
  constructor(props: SentryBoundaryProps) {
    super(props);

    this.state = {
      error: undefined,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    this.setState({ error });
  }

  render(): ReactNode {
    const { children } = this.props;
    const { error } = this.state;

    /* No error: show children */
    if (!error) {
      return children;
    }

    /* Has error: show message */
    return (
      <FormattedRichText>
        <h3>An error occurred</h3>
        <p>
          Sorry, but an unexpected error occurred while trying to render this
          page. An automated error report has been sent with technical
          information.
        </p>
        <p>Please refresh this page to continue using this website.</p>
      </FormattedRichText>
    );
  }
}
