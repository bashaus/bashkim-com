import type { CodegenConfig } from "@graphql-codegen/cli";
import { getGraphQLEndpoint } from "@prismicio/client";

const repositoryName = "bashkim-com";
const uri = getGraphQLEndpoint(repositoryName);

const codegenConfig: CodegenConfig = {
  overwrite: true,
  schema: uri,
  customFetch: "codegen-prismic-fetch",
  generates: {
    "./generated/prismic/schema.gql": {
      plugins: ["schema-ast"],
    },
  },
};

export default codegenConfig;
