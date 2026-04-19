import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";

import env from "../../env";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    new HttpLink({
      uri: env.github.endpoint,
      headers: {
        Authorization: `Bearer ${env.github.token}`,
      },
    }),
  ]),
});

export default client;
