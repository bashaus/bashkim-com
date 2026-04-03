import { graphql } from "../gql";
import { Peer } from "../gql/graphql";

export const PeerModel = graphql(`
  fragment PeerModel on Peer {
    __typename
    peer_name
    peer_website {
      ...ExternalLinkFragment
    }
  }
`);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPeer(p: any): p is Peer {
  return p?.__typename === "Peer";
}
