import type DocumentLinkPrismicType from "@bashkim-com/prismic/types/document-link";
import type ImagePrismicType from "@bashkim-com/prismic/types/image";
import type LinkPrismicType from "@bashkim-com/prismic/types/link";

type CaseStudyContentTypeInfoTab = {
  info_brief: string;
  info_strategy: string;
  info_implementation: string;
  info_deliverables: Array<{
    info_deliverable_name: string;
    info_deliverable_link: LinkPrismicType;
  }>;
  info_client?: string;
  info_agency?: string;
  info_role?: string;
  info_institution?: string;
  info_degree?: string;
  info_launch_date: string;
  info_decommission_date?: string;
  info_target_audiences: Array<{
    info_target_audience_name?: string;
  }>;
  info_markets: Array<{
    info_market?: string;
  }>;
  info_outcomes: Array<{
    info_outcome?: string;
  }>;
  info_technologies: Array<{
    info_technology: DocumentLinkPrismicType<{
      technology_name?: string;
      technology_icon: ImagePrismicType;
    }>;
  }>;
};

export default CaseStudyContentTypeInfoTab;
