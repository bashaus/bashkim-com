import { graphql } from "../../gql";

export const TechnologyModel = graphql(`
  fragment TechnologyModel on Technology {
    __typename
    technology_name
    technology_icon
  }
`);
