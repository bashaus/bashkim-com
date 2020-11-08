import { gql } from "@apollo/client";

const ExternalLinkFragment = gql`
  fragment ExternalLinkFragment on _ExternalLink {
    url
    target
  }
`;

export default ExternalLinkFragment;
