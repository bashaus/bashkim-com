import { gql } from "@apollo/client";

import ExternalLinkFragment from "%prismic/fragments/ExternalLink";

export const CaseStudyPageQuery = gql`
  query CaseStudyPage($caseStudySlug: String) {
    caseStudyPage: allCase_studys(uid: $caseStudySlug) {
      edges {
        node {
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
            ... on Case_studyInfo_deliverables {
              info_deliverable_name
              info_deliverable_link {
                ...ExternalLinkFragment
              }
            }
          }
          info_client
          info_agency
          info_role
          info_institution
          info_degree
          info_markets {
            info_market
          }
          info_target_audiences {
            info_target_audience_name
          }
          info_launch_date
          info_decommission_date
          info_outcomes {
            info_outcome
          }
          info_technologies {
            info_technology {
              ... on Technology {
                technology_name
                technology_icon
              }
            }
          }
          accolades {
            ... on Case_studyAccoladesAccoladeslicetype {
              primary {
                accolade_slice_type_issuer
                accolade_slice_type_description
                accolade_slice_type_date
              }
              fields {
                accolade_slice_type_award_place
                accolade_slice_type_award_link {
                  ...ExternalLinkFragment
                }
                accolade_slice_type_award_category
              }
            }
          }
          collaborators {
            ... on Case_studyCollaboratorsCollaboratorslicetype {
              primary {
                collaborator_slice_type_peer {
                  ... on Peer {
                    peer_name
                    peer_website {
                      ...ExternalLinkFragment
                    }
                  }
                }
                collaborator_slice_type_role
                collaborator_slice_type_company
              }
            }
          }
          exhibitions {
            ... on Case_studyExhibitionsExhibitionslicetype {
              primary {
                exhibition_slice_type_name
                exhibition_slice_type_link {
                  ...ExternalLinkFragment
                }
                exhibition_slice_type_opening_date
                exhibition_slice_type_closing_date
                exhibition_slice_type_location
              }
            }
          }
        }
      }
    }
  }

  ${ExternalLinkFragment}
`;
