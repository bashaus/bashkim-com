import { getLocalePath, LocaleParams } from "./locale";

export function getPortfolioPath({ locale }: LocaleParams) {
  return `${getLocalePath({ locale })}/portfolio`;
}

export type CaseStudyParams = LocaleParams & {
  caseStudySlug: string;
};

export function getCaseStudyPath({ locale, caseStudySlug }: CaseStudyParams) {
  return `${getPortfolioPath({ locale })}/${caseStudySlug}`;
}
