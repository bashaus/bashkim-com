import { graphql } from "../../gql";

export const Technology = graphql(`
  fragment Technology on Technology {
    __typename
    technology_name
    technology_icon
  }
`);
