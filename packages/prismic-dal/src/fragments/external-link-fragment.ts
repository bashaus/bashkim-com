import { graphql } from "../gql";

export const ExternalLinkFragment = graphql(`
  fragment ExternalLinkFragment on _ExternalLink {
    url
    target
  }
`);
