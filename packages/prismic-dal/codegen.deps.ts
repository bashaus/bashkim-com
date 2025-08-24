import "dotenv/config";

import type { CodegenConfig } from "@graphql-codegen/cli";
import * as prismic from "@prismicio/client";

const { PRISMICIO_ACCESS_TOKEN: accessToken } = process.env;

const repositoryName = "bashkim-com";
const uri = prismic.getGraphQLEndpoint(repositoryName);

const prismicClient = prismic.createClient(repositoryName, { accessToken });

const codegenConfig: CodegenConfig = {
  overwrite: true,
  schema: {
    [uri]: {
      method: "GET",
      headers: {
        Authorization: `Token ${accessToken}`,
      },
    },
  },
  customFetch: prismicClient.graphQLFetch,
  generates: {
    "./generated/prismic/schema.gql": {
      plugins: ["schema-ast"],
    },
  },
};

export default codegenConfig;
