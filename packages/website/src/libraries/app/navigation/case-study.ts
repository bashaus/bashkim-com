import { getPortfolioPath, PortfolioParams } from "./portfolio";

export type CaseStudyParams = PortfolioParams & {
  caseStudySlug: string;
};

export const getCaseStudyPath = ({
  caseStudySlug,
  ...params
}: CaseStudyParams) => `${getPortfolioPath(params)}/${caseStudySlug}`;
