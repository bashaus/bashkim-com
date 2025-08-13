import { getGraphQLEndpoint } from "@prismicio/client";
import { graphql } from "msw";

const uri = getGraphQLEndpoint("bashkim-com");
export const prismicLink = graphql.link(uri);
