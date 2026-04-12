import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { PeerModelFragment } from "../../gql/graphql";
import { prismicExternalLinkFactory } from "../../prismic/external-link/factory";
import { prismicMetaFactory } from "../../prismic/meta/factory";

export const peerModelFactory = Factory.define<PeerModelFragment>(
  ({ associations, sequence }) => {
    return {
      __typename: "Peer",
      _meta: prismicMetaFactory.build({
        type: "peer",
        uid: `peer-${sequence}`,
      }),
      peer_name: faker.person.fullName(),
      peer_website:
        associations.peer_website ?? prismicExternalLinkFactory.build(),
    };
  },
);
