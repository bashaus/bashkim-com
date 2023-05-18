import type { CodegenConfig } from "@graphql-codegen/cli";
import { getGraphQLEndpoint } from "@prismicio/client";

const uri = getGraphQLEndpoint("bashkim-com");

const codegenConfig: CodegenConfig = {
  overwrite: true,
  schema: uri,
  customFetch: "codegen-prismic-fetch",
  generates: {
    "packages/prismic-dal/src/generated/prismic.ts": {
      documents: "packages/prismic-dal/src/lib/**/*.gql",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ["npx prettier --write"],
  },
};

export default codegenConfig;
