import "dotenv/config";

import process from "node:process";

import type { CodegenConfig } from "@graphql-codegen/cli";
import * as prismic from "@prismicio/client";

const { PRISMICIO_ACCESS_TOKEN: accessToken } = process.env;

const repositoryName = "bashkim-com";
const uri = prismic.getGraphQLEndpoint(repositoryName);

const prismicClient = prismic.createClient(repositoryName, { accessToken });

const config: CodegenConfig = {
  customFetch: prismicClient.graphQLFetch,
  schema: [
    {
      [uri]: {
        method: "GET",
        headers: {
          Authorization: `Token ${accessToken}`,
        },
      },
    },
  ],

  documents: ["src/**/*.ts"],
  ignoreNoDocuments: true,

  generates: {
    "./src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;
