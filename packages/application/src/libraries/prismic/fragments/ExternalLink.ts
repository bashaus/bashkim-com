import { gql } from "@apollo/client";

export const ExternalLinkFragment = gql`
  fragment ExternalLinkFragment on _ExternalLink {
    url
    target
  }
`;
