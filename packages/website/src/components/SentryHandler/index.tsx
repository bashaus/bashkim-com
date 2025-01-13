import { RichTextFormatter } from "@bashkim-com/design-system";
import * as Sentry from "@sentry/browser";
import { useEffect } from "react";

export type SentryHandlerProps = {
  error?: Error;
};

export default function SentryHandler({ error }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <RichTextFormatter>
      <h3>An error occurred</h3>
      <p>
        Sorry, but an unexpected error occurred while trying to render this
        page. An automated error report has been sent with technical
        information.
      </p>
      <p>Please refresh this page to continue using this website.</p>
    </RichTextFormatter>
  );
}
