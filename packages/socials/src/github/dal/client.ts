import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";

import env from "./env";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    new HttpLink({
      uri: env.uri,
      headers: {
        Authorization: `Bearer ${env.token}`,
      },
    }),
  ]),
});

export default client;
