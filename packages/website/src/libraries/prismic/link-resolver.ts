import { LinkResolverFunction } from "@prismicio/client";

import { getCaseStudyPath } from "@/libraries/app/navigation";

const linkResolver: LinkResolverFunction = (doc) => {
  if (doc.type === "case_study") {
    return getCaseStudyPath({ caseStudySlug: doc.uid ?? "" });
  }

  return null;
};

export default linkResolver;
