import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { PeerModelFragment } from "../../gql/graphql";
import { prismicExternalLinkFactory } from "../../prismic/external-link/factory";

export const peerModelFactory = Factory.define<PeerModelFragment>(() => {
  return {
    __typename: "Peer",
    peer_name: faker.person.fullName(),
    peer_website: prismicExternalLinkFactory.build(),
  };
});
