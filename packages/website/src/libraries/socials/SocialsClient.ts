import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const socialsClient = new ApolloClient({
  link: createHttpLink({
    uri: process.env["NEXT_PUBLIC_SOCIALS_SERVER_ENDPOINT"],
  }),
  cache: new InMemoryCache(),
});
