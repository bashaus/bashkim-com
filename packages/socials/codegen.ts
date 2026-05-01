import "dotenv/config";

import type { CodegenConfig } from "@graphql-codegen/cli";

import env from "./src/env";

const config: CodegenConfig = {
  schema: [
    {
      [env.github.endpoint]: {
        headers: {
          Authorization: `Bearer ${env.github.token}`,
          "User-Agent": "graphql-codegen",
        },
      },
    },
  ],

  documents: ["src/github/models/**/*.ts", "src/github/queries/**/query.ts"],
  ignoreNoDocuments: true,

  generates: {
    "./src/github/gql/": {
      preset: "client",
      presetConfig: {
        documentMode: "documentNode",
        fragmentMasking: false,
      },
    },
  },
};

export default config;
