import * as Sentry from "@sentry/browser";
import type { LinkResolver } from "prismic-reactjs";

const PrismicLinkResolver: LinkResolver = (doc) => {
  switch (doc.type) {
    case "case_study": {
      return `/portfolio/${doc.uid}`;
    }

    default: {
      Sentry.captureException(
        new Error(`PrismicLinkResolver: Unknown doc.type: ${doc.type}`)
      );
    }
  }

  return "/";
};

export default PrismicLinkResolver;
