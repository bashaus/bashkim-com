import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import { z } from "zod";

import { getCaseStudyPath } from "../app/navigation";

const prismicSchema = z.object({
  accessToken: z.string(),
  repositoryName: z.string().default("bashkim-com"),
});

const { accessToken, repositoryName } = prismicSchema.parse({
  accessToken: process.env["PRISMICIO_ACCESS_TOKEN"],
});

const uri = prismic.getGraphQLEndpoint(repositoryName);
export const prismicClient = prismic.createClient(repositoryName, {
  accessToken,
  routes: [
    {
      type: "case_study",
      path: getCaseStudyPath({ caseStudySlug: ":uid" }),
    },
  ],
});

enableAutoPreviews({ client: prismicClient });

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    new HttpLink({
      uri,
      useGETForQueries: true,
      fetch: (input: RequestInfo | URL, init?: RequestInit) =>
        prismicClient.graphQLFetch(input as RequestInfo, init),
      fetchOptions: {
        next: {
          tags: ["prismic"],
        },
      },
    }),
  ]),
});

export default apolloClient;
