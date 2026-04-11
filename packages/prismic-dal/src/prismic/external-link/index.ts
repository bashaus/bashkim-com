import { graphql } from "../../gql";

export const ExternalLink = graphql(`
  fragment ExternalLink on _ExternalLink {
    url
    target
  }
`);
