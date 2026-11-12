import { LinkResolverFunction } from "@prismicio/client";

import { getCaseStudyPath } from "@/libraries/app/navigation";
import { prismicLocaleLanguages } from "@/libraries/prismic/languages";

const linkResolver: LinkResolverFunction = (doc) => {
  if (doc.type === "case_study") {
    return getCaseStudyPath({
      locale: prismicLocaleLanguages[doc.lang],
      caseStudySlug: doc.uid ?? "",
    });
  }

  return null;
};

export default linkResolver;
