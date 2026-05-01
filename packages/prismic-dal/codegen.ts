import "dotenv/config";

import process from "node:process";

import type { CodegenConfig } from "@graphql-codegen/cli";
import * as prismic from "@prismicio/client";
import { z } from "zod";

const prismicSchema = z.object({
  accessToken: z.string(),
  repositoryName: z.string().default("bashkim-com"),
});

const { accessToken, repositoryName } = prismicSchema.parse({
  accessToken: process.env["PRISMICIO_ACCESS_TOKEN"],
});

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
        documentMode: "documentNode",
        fragmentMasking: false,
      },
    },
  },
};

export default config;
