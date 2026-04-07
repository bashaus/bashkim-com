export function getPortfolioPath() {
  return `/portfolio`;
}

export type CaseStudyParams = {
  caseStudySlug: string;
};

export function getCaseStudyPath({ caseStudySlug }: CaseStudyParams) {
  return `${getPortfolioPath()}/${caseStudySlug}`;
}
