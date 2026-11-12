import { Route } from "@prismicio/client";

import { getCaseStudyPath } from "../app/navigation";
import { prismicLocaleLanguages } from "./languages";

export const prismicRoutes: Array<Route> = [
  ...Object.entries(prismicLocaleLanguages).map(([lang, locale]) => ({
    type: "case_study",
    lang,
    path: getCaseStudyPath({ locale, caseStudySlug: ":uid" }),
  })),
];
