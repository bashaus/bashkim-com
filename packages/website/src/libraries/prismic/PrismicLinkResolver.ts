import type { LinkResolver } from "prismic-reactjs";

const PrismicLinkResolver: LinkResolver = (doc) => {
  if (doc.type === "case_study") {
    return `/portfolio/${doc.uid}/`;
  }

  throw new Error(`PrismicLinkResolver: Unknown doc.type: ${doc.type}`);
};

export default PrismicLinkResolver;
