import { config } from "@bashkim-com/config";
import type { CodegenConfig } from "@graphql-codegen/cli";
import { getGraphQLEndpoint } from "@prismicio/client";

const uri = getGraphQLEndpoint(config.prismic.repositoryName);

const codegenConfig: CodegenConfig = {
  overwrite: true,
  schema: uri,
  customFetch: "codegen-prismic-fetch",
  generates: {
    "./lib/types.d.ts": {
      plugins: ["typescript"],
    },
  },
};

export default codegenConfig;
