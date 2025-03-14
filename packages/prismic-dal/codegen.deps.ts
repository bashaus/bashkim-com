import type { CodegenConfig } from "@graphql-codegen/cli";
import { getGraphQLEndpoint } from "@prismicio/client";

const uri = getGraphQLEndpoint("bashkim-com");

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
