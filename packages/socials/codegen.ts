import "dotenv/config";

import type { CodegenConfig } from "@graphql-codegen/cli";
import { z } from "zod";

const tokenSchema = z.string();
const token = tokenSchema.parse(process.env["GITHUB_TOKEN"]);

const config: CodegenConfig = {
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          Authorization: `Bearer ${token}`,
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
