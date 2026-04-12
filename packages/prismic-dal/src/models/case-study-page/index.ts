import { graphql } from "../../gql";

export const CaseStudyPageModel = graphql(`
  fragment CaseStudyPageModel on Case_study {
    __typename
    _meta {
      uid
    }

    meta_title
    meta_description

    image_icon
    image_header_desktop
    image_header_mobile
    info_brief
    info_strategy
    info_implementation
    info_deliverables {
      ...CaseStudyInfoDeliverableModel
    }
    info_client
    info_agency
    info_role
    info_institution
    info_degree
    info_markets {
      ...CaseStudyInfoMarketModel
    }
    info_target_audiences {
      ...CaseStudyInfoTargetAudienceModel
    }
    info_launch_date
    info_decommission_date
    info_outcomes {
      ...CaseStudyInfoOutcomeModel
    }
    info_technologies {
      ...CaseStudyInfoTechnologyModel
    }
    accolades {
      ...AccoladeSliceType
    }
    collaborators {
      ...CollaboratorSliceType
    }
    exhibitions {
      ...ExhibitionSliceType
    }
  }
`);
