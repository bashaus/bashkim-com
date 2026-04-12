import { graphql } from "../../gql";

export const PrismicExternalLink = graphql(`
  fragment PrismicExternalLink on _ExternalLink {
    __typename
    _linkType
    url
    target
  }
`);
