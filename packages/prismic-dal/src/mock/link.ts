import { getGraphQLEndpoint } from "@prismicio/client";
import { graphql } from "msw/graphql";

const repositoryName = "bashkim-com";
const uri = getGraphQLEndpoint(repositoryName);

export const prismicLink = graphql.link(uri);
