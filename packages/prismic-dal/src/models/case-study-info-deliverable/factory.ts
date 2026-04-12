import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { CaseStudyInfoDeliverableModelFragment } from "../../gql/graphql";
import { prismicExternalLinkFactory } from "../../prismic/external-link/factory";

export const caseStudyInfoDeliverableModelFactory =
  Factory.define<CaseStudyInfoDeliverableModelFragment>(() => {
    return {
      __typename: "Case_studyInfo_deliverables",
      info_deliverable_name: faker.lorem.words(2),
      info_deliverable_link: prismicExternalLinkFactory.build(),
    };
  });
