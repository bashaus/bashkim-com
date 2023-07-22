import { ApolloServer } from "@apollo/server";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import path from "path";

import { getGitHubSocials } from "./resolvers/GitHub/getGitHubSocials";
import { getMediumSocials } from "./resolvers/Medium/getMediumSocials";
import { getStackOverflowPosts } from "./resolvers/StackOverflow/StackOverflowPosts";
import { getStackOverflowUser } from "./resolvers/StackOverflow/StackOverflowUser";

const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "../../schema/**/*.gql")),
);

const resolvers = {
  Query: {
    getGitHubSocials,
    getMediumSocials,
    getStackOverflowSocials: () => ({}),
  },
  GetStackOverflowSocialsResponse: {
    user: getStackOverflowUser,
    posts: getStackOverflowPosts,
  },
};

export const app = new ApolloServer({
  typeDefs,
  resolvers,
});
