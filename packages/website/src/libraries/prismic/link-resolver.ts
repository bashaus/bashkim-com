import { LinkResolverFunction } from "@prismicio/client";

const linkResolver: LinkResolverFunction = (doc) => {
  if (doc.type === "case_study") {
    return `/portfolio/${doc.uid}`;
  }

  return null;
};

export default linkResolver;
