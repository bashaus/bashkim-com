import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { CaseStudyPageModelFragment } from "../../gql/graphql";
import { prismicDateTimeFactory } from "../../prismic/date-time/factory";
import {
  prismicImageHeaderDesktopFactory,
  prismicImageHeaderMobileFactory,
  prismicImageIconFactory,
} from "../../prismic/image/factory";
import { prismicMetaFactory } from "../../prismic/meta/factory";
import { accoladeSliceFactory } from "../../slice-types/accolade/factory";
import { collaboratorSliceFactory } from "../../slice-types/collaborator/factory";
import { exhibitionSliceFactory } from "../../slice-types/exhibition/factory";
import { caseStudyInfoDeliverableModelFactory } from "../case-study-info-deliverable/factory";
import { caseStudyInfoMarketModelFactory } from "../case-study-info-market/factory";
import { caseStudyInfoOutcomeModelFactory } from "../case-study-info-outcome/factory";
import { caseStudyInfoTargetAudienceModelFactory } from "../case-study-info-target-audience/factory";
import { caseStudyInfoTechnologyModelFactory } from "../case-study-info-technology/factory";

export const caseStudyPageModelFactory =
  Factory.define<CaseStudyPageModelFragment>(({ associations, sequence }) => {
    return {
      __typename: "Case_study",
      _meta: prismicMetaFactory.build({
        type: "Case_study",
        uid: `case-study-${sequence}`,
      }),

      meta_title: faker.lorem.words(3),
      meta_description: faker.lorem.sentence(),

      image_icon: prismicImageIconFactory.build(),
      image_header_desktop: prismicImageHeaderDesktopFactory.build(),
      image_header_mobile: prismicImageHeaderMobileFactory.build(),

      info_agency: faker.company.name(),
      info_brief: faker.lorem.words(8),
      info_strategy: faker.lorem.words(8),
      info_implementation: faker.lorem.words(8),
      info_client: faker.company.name(),
      info_degree: faker.lorem.words(4),
      info_institution: faker.company.name(),
      info_role: faker.person.jobTitle(),
      info_launch_date: prismicDateTimeFactory.build(),
      info_decommission_date: prismicDateTimeFactory.build(),

      info_deliverables:
        associations.info_deliverables ??
        caseStudyInfoDeliverableModelFactory.buildList(3),

      info_outcomes:
        associations.info_outcomes ??
        caseStudyInfoOutcomeModelFactory.buildList(3),

      info_markets:
        associations.info_markets ??
        caseStudyInfoMarketModelFactory.buildList(3),

      info_target_audiences:
        associations.info_target_audiences ??
        caseStudyInfoTargetAudienceModelFactory.buildList(3),

      info_technologies:
        associations.info_technologies ??
        caseStudyInfoTechnologyModelFactory.buildList(4),

      accolades: associations.accolades ?? accoladeSliceFactory.buildList(1),

      collaborators:
        associations.collaborators ?? collaboratorSliceFactory.buildList(7),

      exhibitions:
        associations.exhibitions ?? exhibitionSliceFactory.buildList(4),
    };
  });
