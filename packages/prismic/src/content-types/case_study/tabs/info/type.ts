import type { TechnologyContentType } from "../../../../content-types/technology/type";
import type { PrismicLinkType } from "../../../../types/Link";

export type CaseStudyContentTypeInfoTabDeliverable = {
  info_deliverable_name: string | null;
  info_deliverable_link: PrismicLinkType | null;
};

export type CaseStudyContentTypeInfoTabTargetAudience = {
  info_target_audience_name: string | null;
};

export type CaseStudyContentTypeInfoTabMarket = {
  info_market: string | null;
};

export type CaseStudyContentTypeInfoTabOutcome = {
  info_outcome: string | null;
};

export type CaseStudyContentTypeInfoTabTechnology = {
  info_technology: TechnologyContentType | null;
};

export type CaseStudyContentTypeInfoTab = {
  info_brief: string | null;
  info_strategy: string | null;
  info_implementation: string | null;
  info_deliverables: Array<CaseStudyContentTypeInfoTabDeliverable> | null;
  info_client: string | null;
  info_agency: string | null;
  info_role: string | null;
  info_institution: string | null;
  info_degree: string | null;
  info_launch_date: string | null;
  info_decommission_date: string | null;
  info_target_audiences: Array<CaseStudyContentTypeInfoTabTargetAudience> | null;
  info_markets: Array<CaseStudyContentTypeInfoTabMarket> | null;
  info_outcomes: Array<CaseStudyContentTypeInfoTabOutcome> | null;
  info_technologies: Array<CaseStudyContentTypeInfoTabTechnology> | null;
};
